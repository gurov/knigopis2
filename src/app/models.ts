export class User {
    id?: string;
    nickname?: string;
    booksCount?: number;
    updatedAt?: string;
}

export class Book {
    id?: string;
    title?: string;
    author?: string;
    notes?: string;
    createdAt?: string;
    user?: User;
}

export interface List<T> {
    [index: string]: T;
}