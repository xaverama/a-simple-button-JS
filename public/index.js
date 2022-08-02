


// Reactivity & State

let hungryPanda = "🐼";

let food = "";

let bamboo = "🎋";

let pandaCage = hungryPanda + food;


function throwSomeFoodIntoTheCage() {
    food = food + bamboo;
}

const feedBtn = document.getElementById('feedBtn')
feedBtn.addEventListener('click', () => {
    throwSomeFoodIntoTheCage()
    console.log("this is our hungry panda", hungryPanda )
    console.log("this is our food pile", food )
    pandaCage = hungryPanda + food;
    console.log("this is our panda cage", pandaCage)
})
