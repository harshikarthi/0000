var prediction_1="";
var prediction_2="";

//setting webcam properties
Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});

//getting camera element from the "HTML"
camera=document.getElementById("camera");

//attaching the webcam to the CAMERA DIV
Webcam.attach(camera);

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_img' src="+data_uri+">";
    });  
}

console.log('ml5 version : '+ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wOWH5q40w/model.json",modelLoaded);

function modelLoaded()
{
    console.log ("model loaded");
}

function speak()
{
var synth=window.speechSynthesis;
speak_data1="The first prediction is "+prediction_1;
speak_data2="The second prediction is "+prediction_2;
var uttar_this=new SpeechSynthesisUtterance(speak_data1+speak_data2);
synth.speak(uttar_this);
}
