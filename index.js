"use strict"

module.exports = array => {
	if (!Array.isArray(array)) {
		throw new TypeError(`Expected an array of numbers, got ${typeof array}`)
	}

	let sum = 0

	return array.map(value => sum += value) // eslint-disable-line no-return-assign
}
