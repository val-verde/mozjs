// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.reduce
es5id: 15.4.4.21-8-b-ii-1
description: >
    Array.prototype.reduce - added properties in step 2 are visible
    here
---*/

        var obj = { };

        Object.defineProperty(obj, "length", {
            get: function () {
                obj[1] = "accumulator";
                return 3;
            },
            configurable: true
        });

assert.sameValue(Array.prototype.reduce.call(obj, function () { }), "accumulator", 'Array.prototype.reduce.call(obj, function () { })');

reportCompare(0, 0);
