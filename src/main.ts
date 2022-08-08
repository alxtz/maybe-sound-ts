import { z } from "zod";

const a = 10;

console.log(a);

const UserSchema = z.object({
  name: z.string(),
});

const x = UserSchema.parse(JSON.parse(`{ "name": "John" }`));

function add(a: number, b: number): number {
  return a + b;
}

const y = 10;
const z1 = y;

const c = add(z1, x.name.length);
console.log(c);

//------------------------------------------------------------------------------

export enum ExternalOrderStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}

const EOSSchema = z.nativeEnum(ExternalOrderStatus);

function exec(action: string) {
  const x = EOSSchema.safeParse(action);
  if (x.success) {
    const y = x.data;
    console.log(y);
  }
}

exec("not pending");
exec("PENDING");

//------------------------------------------------------------------------------

const xs = [1, 2, 3];
const x1 = xs[3]; // static type is number but runtime type is undefined.
// alert(x1.toFixed(1));
if (x1) {
  alert(x1.toFixed(1));
}

//------------------------------------------------------------------------------

type IdToName = { [id: string]: string };
const ids: IdToName = { "007": "James Bond" };
// const agent = ids["008"]; // static type is string but runtime type is undefined.
if (ids) {
  alert(ids["008"]);
}

// ------------------------------------------------------------------------------
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

function addDogOrCat(arr: readonly Animal[]) {
  // arr.push(Math.random() > 0.5 ? new Dog() : new Cat());
}

function getMammals(): Mammal[] {
  return [];
}

// B
function hasCat(arr: readonly Animal[]) {
  return arr.some((e) => e instanceof Cat);
}
const xx: Mammal[] = getMammals();
const yy = hasCat(xx);

// C
const zz: Cat[] = [new Cat()];
addDogOrCat(zz); // // Sometimes puts a Dog in a Cat array, sad!
