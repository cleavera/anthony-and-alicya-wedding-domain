import { IOptions } from '@skimp/schema';

import { InviteTypes } from './invite-types.constant';

export const INVITE_TYPE_OPTIONS: IOptions<string> = [
    InviteTypes.DAY,
    InviteTypes.EVENING
];
