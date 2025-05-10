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
            ["Barbershop", "barb1"], // x = button description, y = next page
            ["Gym", "Gym"],
            ["Costco", "Costco1"]
        ],
        image: "pics/story.jpg", // set image related to the event
        valueRizz: 0, // ValueRizz for this page
        valueAura: 0 // ValueAura for this page
    },
    barb1: {
        text: "You decide to go to the barbershop. There, you meet your lifelong buddy Johnny Bravo.",
        choices: [
            ["Epic!!!", "barb1s"],
        ],
        image: "pics/mikushop.jpg",
        valueRizz: 10, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },
    barb1s: {
        text: `"Hey sport! How's the wife?"`,
        choices: [
            [`"She's just dandy, Jack."`, "barb1st"],
        ],
        image: "pics/john.jpg",
        valueRizz: 10, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },
    barb1st: {
        text: `"Glad to hear that Jim. So what can I do for ya?"`,
        choices: [
            [`"Wifey says I need a job. I gotta get spiffy and quick! Any recomendations?"`, "barb1sts"],
        ],
        image: "pics/john.jpg",
        valueRizz: 10, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    barb1sts: {
        text: `"Do I? Hell yes I do brother. Heres what I got on the menu today fine fella. Take your pick!"`,
        choices: [
            ["Low Taper Fade", "barbtape"],
            ["Bald", "barbbald"],
            ["Dreads", "barbdreads"],
        ],
        image: "pics/john.jpg",
        valueRizz: 10, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },
    barbtape: {
        text: `"Ah the low taper fade! Excellent choice! Alright, just sit there and look pretty while I work my magic."`,
        choices: [
            [`"Yes king"`, "barbtape1"],
        ],
        image: "pics/john.jpg",
        valueRizz: 15, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },
    barbtape1: {
        text: `After a few minutes of waiting, your haircut is finished. You look like a million bucks!`,
        choices: [
            ["Frickin' Sweet", "barbtape2"],
        ],
        image: "pics/jimfade.png",
        valueRizz: 10, // Set valueRizz here
        valueAura: 20 // Set valueAura here
    },
    barbtape2: {
        text: `"Frickin' sweet! You look like a million bucks! Now go get em' tiger!"`,
        choices: [
            [`"Le Epic"`, "barbtape3"],
        ],
        image: "pics/jimfade.png",
        valueRizz: 10, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },
    barbtape3: {
        text: `You leave the barbershop filled with confidence. You're ready to take on the world! And this interview.`,
        choices: [
            ["RAAHHHHHH", "barbtape4"],
        ],
        image: "pics/barber.png",
        valueRizz: 10, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    barbtape4: {
        text: "But when you walk outside, you get mistaken for wanted cirminal: Tyler ``fornite`` ``ninja`` Blevins and you are immediately sent to prison.",
        choices: [
            ["Bruh", "barb2w"]
        ],
        image: "pics/jail.jpg",
        valueRizz: 10,
        valueAura: 100
    },
    barb2w: {
        text: "You arrive at prison. You need protection if you are to survive. Which gang do you join?",
        choices: [
            ["Gamblers", "barb3J"],
            ["Juggers", "barb4"]
        ],
        image: "pics/prison.jpg",
        valueRizz: 10,
        valueAura: 0
    },
    barb3J: {
        text: "You join the Gamblers. What do you do now?",
        choices: [
            ["Mog their leader", "mogleader"],
            ["Assimilate", "barbj2"]
        ],
        image: "pics/luigi-casino-new-super-mario-bros-ds.png",
        valueRizz: 10,
        valueAura: 100
    },
    mogleader: {
        text: "You try to mog the king gambler but die instantly LOL!!!!",
        choices: [
            ["I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE I DON'T WANT TO DIE ", "end1"],
        ],
        image: "pics/loogie.png",
        valueRizz: -10025,
        valueAura: -10000
    },
    barbj2: {
        text: "You decide to assimilate. They agree to take you in, but they have a challenge for you. You must gamble your lungs.",
        choices: [
            ["MY LUNGS???", "barbh0"]
        ],
        image: "pics/luigi-casino-new-super-mario-bros-ds.png",
        valueRizz: 10,
        valueAura: 75
    },
    barbh0: {
        text: `"Call it, pretty boy."`,
        choices: [
            ["Heads", "barbh01"],
            ["Tails", "barbh01"]
        ],
        image: "pics/luigi-casino-new-super-mario-bros-ds.png",
        valueRizz: 10,
        valueAura: 0
    },
    barbh01: {
        text: "Mama Mia.",
        choices: [
            ["ez", "barbh"]
        ],
        image: "pics/luigi-casino-new-super-mario-bros-ds.png",
        valueRizz: 200,
        valueAura: 500
    },
    barbh: {
        text: "You win! Now you have 134 pairs of lungs! Now that you are the sole member of the rival gang, the Juggers, they are coming to kill you! What do you do?",
        choices: [
            ["Fight them all", "barbf"],
            ["Try to escape", "barbe"]
        ],
        image: "pics/jimcry.png",
        valueRizz: 4000,
        valueAura: 1000
    },
    barbe: {
        text: "You manage to mog the very walls of your cell!",
        choices: [
            ["That makes no sense", "barbe1"],
        ],
        image: "pics/pri.png",
        valueRizz: 10,
        valueAura: 300
    },
    barbe1: {
        text: "Your creation of an escape got the Juggers off your tail. You run away and hitchhike back to the city.",
        choices: [
            [`"Aw yeah!"`, "End1Start"],
        ],
        image: "pics/pri.png",
        valueRizz: 10,
        valueAura: 0
    },
    barbf: {
        text: "You manage to evade all the members of the Juggers and escape the prison in the brawl that ensued. You hitchhike back to the city",
        choices: [
            [`"Aw yeah!"`, "End1Start"],
        ],
        image: "pics/pri.png",
        valueRizz: 10,
        valueAura: 200
    },
    barb4: {
        text: "You go to the Juggers. What do you plan to do?",
        choices: [
            ["Assimilate", "barbjug2"],
            ["Mog thier leader", "barbjug3"]
        ],
        image: "pics/engi.jpg",
        valueRizz: 10,
        valueAura: 100
    },
    barbjug2: {
        text: "You get rejected! You just gonna let that happen?",
        choices: [
            ["Hell naw", "barbjug3"],
        ],
        image: "pics/engi.jpg",
        valueRizz: 10,
        valueAura: -500
    },
    barbjug3: {
        text: "You mog thier leader and become the king Jugger. What do you do first as thier leader?",
        choices: [
            ["Jug the prison", "prisonjug"],
            ["Live out the rest of your days doing that you love", "end1"] //change
        ],
        image: "pics/jimgi.png",
        valueRizz: 100,
        valueAura: 1000
    },
    prisonjug: {
        text: "You decide to jug the prison and all your goons start laying seige. Who's your first target?",
        choices: [
            ["Warden", "prisonjug1"],
            ["Gamblers", "gangshyt"]
        ],
        image: "pics/jimgi.png",
        valueRizz: 10,
        valueAura: 2000
    },
    prisonjug1: {
        text: "You find the warden and try to take him out.",//qte but you fail no matter what and when you do you just escape
        choices: [
            ["Oh", "prisonjug2"],
        ],
        image: "pics/grug.jpg",
        valueRizz: 10,
        valueAura: 0
    },
    prisonjug2: {
        text: "Keyword: Try",//qte but you fail no matter what and when you do you just escape
        choices: [
            ["Oh no", "prisonjug3"],
        ],
        image: "pics/grug.jpg",
        valueRizz: 10,
        valueAura: 0
    },
    prisonjug3: {
        text: "You are failing.",//qte but you fail no matter what and when you do you just escape
        choices: [
            [" This aint good", "prisonjug4"],
        ],
        image: "pics/grug.jpg",
        valueRizz: 10,
        valueAura: -1000
    },
    prisonjug4: {
        text: "Badly.",//qte but you fail no matter what and when you do you just escape
        choices: [
            ["Oh well", "prisonjug5"],
        ],
        image: "pics/grug.jpg",
        valueRizz: 10,
        valueAura: -10
    },
    prisonjug5: {
        text: "Maybe it's time to bail.",//qte but you fail no matter what and when you do you just escape
        choices: [
            ["Yeah maybe", "prisonjug6"],
        ],
        image: "pics/grug.jpg",
        valueRizz: 10,
        valueAura: -5
    },
    prisonjug6: {
        text: "You sick your goons on the warden, and as hes tearing them apart you slip away outside the prison.",//qte but you fail no matter what and when you do you just escape
        choices: [
            [`"That was close"`, "barbe1"],
        ],
        image: "pics/GRUG.png",
        valueRizz: 10,
        valueAura: 0
    },
    gangshyt: {
        text: "You decide take on the rival gang. You wage war on the Gamblers.", //qtes 
        choices: [
            ["bring it on", "aftermath"]
        ],
        image: "pics/gamble.png",
        valueRizz: 10,
        valueAura: 50
    },
    gangshytqte: {
        text: "you win!.", //qtes 
        choices: [
            ["Ight", "aftermath"]
        ],
        image: "pics/.jpg",
        valueRizz: 10,
        valueAura: 50
    },
    aftermath: {
        text: "After winning the war, you indoctrinate all the Gamblers into your ranks of goons. Do you escap with sheer numbers or live out the rest of your days as top dog in this prison?",
        choices: [
            ["Jug", "jugending"],
            ["escape", "EndStart"]
        ],
        image: "pics/dog.gif",
        valueRizz: 0,
        valueAura: 100
    },
    jugending: {
        text: "You decide to jug the prison and all your goons start laying waste to the place, and in the ruckuss you make your escape and hitchhike back to the city.",
        choices: [
            ["Lit", "End1Start"],
        ],
        image: "pics/pri.png",
        valueRizz: 0,
        valueAura: 100
    },
    barbbald: {
        text: `"Bald? Really? Okayyy. What ever you say boss."`,
        choices: [
            [`"Yeah. Good boy."`, "barbbald1"],
        ],
        image: "pics/john.jpg",
        valueRizz: -100, // Set valueRizz here
        valueAura: -100 // Set valueAura here
    },
    barbbald1: {
        text: `"Don't do that"`,
        choices: [
            [`"I do what I want"`, "barbbald2"],
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 10 // Set valueAura here
    },
    barbbald2: {
        text: `"Boom you're bald now. Happy?"`,
        choices: [
            [`"Yeah!"`, "barbbald3"],
        ],
        image: "pics/jimbald.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },
    barbbald3: {
        text: `"You're cooked"`,
        choices: [
            [`"Sybau"`, "barbbald4"],
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura:-10 // Set valueAura here
    },
    barbbald4: {
        text: `You leave the barbershop filled with confidence. You are ready to take on the world! And this interview.`,
        choices: [
            ["hell yeah!", "barbbald5"],
        ],
        image: "pics/jimbald.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },
    barbbald5: {
        text: `Youre wife tries to ft. Oh no`,
        choices: [
            [`"oh no"`, "barbbald6"],
        ],
        image: "pics/jimbald.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: -10 // Set valueAura here
    },
    barbbald6: {
        text: `If you hang up, she'll become suspicous and just call again. There's no way out of this. You pick up`,
        choices: [
            [`"crap"`, "barbbald7"],
        ],
        image: "pics/jimbald.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: -100 // Set valueAura here
    },
    barbbald7: {
        text: `She gets a eyeful of your shimmering forehead`,
        choices: [
            ["...", "barbbald8"],
        ],
        image: "pics/jimbald.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: -1000 // Set valueAura here
    },
    barbbald8: {
        text: "...",
        choices: [
            ["...", "barbald81"],
        ],
        image: "pics/jimbald.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: -10000 // Set valueAura here
    },
    barbald81: {
        text: "...",
        choices: [
            ["...", "barbbald82"],
        ],
        image: "pics/jimbald.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: -100000 // Set valueAura here
    },
    barbbald82: {
        text: `"I'm Leaving you."`,
        choices: [
            [`"ok"`, "end1"],
        ],
        image: "pics/jimbald.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: -10000000 // Set valueAura here
    },
    end1: {
        text: "GG!",
        choices: [
            ["Restart", "intro"] // Option to restart the game from the beginning
        ],
        image: "pics/end.png",
        valueRizz: 0,
        valueAura: 0
    },

    barbdreads: {
        text: `"Dreads? okay I see you I fw it."`,
        choices: [
            [`"yurrr"`, "barbdreads1"],
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 500 // Set valueAura here
    },
    barbdreads1: {
        text: `"Dreads are pretty hot these days, luckily for you so am I. Im really good. At barbering."`,
        choices: [
            [`"ok"`, "barbdreads2"],
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },
    barbdreads2: {
        text: `"Check ts out."`,
        choices: [
            [`"ok"`, "barbdreads3"],
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },
    barbdreads3: {
        text: `"Viola!"`,
        choices: [
            [`"It's 'voila'"`, "barbdreads4"],
        ],
        image: "pics/jimdreads.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: 50 // Set valueAura here
    },
    barbdreads4: {
        text: `"I don't care. Say, where are you heading to in to show off these puppies?"`,
        choices: [
            [`"No clue buddy"`, "barbdreads5"],
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },
    barbdreads5: {
        text: `"I do! You should go to costco! Thats where all the babes- I mean jobs are nowadays."`,
        choices: [
            [`"Yeah, jobs..."`, "barbdreads6"],
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 10 // Set valueAura here
    },
    barbdreads6: {
        text: `"Alright well, you better get going then, they open soon and I bet you want to score some cred by being early."`,
        choices: [
            [`"Sounds good. Thanks vrodie pie"`, "barbdreads7"],
        ],
        image: "pics/jimdreads.png",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbdreads6: {
        text: `"Anytime."`,
        choices: [
            ["Go to Costco", "Costco1"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },

    //Gym

    Gym: {
        text: `You head to the gym, what do you want to do?`,
        choices: [
            ["Walk in", "Choice1"], ["Play on the monkey bars", "Choice2"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    Choice1: {
        text: `You forgot to scan in! The guy at the front desk is furious.`,
        choices: [
            ["Next", "Choice3"],
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    Choice2: {
        text: `An old man makes fun of you and tells you that monkey bars are for kids. :(`,
        choices: [
            ["Next", "Choice4"],
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    Choice3: {
        text: `The desk man is FURIOUS!! What will you do?`,
        choices: [
            ["Apologize and check in", "Choice5"], ["Insult him", "Choice6"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    Choice4: {
        text: `You are upset at the old man >:( What are you gonna do?`,
        choices: [
            ["Mog him", "Choice7"], ["Kill him", "Choice8"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    Choice5: {
        text: `He accepts your apology and now you have to decide what machine you want to use for your workout.`,
        choices: [
            ["Gain Giver 7800", "Choice9"], ["Muscle Manifester 10004", "Choice10"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    Choice6: {
        text: `He becomes even more furious and punches you in the face`,
        choices: [
            ["Cry", "end1"], ["Take it like a man and scan in", "Choice11"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    Choice7: {
        text: `You Mog him and he is upset and crying :(`,
        choices: [
        ["Leave", "gym2"], ["Stay there","gym3"]   //Figure out how to make it so it chooses one option or another depending on Aura value
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },

    Choice8: {
        text: `He kicks your butt and mogs you`,
        choices: [
            ["Game Over. GG's!! :)", "end1"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },

    Choice9: {
        text: `Which ingredients will you use for the gains?`,
        choices: [
            ["Benadryl", "Choice12"], ["Mystical container contents", "Choice12"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    Choice10: {
        text: `Which ingredients will you use for the gains?`,
        choices: [
            ["Meat Smoothie", "Choice12"], ["Vicodin", "Choice12"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    Choice11: {
        text: `You muscle through it because you're a beast. Which machine do you want to work out at?`,
        choices: [
            ["Gain Giver 7800", "Choice9"], ["Muscle Manifester 10004", "Choice10"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    Choice12: {
        text: `You do an intense workout and feel the gains!!!`,
        choices: [
            ["Next", "Choice13"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    Choice13: {
        text: `You finish working out and you notice a buff cosplaying dude working out.`,
        choices: [
            ["Approach him...", "gymM"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    gymM: {
        text: `You have found your mentor!!!`,
        choices: [
            ["Yippee!!!", "gymM2"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    workout: {
        text: `Decide what machine you want to use for your workout.`,
        choices: [
            ["Gain Giver 7800", "Choice9"], ["Muscle Manifester 10004", "Choice10"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    gym2: {
        text: `You leave and continue your workout with absolutely no remorse for the old man`,
        choices: [
            ["Go workout", "workout"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    gym3: {
        text: `You Stay there and laugh at him for crying, the cops notice a commotion and come over`,
        choices: [
            ["Stay and wait for the cops", "GymMc"], ["Run away","pathchng"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    gymMc: {
        text: `What all the ruckus?`,
        choices: [
        ["Nothin officer", "GymMc2"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },    

    gymMc2: {
        text: `"Oh ok" the cops leave and now you can get back to your workout`,
        choices: [
        ["Go back to your workout", "workout"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    pathchng: {
        text: `Where do you go?`,
        choices: [
        ["Barb", "barb1"] ["Costco","Costco1"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    gymM2: {
        text: `You notice how incredibly buff and shredded he is. You ask him if he can help you become like him!`,
        choices: [
        ["Ask him what his routine is to look like that", "gymM3"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    gymM3: {
        text: `He tells you that he can help you become like him, but first you need to prove yourself`,
        choices: [
        ["Ask him what it is you need to do?", "gymM4"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    gymM4: {
        text: `hmm... lemme think... I GOT IT! You need to... workout... LEGS!!!`,
        choices: [
        ["ruh roh", "gymM5"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    gymM5: {
        text: `You need to do legs today and once you finish, come back to me and I will help you become like me!`,
        choices: [
        ["erm.. ok dewd.", "gymM6"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    gymM6: {
        text: `You go over to the machines that you see the weirdos who do leg day at`,
        choices: [
        ["You pick out a machine", "gymM7"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    gymM7: {
        text: `You see it... towering over you... the LEGMASTER600!!!!!`,
        choices: [
        ["Approach the demon machine", "gymM8"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    gymM8: {
        text: `You get on the machine.. and do a GRUELING workout. You feel the pain. You need to perservere to pass your mentors trials!`,
        choices: [
        ["PUSHHH", "gymM9"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    gymM9: {
        text: `You complete the horrifying workout.`,
        choices: [
        ["Go back", "gym4M0"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    gym4M0: {
        text: `"You approach you mentor and tell him you've completed you training and ask if he can help you now"`,
        choices: [
        ["pls", "gym4M11"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    gym4M11: {
        text: `Sure... he tells you that he can help you`,
        choices: [
        ["Yay!!", "gymM12"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    gymM12: {
        text: `He tell you the secret of his gains is a balanced schedule, going to bed on time, getting up early, working out every day, and... GETTING. A. JOB!!!`,
        choices: [
        ["SIR YES SIR!", "End2Start"]
        ],
        image: "pics/john.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    //Costco

Costco1: {
    text: `You arrive at Costco. What do you want to do?`,
    choices: [
    ["Refill your gas", "Costco2"], ["Go in and buy a chicken bake", "Costco3"]
    ],
    image: "pics/costco.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco2: {
    text: `You go to the gas pump, what are you gonna do?`,
    choices: [
    ["Play with gasoline", "Costco4"], ["Light a smartie", "Costco5"], ["Pump gas", "Costco6"]
    ],
    image: "pics/gaspump.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco3: {
    text: `You go and buy the Chicken Bake. You are now the proud owner of a Chicken Bake. You fill your mouth with Chicken Bake. What do you rate it?`,
    choices: [
    ["1 BIG BOOM!!!", "Costco7"], ["5 BIG BOOMS!!!", "Costco8"]
    ],
    image: "pics/jimmbake.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco4: {
    text: `As you're flinging gasoline around, an old man walking by happens to be lighting a smartie, which ignite all of the gasoline that you've been playing with.`,
    choices: [
    ["You stand there aura farming nonchalantly as you're engulfed in the flames and explosions erupting around you.", "Costco9"],
    ],
    image: "pics/gasfight.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco5: {
    text: `An old man walking by notices your super epic and incredibly manly smartie, he begins to walk over. What are you gonna do?`,
    choices: [
    ["Smoke the smartie super nonchalantly and wait for the old man", "Costco10"],
    ],
    image: "pics/jimsmart.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco6: {
    text: `You pay for the gas and reach for the nozzle, but as you grab it and start to pump gas, your incredibly shredded arms are too powerful and you absolutely obliterate the gas nozzle.`,
    choices: [
    ["whoops :|", "Costco11"],
    ],
    image: "pics/jimbreak.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco7: {
    text: `You rate the Chicken Bake 1 BIG BOOM!!!, the cashier who sold you the chicken bake stares at you with a blazing rage behind his eyes. He lunges over the counter and attack you!`,
    choices: [
    ["Fight back", "Costco12"], ["Run away", "Costco13"],
    ],
    image: "pics/speed-attack.gif",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco8: {
    text: `You rate the Chicken Bake 5 BIG BOOMS!!!, the cashier is delighted at your review and gives you a free Chicken Bake!`,
    choices: [
    ["Yippee!!!!! Thanks!", "Costco14"],
    ],
    image: "pics/speedworker.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco9: {
    text: `You walk out of the fire slowly and confidently, your aura is radiating making everybody who witnessed the explosing awestruck, as you're walking away, one final massive explosion happens and you DON'T turn back.`,
    choices: [
    ["look over and notice a man who stands out from the crowd looking at you... almost like he's proud of you.", "Costco15"],
    ],
    image: "pics/jimfye.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco10: {
    text: `The old man approached you and compliments you and your smartie and says you look super friggin epic with a smartie`,
    choices: [
    ["Thank him", "Costco16"],
    ],
    image: "pics/jimtor.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco11: {
    text: `You're standing there dumbfounded and awestruck at the sheer power of your own arms, an old man notices your strength and approaches you.`,
    choices: [
    ["look over, notice the man, and greet him", "Costco17"],
    ],
    image: "pics/mentsaw.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco12: {
    text: `You decide to fight back against the cashier, you throw a punch at him and he dodges it, but you manage to hit him with a sick combo and he falls to the ground. He's dead. You feel like a god.`,
    choices: [
    ["Attempt to flee the scene", "Costco18"],
    ],
    image: "pics/speded.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco13: {
    text: `You run out of Costco. Where do you go?`,
    choices: [
    ["Go to the barb", "barb1"], ["Go to the Gym", "Gym"],
    ],
    image: "pics/jimrun.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco14: {
    text: `As you celebrate your free bake, an old man notices that you just gave out 5 BIG BOOMS!!! He walks over and comes to see what the commotion is`,
    choices: [
    ["Await his arrival", "Costco19"],
    ],
    image: "pics/jimtorcostco.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco15: {
    text: `The old man approaches you and compliments your fricken epicness. It was so fricken cool how you walked out fo the fire and didnt look back and the man wants to compliment you on it.`,
    choices: [
    ["Reach out and shake the mans hand", "Costco20"],
    ],
    image: "pics/fyetor.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco16: {
    text: `You thank the man and shake his hand, his grip strength is incredible.`,
    choices: [
    ["Compliment the incredible grip of the handshake", "Costco21"],
    ],
    image: "pics/jimshake.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco17: {
    text: `You greet the man and he compliments your power, he is suprised that you destroyed the pump by just grabbing it and offers to train you in his ways`,
    choices: [
    ["Gratefully accept his offer", "CostcoM"], //come back and change this to whichever option is the "meet your mentor" option
    ],
    image: "pics/mentsaw.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco18: {
    text: `While trying to run out of the store, you're stopped by a wall of policemen all armed and ready. They will do whatever it takes to stop you.`,
    choices: [
    ["Comply", "barb2w"], ["Yell for help", "CostcoM"]
    ],
    image: "pics/popo.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco19: {
    text: `The old man, who was just buying adult diapers 5 minutes ago, comes over to greet you and wants you to show him your totally epic 5 BOOMS Chicken Bake.`,
    choices: [
    ["Show him the Chicken Bake you won and offer him a taste", "Costco22"],
    ],
    image: "pics/jimtorcostco.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco20: {
    text: `As you're shaking the mans hand you are appalled at his incredible grip strength.`,
    choices: [
    ["Compliment his grip strength", "Costco23"],
    ],
    image: "pics/jimshake.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco21: {
    text: `You compliment the mans incredible grip`,
    choices: [
    ["Ask to learn his ways and get stronger from his teachings", "CostcoM"],
    ],
    image: "pics/jimshake.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco22: {
    text: `The man take you up on your offer and LOVES the Chicken Bake, he shakes your hand and you can feel the amount of POWER in his grip`,
    choices: [
    ["Ask him to teach you his ways to get stronger", "CostcoM"],
    ],
    image: "pics/baketor.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco23: {
    text: `You are enthralled by his grip strength and compliment him, he offers to teach you how to get stronger!`,
    choices: [
    ["Accept his offer gratefully accept his offer to train you", "CostcoM"],
    ],
    image: "pics/jimshake.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

CostcoM: {
    text: `You have begun to train under your new incredible adult diaper wearing shredded old man mentor!!!`,
    choices: [
    ["Yahooo!!!", "CostcoM1"],
    ],
    image: "pics/jimhap.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

CostcoM1: {
    text: `Now that you have a teacher you wonder what exactly the first steps at becoming like him are?`,
    choices: [
    ["Ask him exactly what you have to do first to become a better version of yourself", "CostcoM2"],
    ],
    image: "pics/jimhap.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

CostcoM2: {
    text: `The old man thinks about what you can do for a moment. He ultimately decides to give you 2 options, you can either overcome your fear of trying new things by eating the new double chunk chocolate cookie, OR you can suck up your pride and apologize to the employee`,
    choices: [
    ["You cant sacrifice your pride and you decide to try the cookie", "CostcoM3"],
    ],
    image: "pics/jimcourt.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

CostcoM3: {
    text: `You go to buy the cookie`,
    choices: [
    ["Purchase cookie", "CostcoM4"],
    ],
    image: "pics/jimcookie.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

CostcoM4: {
    text: `You go back to the old man and you show him that you have acquired the cookie!`,
    choices: [
    ["Eat it", "CostcoM5"],
    ],
    image: "pics/jimcookie.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

CostcoM5: {
    text: `You devour the cookie and you feel the power of the cookie coursing through your veins`,
    choices: [
    ["It wasn't power... You now desperatly need to use the restroom", "CostcoM6"],
    ],
    image: "pics/jimcookie.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

CostcoM6: {
    text: `You must make a choice.`,
    choices: [
    ["Sacrifice your pride and embarass yourself by sprinting to the restroom", "CostcoM7"], ["Thug it out and stand there", "CostcoPoo"],
    ],
    image: "pics/jimmybeyond.png",
    valueRizz: 0, // Set valueRizz here
    valueAura: 0 // Set valueAura here
},

CostcoM7: {
    text: `You embarass yourself by sprinting to the restroom with farts slipping out of your crack on the way`,
    choices: [
    ["Open one of the stall doors to be met with an unexpected guest!", "CostcoW"],
    ],
    image: "pics/jimcry.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

CostcoPoo: {
    text: `You're standing there thuggin it out when you feel it. You know it's too late you you just gotta let it happen.`,
    choices: [
    ["...", "CostcoA"],
    ],
    image: "pics/JimmyCostco.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

CostcoA: {
    text: `...`,
    choices: [
    ["...", "CostcoB"],
    ],
    image: "pics/JimmySoiled.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

CostcoB: {
    text: `You go back to your mentor... dookie stains visible for everyone to see...`,
    choices: [
    ["...", "CostcoC"],
    ],
    image: "pics/poojim.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

CostcoW: {
    text: `Waaahh I'm taking a poo!!!`,
    choices: [
    ["Close the door", "CostcoS"], ["Leave the door open and watch", "CostcoCreep"],
    ],
    image: "pics/Waaaa.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

CostcoS: {
    text: `You promptly close the door and go to the next stall...`,
    choices: [
    ["Open the door to the stall, sit down, brace.", "CostcoG"],
    ],
    image: "pics/jimstall.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

CostcoCreep: {
    text: `You intently stare at the man on the toilet`,
    choices: [
    ["hey bud-", "end1"],
    ],
    image: "pics/warioyum.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

CostcoC: {
    text: `Your mentor looks at you with disgust... He says no words but - "Get a job you friggin loser..."`,
    choices: [
    ["ok... I guess im off...", "End3Start"],
    ],
    image: "pics/poojim.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

CostcoG: {
text: `You battle against the toilet cookie still in mouth. VALIANTLY! until... it's over.`,
    choices: [
    ["Go back to your mentor", "CostcoB"],
    ],
    image: "pics/jimtoilet.png",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

    // Ending1

    End1Start: {
        text: `"You arrive at the interview."`,
        choices: [
            [`"I have arrived at the interview. Time to go inside."`, "End1"],
        ],
        image: "pics/maxresdefault.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    End1: {
        text: `"You want a job scrub? Then we gotta tussle first."`,
        choices: [
            [`"K"`, "End2"],
        ],
        image: "pics/ricard.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    End2: {
        text: `"ohh you beat me heres the job"`,
        choices: [
            [`"Lit. imma go home now"`, "End3"],
        ],
        image: "pics/ricard.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    End3: {
        text: `You walk home with your newly found employment. Ready to finally please your wife with the news that you are no longer a roblox bum.`,
        choices: [
            [`"Honey, I'm hoooooome"`, "End31"],
        ],
        image: "pics/path.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    End31: {
        text: `"Did you get the job you bum?"`,
        choices: [
            [`"Yeah look!"`, "End312"],
        ],
        image: "pics/wife.webp",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },
    End312: {
        text: `"Oh."`,
        choices: [
            [`"..."`, "End30"],
        ],
        image: "pics/jobapp.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },
    End30: {
        text: `"Thats great babe..."`,
        choices: [
            [`"Yay!"`, "End305"],
        ],
        image: "pics/wife.webp",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },
    End305: {
        text: `"Well now that we have two incomes lets start a family"`,
        choices: [
            [`"ok"`, "End111"],
        ],
        image: "pics/wife.webp",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },
    End111: {
        text: `Jimmy Moggingson with his newfound job found happiness not only in his employement, but in his wife and and kid. And they lived happily ever after.`,
        choices: [
            [`Hell yeah`, "end1"],
        ],
        image: "pics/lf2.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },


     // Ending2 //gym ending

    End2Start: {
        text: `"You arrive at the interview."`,
        choices: [
        ["I have arrived at the interview! Time to go in!", "TwEnd2"],
        ],
        image: "pics/maxresdefault.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    TwEnd2: {
        text: `You want a job scrub? Then we gotta tussle first.`,
        choices: [
        ["Heh... Im that goat... you stand no chance!", "ThEnd2"],
        ],
        image: "pics/ricard.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    ThEnd2: {
        text: `You- You've beaten me...`,
        choices: [
        ["Its joever", "FoEnd2"],
        ],
        image: "pics/ricard.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    FoEnd2: {
        text: `You go back home to ur wife who's expecting good news`,
        choices: [
        ["Hey honey... I'm home...", "FiEnd2"],
        ],
        image: "pics/lf.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    FiEnd2: {
        text: `"Well..?" your wife asks`,
        choices: [
        ["I.. uhm.... kinda sorta.. didn't get ehe job...:(", "SiEnd2"],
        ],
        image: "pics/wife.webp",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    SiEnd2: {
        text: `Get. Out.`,
        choices: [
        ["Wahhhh!!!", "SeEnd2"],
        ],
        image: "pics/wife.webp",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    SeEnd2: {
        text: `Your wife then went on to live a happy life together with Captain Qwark!`,
        choices: [
        ["GG", "end1"],
        ],
        image: "pics/divorce.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    // Ending3 //costco ending

    End3Start: {
        text: `"You arrive at the interview."`,
        choices: [
            ["Wazzupppp!!!!", "TwEnd3 "],
        ],
        image: "pics/maxresdefault.jpg",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    TwEnd3: {
        text: `Hey there big man! you ready to EARN this job... >:)`,
        choices: [
            ["erm... *gulp* I guess man...", "ThEnd3"],
        ],
        image: "pics/ricard.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    ThEnd3: {
        text: `RAHHHHHH!!!!!`,
        choices: [
            ["AHHHH!!!!!", "FoEnd3"],
        ],
        image: "pics/ricard.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    FoEnd3: {
        text: `...`,
        choices: [
            ["...", "FiEnd3"],
        ],
        image: "pics/fight.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    FiEnd3: {
        text: `The incredible battle dies down...`,
        choices: [
            ["", ""],
        ],
        image: "pics/fight.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    SiEnd3: {
        text: `Good job man...`,
        choices: [
            ["This was a draw...", "SeEnd3"],
        ],
        image: "pics/fight.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },

    SeEnd3: {
        text: `You live happily ever after with your beautiful new husband!`,
        choices: [
            ["GG", "end1"],
        ],
        image: "pics/love.png",
        valueRizz: 0, // Set valueRizz here
        valueAura: 0 // Set valueAura here
    },
};

function makeButton(btnText, choice) {
    let button = document.createElement("button");
    button.innerHTML = btnText;
    buttonContainer.appendChild(button);

    button.addEventListener("click", function () {
        showScene(choice);
    });

    
}

function showScene(pageKey) {
    history.push(pageKey);
    showStory();
}

function buildStory(text) {
    let storyItem = document.createElement("p");
    storyItem.style.whiteSpace = "pre-wrap";
    storyContainer.appendChild(storyItem);

    let index = 0;
    const totalDuration = 900; // ms
    const interval = totalDuration / text.length;
    let timeoutId = null;

    function typeNextChar() {
        if (index < text.length) {
            storyItem.innerText += text.charAt(index);
            index++;
            timeoutId = setTimeout(typeNextChar, interval);
        }
    }

    function skipTyping() {
        clearTimeout(timeoutId);
        storyItem.innerText = text;
        cleanup();
    }

    function cleanup() {
        document.removeEventListener("keydown", skipTyping);
        document.removeEventListener("mousedown", skipTyping);
    }

    document.addEventListener("keydown", skipTyping);
    document.addEventListener("mousedown", skipTyping);

    typeNextChar();
}


showStory();

/// QTE GAME
let qteKeyHandler = null;

state.qteCompleted = false;


function createQTEGame(container, totalRounds = 10, timeLimit = 10, onComplete = () => {}) {
    container.innerHTML = '';

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let currentRound = 0, score = 0, gameOver = false;
    let timerInterval = null;
    let targetLetter = '';

    const qteBox = document.createElement('div');
    const letterDisplay = document.createElement('h2');
    const statusDisplay = document.createElement('p');
    const scoreDisplay = document.createElement('p');
    const timerDisplay = document.createElement('p');
    

    qteBox.id = 'qte-box';
    container.append(qteBox, letterDisplay, statusDisplay, scoreDisplay, timerDisplay);

    function startRound() {
        if (currentRound >= totalRounds) return endGame(true);
        currentRound++;
        targetLetter = letters[Math.floor(Math.random() * letters.length)];
        letterDisplay.textContent = `Press: ${targetLetter}`;
        statusDisplay.textContent = `Round ${currentRound} of ${totalRounds}`;
    }

    qteKeyHandler = function (e) {
        if (gameOver) return;
    
        if (e.key.toUpperCase() === targetLetter) {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            startRound();
        } else {
            timeRemaining -= 0.5;
            if (timeRemaining < 0) timeRemaining = 0;
            timerDisplay.textContent = `Time: ${timeRemaining.toFixed(1)}`;
        
            // Flash red
            timerDisplay.style.color = 'red';
            setTimeout(() => {
                timerDisplay.style.color = ''; // Revert to default
            }, 150);
        
            if (timeRemaining <= 0) {
                endGame(false);
            }
        }};

    document.addEventListener("keydown", qteKeyHandler);

    function endGame(won) {
        gameOver = true;
        clearInterval(timerInterval);
        document.removeEventListener("keydown", qteKeyHandler);
        qteKeyHandler = null;

        const endText = document.createElement('h1');
        endText.style.fontSize = '4rem';
        endText.style.color = won ? 'green' : 'red';
        endText.textContent = won ? '🎉 YOU WIN!' : '❌ YOU LOSE!';
        qteBox.innerHTML = '';
        qteBox.appendChild(endText);

        // Restore story after short delay
        setTimeout(() => {
            onComplete();  // Re-show story after QTE ends
        }, 1500);
    }

    // Timer
    let timeRemaining = timeLimit;
timerDisplay.textContent = `Time: ${timeRemaining.toFixed(1)}`;
timerInterval = setInterval(() => {
    timeRemaining -= 0.1;
    timerDisplay.textContent = `Time: ${timeRemaining.toFixed(1)}`;
    if (timeRemaining <= 0) {
        endGame(false);
    }
}, 100);

    startRound();
}



const shopItems = [
    { name: "Protein Shake", cost: 5, aura: 10 },
    { name: "Drip Jacket", cost: 10, aura: 15 },
    { name: "Job Application", cost: 15, aura: 20 },
    { name: "Dumbells", cost: 25, aura: 25 },
    { name: "Hair Trimmer", cost: 50, aura: 50 },
    { name: "Cool Shades", cost: 100, aura: 100 },
    { name: "Deoderant", cost: 150, aura: 125 },
    { name: "Raw Meat", cost: 300, aura: 250 },
    { name: "Eggs", cost: 600, aura: 360 },
    { name: "Jordans", cost: 500, aura: 300 },
    { name: "Teacher Referral", cost: 550, aura: 400 },
    { name: "Steroids", cost: 700, aura: 500 },
    { name: "Plastic Surgery", cost: 1000, aura: 1500 },
    { name: "Harvard Degree", cost: 3000, aura: 2000 },
    { name: "Miku Voicebank", cost: 5000, aura: 3000 },
];

const inventoryList = document.getElementById("inventory-list");
const shopList = document.getElementById("shop-items");
const shopContainer = document.getElementById("shop");

function renderShop() {
    shopList.innerHTML = '';
    shopItems.forEach(item => {
        const li = document.createElement("li");
        const btn = document.createElement("button");

        btn.innerText = `${item.name} - ${item.cost} Rizzpoints - ${item.aura} Aurapoints`;
        btn.addEventListener("click", () => {
            if (state.valueRizz >= item.cost) {
                // Deduct the cost from Rizzpoints
                state.valueRizz -= item.cost;
                // Add item to the player's inventory
                const newItem = document.createElement("li");
                newItem.innerText = item.name;
                inventoryList.appendChild(newItem);
                // Award additional Aurapoints
                state.valueAura += item.aura;
                alert(`You bought a ${item.name}! You also received ${item.aura} Aurapoints!`);
                
                updateScoreboard(); // <<< MOVE THIS HERE, after Rizz and Aura change
        
                console.log("New Rizzpoint balance:", state.valueRizz);
                console.log("New Aurapoint balance:", state.valueAura);
            } else {
                alert(`Not enough Rizzpoints!`);
            }
        });

        li.appendChild(btn);
        shopList.appendChild(li);
    });
}

// Universal key handler (QTE-aware)
document.addEventListener("keydown", function (event) {
    if (qteKeyHandler) return; // Skip if QTE is active

    // Toggle inventory
    if (event.key === "i" || event.key === "I") {
        const inventory = document.getElementById("inventory");
        inventory.style.display =
            (inventory.style.display === "none" || inventory.style.display === "")
                ? "flex"
                : "none";
    }

    // Toggle shop
    if (event.key === "s" || event.key === "S") {
        const shop = document.getElementById("shop");
        if (shop.style.display === "none" || shop.style.display === "") {
            shop.style.display = "flex";
            renderShop();
        } else {
            shop.style.display = "none";
        }
    }
});

document.getElementById("start-qte").addEventListener("click", function () {
    // Assuming 'story' is the container for your story content
    const storyContainer = document.getElementById("story");

    // Start the QTE game
    createQTEGame(storyContainer);
});

function createBackToIntroButton() {
    const backBtn = document.createElement("button");
    backBtn.innerText = "⬅️ Back to Intro";
    backBtn.style.marginTop = "10px";
    backBtn.addEventListener("click", function () {
        state.valueRizz = 0;      // Reset Rizz
        state.valueAura = 0;      // Reset Aura
        history = ["intro"];      // Reset history
        inventoryList.innerHTML = ""; // <<< Reset inventory
        showStory();              // Reload the intro scene properly
        updateScoreboard();       // Update the scoreboard display
    });

    buttonContainer.appendChild(backBtn);
}

function showStory() {
    const currentPage = history[history.length - 1];

    const returnToMainBtn = document.getElementById("return-to-main");
if (currentPage === "intro") {
    returnToMainBtn.style.display = "inline-block";
} else {
    returnToMainBtn.style.display = "none";
}

    storyContainer.innerHTML = "";
    buttonContainer.innerHTML = "";
    imageContainer.style.display = "none";

    console.log("Current page:", currentPage);



    if (currentPage === "end1") {
        state.valueRizz = 0;
        state.valueAura = 0;
        history = ["intro"];
    }

    buildStory(story[currentPage].text);

    if (currentPage === "gangshytqte") {
        if (!state.qteCompleted) {
            state.qteCompleted = true;
            if (story[currentPage].image) {
                storyImage.src = story[currentPage].image;
                storyImage.style.display = "block";
                imageContainer.style.display = "block";
            }
            
            createQTEGame(document.getElementById("story"), 10, 10, () => {
                // QTE complete — now manually create buttons and back button
                const choices = story[currentPage].choices;
                for (let choice of choices) {
                    makeButton(choice[0], choice[1]);
                }
                createBackToIntroButton();
            });
            return;
        }
    } else if (currentPage === "") {
        console.log("Barbe1 reached");

        // Button to show depending on aura
        if (state.valueAura >= 1000) {
            console.log("Showing Button for Ending 3");
            makeButton("Go to Ending 3", "End3Start");
        } else if (state.valueAura >= 200) {
            console.log("Showing Button for Ending 2");
            makeButton("Go to Ending 2", "End2Start");
        } else if (state.valueAura >= 50) {
            console.log("Showing Button for Ending 1");
            makeButton("Go to Ending 1", "End1Start");
        }
    } else {
        for (let choice of story[currentPage].choices) {
            makeButton(choice[0], choice[1]);
        }
        createBackToIntroButton();
    }

    // Update Rizz and Aura after scene
    state.valueRizz += story[currentPage].valueRizz;
    state.valueAura += story[currentPage].valueAura;

    // Call updateScoreboard after values change
    updateScoreboard();

    console.log("Accumulated Value Rizz:", state.valueRizz);
    console.log("Accumulated Value Aura:", state.valueAura);

    if (story[currentPage].image) {
        storyImage.src = story[currentPage].image;
        storyImage.style.display = "block";
        imageContainer.style.display = "block";
    }
}

buttonContainer = document.getElementById("buttons");


document.getElementById("back-to-intro").addEventListener("click", function () {
    state.valueRizz = 0;      // Reset Rizz
    state.valueAura = 0;      // Reset Aura
    history = ["intro"];      // Reset history
    inventoryList.innerHTML = ""; // <<< Reset inventory
    showStory();              // Reload the intro scene properly
    updateScoreboard();       // Update the scoreboard display
});

function updateScoreboard() {
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.textContent = `Rizz: ${state.valueRizz} | Aura: ${state.valueAura}`;
}

console.log("Scoreboard element:", document.getElementById("scoreboard"));


document.getElementById("return-to-main").addEventListener("click", function () {
    // Add transition before navigating
    document.body.classList.add("fade-out");
    setTimeout(() => {
        window.location.href = "index.html";
    }, 500); // Match with CSS fade duration
});