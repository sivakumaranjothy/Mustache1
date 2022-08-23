function preload(){
Mustache=loadImage('m.png')
}
nosex=0;
nosey=0;

function setup(){
    canvas = createCanvas(300 ,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet =ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized')
}

function draw(){
 image(video,0,0,300,300);
  image(Mustache ,nosex,nosey,50,50);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results){
    if(results.length > 0){
        nosex=results[0].pose.nose.x-25;
        nosey=results[0].pose.nose.y;
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}
