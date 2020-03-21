import { testArray } from "../../utility/performance";
import { mergesort } from "./mergesort";

function test(arr: number[]): [number, number] {
    const start = process.hrtime();
    mergesort(arr);
    return process.hrtime(start);
}

testArray([80000, 160000, 320000, 640000, 1280000], test);
