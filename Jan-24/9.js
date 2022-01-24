// Create a Program with a Promise. : Creating a promise: the
// Promise constructor

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("hello world!"), 2000);
});

promise.then((value) => console.log(value)).then(() => console.log("...."));
