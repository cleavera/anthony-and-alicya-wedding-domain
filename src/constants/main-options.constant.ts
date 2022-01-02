import { IOptions } from '@skimp/schema';

import { Mains } from './mains.constant';

export const MAIN_OPTIONS: IOptions<string> = [
    Mains.CHICKEN,
    Mains.PORK,
    Mains.TAGINE
];
