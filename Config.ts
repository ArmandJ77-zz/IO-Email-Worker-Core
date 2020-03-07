import dotenv from "dotenv";
dotenv.config();

export const GetCallToActionSecretToken = (): string => {
    return process.env.CALLTOACTIONSECRETTOKEN as string;
};
