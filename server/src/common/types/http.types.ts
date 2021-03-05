import { RoleType, User } from '@modules/user/schemas/user.schema';
import { Request, Response } from 'express';

export interface HttpContext {
	req: Request;
	res: Response;
}

export interface PayloadUserForJwtToken {
	user: UserFromRequest;
}

export interface DataStoredFromToken {
	user: UserFromRequest;
}

export interface UserFromRequest extends Partial<User> {
	_id?: string;
	role?: RoleType;
	email?: string;
	username?: string;
	password?: string;
	thumbnail?: string;
}
export interface SessionAuthToken {
	authToken?: {
		accessToken: string;
		refreshToken: string;
	};
}
