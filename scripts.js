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
            ["Bald", "bald1"],
            ["Dreads", "page4t"]
        ],
        image: "pics/barber.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barb2: {
        text: "YOU GO TO JAIL. Who do you associate with?",
        choices: [
            ["Gamblers", "barb3J"],
            ["Juggers", "barb4"]
        ],
        image: "pics/jail.jpg",
        valueRizz: 0,
        valueAura: 0
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
    bald1: {
        text: "FUCK YOU!",
        choices: [
            ["DIE", "end1"],
        ],
        image: "pics/wold.jpg",
        valueRizz: -1000,
        valueAura: -1000
    },
    barb4: {
        text: "You go to the juggers. What do you plan to do?",
        choices: [
            ["Assimilate", "barbjug2"],
            ["Mog thier leader", "barbjug3"]
        ],
        image: "pics/.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    barbjug2: {
        text: "You get rejected! You just gonna let that happen?",
        choices: [
            ["hell naw", "barbjug3"],
        ],
        image: "pics/.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    barbjug3: {
        text: "You mog thier leader and become king jugger. What do you do first as thier leader?",
        choices: [
            ["Jug the prison", "prisonjug"],
            ["Live out the rest of your days doing that you love", "end1"] //change
        ],
        image: "pics/.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    prisonjug: {
        text: "You decide to jug the prison and all your goons start laying seige to the prison. Who is your first target?",
        choices: [
            ["Warden", "prisonjug1"],
            ["Gamblers", "gangshyt"]
        ],
        image: "pics/.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    prisonjug1: {
        text: "You attempt to take out the warden!",//qte but you fail no matter what and when you do you just escape
        choices: [
        ],
        image: "pics/.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    gangshyt: {
        text: "You decide take on the rival gang. You wage war on the gamblers.", //qtes 
        choices: [
            ["ight", "aftermath"]
        ],
        image: "pics/.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    aftermath: {
        text: "After winning the war, you indoctrinate all the gamblers into your ranks of goons. Do you escap with sheer numbers or live out the rest of your days as top dog in this prison?", 
        choices: [
            ["Jug", "end1"], //change
            ["escape", "end1"]
        ],
        image: "pics/.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    end1: {
        text: "The end!",
        choices: [
            ["k", "intro"] // Option to restart the game from the beginning
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

    // Check if we are at the end of the story (end1)
    if (currentPage === "end1") {
        // Reset the story and state for a fresh start
        state.valueRizz = 0;
        state.valueAura = 0;
        history = ["intro"]; // Restart the history array

        // Clear any accumulated content in storyContainer
        storyContainer.innerHTML = "";
        buttonContainer.innerHTML = "";
        imageContainer.style.display = "none"; // Hide the image container as well

        // Display the ending text and restart button
        buildStory("The end! Want to play again?");
        makeButton("k", "intro");

        return; // Stop further execution of the showStory function
    }

    // Build the story text for each page in the history
    for (let page of history) {
        buildStory(story[page].text);
    }

    // Build buttons based on the current page's choices
    for (let choice of story[currentPage].choices) {
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
