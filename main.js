var nose_x, nose_y;
function preload(){
mustache=loadImage("https://i.postimg.cc/mkgdSpQ5/png-clipart-moustache-moustache.png")
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}

function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(nose_x,nose_y,20);
    image(mustache,nose_x-15,nose_y-15,30,30);
}

function take_snapshot(){
    save('selfie.png')
}

function modelloaded(){
    console.log("poseNet is initialized");
}

function gotposes(results){
    if (results.length>0) {
        console.log(results);
        console.log("x position of the nose is "+results[0].pose.nose.x);
        console.log("y position of the nose is "+results[0].pose.nose.y);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
    }
}