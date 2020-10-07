const test = require("ava")
const cumulativeSum = require(".")

test("main", t => {
	t.deepEqual(cumulativeSum([1, 2, 3]), [1, 3, 6])
})
