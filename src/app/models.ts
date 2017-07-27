export class User {
    id?: string;
    nickname?: string;
    booksCount?: number;
    updatedAt?: string;
    createdAt?: string;
    identity?: string;
    lang?: string;
    photo?: string;
    profile?: string;
    subscriptions?: List<number>;
}

export class SubUser {
    lastBooksCount: number;
    subUser: User;
}

export class Book {
    id?: string;
    title?: string;
    author?: string;
    notes?: string;
    createdAt?: string;
    user?: User;
    lang?: any;
    readDay?: number;
    readMonth?: number;
    readYear?: number;
    updatedAt?: string;
    userId?: string;
    priority?: number;
}

export class Credentials {
    'access-token': string;
    user: User = new User();
}

export interface List<T> {
    [index: string]: T;
}
