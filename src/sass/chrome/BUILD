package(default_visibility = ["//visibility:public"])

load("@io_bazel_rules_sass//:defs.bzl", "sass_binary", "sass_library")

sass_library(
    name = "deps",
    srcs = [
        "//3rdparty/nodejs/css/cssremedy",
        "//src/sass/draft/components/app",
    ],
)

sass_binary(
    name = "dev",
    sourcemap_embed_sources = True,
    output_name = "main-dev.css",
    src = "main.scss",
    deps = [
        ":deps",
    ],
)

sass_binary(
    name = "chrome",
    sourcemap_embed_sources = False,
    sourcemap = False,
    src = "main.scss",
    deps = [
        ":deps",
    ],
)
