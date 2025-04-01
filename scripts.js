let storyContainer = document.getElementById("story");
let buttonContainer = document.getElementById("buttons");
let imageContainer = document.getElementById("image-container");
let storyImage = document.getElementById("story-image");

let history = ["intro"];

const story = {
    intro : {
        text : "Where do you go?",
        choices : [
            ["Barb", "barb1"],
            ["Gym", "gym1"],
            ["Costco", "cost1"]
        ],
        image : "pics/story.jpg" // Set image related to this page
    },
    barb1 : {
        text : "You decide to go to the barbershop, which hair cut do you get?",
        choices : [
            ["Low Taper Fade", "barb2"],
            ["Bald", "page3t"],
            ["Dreads", "page4t"]
        ],
        image : "pics/barber.jpg" // Set image related to this page
    },
    barb2 : {
        text : "YOU GO TO JAIL. Who do you accosiate with?",
        choices : [
            ["Juggers", "barb3J"],
            ["Gamblers", "barb4"]
        ],
        image : "pics/jail.jpg" // Set image related to this page
    },
    barb3J : {
        text : "You Join the Juggers. What do you do now?",
        choices : [
            ["Mog thier leader", "barbj1"],
            ["Assimilate", "barbj2"]
        ],
        image : "pics/image_3.jpg" // Set image related to this page
    },
    barbj1 : {
        text : "you DIE! HAHAHHA",
        choices : [
            ["gg", "end1"]
        ],
        image : "pics/ultrakill-death.gif" // Set image related to this page
    },
    barbj2 : {
        text : "You decide to assimliate. They agree to take you in. but they have a challenge for you. You must gamble youre lungs. Call it.",
        choices : [
            ["Heads", "barbh"],
            ["Tails", "barbh"]
        ],
        image : "pics/figure.jpg" // Set image related to this page
    },
    barbh : {
        text : "You win! Now you have 134 pairs of lungs! and now that you are the sole member of the rival gang, the Juggers, they are going to kill you! What do you do?",
        choices : [
            ["Fight them all", "barbf"],
            ["Try to escape", "barbe"]
        ],
        image : "pics/scared.jpg" // Set image related to this page
    },
    barbe : {
        text : "You manage to evade all the members of the juggers and escape the prison on the brawl that ensued. You hitchhike back to the city",
        choices : [
            ["", ""],
            ["", ""]
        ],
        image : "pics/phew.jpg"// Set image related to this page
    },
    barbf : {
        text : "You manage to evade all the members of the juggers and escape the prison on the brawl that ensued. You hitchhike back to the city",
        choices : [
            ["", ""],
            ["", ""]
        ],
        image : "pics/phew.jpg" // Set image related to this page
    },
    end1 : {
        text : "The end!",
        choices : [
            ["", ""]
        ],
        image : "pics/end.jpg" // Set image related to this page
    },
}

function makeButton(btnText, choice){
    let button = document.createElement("button");

    button.innerHTML = btnText;

    buttonContainer.appendChild(button);

    button.addEventListener ("click", function() {
        history.push(choice);
        showStory();
    });
}

function buildStory(text) {
    let storyItem = document.createElement("p");

    storyItem.innerText = text;

    storyContainer.appendChild(storyItem);
}

function showStory(){
    let currentPage = history[history.length - 1]; // set currentPage to last index of history array.

    storyContainer.innerHTML = ""; // reset html
    buttonContainer.innerHTML = ""; // reset buttons
    imageContainer.style.display = "none"; // hide image container when story is reset
    
    for(let page of history){ // build story text from items in history array
        buildStory(story[page].text);
    }
    
    for(let choice of story[currentPage].choices){ // build buttons from choices property of most recent story choice
        makeButton(choice[0], choice[1])
    }

    // Display image based on current page if available
    if(story[currentPage].image) {
        storyImage.src = story[currentPage].image;
        storyImage.style.display = "block"; // show the image
        imageContainer.style.display = "block"; // ensure image container is shown
    }
}

showStory();


