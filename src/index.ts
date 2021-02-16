import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charCollection = new CharacterCollection("Xaayb");
const sorter = new Sorter(charCollection);
sorter.sort();
console.log(charCollection.data);