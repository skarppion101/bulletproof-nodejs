import {IUserRecord} from "../interfaces/IUser";
import {IMailer} from "../interfaces/IMailer";
import {Application} from "express";
import {IEnv} from "../env";

export class Mailer implements IMailer {
  private app: Application;
  private env: IEnv;

  constructor(app: Application, env: IEnv) {
    this.app = app;
    this.env = env;
  }

  sendWelcomeEmail(user: Partial<IUserRecord>) {
    /**
     * @TODO Call Mailchimp/Sendgrid or whatever
     */
    return {delivered: 1, status: "ok"};
  }
  startEmailSequence(sequence: string, user: Partial<IUserRecord>) {
    if (!user.email) {
      throw new Error("No email provided");
    }
    // @TODO Add example of an email sequence implementation
    // Something like
    // 1 - Send first email of the sequence
    // 2 - Save the step of the sequence in database
    // 3 - Schedule job for second email in 1-3 days or whatever
    // Every sequence can have its own behavior so maybe
    // the pattern Chain of Responsibility can help here.
    return {delivered: 1, status: "ok"};
  }
}
