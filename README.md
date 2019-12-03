<!-- TITLE/ -->

<h1>package-name-regex</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-npmversion"><a href="https://npmjs.org/package/package-name-regex" title="View this project on NPM"><img src="https://img.shields.io/npm/v/package-name-regex.svg" alt="NPM version" /></a></span>
<span class="badge-travisci"><a href="http://travis-ci.org/dword-design/package-name-regex" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/dword-design/package-name-regex/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-coveralls"><a href="https://coveralls.io/r/dword-design/package-name-regex" title="View this project's coverage on Coveralls"><img src="https://img.shields.io/coveralls/dword-design/package-name-regex.svg" alt="Coveralls Coverage Status" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/dword-design/package-name-regex" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/dword-design/package-name-regex.svg" alt="Dependency Status" /></a></span>
<span class="badge-shields"><a href="https://img.shields.io/badge/renovate-enabled-brightgreen.svg"><img src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg" /></a></span>

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Provides a regex that can be used to test if a string is a valid NPM package name.

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

<h2>Install</h2>

<a href="https://npmjs.com" title="npm is a package manager for javascript"><h3>npm</h3></a>
<ul>
<li>Install: <code>npm install --save package-name-regex</code></li>
<li>Require: <code>require('package-name-regex')</code></li>
</ul>

<!-- /INSTALL -->


<h2>Usage</h2>

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

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; dword</li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
