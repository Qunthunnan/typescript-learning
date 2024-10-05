// interface UserWithData<T extends string | Date> {
//     data: T
// }

// const user: UserWithData<Date> = {
//     data: new Date
// }

interface UserFromDb {
	hash: string;
}

interface UserFromClient {
	id: number;
}

interface UserFromMail {
	data: Date;
}

type UserFromDbOrUserFromClient<T extends string | number> = T extends string
	? UserFromDb
	: UserFromClient;

const user: UserFromDbOrUserFromClient<number> = {
	id: 12,
};

type GenericUser<T extends number | string | Date> = T extends number
	? UserFromClient
	: T extends string
	? UserFromDb
	: UserFromMail;

type ToArray<T> = T extends any ? T[] : never;
