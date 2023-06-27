const { produce, freeze } = require('immer');

// This is a source object. We don't want to change it in-place, so
// we freeze it right away.
const oli = freeze({ name: 'Oli', age: 23, list: [] });

// If we change the object directly, the change doesn't stick.
oli.age = 64;
console.log(oli);

// Instead of modifying the object directly, we produce
// a new copy while applying some changes
const agedOli = produce(oli, draft => {
  draft.age = 42;
  // draft.list.push(100);
  // return { ...oli, age: 42 };
});

// Now the new object has the new value...
console.log(agedOli);
// ... while the old one still has the old value
console.log(oli);
