package(default_visibility = ["//visibility:public"])

load("@npm_bazel_typescript//:index.bzl", "ts_library")

ts_library(
    name = "app",
    srcs = ["index.tsx"],
    deps = [
        "//src/typescript/draft/components/editor",
        "//src/typescript/draft/components/sidebar",
        "//src/typescript/draft/components/preview",
        "@npm//@types/react",
        "@npm//@types/react-dom",
    ],
)
