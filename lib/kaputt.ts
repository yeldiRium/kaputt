import { CustomError } from './CustomError';
import { ErrorConstructor } from './ErrorConstructor';
import humanizeString from 'humanize-string';

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
  kaputt
};
