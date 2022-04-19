import { User } from './user.interface';

export type ActivityActions = 'create' | 'update' | 'delete' | 'comment' | 'start' | 'finish' | 'restore';
export type ActivityTypes =
    | 'careplan'
    | 'exercise'
    | 'exerciseProgram'
    | 'location'
    | 'tag'
    | 'userDiscipline'
    | 'user:admin'
    | 'user:staff'
    | 'user:client'
    | 'user:clinic'
    | 'workout'
    | 'workoutSchedule';

export interface Activity extends _Activity {
    _id?: any;
    id?: any;
}

export interface _Activity {
    action?: ActivityActions;

    affectedType?: ActivityTypes;
    affectedLabel?: string | null;
    affectedID?: string | null;

    subjectType?: ActivityTypes | null;
    subjectLabel?: string | null;
    subjectID?: string | null;

    fromValue?: any;
    toValue?: any;

    comment?: string | null;

    //
    // Owner
    owner?: User | User['_id'];

    createdBy?: User | User['_id'];

    exerciseVideos?: string[];

    views?: (User | User['_id'])[];

    createdAt?: any;
    updatedAt?: any;

    //
    // Search
    search?: string;
}
