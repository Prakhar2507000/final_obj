function setup()
{
    canvas = creatCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : detecting Objects";
}

img = "";
status = "";
objects = [];

function preload()
{
    img = loadImage('room.jpg');
}

function draw()
{
image (video, 0, 0, 380, 380);

if(status != "")
{
r = random(255);
g = random(255);
b = random(255)

    objectDetector.detect(video, gotResult);
    for (i = 0; i < object.lenght; i++)
    {
        document.getElementById("status").innerHTML = "Status : Object Detected";
document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.lenght;
            fill("r,g,b");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            nofill();
            stroke("r,g,b");
            rect(object[i].x, objects[i].y, objects[i].width, object[i].height);
        }
    } 


    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke('#FF0000')
    rect(30, 60, 450,350); 
}

function modelLoaded()
{
console.log("Model Loaded!")
status = true;
objectDetector.detect(video, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}