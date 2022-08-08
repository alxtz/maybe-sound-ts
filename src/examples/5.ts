// unsound
type T = { x: string; y: string } | { a: string; b: string };

function fn(a: T) {
  if ("x" in a) {
    return a.y.length;
  } else {
    return a.b.length;
  }
}

console.log(fn({ x: "xx", a: "aa", b: "bb" }));

// [reasons]
// union types aren't actually mutual exclusion
// - https://github.com/microsoft/TypeScript/issues/31055
// - https://github.com/microsoft/TypeScript/issues/20863
// no exclusive or operator exists
// - https://github.com/microsoft/TypeScript/issues/14094
// that addes up with the type narrowing support for in guard, creates an unsound type hole
// - https://github.com/microsoft/TypeScript/pull/15256#discussion_r154825541
// ultimate solution might be exact types, but it's still an open issue
// - https://github.com/microsoft/TypeScript/issues/12936
// [extra]
// ppl had been trying to implement XOR types before, but has been considered a bad idea
// - https://github.com/graycoreio/daffodil/pull/1159
