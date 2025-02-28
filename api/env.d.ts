declare namespace NodeJS {
  interface IProcessEnv {
    // ----------------------P
    readonly PORT: number;
    readonly NODE_ENV: "development | production";
    // ----------------------M
    readonly MONGO_URL: string;
    // ----------------------B
    BASE_URL: string;
    BASE_URL_FRONT: string;
    // ----------------------J
    readonly JWT_KEY: string;
    readonly JWT_Expire: string;
    readonly JWT_RESET_EXPIRE: string;
    // readonly JWT_RESET_EXPIRE: string;
    // ----------------------N
    readonly EMAIL_HOST: string;
    readonly EMAIL_USERNAME: string;
    readonly EMAIL_PASSWORD: string;
    readonly APP_NAME: string;
    // ----------------------G
    readonly KEY: string;
    readonly GOOGLE_CLIENT_ID: string;
    readonly GOOGLE_CLIENT_SECRET: string;
  }
}
