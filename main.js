function preload(){
 
}
function setup(){
 video= createCapture(VIDEO);
 video.size(550,500);
 canvas= createCanvas(550,500);
 canvas.position(560,150)
 posenet= ml5.poseNet(video, modeloaded);
 posenet.on("pose",gotposes);
}
function draw(){
 background("palevioletred");
}
function modeloaded(){
    console.log("model is loaded");
}
function gotposes(results){
   if (results.length>0){
    console.log(results);
   }
}