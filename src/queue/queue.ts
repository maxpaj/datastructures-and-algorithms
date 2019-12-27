import { LinkedList } from "../linked-list/linked-list";

export class Queue<T> {
  private list: LinkedList<T>;

  constructor() {
    this.list = new LinkedList<T>();
  }

  isEmpty() {
    return this.list.size() === 0;
  }

  size() {
    return this.list.size();
  }

  peek() {
    return this.list.peek();
  }

  enqueue(value: T) {
    this.list.add(value);
  }

  dequeue() {
    return this.list.remove(0);
  }
}
