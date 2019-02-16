# Draft
Draft is a note taking application inspired by [notable](https://github.com/notable/notable).


### Development
* Build Chrome extension with `./bazel build src/typescript/chrome:dev`
* In chrome to go to `chrome://extensions`
* Enable Development mode
* Click `Load Unpacked` and go to codebase path
  `{codebase}/bazel-genfiles/src/typescript/chrome/unpacked`

#### Code Formatting
*  `bazel run :fmt -- -r --baseDir src/typescript`

#### Notes
* For editor support run `bazel run @nodejs//:bin/yarn -- --cwd 3rdparty/nodejs/`
* To add a module use `bazel run @nodejs//:bin/yarn -- --cwd 3rdparty/nodejs/ add react`
