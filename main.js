function preload() {
}
function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    Video=createCapture(VIDEO);
    Video.size(300,300);
    Video.hide();
    poseNet=ml5.poseNet(Video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
console.log("pose net is initialized");
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-20;
        console.log(noseX,noseY);
        }
}

function draw() {
    image(Video,0,0,300,300);
}
function take_snapshot() {
    save("myFilterImage.png");
}
