/*
 * Requires:
 *     psiturk.js
 *     utils.js
 */

// Initalize psiturk object
var psiTurk = new PsiTurk(uniqueId, adServerLoc, mode);

var mycondition = condition;  // these two variables are passed by the psiturk server process
var mycounterbalance = counterbalance;  // they tell you which condition you have been assigned to
// they are not used in the stroop code but may be useful to you

// All pages to be loaded
var pages = [
	"instructions/instruct-1.html",
	"instructions/instruct-2.html",
	"instructions/instruct-3.html",
	"instructions/instruct-ready.html",
	"stage.html",
	"postquestionnaire.html"
];

psiTurk.preloadPages(pages);

var instructionPages = [ // add as a list as many pages as you like
	"instructions/instruct-1.html",
	"instructions/instruct-2.html",
	"instructions/instruct-3.html",
	"instructions/instruct-ready.html"
];


/********************
* HTML manipulation
*
* All HTML files in the templates directory are requested 
* from the server when the PsiTurk object is created above. We
* need code to get those pages from the PsiTurk object and 
* insert them into the document.
*
********************/

var Curiosity = function() {
    psiTurk.showPage('stage.html');
    window.moveTo(0, 0);
    window.resizeTo(screen.width, screen.height);

    Vue.use(VueFire);
    var app = new Vue({
        el: "#app",
        data: {
            videoGuess: "",
            currentGuess: "",
            submitTime: 0,
            percentageSubmit: 0,
            videoList: [
                   // {src: "static/videos/ballerina.mp4", type: "video/mp4", answer: "Ballerina"},
                   // {src: "static/videos/frog.mp4", type: "video/mp4", answer: "Frog"},
                   // {src: "static/videos/hand.mp4", type: "video/mp4", answer: "Hand"},
                   // {src: "static/videos/pomegranate.mp4", type: "video/mp4", answer: "Pomegranate"},
                   // {src: "static/videos/airplane.mp4", type: "video/mp4", answer: "Airplane"},
                   // {src: "static/videos/ant.mp4", type: "video/mp4", answer: "Ant"},
                   // {src: "static/videos/apple.mp4", type: "video/mp4", answer: "Apple"},
                   // {src: "static/videos/astronaut.mp4", type: "video/mp4", answer: "Astronaut"},
                   // {src: "static/videos/bananas.mp4", type: "video/mp4", answer: "Bananas"},
                   // {src: "static/videos/bear.mp4", type: "video/mp4", answer: "Bear"},
                   // {src: "static/videos/bee.mp4", type: "video/mp4", answer: "Bee"},
                   // {src: "static/videos/bellpepper.mp4", type: "video/mp4", answer: "Bell Pepper"},
                   // {src: "static/videos/bike.mp4", type: "video/mp4", answer: "Bike"},
                   // {src: "static/videos/books.mp4", type: "video/mp4", answer: "Books"},
                   // {src: "static/videos/bottle.mp4", type: "video/mp4", answer: "Bottle"},
                   // {src: "static/videos/brain.mp4", type: "video/mp4", answer: "Brain"},
                   // {src: "static/videos/broccoli.mp4", type: "video/mp4", answer: "Broccoli"},
                   // {src: "static/videos/bull.mp4", type: "video/mp4", answer: "Bull"},
                   // {src: "static/videos/burger.mp4", type: "video/mp4", answer: "Burger"},
                   // {src: "static/videos/butterfly.mp4", type: "video/mp4", answer: "Butterfly"},
                   // {src: "static/videos/cactus.mp4", type: "video/mp4", answer: "Cactus"},
                   // {src: "static/videos/cake.mp4", type: "video/mp4", answer: "Cake"},
                   // {src: "static/videos/camel.mp4", type: "video/mp4", answer: "Camel"},
                   // {src: "static/videos/camera.mp4", type: "video/mp4", answer: "Camera"},
                   // {src: "static/videos/candle.mp4", type: "video/mp4", answer: "Candle"},
                   // {src: "static/videos/cappuccino.mp4", type: "video/mp4", answer: "Cappuccino"},
                   // {src: "static/videos/car.mp4", type: "video/mp4", answer: "Car"},
                   // {src: "static/videos/carrots.mp4", type: "video/mp4", answer: "Carrots"},
                   // {src: "static/videos/cat.mp4", type: "video/mp4", answer: "Cat"},
                   // {src: "static/videos/chef.mp4", type: "video/mp4", answer: "Chef"},
                   // {src: "static/videos/constructionworker.mp4", type: "video/mp4", answer: "Construction Worker"},
                   // {src: "static/videos/corn.mp4", type: "video/mp4", answer: "Corn"},
                   // {src: "static/videos/crab.mp4", type: "video/mp4", answer: "Crab"},
                   // {src: "static/videos/cupcake.mp4", type: "video/mp4", answer: "Cupcake"},
                   // {src: "static/videos/dandelion.mp4", type: "video/mp4", answer: "Dandelion"},
                   // {src: "static/videos/deer.mp4", type: "video/mp4", answer: "Deer"},
                   // {src: "static/videos/dog.mp4", type: "video/mp4", answer: "Dog"},
                   // {src: "static/videos/dolphin.mp4", type: "video/mp4", answer: "Dolphin"},
                   // {src: "static/videos/drum.mp4", type: "video/mp4", answer: "Drum"},
                   // {src: "static/videos/drummer.mp4", type: "video/mp4", answer: "Drummer"},
                   // {src: "static/videos/eel.mp4", type: "video/mp4", answer: "Eel"},
                   // {src: "static/videos/elephant.mp4", type: "video/mp4", answer: "Elephant"},
                   // {src: "static/videos/fan.mp4", type: "video/mp4", answer: "Fan"},
                   // {src: "static/videos/faucet.mp4", type: "video/mp4", answer: "Faucet"},
                   // {src: "static/videos/flamingo.mp4", type: "video/mp4", answer: "Flamingo"},
                   // {src: "static/videos/fox.mp4", type: "video/mp4", answer: "fox"},
                   // {src: "static/videos/frenchfries.mp4", type: "video/mp4", answer: "French Fries"},
                   // {src: "static/videos/frenchhorn.mp4", type: "video/mp4", answer: "French Horn"},
                   // {src: "static/videos/frog.mp4", type: "video/mp4", answer: "Frog"},
                   // {src: "static/videos/gamecontroller.mp4", type: "video/mp4", answer: "Game Controller"},
                   // {src: "static/videos/giraffe.mp4", type: "video/mp4", answer: "Giraffe"},
                   // {src: "static/videos/glasses.mp4", type: "video/mp4", answer: "Glasses"},
                   // {src: "static/videos/golfer.mp4", type: "video/mp4", answer: "Golfer"},
                   // {src: "static/videos/gorilla.mp4", type: "video/mp4", answer: "Gorilla"},
                   // {src: "static/videos/guitar.mp4", type: "video/mp4", answer: "Guitar"},
                   // {src: "static/videos/hand.mp4", type: "video/mp4", answer: "Hand"},
                   // {src: "static/videos/hardhat.mp4", type: "video/mp4", answer: "Hard Hat"},
                   // {src: "static/videos/harp.mp4", type: "video/mp4", answer: "Harp"},
                   // {src: "static/videos/headphones.mp4", type: "video/mp4", answer: "Headphones"},
                   // {src: "static/videos/heart.mp4", type: "video/mp4", answer: "Heart"},
                   // {src: "static/videos/hedgehog.mp4", type: "video/mp4", answer: "Hedgehog"},
                   // {src: "static/videos/highheel.mp4", type: "video/mp4", answer: "High Heel"},
                   // {src: "static/videos/horse.mp4", type: "video/mp4", answer: "Horse"},
                   // {src: "static/videos/hotairballoon.mp4", type: "video/mp4", answer: "Hot Air Balloon"},
                   // {src: "static/videos/hourglass.mp4", type: "video/mp4", answer: "Hourglass"},
                   // {src: "static/videos/iceberg.mp4", type: "video/mp4", answer: "Iceberg"},
                   // {src: "static/videos/icecream.mp4", type: "video/mp4", answer: "Ice Cream"},
                   // {src: "static/videos/jellyfish.mp4", type: "video/mp4", answer: "Jelly Fish"},
                   // {src: "static/videos/kangaroo.mp4", type: "video/mp4", answer: "Kangaroo"},
                   // {src: "static/videos/key.mp4", type: "video/mp4", answer: "Key"},
                   // {src: "static/videos/lamp.mp4", type: "video/mp4", answer: "Lamp"},
                   // {src: "static/videos/laptop.mp4", type: "video/mp4", answer: "Laptop"},
                   // {src: "static/videos/lightbulb.mp4", type: "video/mp4", answer: "Light Bulb"},
                   // {src: "static/videos/lighthouse.mp4", type: "video/mp4", answer: "Light House"},
                   // {src: "static/videos/lion.mp4", type: "video/mp4", answer: "Lion"},
                   // {src: "static/videos/lizard.mp4", type: "video/mp4", answer: "Lizard"},
                   // {src: "static/videos/llama.mp4", type: "video/mp4", answer: "Llama"},
                   // {src: "static/videos/lungs.mp4", type: "video/mp4", answer: "Lungs"},
                   // {src: "static/videos/microphone.mp4", type: "video/mp4", answer: "Microphone"},
                   // {src: "static/videos/microscope.mp4", type: "video/mp4", answer: "Microscope"},
                   // {src: "static/videos/moose.mp4", type: "video/mp4", answer: "Moose"},
                   // {src: "static/videos/mountains.mp4", type: "video/mp4", answer: "Mountains"},
                   // {src: "static/videos/mushroom.mp4", type: "video/mp4", answer: "Mushroom"},
                   // {src: "static/videos/nut.mp4", type: "video/mp4", answer: "Nut"},
                   // {src: "static/videos/okra.mp4", type: "video/mp4", answer: "Okra"},
                   // {src: "static/videos/orca.mp4", type: "video/mp4", answer: "Orca"},
                   // {src: "static/videos/owl.mp4", type: "video/mp4", answer: "Owl"},
                   // {src: "static/videos/paintbrush.mp4", type: "video/mp4", answer: "Paintbrush"},
                   // {src: "static/videos/palmtree.mp4", type: "video/mp4", answer: "Palm Tree"},
                   // {src: "static/videos/pancakes.mp4", type: "video/mp4", answer: "Pancakes"},
                   // {src: "static/videos/panda.mp4", type: "video/mp4", answer: "Panda"},
                   // {src: "static/videos/papaya.mp4", type: "video/mp4", answer: "Papaya"},
                   // {src: "static/videos/pear.mp4", type: "video/mp4", answer: "Pear"},
                   // {src: "static/videos/pencil.mp4", type: "video/mp4", answer: "Pencil"},
                   // {src: "static/videos/penguin.mp4", type: "video/mp4", answer: "Penguin"},
                   // {src: "static/videos/phonograph.mp4", type: "video/mp4", answer: "Phonograph"},
                   // {src: "static/videos/pig.mp4", type: "video/mp4", answer: "Pig"},
                   // {src: "static/videos/pineapple.mp4", type: "video/mp4", answer: "Pineapple"},
                   // {src: "static/videos/pinecone.mp4", type: "video/mp4", answer: "Pinecone"},
                   // {src: "static/videos/pinetree.mp4", type: "video/mp4", answer: "Pine Tree"},
                   // {src: "static/videos/pipe.mp4", type: "video/mp4", answer: "Pipe"},
                   // {src: "static/videos/pizza.mp4", type: "video/mp4", answer: "Pizza"},
                   // {src: "static/videos/pot.mp4", type: "video/mp4", answer: "Pot"},
                   // {src: "static/videos/rabbit.mp4", type: "video/mp4", answer: "Rabbit"},
                   // {src: "static/videos/raccoon.mp4", type: "video/mp4", answer: "Raccoon"},
                   // {src: "static/videos/ram.mp4", type: "video/mp4", answer: "Ram"},
                   // {src: "static/videos/rhino.mp4", type: "video/mp4", answer: "Rhino"},
                   // {src: "static/videos/rooster.mp4", type: "video/mp4", answer: "Rooster"},
                   // {src: "static/videos/rose.mp4", type: "video/mp4", answer: "Rose"},
                   // {src: "static/videos/sailboat.mp4", type: "video/mp4", answer: "Sailboat"},
                   // {src: "static/videos/saxophone.mp4", type: "video/mp4", answer: "Saxophone"},
                   // {src: "static/videos/scale.mp4", type: "video/mp4", answer: "Scale"},
                   // {src: "static/videos/scissors.mp4", type: "video/mp4", answer: "Scissors"},
                   // {src: "static/videos/scorpion.mp4", type: "video/mp4", answer: "Scorpion"},
                   // {src: "static/videos/seahorse.mp4", type: "video/mp4", answer: "Seahorse"},
                   // {src: "static/videos/seal.mp4", type: "video/mp4", answer: "Seal"},
                   // {src: "static/videos/shark.mp4", type: "video/mp4", answer: "Shark"},
                   // {src: "static/videos/shell.mp4", type: "video/mp4", answer: "Shell"},
                   // {src: "static/videos/skateboard.mp4", type: "video/mp4", answer: "Skateboard"},
                   // {src: "static/videos/sloth.mp4", type: "video/mp4", answer: "Sloth"},
                   // {src: "static/videos/snail.mp4", type: "video/mp4", answer: "Snail"},
                   // {src: "static/videos/sneaker.mp4", type: "video/mp4", answer: "Sneaker"},
                   // {src: "static/videos/squid.mp4", type: "video/mp4", answer: "Squid"},
                   // {src: "static/videos/squirrel.mp4", type: "video/mp4", answer: "Squirrel"},
                   // {src: "static/videos/succulent.mp4", type: "video/mp4", answer: "Succulent"},
                   // {src: "static/videos/surfer.mp4", type: "video/mp4", answer: "Surfer"},
                   // {src: "static/videos/swordfish.mp4", type: "video/mp4", answer: "Swordfish"},
                   // {src: "static/videos/taco.mp4", type: "video/mp4", answer: "taco"},
                   // {src: "static/videos/television.mp4", type: "video/mp4", answer: "Television"},
                   // {src: "static/videos/tiger.mp4", type: "video/mp4", answer: "Tiger"},
                   // {src: "static/videos/train.mp4", type: "video/mp4", answer: "Train"},
                   // {src: "static/videos/tulip.mp4", type: "video/mp4", answer: "Tulip"},
                   // {src: "static/videos/turtle.mp4", type: "video/mp4", answer: "Turtle"},
                   // {src: "static/videos/violin.mp4", type: "video/mp4", answer: "Violin"},
                   // {src: "static/videos/walrus.mp4", type: "video/mp4", answer: "Walrus"},
                   // {src: "static/videos/watermelon.mp4", type: "video/mp4", answer: "Watermelon"},
                   // {src: "static/videos/wave.mp4", type: "video/mp4", answer: "Wave"},
                   {src: "static/videos/whale.mp4", type: "video/mp4", answer: "Whale"},
                   // {src: "static/videos/wineglass.mp4", type: "video/mp4", answer: "Wine Glass"},
                   // {src: "static/videos/wolf.mp4", type: "video/mp4", answer: "Wolf"},
                   // {src: "static/videos/yogi.mp4", type: "video/mp4", answer: "Yogi"},
                   // {src: "static/videos/zebra.mp4", type: "video/mp4", answer: "Zebra"},

            ],
            videoIndex: 0,
            videoAnswer: "",
            curiosityValue: 50,
            speedValue: 50,
            guessList: [],
            submitTimeList: [],
            percentageSubmitList: [],
            data: [],
            correct: 0,
            answeredCorrect: 0,
            answeredCuriosityValue: 0,
            answeredSpeedValue: 0,
            validVideoGuess: 0,
            finalGuess: "",

        },
        computed: {
            // return todos that match the currently selected filter
            filteredTodos() {
                return filters[this.visibility](this.todos);
            }
        },
        firebase: {
//        accounts: usersRef,
//        profilePics: imgRef
        },
        methods: {
            startExp() {
                document.getElementById("welcome").style.display = "none";
                document.getElementById("startExp").style.display = "block";
                var currentIndex = this.videoList.length;
                var temporaryValue;
                var randomIndex;
                while (0 !== currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    temporaryValue = this.videoList[currentIndex];
                    this.videoList[currentIndex] = this.videoList[randomIndex];
                    this.videoList[randomIndex] = temporaryValue;
                }
            },
            nextVideo() {
                this.data.push({
                    submitTimeList: this.submitTimeList,
                    videoGuess: this.currentGuess,
                    percentageSubmitList: this.percentageSubmitList,
                    guessList: this.guessList,
                    curiosityValue: this.curiosityValue,
                    speedValue: this.speedValue,
                    // correct: this.correct,
                    finalGuess: this.finalGuess,
                });

                psiTurk.recordTrialData({
                        submitTimeList: this.submitTimeList,
                        videoGuess: this.currentGuess,
                        percentageSubmitList: this.percentageSubmitList,
                        guessList: this.guessList,
                        curiosityValue: this.curiosityValue,
                        speedValue: this.speedValue,
                        // correct: this.correct,
                        finalGuess: this.finalGuess,
                    }
                );

                this.videoIndex++;
                console.log(this.data);
                console.log("The Current video index is", this.videoIndex);
                console.log(this.videoList[this.videoIndex]);
                this.submitTime = 0;
                this.percentageSubmit = 0;
                this.submitTimeList = [];
                this.percentageSubmitList = [];
                this.videoGuess = "";
                this.currentGuess = "";
                this.curiosityValue = 50;
                this.speedValue = 50;
                this.guessList = [];
                this.answeredCuriosityValue = 0;
                this.answeredSpeedValue = 0;
                this.answeredSlidervalue = 0;
                this.answeredCorrect = 0;
                this.finalGuess = "";
                var myVideo = document.getElementById("video");

                if (this.videoIndex > this.videoList.length-1){
                    currentview = new Questionnaire();
                } else {
                    myVideo.src = this.videoList[this.videoIndex].src;
                    document.getElementById("videoGuess").style.display = "block";
                    document.getElementById("displayGuess").style.display = "none";
                    document.getElementById("curiosityMeasure").style.display = "none";
                }
            },
            continueToStart() {
                var myVideo = document.getElementById("video");
                myVideo.src = this.videoList[this.videoIndex].src;
                document.getElementById("startExp").style.display = "none"
                document.getElementById("video1").style.display = "block";
                console.log(this.videoList);
                console.log("this is the video index when we hit continue to start: ", this.videoIndex);
                console.log(this.videoList[this.videoIndex])
            },
            testInput() {
                var myVideo = document.getElementById("video");
                if (this.videoGuess.length > 0) {
                    if (!myVideo.paused) {
                        myVideo.pause();
                    }
                }
                if (this.videoGuess.length < 1) {
                    myVideo.play();
                }
                var keyCode = event.keyCode;
                if (keyCode == 13) {
                    this.checkVideoGuess(this.videoGuess);
                    if (this.validVideoGuess == 1) {
                        myVideo.play();
                        this.currentGuess = this.videoGuess;
                        this.guessList.push(this.currentGuess);
                        this.videoGuess = "";
                        this.submitTime = myVideo.currentTime;
                        var duration = myVideo.duration;
                        var percentage = (myVideo.currentTime / duration) * 100;
                        this.percentageSubmit = percentage;
                        this.submitTimeList.push(this.submitTime);
                        this.percentageSubmitList.push(this.percentageSubmit);
                        document.getElementById("displayGuess").style.display = "block";
                    }
                }
            },
            finalGuessMethod() {
                var keyCode = event.keyCode;
                if (keyCode == 13) {
                    this.checkVideoGuess(this.videoGuess);
                    if (this.validVideoGuess == 1) {
                        this.finalGuess = this.videoGuess;
                        // this.guessList.push(this.finalGuess);
                        this.videoGuess = "";
                    }
                }
            },
            finishedVideo() {
                console.log("finished video!")
                document.getElementById("videoGuess").style.display = "none";
                document.getElementById("displayGuess").style.display = "none";
                document.getElementById("curiosityMeasure").style.display = "block";
                var myVideo = document.getElementById("video");
                myVideo.pause();
            },
            sliderFxn_curiosity() {
                var slider = document.getElementById("slider");
                this.curiosityValue = slider.value;
                this.answeredCuriosityValue = 1;
            },
            sliderFxn_linespeed() {
                var slider = document.getElementById("slider_linespeed");
                this.speedValue = slider.value;
                this.answeredSpeedValue = 1;
            },
            checkVideoGuess(videoGuess) {
                if (videoGuess.length <= 2) {
                    alert("Please Enter a Valid Guess")
                    this.videoGuess == "";
                }
                else {
                    this.validVideoGuess = 1;
                }
            },
        }
    });
};

var Questionnaire = function() {

	var error_message = "<h1>Oops!</h1><p>Something went wrong submitting your HIT. This might happen if you lose your internet connection. Press the button to resubmit.</p><button id='resubmit'>Resubmit</button>";

	record_responses = function() {

		psiTurk.recordTrialData({'phase':'postquestionnaire', 'status':'submit'});

		$('textarea').each( function(i, val) {
			psiTurk.recordUnstructuredData(this.id, this.value);
		});
		$('select').each( function(i, val) {
			psiTurk.recordUnstructuredData(this.id, this.value);
		});

	};

	prompt_resubmit = function() {
		document.body.innerHTML = error_message;
		$("#resubmit").click(resubmit);
	};

	resubmit = function() {
		document.body.innerHTML = "<h1>Trying to resubmit...</h1>";
		reprompt = setTimeout(prompt_resubmit, 10000);

		psiTurk.saveData({
			success: function() {
			    clearInterval(reprompt);
			    psiTurk.completeHIT();
                // psiTurk.computeBonus('compute_bonus', function(){
                // 	psiTurk.completeHIT(); // when finished saving compute bonus, the quit
                // });


			},
			error: prompt_resubmit
		});
	};

	// Load the questionnaire snippet
	psiTurk.showPage('postquestionnaire.html');
	psiTurk.recordTrialData({'phase':'postquestionnaire', 'status':'begin'});

	$("#next").click(function () {
	    record_responses();
	    psiTurk.saveData({
            success: function(){
                psiTurk.completeHIT(); // when finished saving compute bonus, the quit
            //     }
            // });
            // success: function(){
            //     psiTurk.computeBonus('compute_bonus', function() {
            //     	psiTurk.completeHIT(); // when finished saving compute bonus, the quit
            //     });
            },
            error: prompt_resubmit});
	});

};
// Task object to keep track of the current phase
var currentview;

/*******************
 * Run Task
 ******************/

/*$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "static/resources/chances.csv",
        dataType: "text",
        success: function(data) {
            load(data);
        },
        error: function(req, status, error){
            $("body").html("<p>" + error + "</p>");
        }
    });
});*/

/*var load = function(data) {
    $(window).load(function () {
        psiTurk.doInstructions(
            instructionPages, // a list of pages you want to display in sequence
            function () {
                currentview = new Mousetrack(data);
            } // what you want to do when you are done with instructions
        );
    });
};*/

$(window).load(function () {
    psiTurk.doInstructions(
        instructionPages, // a list of pages you want to display in sequence
        function () {
            currentview = new Curiosity();
        } // what you want to do when you are done with instructions
    );
});
