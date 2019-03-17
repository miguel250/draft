package(default_visibility = ["//visibility:public"])

load("@npm_bazel_typescript//:index.bzl", "ts_library")

ts_library(
    name = "draft",
    srcs = ["index.tsx"],
    deps = [
        "//src/typescript/draft/components/app",
        "@npm//@types/react",
        "@npm//@types/react-dom",
    ],
)
