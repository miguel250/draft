package(default_visibility = ["//visibility:public"])

load("@npm_bazel_typescript//:index.bzl", "ts_library")

ts_library(
    name = "helper",
    testonly = True,
    srcs = glob(["index.ts"]),
    deps = [
        "//3rdparty/nodejs/types/jasmine-enzyme",
        "@npm//enzyme",
        "@npm//enzyme-adapter-react-16",
        "@npm//jsdom",
        "@npm//@types/enzyme",
        "@npm//@types/enzyme-adapter-react-16",
        "@npm//@types/jsdom",
        "@npm//@types/jasmine",
        "@npm//@types/jasmine-enzyme",
    ],
)

