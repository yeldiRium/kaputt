# [2.1.0](https://github.com/yeldirium/kaputt/compare/v2.0.0...v2.1.0) (2020-12-16)


### Features

* Extend Error to inherit stacktrace functionality. ([deb388e](https://github.com/yeldirium/kaputt/commit/deb388e3c282bc77709f8f3d704744ee6cc9812b))

# [2.0.0](https://github.com/yeldirium/kaputt/compare/v1.1.2...v2.0.0) (2020-12-13)


### Features

* Move type guard to single function; Restructure library. ([e87e3cb](https://github.com/yeldirium/kaputt/commit/e87e3cbfbaf00d4e9deeeb4553eddcd02d06ca61))


### BREAKING CHANGES

* - The type guards are no longer attached to the ErrorConstructor or the
Error type. This makes the errors plain objects with no functionality.
- The type guards are combined in a single function that can check for
CustomError or optionally any specific custom error type.
- The library was restructured and individual parts broken into smaller
files.
- The tests have been improved.

## [1.1.2](https://github.com/yeldirium/kaputt/compare/v1.1.1...v1.1.2) (2020-12-12)


### Bug Fixes

* Add dotKuro to contributors. ([51e7fc1](https://github.com/yeldirium/kaputt/commit/51e7fc13561df745007a2e4c3e8dbeed301e6695))

## [1.1.1](https://github.com/yeldirium/kaputt/compare/v1.1.0...v1.1.1) (2020-12-12)


### Bug Fixes

* Some typos in the readme. ([e5ce418](https://github.com/yeldirium/kaputt/commit/e5ce418aaeff146a834ae97f9b9be63060448b24))

# [1.1.0](https://github.com/yeldirium/kaputt/compare/v1.0.0...v1.1.0) (2020-12-12)


### Bug Fixes

* A stupid mistake in a test. ([fc3e9c5](https://github.com/yeldirium/kaputt/commit/fc3e9c5d1532c776720dc24012af247e6bd32375))


### Features

* Add type guard to errors. ([b220bae](https://github.com/yeldirium/kaputt/commit/b220bae2a4a177805e3a674e00d4adbe5eb4f5aa))

# 1.0.0 (2020-12-12)


### Features

* Implement kaputt. ([de62bc1](https://github.com/yeldirium/kaputt/commit/de62bc1fefa4d1d8e9140172acbe75829716f49d))
