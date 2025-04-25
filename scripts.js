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
        image: "pics/barber.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barb1s: {
        text: `"Hey sport! How's the wife?"`,
        choices: [
            [`"She's just dandy, Jack."`, "barb1st"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barb1st: {
        text: `"Glad to hear that Jim. So what can I do for ya?"`,
        choices: [
            [`"Wifey says I need a job. I gotta get spiffy and quick! Any recomendations?"`, "barb1sts"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barb1sts: {
        text: `"Do I? Hell yes I do brother. Heres what I got on the menu today fine fella. Take your pick!"`,
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
        text: `"Ah the low taper fade! Excellent choice! Alright, just sit there and look pretty while I work my magic."`,
        choices: [
            [`"Yes king"`, "barbtape1"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbtape1: {
        text: `After a few minutes of waiting, your haircut is finished. You look like a million bucks!`,
        choices: [
            ["Frickin' Sweet", "barbtape2"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbtape2: {
        text: `"Frickin' sweet! You look like a million bucks! Now go get em' tiger!"`,
        choices: [
            [`"Le Epic"`, "barbtape3"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbtape3: {
        text: `You leave the barbershop filled with confidence. You're ready to take on the world! And this interview.`,
        choices: [
            ["RAAHHHHHH", "barbtape4"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
   
    barbtape4: {
        text: "But when you walk outside, you get mistaken for wanted cirminal: Tyler ``fornite ``ninja```` Blevins and you are immediately sent to prison.",
        choices: [
            ["Bruh", "barb2w"]
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
        text: "You join the Gamblers. What do you do now?",
        choices: [
            ["Mog their leader", "end1"],
            ["Assimilate", "barbj2"]
        ],
        image: "pics/image_3.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    barbj2: {
        text: "You decide to assimilate. They agree to take you in, but they have a challenge for you. You must gamble your lungs.",
        choices: [
            ["MY LUNGS???", "barbh0"]
        ],
        image: "pics/figure.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    barbh0: {
        text: "Call it, pretty boy.",
        choices: [
            ["Heads", "barbh01"],
            ["Tails", "barbh01"]
        ],
        image: "pics/figure.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    barbh01: {
        text: "Rats.",
        choices: [
            ["ez", "barbh"]
        ],
        image: "pics/figure.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    barbh: {
        text: "You win! Now you have 134 pairs of lungs! Now that you are the sole member of the rival gang, the Juggers, they are coming to kill you! What do you do?",
        choices: [
            ["Fight them all", "barbf"],
            ["Try to escape", "barbe"]
        ],
        image: "pics/scared.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    barbe: {
        text: "You manage to mog the very walls of your cell!",
        choices: [
            ["That makes no sense", "barbe1"],
        ],
        image: "pics/phew.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    barbe1: {
        text: "Your creation of an escape got the Juggers off your tail. You run away and hitchhike back to the city.",
        choices: [
            [`"Aw yeah!"`, "EndStart"],
        ],
        image: "pics/phew.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    barbf: {
        text: "You manage to evade all the members of the Juggers and escape the prison in the brawl that ensued. You hitchhike back to the city",
        choices: [
            [`"Aw yeah!"`, "Endstart"],
        ],
        image: "pics/phew.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    barb4: {
        text: "You go to the Juggers. What do you plan to do?",
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
            ["Hell naw", "barbjug3"],
        ],
        image: "pics/.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    barbjug3: {
        text: "You mog thier leader and become the king Jugger. What do you do first as thier leader?",
        choices: [
            ["Jug the prison", "prisonjug"],
            ["Live out the rest of your days doing that you love", "end1"] //change
        ],
        image: "pics/.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    prisonjug: {
        text: "You decide to jug the prison and all your goons start laying seige. Who's your first target?",
        choices: [
            ["Warden", "prisonjug1"],
            ["Gamblers", "gangshyt"]
        ],
        image: "pics/.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    prisonjug1: {
        text: "You find the warden and try to take him out.",//qte but you fail no matter what and when you do you just escape
        choices: [
            ["Oh", "prisonjug2"],
        ],
        image: "pics/.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    prisonjug2: {
        text: "Keyword: Try",//qte but you fail no matter what and when you do you just escape
        choices: [
            [" ", "prisoinjug3"],
        ],
        image: "pics/.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    prisonjug3: {
        text: "You are failing.",//qte but you fail no matter what and when you do you just escape
        choices: [
            [" ", "prisoinjug4"],
        ],
        image: "pics/.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    prisonjug4: {
        text: "Badly.",//qte but you fail no matter what and when you do you just escape
        choices: [
            ["Oh well", "prisoinjug5"],
        ],
        image: "pics/.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    prisonjug5: {
        text: "Maybe it's time to bail",//qte but you fail no matter what and when you do you just escape
        choices: [
            ["Yeah maybe", "prisoinjug6"],
        ],
        image: "pics/.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    prisonjug6: {
        text: "You sick your goons on the warden, and as hes tearing them apart you slip away outside the prison.",//qte but you fail no matter what and when you do you just escape
        choices: [
            [`"That was close"`, "prisoinjug7"],
        ],
        image: "pics/.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    gangshyt: {
        text: "You decide take on the rival gang. You wage war on the Gamblers.", //qtes 
        choices: [
            ["Ight", "aftermath"]
        ],
        image: "pics/.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    aftermath: {
        text: "After winning the war, you indoctrinate all the Gamblers into your ranks of goons. Do you escap with sheer numbers or live out the rest of your days as top dog in this prison?", 
        choices: [
            ["Jug", "end1"], 
            ["escape", "EndStart"]
        ],
        image: "pics/.jpg",
        valueRizz: 0,
        valueAura: 0
    },
    barbbald: {
        text: `"Bald? Really? What ever you say boss."`,
        choices: [
        [`"Yeah. Good boy."`, "barbbald1"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbbald1: {
        text: `"Don't do that"`,
        choices: [
        [`"I do what I want"`, "barbbald2"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbbald2: {
        text: `"Boom youre bald now. Happy?"`,
        choices: [
        [`"Yeah!"`, "barbbald3"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbbald3: {
        text: `"You're cooked"`,
        choices: [
        [`"Sybau"`, "barbbald4"],
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
        text: `Youre wife tries to ft. Oh no`,
        choices: [
        [`"oh no"`, "barbbald6"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbbald6: {
        text: `If you hang up, she'll become sus of you and just call again. There's no way out of this. You pick up`,
        choices: [
        [`"crap"`, "barbbald7"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbbald7: {
        text: `She gets a eyeful of your shimmering forhead`,
        choices: [
        ["...", "barbbald8"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbbald8: {
        text: "...",
        choices: [
        ["...", "barbald81"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbald81: {
        text: "...",
        choices: [
        ["...", "barbbald82"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbbald82: {
        text: `"I'm Leaving you."`,
        choices: [
        [`"ok"`, "end1"],
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

    barbdreads: {
        text: `"Dreads? okay I see you I fw it."`,
        choices: [
        [`"yurrr"`, "barbdreads1"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbdreads1: {
        text: `"Dreads are pretty hot these days, luckily for you so am I. Im really good. At barbering."`,
        choices: [
        [`"ok"`, "barbdreads2"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbdreads2: {
        text: `"Check ts out."`,
        choices: [
        [`"ok"`, "barbdreads3"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbdreads3: {
        text: `"Viola!"`,
        choices: [
        [`"It's 'voila'"`, "barbdreads4"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbdreads4: {
        text: `"I don't care. Say, where are you heading to in to show off these puppies?"`,
        choices: [
        [`"No clue buddy"`, "barbdreads5"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbdreads5: {
        text: `"I do! You should go to costco! Thats where all the babes- I mean jobs are nowadays."`,
        choices: [
        [`"Yeah, jobs..."`, "barbdreads6"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbdreads6: {
        text: `"Alright well, you better get going then, they open soon and I bet you want to score some cred by being early."`,
        choices: [
        [`"Sounds good. Thanks vrodie pie"`, "barbdreads7"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },
    barbdreads6: {
        text: `"Anytime."`,
        choices: [
        ["Go to Costco", "Costco"],
        ],
        image: "pics/john.jpg",
        valueRizz: 100, // Set valueRizz here
        valueAura: 100 // Set valueAura here
    },

//Gym

Gym: {
    text: `You head to the gym, what do you want to do?`,
    choices: [
    ["Walk in", "Choice1"], ["Play on the monkey bars","Choice2"]
    ],
    image: "pics/john.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Choice1: {
    text: `You forgot to scan in! The guy at the front desk is furious.`,
    choices: [
    ["Next", "Choice3"],
    ],
    image: "pics/john.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Choice2: {
    text: `An old man makes fun of you and tells you that monkey bars are for kids. :(`,
    choices: [
    ["Next", "Choice4"],
    ],
    image: "pics/john.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Choice3: {
    text: `The desk man is FURIOUS!! What will you do?`,
    choices: [
    ["Apologize and check in", "Choice5"], ["Insult him","Choice6"]
    ],
    image: "pics/john.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Choice4: {
    text: `You are upset at the old man >:( What are you gonna do?`,
    choices: [
    ["Mog him", "Choice7"], ["Kill him","Choice8"]
    ],
    image: "pics/john.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Choice5: {
    text: `He accepts your apology and now you have to decide what machine you want to use for your workout.`,
    choices: [
    ["Gain Giver 7800", "Choice9"], ["Muscle Manifester 10004","Choice10"]
    ],
    image: "pics/john.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Choice6: {
    text: `He becomes even more furious and punches you in the face`,
    choices: [
    ["Cry", "intro"], ["Take it like a man and scan in","Choice11"]
    ],
    image: "pics/john.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Choice7: {
    text: ``,
    choices: [
    ["He cries and runs away", "nil"], ["He calls the cops","nil"]   //Figure out how to make it so it chooses one option or another depending on Aura value
    ],
    image: "pics/john.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Choice8: {
    text: `He kicks your butt and mogs you`,
    choices: [
    ["Game Over. GG's!! :)", "intro"]
    ],
    image: "pics/john.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Choice9: {
    text: `Which ingredients will you use for the gains?`,
    choices: [
    ["Benadryl", "Choice12"], ["Mystical container contents","Choice12"]
    ],
    image: "pics/john.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Choice10: {
    text: `Which ingredients will you use for the gains?`,
    choices: [
    ["Meat Smoothie", "Choice12"], ["Vicodin","Choice12"]
    ],
    image: "pics/john.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Choice11: {
    text: `You muscle through it because you're a beast. Which machine do you want to work out at?`,
    choices: [
    ["Gain Giver 7800", "Choice9"], ["Muscle Manifester 10004","Choice10"]
    ],
    image: "pics/john.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Choice12: {
    text: `You do an intense workout and feel the gains!!!`,
    choices: [
    ["Next", "Choice13"]
    ],
    image: "pics/john.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Choice13: {
    text: `You finish working out and you notice a buff cosplaying dude working out.`,
    choices: [
    ["Approach him...", "Choice14"]
    ],
    image: "pics/john.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Choice14: {
    text: ``,
    choices: [
    ["", ""], ["",""]
    ],
    image: "pics/john.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Choice15: {
    text: ``,
    choices: [
    ["", ""], ["",""]
    ],
    image: "pics/john.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Choice16: {
    text: ``,
    choices: [
    ["", ""], ["",""]
    ],
    image: "pics/john.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

//Costco

Costco1: {
    text: `You arrive at Costco. What do you want to do?`,
    choices: [
    ["Refill your gas", "Costco2"], ["Go in and buy a chicken bake", "Costco3"]
    ],
    image: "pics/.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco2: {
    text: `You go to the gas pump, what are you gonna do?`,
    choices: [
    ["Play with gasoline", "Costco4"], ["Light a cigar", "Costco5"], ["Pump gas", "Costco6"]
    ],
    image: "pics/.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco3: {
    text: `You go and buy the Chicken Bake. You are now the proud owner of a Chicken Bake. You fill your mouth with Chicken Bake. What do you rate it?`,
    choices: [
    ["1 BIG BOOM!!!", "Costco7"], ["5 BIG BOOMS!!!", "Costco8"]
    ],
    image: "pics/.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco4: {
    text: `As you're flinging gasoline around, an old man walking by happens to be lighting a cigar, which ignite all of the gasoline that you've been playing with.`,
    choices: [
    ["You stand there aura farming nonchalantly as you're engulfed in the flames and explosions erupting around you.", "Costco9"],
    ],
    image: "pics/.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco5: {
    text: `An old man walking by notices your super epic and incredibly manly cigar, he begins to walk over. What are you gonna do?`,
    choices: [
    ["Smoke the cigar super nonchalantly and wait for the old man", "Costco10"],
    ],
    image: "pics/.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco6: {
    text: `You pay for the gas and reach for the nozzle, but as you grab it and start to pump gas, your incredibly shredded arms are too powerful and you absolutely obliterate the gas nozzle.`,
    choices: [
    ["whoops :|", "Costco11"],
    ],
    image: "pics/.jpg",
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
    image: "pics/.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco9: {
    text: `You walk out of the fire slowly and confidently, your aura is radiating making everybody who witnessed the explosing awestruck, as you're walking away, one final massive explosion happens and you DON'T turn back.`,
    choices: [
    ["look over and notice a man who stands out from the crown looking at you... almost like he's proud of you.", "Costco15"],
    ],
    image: "pics/.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco10: {
    text: `The old man approached you and compliments you and your cigar and says you look super friggin epic with a cigar`,
    choices: [
    ["Thank him", "Costco16"],
    ],
    image: "pics/.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco11: {
    text: `You're standing there dumbfounded and awestruck at the sheer power of your own arms, an old man notices your strength and approaches you.`,
    choices: [
    ["look over, notice the man, and greet him", "Costco17"],
    ],
    image: "pics/.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco12: {
    text: `You decide to fight back against the cashier, you throw a punch at him and he dodges it, but you manage to hit him with a sick combo and he falls to the ground. He's dead. You feel like a god.`,
    choices: [
    ["Attempt to flee the scene", "Costco18"],
    ],
    image: "pics/.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco13: {
    text: `You run out of Costco. Where do you go?`,
    choices: [
    ["Go to the barb", ""], ["Go to the Gym", ""],
    ],
    image: "pics/.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco: {
    text: ``,
    choices: [
    ["", ""],
    ],
    image: "pics/.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

Costco: {
    text: ``,
    choices: [
    ["", ""],
    ],
    image: "pics/.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
},

// Ending

EndStart: {
    text: `"You arrive at the interview. You are ready to take on the world! And this interview."`,
    choices: [
    ["", ""],
    ],
    image: "pics/.jpg",
    valueRizz: 100, // Set valueRizz here
    valueAura: 100 // Set valueAura here
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
    storyItem.innerText = text;
    storyContainer.appendChild(storyItem);
}

function showStory() {
    const currentPage = history[history.length - 1];
    storyContainer.innerHTML = "";
    buttonContainer.innerHTML = "";
    imageContainer.style.display = "none";

    if (currentPage === "end1") {
        state.valueRizz = 0;
        state.valueAura = 0;
        history = ["intro"];
    }

    buildStory(story[currentPage].text);

    if (currentPage === "gangshyt") {
        createQTEGame(document.getElementById("story"));
    } else {
        for (let choice of story[currentPage].choices) {
            makeButton(choice[0], choice[1]);
        }
    }

    state.valueRizz += story[currentPage].valueRizz;
    state.valueAura += story[currentPage].valueAura;

    console.log("Accumulated Value Rizz:", state.valueRizz);
    console.log("Accumulated Value Aura:", state.valueAura);

    if (story[currentPage].image) {
        storyImage.src = story[currentPage].image;
        storyImage.style.display = "block";
        imageContainer.style.display = "block";
    }
}

showStory();

/// QTE GAME