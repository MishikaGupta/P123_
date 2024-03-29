leftWristX = 0;
rightWristX = 0;
difference = 0;


function setup() {
    video = createCapture(VIDEO)
    video.size(550 , 500);

    canvas = createCanvas(550 , 550);
    canvas.position(560 , 100);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw() {
    background('#969A97');
    fill('#F90093');
    textSize(difference);
    text('Coding' , 50 , 400);
    document.getElementById("font_size").innerHTML = " Size of the text = " + difference + "px"
}

function modelLoaded() {
    console.log('Model Started!');
}

function gotPoses(results) {
   
    if(results.length > 0 )
    {
        console.log(results);
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " , rightWristX = " + rightWristX + " , difference = " + difference);
    }


}

