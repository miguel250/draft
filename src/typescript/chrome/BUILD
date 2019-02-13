package(default_visibility = ["//visibility:public"])

load("@build_bazel_rules_nodejs//:defs.bzl", "rollup_bundle")
load("@npm_bazel_typescript//:defs.bzl", "ts_library")
load("@bazel_tools//tools/build_defs/pkg:pkg.bzl", "pkg_tar")

ts_library(
    name = "app",
    srcs = ["app.ts"],
    deps = [
        "@npm//@types/chrome",
    ],
)

rollup_bundle(
    name = "background",
    entry_point = "src/typescript/chrome/app",
    globals = {
        "chrome": "chrome",
    },
    deps = [":app"],
)

filegroup(
    name = "extension_files",
    srcs = [
        ":background.js",
        "//src/resources/chrome:files",
    ],
)

pkg_tar(
    name = "extension_tar",
    srcs = [
        ":extension_files",
    ],
    package_dir = "/",
)

genrule(
    name = "dev",
    srcs = [
        ":extension_files",
    ],
    outs = ["unpacked"],
    cmd = """
    mkdir -p $@
    for f in $(SRCS); do
      cp $$f $@
    done
    """,
)

genrule(
    name = "extension",
    srcs = [
        ":extension_tar",
    ],
    outs = ["extension.zip"],
    cmd = "mkdir -p @D/extension_tar && \
        tar -C @D/extension_tar -xf $(location extension_tar) && \
        tar -tf $(location extension_tar) | grep -v '/$$' | (cd @D/extension_tar && zip - -@) > $@",
)
