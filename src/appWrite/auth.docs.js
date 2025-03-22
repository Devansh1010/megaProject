import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    construction() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client);
    }

    //Remove Dependesices from any platfroms
    async CreateAccount({ email, password, name }) {
        try {
            const account = await this.account.create(ID.unique(), email, password, name);
            if (account) {
                //calll another method to send email
                return this.login({ email, password });

            } else {
                return account
            }
        } catch (error) {
            throw error;
        }

    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);

        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;    
        }
    }
}

const authService = new AuthService();

export default authService;