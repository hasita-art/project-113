function preload(){

}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 400, 400);
    strokeWeight(5);
    stroke("green");
    rect(15, 10, 370, 10);
    rect(10, 15, 10, 370);
    rect(15, 379, 370, 10);
    rect(379, 15, 10, 370);

    fill("pink");
    circle(15, 15, 25);
    circle(385, 15, 25);
    circle(385, 385, 25);
    circle(15, 385, 25);
}

function take_snapshot(){
    save('birthday.png');
}