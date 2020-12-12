import { assert } from 'assertthat';
import humanizeString from 'humanize-string';
import { CustomError, kaputt } from '../../lib';

suite('error', (): void => {
  test('custom errors have a default message.', async (): Promise<void> => {
    class TokenInvalid extends kaputt('TokenInvalid') {}

    const ex = new TokenInvalid();

    assert.that(ex.message).is.equalTo(humanizeString('TokenInvalid'));
  });

  test('custom errors have the correct name.', async (): Promise<void> => {
    class TokenInvalid extends kaputt('TokenInvalid') {}

    const ex = new TokenInvalid();

    assert.that(ex.name).is.equalTo('TokenInvalid');
  });

  test('custom errors can have a custom message.', async (): Promise<void> => {
    class TokenInvalid extends kaputt('TokenInvalid') {}

    const ex = new TokenInvalid('Token is not valid JSON');

    assert.that(ex.message).is.equalTo('Token is not valid JSON');
  });

  test('custom errors can have a cause.', async (): Promise<void> => {
    class TokenInvalid extends kaputt('TokenInvalid') {}

    const cause: unknown = {};
    const ex = new TokenInvalid(undefined, { cause });

    assert.that(ex.cause).is.equalTo(cause);
  });

  test('custom errors can have aditional data.', async (): Promise<void> => {
    class TokenInvalid extends kaputt('TokenInvalid') {}

    const data = { foo: 'bar' };
    const ex = new TokenInvalid(undefined, { data });

    assert.that(ex.data).is.equalTo(data);
  });

  test(`custom errors fulfil the 'CustomError' interface.`, async (): Promise<void> => {
    class TokenInvalid extends kaputt('TokenInvalid') {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
    const fun = function (ex: CustomError): void {};

    const ex = new TokenInvalid();

    fun(ex);
  });

  test(`custom errors fulfil the 'Error' interface.`, async (): Promise<void> => {
    class TokenInvalid extends kaputt('TokenInvalid') {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
    const fun = function (ex: Error): void {};

    const ex = new TokenInvalid();

    fun(ex);
  });

  test(`custom errors can be used in exhaustive switch/case statements.`, async (): Promise<void> => {
    class TokenInvalid extends kaputt('TokenInvalid') {}
    class TokenExpired extends kaputt('TokenExpired') {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const fun = function (ex: TokenInvalid | TokenExpired): void {
      switch (ex.name) {
        case 'TokenExpired': {
          break;
        }
        case 'TokenInvalid': {
          break;
        }
        default: {
          // This would not compile if the above cases were not exhaustive.
          return {} as never;
        }
      }
    };
  });
});
