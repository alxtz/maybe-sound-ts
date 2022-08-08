/* "Object and array lookups" */

const xs = [1, 2, 3];

// normal
const x1 = xs[3]; // without noUncheckedIndexedAccess, this would pass type checking
x1.toFixed(1);

// better
const x2 = xs[3]; // becomes const x2: number | undefined, with noUncheckedIndexedAccess
if (x2) {
  x2.toFixed(1);
}

// normal
type IdToName = { [id: string]: string };
const ids: IdToName = { "007": "James Bond" };
const agent = ids["008"]; // static type is string but runtime type is undefined.

// better
if (ids["008"]) {
  const agent = ids["008"]; // const agent: string
}
