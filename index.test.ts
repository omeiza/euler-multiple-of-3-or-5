import {describe, expect, test} from "@jest/globals";
import sumOfMultiples from "./index";

describe("Sum of the multiple of 3 or 5 below n", () => {
	test("Sum of the multiples of 3 or 5 below 10", () => {
		expect(sumOfMultiples(10)).toEqual(23);
	});

	test("Sum of the multiples of 3 or 5 below 1000", () => {
		expect(sumOfMultiples(1000)).toEqual(233168);
	});
});