import { MinHeap } from "./min_heap";
import { expect } from "chai";

describe("MinHeap", () => {
    describe("extract", () => {
        it("should extract the lowest value first", () => {
            const heap = new MinHeap();
            heap.insert(3);
            heap.insert(-1);
            heap.insert(1);
            heap.insert(2);
            const n = heap.extract();
            expect(n).to.equal(-1);
        });
    });
});
