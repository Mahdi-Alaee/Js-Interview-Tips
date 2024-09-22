const obj = {
  id: 1,
  name: "mahdi",
  age: 18,
};

//! the same functionality
Object.freeze(obj);
// Object.seal(obj);

delete obj.age;
obj.score = 20;

console.log(obj);
