import { BehaviorSubjectHelper } from '../classes/behavior-subject-helper';
import { HeroIconName } from '../modules/tw-icon/tw-icon.type';

export type FloatingActionIconType = string | null;
export type FloatingActionLoadingType = boolean;
export type FloatingActionMethodType = (() => void) | null;

export interface FloatingAction {
    icon: BehaviorSubjectHelper<string | null | HeroIconName>;
    loading: BehaviorSubjectHelper<boolean>;
    method: BehaviorSubjectHelper<FloatingActionMethodType>;
}
