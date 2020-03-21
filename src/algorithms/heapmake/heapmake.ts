import { heapadjust } from "algorithms/heapadjust/heapadjust";

export function heapmake<T extends number>(
    arr: T[],
    lo: number,
    hi: number
): void {
    let start = Math.floor((hi - lo - 1) / 2) - 1;
    while (start >= lo) {
        heapadjust(arr, start--, hi - lo - 1);
    }
}
