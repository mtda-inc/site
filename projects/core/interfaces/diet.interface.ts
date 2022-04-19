export interface Diet extends _Diet {
    _id?: any;
    id?: any;
}

export interface _Diet {
    name: string;
    premium: boolean;
    carb: number;
    protein: number;
    fat: number;

    createdAt?: any;
    updatedAt?: any;

    //
    // Search
    search?: string;

    //
    // Delete
    deleted?: boolean;
    deletedAt?: any;
}
