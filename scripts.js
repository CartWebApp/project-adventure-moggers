let storyContainer = document.getElementById("story");
let buttonContainer = document.getElementById("buttons");
let imageContainer = document.getElementById("image-container");
let storyImage = document.getElementById("story-image");

let history = ["intro"];

// State object to track accumulated values for Rizz and Aura
let state = {
    valueRizz: 0,
    valueAura: 0
};

const story = {
    intro: {
        text: "Where do you go?", // Story text
        choices: [
            ["Barb", "barb1"], // x = button description, y = next page
            ["Gym", "gym1"],
            ["Costco", "cost1"]
        ],
        image: "pics/story.jpg", // set image related to the event
        valueRizz: 0, // ValueRizz for this page
        valueAura: 0 // ValueAura for this page
    },
    barb1: {
        text: "You decide to go to the barbershop, which hair cut do you get?",
        choices: [
            ["Low Taper Fade", "barb2"],
            ["Bald", "page3t"],
            ["Dreads", "page4t"]
        ],
        image: "pics/barber.jpg",
        valueRizz: 1000, // Set valueRizz here
        valueAura: 1000 // Set valueAura here
    },
    barb2: {
        text: "YOU GO TO JAIL. Who do you associate with?",
        choices: [
            ["Gamblers", "barb3J"],
            ["Juggers", "barb4"]
        ],
        image: "pics/jail.jpg",
        valueRizz: -200,
        valueAura: -200
    },
    barb3J: {
        text: "You Join the Gamblers. What do you do now?",
        choices: [
            ["Mog their leader", "barbj1"],
            ["Assimilate", "barbj2"]
        ],
        image: "pics/image_3.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    barbj1: {
        text: "you DIE! HAHAHHA",
        choices: [
            ["gg", "end1"]
        ],
        image: "pics/ultrakill-death.gif",
        valueRizz: 0,
        valueAura: 0
    },
    barbj2: {
        text: "You decide to assimilate. They agree to take you in. But they have a challenge for you. You must gamble your lungs. Call it.",
        choices: [
            ["Heads", "barbh"],
            ["Tails", "barbh"]
        ],
        image: "pics/figure.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    barbh: {
        text: "You win! Now you have 134 pairs of lungs! And now that you are the sole member of the rival gang, the Juggers, they are going to kill you! What do you do?",
        choices: [
            ["Fight them all", "barbf"],
            ["Try to escape", "barbe"]
        ],
        image: "pics/scared.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    barbe: {
        text: "You manage to mog the very walls of your cell, your creation of an escape gets the Juggers off your tail, and you hitchhike back to the city.",
        choices: [
            ["", ""],
            ["", ""]
        ],
        image: "pics/phew.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    barbf: {
        text: "You manage to evade all the members of the Juggers and escape the prison on the brawl that ensued. You hitchhike back to the city",
        choices: [
            ["", ""],
            ["", ""]
        ],
        image: "pics/phew.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    end1: {
        text: "The end!",
        choices: [
            ["", ""]
        ],
        image: "pics/end.jpg",
        valueRizz: 0,
        valueAura: 0
    }
};

function makeButton(btnText, choice) { // Makes a button for the choices
    let button = document.createElement("button");

    button.innerHTML = btnText;

    buttonContainer.appendChild(button);

    button.addEventListener("click", function () {
        history.push(choice);
        showStory();
    });
}

function buildStory(text) { // Builds the story text on the HTML page
    let storyItem = document.createElement("p"); // Creates necessary HTML elements

    storyItem.innerText = text;

    storyContainer.appendChild(storyItem);
}

function showStory() {
    let currentPage = history[history.length - 1]; // set currentPage to last index of history array.

    storyContainer.innerHTML = ""; // reset html
    buttonContainer.innerHTML = ""; // reset buttons
    imageContainer.style.display = "none"; // hide image container when story is reset
    
    for (let page of history) { // build story text from items in history array
        buildStory(story[page].text);
    }

    for (let choice of story[currentPage].choices) { // build buttons from choices property of most recent story choice
        makeButton(choice[0], choice[1]);
    }

    // Accumulate the current page's Rizz and Aura values
    state.valueRizz += story[currentPage].valueRizz;
    state.valueAura += story[currentPage].valueAura;

    // Log the accumulated values to the console
    console.log("Accumulated Value Rizz:", state.valueRizz);
    console.log("Accumulated Value Aura:", state.valueAura);

    // Display image based on current page if available
    if (story[currentPage].image) {
        storyImage.src = story[currentPage].image;
        storyImage.style.display = "block"; // show the image
        imageContainer.style.display = "block"; // ensure image container is shown
    }
}

showStory();
