workspace(name="draft")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

NODEJS_BAZEL_VERSION = "0.18.5"
NODEJS_BAZEL_SHA = "c8cd6a77433f7d3bb1f4ac87f15822aa102989f8e9eb1907ca0cad718573985b"

NODEJS_VERSION = "10.13.0"
YARN_VERSION = "1.12.1"

http_archive(
    name = "build_bazel_rules_nodejs",
    urls = [
        "https://github.com/bazelbuild/rules_nodejs/releases/download/%s/rules_nodejs-%s.tar.gz" % (
             NODEJS_BAZEL_VERSION, NODEJS_BAZEL_VERSION
        )
    ],
    sha256 = NODEJS_BAZEL_SHA,
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories", "yarn_install")
node_repositories(
     node_version = NODEJS_VERSION,
     yarn_version = YARN_VERSION,
    )

yarn_install(
  name = "npm",
  package_json = "//3rdparty/nodejs:package.json",
  yarn_lock = "//3rdparty/nodejs:yarn.lock",
)

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")
install_bazel_dependencies()

load("@npm_bazel_typescript//:defs.bzl", "ts_setup_workspace")
ts_setup_workspace()

