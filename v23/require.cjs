if (process.features.require_module) {
    const foo = require("package-a").foo;
    console.log(foo());
    // module-sync
}