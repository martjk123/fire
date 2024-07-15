import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://test-order-6a8e3-default-rtdb.europe-west1.firebasedatabase.app"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const foodsDB = ref(database,"foods");

let add = document.querySelector("#add");
let input = document.querySelector("#input");
let shoppingListEl = document.querySelector("#shopping-list");



add.addEventListener("click",()=>{
let inputValue = input.value;

push(foodsDB,inputValue);
alert("Added to data base");

addList(inputValue);

resetval();
});

const resetval=()=>{
    input.value = "";
};

const addList=(itemValue)=>{
shoppingListEl.innerHTML = `<li>${itemValue}</li>`;
};