class ApiError extends Error {
  statusCode: number;
  errors: any[];
  success: boolean;
  data: any;

  constructor(
    statusCode: number,
    message: string = "something went wrong",
    errors: any[] = [],
    stack?: string
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.success = false; // usually false for errors
    this.data = null;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
