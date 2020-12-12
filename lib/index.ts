import humanizeString from 'humanize-string';

interface CustomError<TErrorName extends string = string> extends Error {
  name: TErrorName;
  message: string;
  cause?: unknown;
  data?: any;
}

type ErrorConstructor<TErrorName extends string> = new(
  message?: string,
  meta?: { cause?: unknown; data?: any }
) => CustomError<TErrorName>;

const kaputt = function <TErrorName extends string>(
  errorName: TErrorName
): ErrorConstructor<TErrorName> {
  return class implements CustomError<TErrorName> {
    public name: TErrorName = errorName;

    public message: string;

    public cause?: unknown;

    public data?: any;

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
  };
};

export {
  CustomError,
  ErrorConstructor,
  kaputt
};
