import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charCollection = new CharacterCollection("Xaayb");
charCollection.sort();
console.log(charCollection.data);

const linkedList = new LinkedList();
linkedList.add(12);
linkedList.add(13);
linkedList.add(2);
linkedList.sort();
linkedList.print();