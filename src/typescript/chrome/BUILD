package(default_visibility = ["//visibility:public"])

load("@npm_bazel_typescript//:index.bzl", "ts_library")
load("@build_bazel_rules_nodejs//:defs.bzl", "rollup_bundle")
load("@bazel_tools//tools/build_defs/pkg:pkg.bzl", "pkg_tar")

ts_library(
    name = "background",
    srcs = ["background.ts"],
    deps = [
        "@npm//@types/chrome",
    ],
)

rollup_bundle(
    name = "background_bundle",
    entry_point = "src/typescript/chrome/background",
    globals = {
        "chrome": "chrome",
    },
    deps = [":background"],
)

rollup_bundle(
    name = "index_bundle",
    entry_point = "src/typescript/draft/index",
    globals = {
        "react-dom": "ReactDOM",
        "react": "React",
    },
    deps = [
        "//src/typescript/draft",
    ],
)

filegroup(
    name = "extension_files",
    srcs = [
        ":background_bundle.js",
        ":index_bundle.js",
        "//src/resources/chrome:files",
    ],
)

pkg_tar(
    name = "extension_tar",
    srcs = [
        "@npm//node_modules/react:umd/react.production.js",
        "@npm//node_modules/react-dom:umd/react-dom.production.js",
        ":extension_files",
    ],
    package_dir = "/",
)

genrule(
    name = "dev",
    srcs = [
        ":extension_files",
        "//src/html/chrome/dev",
        "@npm//node_modules/react:umd/react.development.js",
        "@npm//node_modules/react-dom:umd/react-dom.development.js",
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
