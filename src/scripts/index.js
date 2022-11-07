// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/
import recipes from "./data.js";

// \/ All of your javascript should go here \/
let recipesObj = JSON.parse(recipes);
// console.log(recipesObj);

function createCard(obj) {
  let emptyCard = document.createElement("div");
  emptyCard.classList.add("card");
  let pic = document.createElement("img");
  pic.src = obj.image;
  emptyCard.appendChild(pic);
  let head = document.createElement("h3");
  head.innerText = obj.title;
  emptyCard.appendChild(head);
  let author = document.createElement("p");
  author.innerHTML = `${obj.author} <hr> ingredients: ${obj.ingredients.join(
    ", "
  )}`;
  emptyCard.appendChild(author);

  return emptyCard;
}

let cakes = document.getElementById("cakes");
for (let cake of recipesObj.cakes) {
  cakes.appendChild(createCard(cake));
}
let biscuits = document.getElementById("biscuits");
for (let cookie of recipesObj.biscuits) {
  biscuits.appendChild(createCard(cookie));
}
let bread = document.getElementById("bread");
for (let brot of recipesObj.bread) {
  bread.appendChild(createCard(brot));
}
