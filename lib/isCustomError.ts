import { CustomError } from './CustomError';
import { ErrorConstructor } from './ErrorConstructor';

const isCustomError = function <TErrorName extends string>(
  ex: any,
  errorType?: ErrorConstructor<TErrorName>
): ex is CustomError<TErrorName> {
  return (
    typeof ex === 'object' && ex !== null &&
        'message' in ex && typeof ex.message === 'string' &&
        'name' in ex && typeof ex.name === 'string' &&
        (errorType !== undefined && ex.name === errorType.name)
  );
};

export {
  isCustomError
};
