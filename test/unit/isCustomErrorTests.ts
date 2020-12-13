import { isCustomError, kaputt } from '../../lib';

suite('isCustomError', (): void => {
  test(`acts as a type guard for 'CustomError'.`, async (): Promise<void> => {
    class TokenInvalid extends kaputt('TokenInvalid') {}

    const ex: TokenInvalid = new TokenInvalid();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
    const assertIsError = function (ex2: Error): void {};

    if (isCustomError(ex)) {
      assertIsError(ex);
    }
  });

  test('acts as a type guard for specific custom errors.', async (): Promise<void> => {
    class TokenInvalid extends kaputt('TokenInvalid') {}
    class TokenExpired extends kaputt('TokenExpired') {}

    const ex: TokenExpired | TokenInvalid = new TokenInvalid();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
    const assertIsCustomError = function (ex2: TokenInvalid): void {};

    if (isCustomError(ex, TokenInvalid)) {
      assertIsCustomError(ex);
    }
  });
});
