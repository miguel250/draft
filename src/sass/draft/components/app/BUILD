package(default_visibility = ["//visibility:public"])

load("@io_bazel_rules_sass//:defs.bzl", "sass_library")

sass_library(
    name = "app",
    srcs = ["app.scss"],
    deps = [
        "//src/sass/draft/components/editor",
        "//src/sass/draft/components/sidebar",
        "//src/sass/draft/components/preview",
    ],
)
