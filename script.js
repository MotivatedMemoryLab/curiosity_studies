Vue.use(VueFire);
var app  = new Vue({
    el: "#app",
    data : { 
        videoGuess: "",
        currentGuess: "",
        submitTime: 0,
        percentageSubmit: 0,
        videoList: [
            {src: "videos/ballerina.mp4", type: "video/mp4", answer: "Dancer"},
            {src: "videos/ballerina.mp4", type: "video/mp4", answer: "Dancer"},
            {src: "videos/frog.mp4", type: "video/mp4", answer: "Frog"},
            {src: "videos/hand.mp4", type: "video/mp4", answer: "Hand"},
//            {src: "videos/pomegranate.mp4", type: "video/mp4", answer: "Pomegranate"},
//            {src: "videos/airplane.mp4", type: "video/mp4", answer: "Airplane"},
//            {src: "videos/ant.mp4", type: "video/mp4", answer: "Ant"},
//            {src: "videos/apple.mp4", type: "video/mp4", answer: "Apple"},
//            {src: "videos/astronaut.mp4", type: "video/mp4", answer: "Astronaut"},
//            {src: "videos/bananas.mp4", type: "video/mp4", answer: "Bananas"},
//            {src: "videos/bear.mp4", type: "video/mp4", answer: "Bear"},
//            {src: "videos/bee.mp4", type: "video/mp4", answer: "Bee"},
//            {src: "videos/bellpepper.mp4", type: "video/mp4", answer: "Bell Pepper"},
//            {src: "videos/bike.mp4", type: "video/mp4", answer: "Bike"},
//            {src: "videos/books.mp4", type: "video/mp4", answer: "Books"},
//            {src: "videos/bottle.mp4", type: "video/mp4", answer: "Bottle"},
//            {src: "videos/brain.mp4", type: "video/mp4", answer: "Brain"},
//            {src: "videos/broccoli.mp4", type: "video/mp4", answer: "Broccoli"},
//            {src: "videos/bull.mp4", type: "video/mp4", answer: "Bull"},
//            {src: "videos/burger.mp4", type: "video/mp4", answer: "Burger"},
//            {src: "videos/butterfly.mp4", type: "video/mp4", answer: "Butterfly"},
//            {src: "videos/cactus.mp4", type: "video/mp4", answer: "Cactus"},
//            {src: "videos/cake.mp4", type: "video/mp4", answer: "Cake"},
//            {src: "videos/camel.mp4", type: "video/mp4", answer: "Camel"},
//            {src: "videos/camera.mp4", type: "video/mp4", answer: "Camera"},
//            {src: "videos/candle.mp4", type: "video/mp4", answer: "Candle"},
//            {src: "videos/cappuccino.mp4", type: "video/mp4", answer: "Cappuccino"},
//            {src: "videos/car.mp4", type: "video/mp4", answer: "Car"},
//            {src: "videos/carrots.mp4", type: "video/mp4", answer: "Carrots"},
//            {src: "videos/cat.mp4", type: "video/mp4", answer: "Cat"},
//            {src: "videos/chef.mp4", type: "video/mp4", answer: "Chef"},
//            {src: "videos/constructionworker.mp4", type: "video/mp4", answer: "Construction Worker"},
//            {src: "videos/corn.mp4", type: "video/mp4", answer: "Corn"},
//            {src: "videos/crab.mp4", type: "video/mp4", answer: "Crab"},
//            {src: "videos/cupcake.mp4", type: "video/mp4", answer: "Cupcake"},
//            {src: "videos/dandelion.mp4", type: "video/mp4", answer: "Dandelion"},
//            {src: "videos/deer.mp4", type: "video/mp4", answer: "Deer"},
//            {src: "videos/dog.mp4", type: "video/mp4", answer: "Dog"},
//            {src: "videos/dolphin.mp4", type: "video/mp4", answer: "Dolphin"},
//            {src: "videos/drum.mp4", type: "video/mp4", answer: "Drum"},
//            {src: "videos/drummer.mp4", type: "video/mp4", answer: "Drummer"},
//            {src: "videos/eel.mp4", type: "video/mp4", answer: "Eel"},
//            {src: "videos/elephant.mp4", type: "video/mp4", answer: "Elephant"},
//            {src: "videos/fan.mp4", type: "video/mp4", answer: "Fan"},
//            {src: "videos/faucet.mp4", type: "video/mp4", answer: "Faucet"},
//            {src: "videos/flamingo.mp4", type: "video/mp4", answer: "Flamingo"},
//            {src: "videos/fox.mp4", type: "video/mp4", answer: "fox"},
//            {src: "videos/frenchfries.mp4", type: "video/mp4", answer: "French Fries"},
//            {src: "videos/frenchhorn.mp4", type: "video/mp4", answer: "French Horn"},
//            {src: "videos/frog.mp4", type: "video/mp4", answer: "Frog"},
//            {src: "videos/gamecontroller.mp4", type: "video/mp4", answer: "Game Controller"},
//            {src: "videos/giraffe.mp4", type: "video/mp4", answer: "Giraffe"},
//            {src: "videos/glasses.mp4", type: "video/mp4", answer: "Glasses"},
//            {src: "videos/golfer.mp4", type: "video/mp4", answer: "Golfer"},
//            {src: "videos/gorilla.mp4", type: "video/mp4", answer: "Gorilla"},
//            {src: "videos/guitar.mp4", type: "video/mp4", answer: "Guitar"},
//            {src: "videos/hand.mp4", type: "video/mp4", answer: "Hand"},
//            {src: "videos/hardhat.mp4", type: "video/mp4", answer: "Hard Hat"},
//            {src: "videos/harp.mp4", type: "video/mp4", answer: "Harp"},
//            {src: "videos/headphones.mp4", type: "video/mp4", answer: "Headphones"},
//            {src: "videos/heart.mp4", type: "video/mp4", answer: "Heart"},
//            {src: "videos/hedgehog.mp4", type: "video/mp4", answer: "Hedgehog"},
//            {src: "videos/highheel.mp4", type: "video/mp4", answer: "High Heel"},
//            {src: "videos/horse.mp4", type: "video/mp4", answer: "Horse"},
//            {src: "videos/hotairballoon.mp4", type: "video/mp4", answer: "Hot Air Balloon"},
//            {src: "videos/hourglass.mp4", type: "video/mp4", answer: "Hourglass"},
//            {src: "videos/iceberg.mp4", type: "video/mp4", answer: "Iceberg"},
//            {src: "videos/icecream.mp4", type: "video/mp4", answer: "Ice Cream"},
//            {src: "videos/jellyfish.mp4", type: "video/mp4", answer: "Jelly Fish"},
//            {src: "videos/kangaroo.mp4", type: "video/mp4", answer: "Kangaroo"},
//            {src: "videos/key.mp4", type: "video/mp4", answer: "Key"},
//            {src: "videos/lamp.mp4", type: "video/mp4", answer: "Lamp"},
//            {src: "videos/laptop.mp4", type: "video/mp4", answer: "Laptop"},
//            {src: "videos/lightbulb.mp4", type: "video/mp4", answer: "Light Bulb"},
//            {src: "videos/lighthouse.mp4", type: "video/mp4", answer: "Light House"},
//            {src: "videos/lion.mp4", type: "video/mp4", answer: "Lion"},
//            {src: "videos/lizard.mp4", type: "video/mp4", answer: "Lizard"},
//            {src: "videos/llama.mp4", type: "video/mp4", answer: "Llama"},
//            {src: "videos/lungs.mp4", type: "video/mp4", answer: "Lungs"},
//            {src: "videos/microphone.mp4", type: "video/mp4", answer: "Microphone"},
//            {src: "videos/microscope.mp4", type: "video/mp4", answer: "Microscope"},
//            {src: "videos/moose.mp4", type: "video/mp4", answer: "Moose"},
//            {src: "videos/mountains.mp4", type: "video/mp4", answer: "Mountains"},
//            {src: "videos/mushroom.mp4", type: "video/mp4", answer: "Mushroom"},
//            {src: "videos/nut.mp4", type: "video/mp4", answer: "Nut"},
//            {src: "videos/okra.mp4", type: "video/mp4", answer: "Okra"},
//            {src: "videos/orca.mp4", type: "video/mp4", answer: "Orca"},
//            {src: "videos/owl.mp4", type: "video/mp4", answer: "Owl"},
//            {src: "videos/paintbrush.mp4", type: "video/mp4", answer: "Paintbrush"},
//            {src: "videos/palmtree.mp4", type: "video/mp4", answer: "Palm Tree"},
//            {src: "videos/pancakes.mp4", type: "video/mp4", answer: "Pancakes"},
//            {src: "videos/panda.mp4", type: "video/mp4", answer: "Panda"},
//            {src: "videos/papaya.mp4", type: "video/mp4", answer: "Papaya"},
//            {src: "videos/pear.mp4", type: "video/mp4", answer: "Pear"},
//            {src: "videos/pencil.mp4", type: "video/mp4", answer: "Pencil"},
//            {src: "videos/penguin.mp4", type: "video/mp4", answer: "Penguin"},
//            {src: "videos/phonograph.mp4", type: "video/mp4", answer: "Phonograph"},
//            {src: "videos/pig.mp4", type: "video/mp4", answer: "Pig"},
//            {src: "videos/pineapple.mp4", type: "video/mp4", answer: "Pineapple"},
//            {src: "videos/pinecone.mp4", type: "video/mp4", answer: "Pinecone"},
//            {src: "videos/pinetree.mp4", type: "video/mp4", answer: "Pine Tree"},
//            {src: "videos/pipe.mp4", type: "video/mp4", answer: "Pipe"},
//            {src: "videos/pizza.mp4", type: "video/mp4", answer: "Pizza"},
//            {src: "videos/pot.mp4", type: "video/mp4", answer: "Pot"},
//            {src: "videos/rabbit.mp4", type: "video/mp4", answer: "Rabbit"},
//            {src: "videos/raccoon.mp4", type: "video/mp4", answer: "Raccoon"},
//            {src: "videos/ram.mp4", type: "video/mp4", answer: "Ram"},
//            {src: "videos/rhino.mp4", type: "video/mp4", answer: "Rhino"},
//            {src: "videos/rooster.mp4", type: "video/mp4", answer: "Rooster"},
//            {src: "videos/rose.mp4", type: "video/mp4", answer: "Rose"},
//            {src: "videos/sailboat.mp4", type: "video/mp4", answer: "Sailboat"},
//            {src: "videos/saxophone.mp4", type: "video/mp4", answer: "Saxophone"},
//            {src: "videos/scale.mp4", type: "video/mp4", answer: "Scale"},
//            {src: "videos/scissors.mp4", type: "video/mp4", answer: "Scissors"},
//            {src: "videos/scorpion.mp4", type: "video/mp4", answer: "Scorpion"},
//            {src: "videos/seahorse.mp4", type: "video/mp4", answer: "Seahorse"},
//            {src: "videos/seal.mp4", type: "video/mp4", answer: "Seal"},
//            {src: "videos/shark.mp4", type: "video/mp4", answer: "Shark"},
//            {src: "videos/shell.mp4", type: "video/mp4", answer: "Shell"},
//            {src: "videos/skateboard.mp4", type: "video/mp4", answer: "Skateboard"},
//            {src: "videos/sloth.mp4", type: "video/mp4", answer: "Sloth"},
//            {src: "videos/snail.mp4", type: "video/mp4", answer: "Snail"},
//            {src: "videos/sneaker.mp4", type: "video/mp4", answer: "Sneaker"},
//            {src: "videos/squid.mp4", type: "video/mp4", answer: "Squid"},
//            {src: "videos/squirrel.mp4", type: "video/mp4", answer: "Squirrel"},
//            {src: "videos/succulent.mp4", type: "video/mp4", answer: "Succulent"},
//            {src: "videos/surfer.mp4", type: "video/mp4", answer: "Surfer"},
//            {src: "videos/swordfish.mp4", type: "video/mp4", answer: "Swordfish"},
//            {src: "videos/taco.mp4", type: "video/mp4", answer: "taco"},
//            {src: "videos/television.mp4", type: "video/mp4", answer: "Television"},
//            {src: "videos/tiger.mp4", type: "video/mp4", answer: "Tiger"},
//            {src: "videos/train.mp4", type: "video/mp4", answer: "Train"},
//            {src: "videos/tulip.mp4", type: "video/mp4", answer: "Tulip"},
//            {src: "videos/turtle.mp4", type: "video/mp4", answer: "Turtle"},
//            {src: "videos/violin.mp4", type: "video/mp4", answer: "Violin"},
//            {src: "videos/walrus.mp4", type: "video/mp4", answer: "Walrus"},
//            {src: "videos/watermelon.mp4", type: "video/mp4", answer: "Watermelon"},
//            {src: "videos/wave.mp4", type: "video/mp4", answer: "Wave"},
//            {src: "videos/whale.mp4", type: "video/mp4", answer: "Whale"},
//            {src: "videos/wineglass.mp4", type: "video/mp4", answer: "Wine Glass"},
//            {src: "videos/wolf.mp4", type: "video/mp4", answer: "Wolf"},
//            {src: "videos/yogi.mp4", type: "video/mp4", answer: "Yogi"},
//            {src: "videos/zebra.mp4", type: "video/mp4", answer: "Zebra"},
            
        ],
        videoIndex: 0,
        videoAnswer: "",
        curiosityValue: 0,
        guessList: [],
        data: [],
        correct: 0,
        answeredCorrect: 0,
        answeredCuriosityValue: 0, 
        validVideoGuess: 0,
        
        
        
    },
    computed: {
        // return todos that match the currently selected filter
        filteredTodos () {
            return filters[this.visibility](this.todos);
        }
    },
    firebase:{
//        accounts: usersRef,
//        profilePics: imgRef
    },
    methods:{
        startExp(){
            document.getElementById("welcome").style.display = "none";
            document.getElementById("startExp").style.display = "block"
            var currentIndex = this.videoList.length;
            var temporaryValue;
            var randomIndex;
            while (0 !== currentIndex){
                randomIndex = Math.floor (Math.random() * currentIndex);
                currentIndex -= 1;
                
                temporaryValue = this.videoList[currentIndex];
                this.videoList[currentIndex] = this.videoList[randomIndex];
                this.videoList[randomIndex] = temporaryValue;
            }
//            for (i = 0; i < this.videoList.length; i++){
//                console.log(this.videoList[i]);
//            }
//            console.log(this.videoList[this.videoIndex]);
             
        },
        nextVideo(){
            this.data.push({
                submitTime: this.submitTime,
                videoGuess: this.currentGuess,
                percentageSubmit: this.percentageSubmit,
                guessList: this.guessList,
                curiosityValue: this.curiosityValue,
                correct: this.correct,
            })
//            Here you would need to push this.data to the MTurk server so it is saved on the database
            console.log(this.data);
            console.log("This is the video index", this.videoIndex);
            console.log("this is the videoList length: ", this.videoList.length);
            this.videoIndex ++;
            this.submitTime = 0;
            this.percentageSubmit = 0;
            this.videoGuess = "";
            this.currentGuess = "";
            this.curiosityValue = 50;
            this.guessList = [];
            this.answeredCuriosityValue = 0;
            this.answeredSlidervalue = 0;
            this.answeredCorrect = 0;
        },
        continueToStart(){
            this.nextVideo();
            document.getElementById("startExp").style.display = "none"
            document.getElementById("video1").style.display = "block";

        },
        testInput(){
            var myVideo = document.getElementById("video");
            if (this.videoGuess.length > 0){
                if (! myVideo.paused){
                    myVideo.pause();
                    this.submitTime = myVideo.currentTime;
                    var duration = myVideo.duration; 
                    var percentage = (myVideo.currentTime / duration ) * 100; 
                    this.percentageSubmit = percentage;
                    
                }
            }
            if (this.videoGuess.length < 1){
                myVideo.play();
            }
            var keyCode = event.keyCode;
            if (keyCode == 13){
                this.checkVideoGuess(this.videoGuess);
                if (this.validVideoGuess == 1){
                 myVideo.play();
                this.currentGuess = this.videoGuess;
                this.guessList.push(this.currentGuess);
               this.videoGuess = "";
                document.getElementById("displayGuess").style.display = "block";
                }

            }
        },
        finishedVideo(){
            document.getElementById("videoGuess").style.display = "none";
            document.getElementById("displayGuess").style.display = "none";
            document.getElementById("curiosityMeasure").style.display = "block";
            var myVideo = document.getElementById("video");
            myVideo.pause();
        },
        sliderFxn(){
            var slider = document.getElementById("slider");
            this.curiosityValue = slider.value;
            this.answeredCuriosityValue = 1;
        },
        yesCorrect(){
            this.correct = 1;
            this.answeredCorrect = 1; 
        },
        noCorrect(){
            this.correct = 0;
            this.answeredCorrect = 1;
        },
        checkVideoGuess(videoGuess){
            if (videoGuess.length <=2){
                alert("Please Enter a Valid Guess")
                this.videoGuess == "";
            }
            else{
                this.validVideoGuess = 1;
            }
        },
        

    }
})