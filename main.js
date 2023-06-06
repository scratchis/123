noseX=0;
noseY=0;
function preload(){
    clown_nose=loadImage("https://i.postimg.cc/JhTfRfS8/Moustache-PNG-Clipart.png")
}
function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modalLoaded);
    poseNet.on("pose",gotPoses);
}
function modalLoaded(){
    console.log("PoseNet Is Initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-10;
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
    }
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,30,25);
}
function take_snapshot(){
    save("myFilterImage.png");
}