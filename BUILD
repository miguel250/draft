package(default_visibility = ["//visibility:public"])

load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")

exports_files(["tsconfig.json"])

nodejs_binary(
    name = "fmt",
    entry_point = "typescript-formatter/bin/tsfmt",
    node_modules = "@npm//:node_modules",
)
