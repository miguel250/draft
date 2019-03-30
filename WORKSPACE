workspace(name = "draft")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

NODEJS_BAZEL_VERSION = "0.27.9"

NODEJS_BAZEL_SHA = "213dcf7e72f3acd4d1e369b7a356f3e5d9560f380bd655b13b7c0ea425d7c419"

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
