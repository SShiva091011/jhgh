
song1 = "";
song2 = "";

leftWristX = 0;
leftWristY = 0;


rightWristX = 0;
rightWristY = 0;

scoreLeftWrist = 0;
scoreRightWrist = 0;

song1_status = "";
song2_status = "";

function preload
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}


function setup
{
    canvas = createCanvas(600, 400);
    canvas.position(250, 200);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded()
{
    console.log('PoseNet Is Initializeed');
}

function draw
{
    image(video, 0, 0, 600, 400);

    song1_status = song1.isPlaying();
    song2_status = song2.isPlaying();

    fill("#fafffa");
    stroke("#fafffa");

    if(scoreRightWrist > 0.2)
    {
        
    }
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        coreRightWrist = results[0].pose.keypoints[10].score;

        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = "+scoreRightWrist+"scoreLeftWrist = "+ scoreLeftWrist);
        
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+ leftWristX +"leftWristY = "+ leftWristY);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+ leftWristX +"rightWristY = "+ leftWristY);
    }
}