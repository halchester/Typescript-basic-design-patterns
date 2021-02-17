import { Sorter } from "./Sorter";

export class CharacterCollection extends Sorter {
  data: string;
  constructor(data: string) {
    super();
    this.data = data;
  }

  get length(): number {
    return this.data.length;
  }

  compare(left: number, right: number): boolean {
    return this.data[left].toLowerCase() > this.data[right].toLowerCase();
  }

  swap(left: number, right: number): void {
    const chars = this.data.split("");
    const temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;
    this.data = chars.join("");
  }
}
