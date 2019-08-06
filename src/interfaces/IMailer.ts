export interface IMailer {
  sendWelcomeEmail(params: any): any;

  startEmailSequence(param1: any, param2: any): any;
}
