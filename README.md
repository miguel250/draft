# Draft [![Build Status](https://travis-ci.com/miguel250/draft.svg?branch=master)](https://travis-ci.com/miguel250/draft)
Draft is a note taking application inspired by [notable](https://github.com/notable/notable).


### Development
* Build Chrome extension with `./bazel build src/typescript/chrome:dev`
* In chrome to go to `chrome://extensions`
* Enable Developer mode
* Click `Load Unpacked` and go to codebase path
  `{codebase}/bazel-genfiles/src/typescript/chrome/unpacked`

#### Code Formatting and linting
* `./bazel run @nodejs//:bin/yarn -- --cwd 3rdparty/nodejs/ fmt`
* `./bazel run @nodejs//:bin/yarn -- --cwd 3rdparty/nodejs/ lint`

#### Run tests
* `./bazel test //tests/...`

#### Notes
* For editor support run `./bazel run @nodejs//:bin/yarn -- --cwd 3rdparty/nodejs/`
* To add a module use `./bazel run @nodejs//:bin/yarn -- --cwd 3rdparty/nodejs/ add react`
