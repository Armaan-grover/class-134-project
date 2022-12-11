var babyImage
var objects = [];

var confidence, label, x, y, width, height;



function preload() {
    babyImage = loadImage("download.png")
}


function setup() {
    canvas = createCanvas(700, 400)
    canvas.center()
    babyImage = createCapture(VIDEO)
    babyImage.hide()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("message").innerHTML = "Status: detecting baby"
}

function modelLoaded() {
    console.log("The model has loaded!")
    objectDetector.detect(video, gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.error(error)
    }
    else {
        console.log(results)
        objects = results;
    }
}

function draw() {
    image(babyImage, 0, 0, 700, 400)

   
}