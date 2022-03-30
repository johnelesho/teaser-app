export class SignUpResponse {
  constructor(private status: boolean, private message: string) {}
}
export class SignInResponse {
  constructor(
    private status: boolean,
    private message: string,
    private token?: string,
  ) {}
}

export class CustomResponse {
  constructor(
    private status: boolean,
    private message: string,
    private data?: object,
  ) {}
}

export class ErrorResponse {
  constructor(
    private status: boolean,
    private message: string,
    private token?: string,
    private data?: Object,
    private error?: Object,
  ) {}
}
