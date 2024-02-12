const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

let headingEl = document.querySelector(".heading");

// 01 Regular console.log()

console.log("Hello World!");

// 02 Interpolated

console.log("%s's age is %s", "Ramu", "21");

// 03 Styled

console.log(
  "Increase %c font size and change %c color",
  "font-size: 30px",
  "color: red"
);

// 04 Warning

console.warn("Node modules missing");

// 05 Error

console.error("cannot reach the api you're requesting");

// 06 Info

console.info("Read documentation for more info");

// 07 Testing

console.assert(headingEl.classList.contains("head"), "No heading");

// 08 Viewing DOM Elements

console.log(headingEl);
console.dir(headingEl);

// 09 Clearing console

// console.clear();

// 10 Grouping

dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name} info`);
  console.log(`This Dog name is ${dog.name}`);
  console.log(`${dog.name} age is ${dog.age}`);
  console.groupEnd();
});

// 11 Counting

console.count("snikers");
console.count("forEach");
console.count("age");
console.count("forEach");
console.count("age");

//12 Timing

console.time("Fetching Time");

fetch("https://api.github.com/users/wesbos")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.timeEnd("Fetching Time");
  });
