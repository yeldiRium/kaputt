# kaputt

A custom error type and construction method that helps with error handling at compile time.

This package is inspired by [defekt](https://github.com/thenativeweb/defekt) and improves upon it by making the type system aware of the differences between errors.

"kaputt" is german for "broken".

## Status

| Category         | Status                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------- |
| Version          | [![npm](https://img.shields.io/npm/v/@yeldirium/kaputt)](https://www.npmjs.com/package/@yeldirium/kaputt) |
| Dependencies     | ![David](https://img.shields.io/david/yeldirium/kaputt)                                                  |
| Dev dependencies | ![David](https://img.shields.io/david/dev/yeldirium/kaputt)                                              |
| Build            | ![GitHub Actions](https://github.com/yeldirium/kaputt/workflows/Release/badge.svg?branch=main)           |
| License          | ![GitHub](https://img.shields.io/github/license/yeldirium/kaputt)                                        |

## Installation

```shell
$ npm install @yeldirium/kaputt
```

## Creating custom errors

To create custom errors, create new classes and let them extend the anonymous class created by `kaputt`:

```typescript
import { kaputt } from '@yeldirium/kaputt';

class TokenMalformed extends kaputt('TokenMalformed') {}
class TokenExpired extends kaputt('TokenExpired') {}
```

The string you give to the `kaputt` function determines the error's `name` and its default error message. It should be the same as the class name.

These custom errors can be used in various ways. They are, however, not intended to be thrown. They are intended to be passed around as objects, preferably wrapped in a [result type](https://github.com/yeldiRium/result). This allows the handling of recoverable errors in a type-safe way, instead of using unchecked and unpredictable thrown exceptions or rejections.

```typescript
import { kaputt } from '@yeldirium/kaputt';
import { fail, okay, Result } from '@yeldirium/result';

class TokenMalformed extends kaputt('TokenMalformed') {}
class TokenExpired extends kaputt('TokenExpired') {}

const validateToken = function (token: string): Result<DecodedToken, TokenMalformed | TokenExpired> {
  // ...
}

const token = validateToken(rawToken);

if (isFailed(token)) {
  switch (token.error.name) {
    // TypeScript will support you here and only allow the codes of the two possible kaputts.
    case 'TokenMalformed': {
      // ...
    }
    case 'TokenExpired': {
      // ...
    }
  }
}
```

## Instantiating errors

The custom errors created by this package take several parameters. They provide a default message, but you can overwrite it:

```typescript
class TokenMalformed extends kaputt('TokenMalformed') {}

new TokenMalformed('Token is not valid JSON');
```

You can also provide a second parameter, which can contain an optional cause for the error or additional data:

```typescript
class TokenMalformed extends kaputt('TokenMalformed') {}

try {
  // ...
} catch (ex: unknown) {
  new TokenMalformed(undefined, { cause: ex })
}

new TokenMalformed(undefined, { data: { foo: 'bar' }})
```

## Running the quality assurance

To lint and test this package use [roboter](https://www.npmjs.com/package/roboter).

```shell
$ npx roboter
```
