import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async signup({ email, password, username }) {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        username
      );
      return this.login({ email, password });
    } catch (error) {
      console.log("Appwrite AuthService :: Signup :: error", error);
    }
  }
  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return session;
    } catch (error) {
      console.log("Appwrite AuthService :: Login :: error", error);
    }
  }
  async getCurrentUser() {
    try {
      const user = await this.account.get();
      if (user) return user;
      else return null;
    } catch (error) {
      console.log("Appwrite AuthService :: getCurrentUser :: error", error);
      return null;
    }
  }
  async logout() {
    try {
      const result = await this.account.deleteSessions();
      return result;
    } catch (error) {
      console.log("Appwrite AuthService :: logout :: error", error);
    }
  }
}

const authservice = new AuthService();

export default authservice;
