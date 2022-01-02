import { Field, Schema } from '@skimp/schema';
import { BooleanType, Options, Required, StringType } from '@skimp/validation';

import { DESSERT_OPTIONS } from '../constants/dessert-options.constant';
import { MAIN_OPTIONS } from '../constants/main-options.constant';
import { STARTER_OPTIONS } from '../constants/starter-options.constant';

@Schema('guest')
export class GuestSchema {
    @Required
    @StringType
    @Field()
    public name!: string;

    @StringType
    @Options(STARTER_OPTIONS)
    @Field()
    public starter!: string;

    @StringType
    @Options(MAIN_OPTIONS)
    @Field()
    public main!: string;

    @StringType
    @Options(DESSERT_OPTIONS)
    @Field()
    public dessert!: string;

    @BooleanType
    @Field()
    public attending!: boolean;

    @StringType
    @Field()
    public comments!: string;
}
