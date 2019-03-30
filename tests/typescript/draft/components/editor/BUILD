package(default_visibility = ["//visibility:public"])

load("@npm_bazel_typescript//:index.bzl", "ts_library")
load("@npm_bazel_jasmine//:index.bzl", "jasmine_node_test")

ts_library(
    name = "test_lib",
    testonly = True,
    srcs = glob(["editor.test.tsx"]),
    deps = [
        "//tests/typescript/helper",
        "//src/typescript/draft/components/editor",
        "@npm//enzyme",
        "@npm//jasmine-enzyme",
        "@npm//react",
        "@npm//@types/enzyme",
        "@npm//@types/jasmine",
    ],
)

jasmine_node_test(
    name = "editor",
    coverage = True,
    deps = [
        ":test_lib",
    ],

)
