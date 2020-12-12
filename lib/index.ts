import humanizeString from 'humanize-string';

interface CustomError<TErrorName extends string = string> extends Error {
  name: TErrorName;
  message: string;
  cause?: unknown;
  data?: any;

  is: <TPotentialErrorName extends string>(
    errorType: ErrorConstructor<TPotentialErrorName>
  ) => this is CustomError<TPotentialErrorName>;
}

interface ErrorConstructor<TErrorName extends string> {
  new(
    message?: string,
    meta?: { cause?: unknown; data?: any }
  ): CustomError<TErrorName>;

  isErrorTypeOf: (ex: any) => ex is CustomError<TErrorName>;
}

const kaputt = function <TErrorName extends string>(
  errorName: TErrorName
): ErrorConstructor<TErrorName> {
  return class implements CustomError<TErrorName> {
    public name: TErrorName = errorName;

    public message: string;

    public cause?: unknown;

    public data?: any;

    public static isErrorTypeOf (ex: CustomError): ex is CustomError<TErrorName> {
      return ex.name === this.name;
    }

    public constructor (
      message?: string,
      { cause, data }: {
        cause?: unknown;
        data?: any;
      } = {}
    ) {
      this.message = message ?? `${humanizeString(errorName)}`;
      this.cause = cause;
      this.data = data;
    }

    public is <TPotentialErrorName extends string> (
      errorClass: ErrorConstructor<TPotentialErrorName>
    ): this is InstanceType<ErrorConstructor<TPotentialErrorName>> {
      return errorClass.isErrorTypeOf(this);
    }
  };
};

export {
  CustomError,
  ErrorConstructor,
  kaputt
};
