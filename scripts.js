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
            ["Gym", "Gym"],
            ["Costco", "Costco"]
        ],
        image: "pics/story.jpg", // set image related to the event
        valueRizz: 0, // ValueRizz for this page
        valueAura: 0 // ValueAura for this page
    },
    barb1: {
        text: "You decide to go to the barbershop. There you meet your lifelong buddy, Johnny Bravo.",
        choices: [
            ["Epic!!", "barb1s"],
        ],
        image: "pics/barber.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barb1s: {
        text: `"Hey sport! Hows the wife?"`,
        choices: [
            ["She's just dandy Jack.", "barb1st"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barb1st: {
        text: `"Glad to hear that Jim. So what can i do for ya?"`,
        choices: [
            ["Wifey says i need a job. I gotta get spiffy and quick! Any recomendations?", "barb1sts"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barb1sts: {
        text: `"Do I? Hell yes i do brother. Heres what i got on the menu today fine fella. Take your pick!"`,
        choices: [
            ["Low Taper Fade", "barbtape"],
            ["Bald", "barbbald"],
            ["Dreads", "barbdreads"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbtape: {
        text: `"Ahh the low taper fade! excellent choice! Alright, just sit there and look pretty while i work my magic."`,
        choices: [
            ["Yes king", "barbtape1"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbtape1: {
        text: `After a few minutes of waiting, you get your haircut. You look like a million bucks!`,
        choices: [
            ["Fricken Sweet", "barbtape2"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbtape2: {
        text: `"Fricken sweet! You look like a million bucks! Now go get em tiger!"`,
        choices: [
            ["le epic", "barbtape3"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbtape3: {
        text: `You leave the barbershop filled with confidence. You are ready to take on the world! And this interview.`,
        choices: [
            ["RAAHHHHHH", "barbtape4"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
   
    barbtape4: {
        text: "You walk outside and get mistaken for wanted cirminal: Tyler ``fornie ``ninja```` Blevins and you are immediately sent to prison",
        choices: [
            ["bruh", "barb2w"]
        ],
        image: "pics/jail.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    barb2w: {
        text: "You arrive at prison. You need protection if you are to survive. Which gang do you join?",
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
            ["oh no", ""],
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
    barbbald: {
        text: `"Bald? Really? What ever you say boss."`,
        choices: [
        ["Yeah. Good boy.", "barbbald1"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbbald1: {
        text: `"Dont do that"`,
        choices: [
        ["Uh huh", "barbbald2"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbbald2: {
        text: `"Boom youre bald now. Happy?"`,
        choices: [
        ["Yeah!", "barbbald3"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbbald3: {
        text: `"Youre cooked"`,
        choices: [
        ["Sybau", "barbbald4"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbbald4: {
        text: `You leave the barbershop filled with confidence. You are ready to take on the world! And this interview.`,
        choices: [
        ["hell yeah!", "barbbald5"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbbald5: {
        text: `Youre wife tried to ft. Oh no`,
        choices: [
        ["oh no", "barbbald6"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbbald6: {
        text: `If you hang up, shell become susicous and just clal again. Theres no way out of this. You pick up`,
        choices: [
        ["fuck", "barbbald7"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbbald7: {
        text: `"Im Leaving you" is all she said`,
        choices: [
        ["...", "end1"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    end1: {
        text: "GG!",
        choices: [
            ["k", "intro"] // Option to restart the game from the beginning
        ],
        image: "pics/end.jpg",
        valueRizz: 0,
        valueAura: 0
    },

//Gym

Gym: {
    text: `"insert costco start"`,
    choices: [
    ["", ""],
    ],
    image: "pics/john.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

//Costco

Costco: {
    text: `"insert costco start"`,
    choices: [
    ["", ""],
    ],
    image: "pics/.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},
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

    storyContainer.innerHTML = ""; // Clear previous story text
    buttonContainer.innerHTML = ""; // reset buttons
    imageContainer.style.display = "none"; // hide image container when story is reset

    // Check if we are at the end of the story (end1)
    if (currentPage === "end1") {
        // Reset the story and state for a fresh start
        state.valueRizz = 0;
        state.valueAura = 0;
        history = ["intro"]; // Restart the history array
    }

    // Display only the current page's story text
    buildStory(story[currentPage].text);

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