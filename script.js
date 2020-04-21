//koristim ovo kao json file za ispis user komentara
const jsonUsers = '[{ "id":"1", "name":"Carrie Gordon", "city":"Novi Sad", "image":"images/user-image.png", "comment":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati enim nihil voluptas quibusdam laudantium, velit, neque porro pariatur totam id, quas voluptatum iure temporibus fugit recusandae quo harum possimus cum!"},{  "id":"2", "name":"Carrie Boss", "city":"Compton", "image":"images/user-image-boss.png", "comment":"I have never expected this to be so awesome! This is by far the best cooking site in the wild and it rly makes me feel like a pro in the kitchen! Wish you many years of succes! Keep up the good work boiis and happy cooking!"},{  "id":"3", "name":"Carrie Hatter", "city":"Belgrade", "image":"images/user-image-haton.png", "comment":"Made this to my friends, and everyone was blowwn away by the awesomeness! Velis laudantium, velit, neque porro pariatur totam id, quas voluptatum iure temporibus fugit recusandae quo harum possimus cum!"}]';

let users = JSON.parse(jsonUsers);
console.log(users);

let userBoard = document.querySelector(".user_div");
let leftArrow = document.querySelector(".left_arrow_div");
let rightArrow = document.querySelector(".right_arrow_div");

let userId = 1;
let maxClicks = 3;


//kcarousel 
let karuselContainer = document.querySelector(".karusel_container");
let karusel = document.querySelector(".karusel");

function createKaruselUser(user) {
    let komentar = `
    <div class="left_user_div">
        <div class="user_img_div">
            <img src="${user.image}">
        </div>
        <div class="user_info_div">
            <h3>${user.name}</h3>
            <p>${user.city}, serbia</p> 
        </div>
    </div>
    <div class="right_user_div">
        <p>${user.comment}</p>
    </div>
    `;

    let karuselDiv = document.createElement("div");
    karuselDiv.innerHTML = komentar;
    karuselDiv.classList.add("user_div");

    karusel.appendChild(karuselDiv);
    console.log(karuselDiv)
}

createKaruselUser(users[1]);
createKaruselUser(users[2]);
//karusel end


//ove dve fje ispod povecavaju i smanjuju id na klik strelice
function increaseId() {
    userId ++;
    if (userId == maxClicks) {
        rightArrow.style.pointerEvents = "none";
    }
    if(userId > 1) {
        leftArrow.style.pointerEvents = "auto"; 
        karusel.style.transform += "translate(-33.3%)"
    }
}
function decreaseId() {
    karusel.style.transform += "translate(33.3%)"
    if (userId < 2) {
        leftArrow.style.pointerEvents = "none"; 
    } else {
        userId --; 
        rightArrow.style.pointerEvents = "auto";
        if(userId == 1) {
            leftArrow.style.pointerEvents = "none";
        }
    } 
}

leftArrow.addEventListener("click", decreaseId);
rightArrow.addEventListener("click", increaseId);
leftArrow.style.pointerEvents = "none"; //da bi leva strelica bila deaktivirana po defaultu

//navbar - search field animation
let navItems = document.getElementsByClassName("nav_items");
let searchIcon = document.getElementById("nav_search");
let inputSearch = document.getElementById("searchInput");
let menuIcon = document.querySelector(".menu_icon");
let navList = document.querySelector(".nav_list");

function hideNavItems() {
    for (let i = 0; i < navItems.length; i++) {
         navItems[i].style.visibility = "hidden";
    } 
    inputSearch.style.width = "200px";
    inputSearch.focus()
}

function showNavItems() {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].style.visibility = "visible";
    } 
    inputSearch.style.width = "0";
}
 //ova fja toggluje meni on/off
function showMenu() {
    if (navList.style.display != "") {
        navList.style.display = ""; 
    } else if (navList.style.display === "") {
        navList.style.display = "block";  
    }  
}

searchIcon.addEventListener("mouseover", hideNavItems);
searchIcon.addEventListener("mouseout", showNavItems);

//offer board html ispis
let offerBoard = document.querySelector(".offer_levi_div");

let offerBoardBreakfast = document.querySelector(".offer_levi_div").innerHTML;
let offerBoardLunch = `
<h1>Our best Lunch recipes</h1>
<div>
    <p>Lunch is the meal of the King; choose from grassfed beef, chicken, or horse meat, paired with our own grown organic vegetables.</p>
    <p>Feed your inner King with these lunch recipes. Whether it's something savory or a little sweet, we've got you covered with this nourishing round up.</p>
</div>
<p class="offer_button"><a href="#recipes">Go to recipes</a></p>`

let offerBoardDinner = `
<h1>Our best Dinner recipes</h1>
<div>
    <p>Discover dinner recipes in almost every category imaginable. You can choose from chicken recipes, casserole recipes, veggie side dishes, salads and oh-so-many more delectable dinner recipes.</p>
    <p>Take the opportunity to expand your repertoire with this collection of great dinner recipes, from fast and simple to Healthy Living, entertaining ideas or cheesy ccomfort foods. No matter which dinner recipes you are searching for</p>
</div>
<p class="offer_button"><a href="#recipes">Go to recipes</a></p>`

function writeOffer(id) {
    if (id === "breakfast") {
        offerBoard.innerHTML = offerBoardBreakfast;
    } else if (id === "lunch") {
        offerBoard.innerHTML = offerBoardLunch;
    } else if (id === "dinner") {
        offerBoard.innerHTML = offerBoardDinner;
    }
}

//offer section - add active tab
let meals = document.querySelectorAll(".meals");

function addClass(meal) {
    for (let i in meals) {
        if (meals[i].id === meal.id) {
            meals[i].classList.add("active_tab");
            writeOffer(meal.id);
        } else {
            meals[i].classList?.remove("active_tab");
        }
    }
}
// inicijalno stavlja klasu na breakfast da bi stranica onload prikazivala defaultno stanje
breakfast.classList.add("active_tab");

