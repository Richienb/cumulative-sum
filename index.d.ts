/**
Add the numbers in an array cumulatively.

@param array The array to add the numbers of.

@example
```
const cumulativeSum = require("cumulative-sum")

cumulativeSum([1, 2, 3])
//=> [1, 3, 6]
```
*/
declare function cumulativeSum(array: number[]): number[]

export = cumulativeSum
