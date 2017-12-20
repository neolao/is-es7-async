const assert = require("assert");

let isAsync = require("./index.js");

let a = function(){};
assert.ok(!isAsync(a));

let b = async function(){};
assert.ok(isAsync(b));

let c = null;
assert.ok(!isAsync(c));

let d = "foo";
assert.ok(!isAsync(d));

let e = 42;
assert.ok(!isAsync(e));

let f = undefined;
assert.ok(!isAsync(f));
