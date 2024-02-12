const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "pogostick",
];

// 1. Filter the list of inventors for those who were born in the 1500's

const inventorsBornIn = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);

console.log("01. Inventors born in the 1500's");
console.table(inventors);

//2. Give us an array of the inventor first and last names

const inventerFullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);

console.log("02. Inventors first name and last name");
console.log(inventerFullNames);

// 3. Sort the inventors by birthdate, oldest to youngest

const oldestToYoungest = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

console.log("03. Oldest to youngest inventors");
console.table(oldestToYoungest);

//4. How many years did all the inventors live?

let totalYears = 0;
inventors.forEach((inventor) => {
  const inventorLife = inventor.passed - inventor.year;
  return (totalYears += inventorLife);
});

console.log("04. Inventors Total Life");
console.log(totalYears);

// 5. Sort the inventors by years lived

const inventorsLifeSpan = inventors.sort((a, b) => {
  const aLifeSpan = a.passed - a.year;
  const bLifeSpan = b.passed - b.year;
  return aLifeSpan > bLifeSpan ? -1 : 1;
});

console.log("05. Sorted Inventors based on  individual life span");
console.table(inventorsLifeSpan);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// const boulevardsInParis = document.querySelector(".mw-category");
// const links = boulevardsInParis.querySelectorAll("a");
// const arrayOfLinks = Array.from(links);

// const names = arrayOfLinks.map((link) => link.textContent);
// const filteredNames = names.filter((name) => name.includes("de"));

// console.log(filteredNames);

// //7. Sort the people alphabetically by last name
const peopleNames = people.map((person) => person.split(", "));
const sortedNames = peopleNames.sort((a, b) => (a[0] > b[0] ? 1 : -1));

console.log("Peoples Names");
console.log(sortedNames);

//9. Sum up the instances of each of these

const instances = data.reduce((accum, value) => {
  if (!accum[value]) {
    accum[value] = 0;
  }
  accum[value] = accum[value] + 1;
  return accum;
}, {});

console.log(instances);
