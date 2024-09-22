// const foo = () => {
//   console.log(this);
// };
// foo();

// function foo() {
//   console.log(this);
// };
// foo();

const obj = {
  get1: () => {
    return this;
  },
  get2: function () {
    return this;
  },
  title: "mahdi alaee",
};

console.log("arrow", obj.get1());

console.log("normal", obj.get2());
