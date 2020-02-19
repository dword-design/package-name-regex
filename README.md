<!-- TITLE/ -->
# package-name-regex
<!-- /TITLE -->

<!-- BADGES/ -->
[![NPM version](https://img.shields.io/npm/v/package-name-regex.svg)](https://npmjs.org/package/package-name-regex)
![Linux macOS Windows compatible](https://img.shields.io/badge/os-linux%20%7C%C2%A0macos%20%7C%C2%A0windows-blue)

[![Build status](https://img.shields.io/github/workflow/status/dword-design/package-name-regex/build)](https://github.com/dword-design/package-name-regex/actions)
[![Coverage status](https://img.shields.io/coveralls/dword-design/package-name-regex)](https://coveralls.io/github/dword-design/package-name-regex)
[![Dependency status](https://img.shields.io/david/dword-design/package-name-regex)](https://david-dm.org/dword-design/package-name-regex)
![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen)

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/dword-design/package-name-regex)
<!-- /BADGES -->


<!-- DESCRIPTION/ -->
Provides a regex that can be used to test if a string is a valid NPM package name.
<!-- /DESCRIPTION -->

<!-- INSTALL/ -->
# Install

```bash
# NPM
$ npm install package-name-regex

# Yarn
$ yarn add package-name-regex
```
<!-- /INSTALL -->

## Usage

```js
const packageNameRegex = require('package-name-regex')

packageNameRegex.test('some-package') // true
packageNameRegex.test('example.com') // true
packageNameRegex.test('@npm/thingy') // true

packageNameRegex.test('crazy!') // false
packageNameRegex.test('.start-with-period') // false
packageNameRegex.test('@npm-zors/money!time.js') // false
```

<!-- LICENSE/ -->
# License

Unless stated otherwise all works are:

Copyright &copy; Sebastian Landwehr <info@dword-design.de>

and licensed under:

[MIT License](https://opensource.org/licenses/MIT)
<!-- /LICENSE -->
