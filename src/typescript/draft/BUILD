package(default_visibility = ["//visibility:public"])

load("@npm_bazel_typescript//:defs.bzl", "ts_library")

ts_library(
    name = "draft",
    srcs = ["index.tsx"],
    deps = [
        "//src/typescript/draft/components",
        "@npm//@types/react",
        "@npm//@types/react-dom",
    ],
)
