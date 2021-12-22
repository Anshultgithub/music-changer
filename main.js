song1 = "";
song2 = "";
song1status = "";
sond2status = "";
scoreRW = 0;
scoreLW = 0;
rwx = 0;
rwy = 0;
lwx = 0;
lwy = 0;
function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup(){
c1 = createCanvas(600, 500);
c1.center()
v1 = createCapture(VIDEO);
v1.hide();
pn = ml5.poseNet(v1, modelLoaded);
pn.on('pose', gotPoses);
}
function modelLoaded(){
console.log("model has loaded")
}
function gotPoses(results){
if(results.length>0){
rwx = results[0].pose.rightWrist.x;
rwy = results[0].pose.rightWrist.y;
lwx = results[0].pose.leftWrist.x;
lwy = results[0].pose.leftWrist.y;
scoreLW = results[0].pose.keypoints[9].score;
scoreRW = results[0].pose.keypoints[10].score;
}
}
function draw(){
    image(v1, 0, 0, 600, 500);
    fill("red");
    song1status = song1.isPlaying();
    song2status = song2.isPlaying();
    if(scoreLW>0.2)
{
circle(lwx, lwy, 20);
song1.stop();
if(song2status == false){
song2.play();
document.getElementById("song").innerHTML = "peterpan";
}
}
if(scoreRW>0.2)
{
circle(rwx, rwy, 20);
song2.stop();
if(song1status == false){
    song1.play();
    document.getElementById("song").innerHTML = "harrypottermusic";
}
}


    }
    function play(){
        song1.play();
        song2.play();
    }