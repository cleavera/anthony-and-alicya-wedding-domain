import { IOptions } from '@skimp/schema';

import { Desserts } from './desserts.constant';

export const DESSERT_OPTIONS: IOptions<string> = [
    Desserts.STICKY_TOFFEE,
    Desserts.CREME_BRULE,
    Desserts.FONDANT
];
