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
    lang?: any;
    readDay?: string;
    readMonth?: string;
    readYear?: string;
    updatedAt?: string;
    userId?: string;
}

export interface List<T> {
    [index: string]: T;
}