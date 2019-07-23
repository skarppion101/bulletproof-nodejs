interface IExpressError {
  name: string;
  message: string;
  status: number;
}

export class ExpressError extends Error {
  status: number;

  constructor({name, message, status}: IExpressError) {
    super(message);
    super.name = name;
    this.status = status;
  }
}
