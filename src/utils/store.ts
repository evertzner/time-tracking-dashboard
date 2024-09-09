import { atom } from 'nanostores';

export type TimeFrame = 'daily' | 'weekly' | 'monthly';
export const selectedTimeFrame = atom<TimeFrame>('daily');
