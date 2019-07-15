type ExpressErrorParams = {
  name: string;
  message: string;
  status: number;
};

export class ExpressError extends Error {
  status: number;

  constructor({name, message, status}: ExpressErrorParams) {
    super(message);
    super.name = name;
    this.status = status;
  }
}
