import dotenv from 'dotenv';

export const envConfig = (): EnvConfig => {
	const mode = process.env.NODE_ENV;
	dotenv.config({ path: `.env.${mode}` });

	const port = parseInt(process.env.PORT) || 5025;

	return {
		mode,
		port,
		serverUrl: process.env.SERVER_URL || `http://localhost:5025`,
		clientUrl: process.env.CLIENT_URL || `http://localhost:3000`,
		mongodbUri: process.env.MONGODB_URI,
		sessionSecret: process.env.SESSION_SECRET,
		cookieSecret: process.env.COOKIE_SECRET,
		jwt: {
			jwtSecret: process.env.JWT_SECRET,
			jwtExpiredTime: parseInt(process.env.JWT_EXPIRED_TIME),
			jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
			jwtRefreshExpiredTime: parseInt(process.env.JWT_REFRESH_EXPIRED_TIME),
		},
		email: {
			sendgridApiKey: process.env.SENDGRID_API_KEY,
			emailSender: process.env.EMAIL_AUTH_USER,
		},
		auth: {
			facebookAppId: process.env.FB_APP_ID,
			facebookAppSecret: process.env.FB_APP_SECRET,
			googleAppId: process.env.GOOGLE_APP_ID,
			googleAppSecret: process.env.GOOGLE_APP_SECRET,
		},
	};
};

export interface EnvConfig {
	mode: string;
	port: number;
	serverUrl: string;
	clientUrl: string;
	mongodbUri: string;
	sessionSecret: string;
	cookieSecret: string;
	jwt: {
		jwtSecret: string;
		jwtExpiredTime: number;
		jwtRefreshSecret: string;
		jwtRefreshExpiredTime: number;
	};
	auth?: {
		facebookAppId: string;
		facebookAppSecret: string;
		googleAppId: string;
		googleAppSecret: string;
	};
	email: {
		sendgridApiKey: string;
		emailSender: string;
	};
}
