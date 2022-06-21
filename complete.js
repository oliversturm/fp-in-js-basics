// This is an old-fashioned function

function add(x, y) {
  return x + y;
}

console.log(add(5, 7));

// Alternatively, a lambda - direct return conveys the idea
// of not having side-effects.

const add_ = (x, y) => x + y;

// Using old-fashioned functions, we can construct curried signatures
// Note the closure!

function addCurried(x) {
  return function (y) {
    return x + y;
  };
}

console.log(addCurried(5)(7));

// In lambda format this is nice and concise

const addCurried_ = x => y => x + y;

// The point: we can now construct new functions from old ones using
// partial application.
// add5 is a "variant" of the original add - a bit more specific, but a new
// function in any case.

const add5 = addCurried_(5);

console.log(add5(11));

// helpers are possible for currying or directly for partial application
// just a very simple one as an example here

const partial =
  f =>
  v =>
  (...args) =>
    f(v, ...args);

const partialAdd11 = partial(add)(11);

console.log(partialAdd11(31));

const square = x => x * x;
const mult = x => y => x * y;
const mult7 = mult(7);

// Composition: combine two function calls in a different way

const compose = f => g => x => g(f(x));

const add5Mult7 = compose(add5)(mult7);

console.log(add5Mult7(1));

// These two techniques are at the core of "function construction"
