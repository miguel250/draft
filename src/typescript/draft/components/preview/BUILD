package(default_visibility = ["//visibility:public"])

load("@npm_bazel_typescript//:index.bzl", "ts_library")

ts_library(
    name = "preview",
    srcs = ["index.tsx"],
    deps = [
        "@npm//showdown",
        "@npm//@types/showdown",
        "@npm//@types/react",
    ],
)
