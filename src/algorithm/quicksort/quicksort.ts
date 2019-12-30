import { Comparable } from "utility/comparable";
import { arraySwap } from "../../utility/swap";

export function partition<T extends Comparable<T>>(arr: T[], lo: number, hi: number): number {
    const pivot = arr[hi];

    let index = lo;

    for (let j = lo; j <= hi; j++) {
        if (arr[j].lesserThan(pivot)) {
            arraySwap(arr, index++, j);
        }
    }

    arraySwap(arr, index, hi);

    return index;
}

export function quicksort<T extends Comparable<T>>(arr: T[], lo = 0, hi = arr.length - 1): void {
    if (lo < hi) {
        const p = partition(arr, lo, hi);
        quicksort(arr, lo, p - 1);
        quicksort(arr, p + 1, hi);
    }
}