class User {
	private id: number;
	protected login: string;
	public password: string;
	server: string;
}

class UserWithConstructor {
	private id: number;
	protected login: string;
	constructor(public password: string, public server: string) {}

	getData(): { password: string; server: string } {
		return { password: this.password, server: this.server };
	}
}

class ProtectedUser extends User {
	setLogin(login: string): void {
		this.login = login;
	}
}

abstract class AbstractUser {
	private id: number;
	protected login: string;
	public password: string;
	server: string;
	abstract getLogin(): string;
	getData(): string {
		return `login: ${this.getLogin()} password: ${this.password}`;
	}
}

class ExtendedUser extends AbstractUser {
	getLogin(): string {
		return this.login;
	}
}

const protectedUser = new ProtectedUser();

protectedUser.setLogin("sfsljflsf");
