import { AzureFunction, Context, HttpRequest as AzureHttpRequest } from '@azure/functions';
import { isUndefined } from '@cleavera/utils';
import { ContextLogger, RequestFactory, Response } from '@skimp/azure';
import { BlobStorage } from '@skimp/blob-storage';
import { API_REGISTER, DB_REGISTER, ResourceLocation } from '@skimp/core';
import { ILogger, LOGGER } from '@skimp/debug';
import { HttpRouter } from '@skimp/http';
import { Api, Docs } from '@skimp/json-api';

import { CONNECTION_STRING } from './tokens/connection-string.token';

// eslint-disable-line import/no-unassigned-import
import './schemas';

const httpTrigger: AzureFunction = async(context: Context, req: AzureHttpRequest): Promise<void> => {
    const logger: ILogger = new ContextLogger(context);
    LOGGER.setLogger(logger);

    const blobStorage: BlobStorage = BlobStorage.FromConnectionString(CONNECTION_STRING);

    DB_REGISTER.configure(await blobStorage.createDb());
    API_REGISTER.configure(new Api(), '*/*');
    API_REGISTER.configure(new Api(), 'application/json');
    API_REGISTER.configure(new Docs(), 'documentation/json');

    const router: HttpRouter = new HttpRouter('1.0', null, true);
    let location: ResourceLocation | null = null;

    if (!isUndefined(req.params.resource)) {
        location = new ResourceLocation(req.params.resource, req.params.id);
    }

    await router.route(await RequestFactory.FromRequest(location, req), Response.FromContext(context));
};

export default httpTrigger; // eslint-disable-line import/no-default-export
