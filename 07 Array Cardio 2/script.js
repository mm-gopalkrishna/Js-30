const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

//01. Is atleast one person above 19

const isAdult = people.some(
  (person) => new Date().getFullYear() - person.year > 19
);

console.log(`Is atleast one adult in list: ${isAdult}`);

//02. Is every person above 19

const isAllAdults = people.every(
  (person) => new Date().getFullYear() - person.year > 19
);

console.log(`Is list having all adults: ${isAllAdults}`);

//03. find the comment with the ID of 823423

const comment = comments.find((eachComment) => {
  if (eachComment.id === 823423) {
    return eachComment;
  }
});

console.log(`Comment corresoponding to id is: ${comment.text}`);

//04. delete the comment with the ID of 823423

const indexOfComment = comments.findIndex((item) => item.id === 823423);
const filteredComments = [...comments];

console.log(`List of comments after deleting the id: ${filteredComments}`);
