workspace(name = "draft")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

NODEJS_BAZEL_VERSION = "0.27.8"

NODEJS_BAZEL_SHA = "88e5e579fb9edfbd19791b8a3c6bfbe16ae3444dba4b428e5efd36856db7cf16"

NODEJS_VERSION = "10.13.0"

YARN_VERSION = "1.12.1"

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = NODEJS_BAZEL_SHA,
    urls = [
        "https://github.com/bazelbuild/rules_nodejs/releases/download/%s/rules_nodejs-%s.tar.gz" % (
            NODEJS_BAZEL_VERSION,
            NODEJS_BAZEL_VERSION,
        ),
    ],
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

load("@npm_bazel_typescript//:index.bzl", "ts_setup_workspace")
ts_setup_workspace()
