import {IUser} from "../interfaces/IUser";

export class MailerService {
  SendWelcomeEmail(user: Partial<IUser>) {
    /**
     * @TODO Call Mailchimp/Sendgrid or whatever
     */
    return {delivered: 1, status: "ok"};
  }
  StartEmailSequence(sequence: string, user: Partial<IUser>) {
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