import { Field, Relationship, Schema } from '@skimp/schema';
import { NumberType, Options, Required, StringType } from '@skimp/validation';
import { INVITE_TYPE_OPTIONS } from '../constants/invite-type-options.constant';
import { GuestSchema } from './guest';

@Schema('invite')
@Relationship(GuestSchema)
export class InviteSchema {
    @Required
    @NumberType
    @Field()
    public inviteNumber!: number;

    @Required
    @StringType
    @Field()
    public pin!: number;

    @Required
    @StringType
    @Options(INVITE_TYPE_OPTIONS)
    @Field()
    public type!: string;
}
