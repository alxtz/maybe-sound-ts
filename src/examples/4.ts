class Animal {}

class Mammal extends Animal {
  public isMammal = true;
}

class Cat extends Mammal {
  public isCat = true;

  public isDog = false;
}

class Dog extends Mammal {
  public isDog = true;

  public isCat = false;
}

function getMammals(): Mammal[] {
  return [];
}

function hasCat(arr: readonly Animal[]) {
  return arr.some((e) => e instanceof Cat);
}
const xx: Mammal[] = getMammals();
const yy = hasCat(xx);

const zz: Cat[] = [new Cat()];
addDogOrCat(zz); // // Sometimes puts a Dog in a Cat array, sad!

// normal, but unsafe
function addDogOrCat(arr: Animal[]) {
  arr.push(Math.random() > 0.5 ? new Dog() : new Cat());
}

// safe, disallowing mutations in function calls
function addDogOrCat2(arr: readonly Animal[]): Animal[] {
  return [...arr, Math.random() > 0.5 ? new Dog() : new Cat()];
}

const cts: Cat[] = [new Cat()];
const addedCts: Cat[] = addDogOrCat2(cts);
