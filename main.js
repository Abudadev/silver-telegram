// https://teachablemachine.withgoogle.com/models/iWJnnogO3/

var camera = document.getElementById("camera");
var perform_move = document.getElementById("perform_move").innerHTML;
var Random;
// <!----vars---->

function back(){
    window.location = "index.html";
}

function goto1(){
    window.location = "index1.html";
}

function goto2(){
    window.location = "index2.html";
}

function takesnap(){
 Webcam.snap(function(data_uri){
   document.getElementById("result").innerHTML = '<img src="'+data_uri+'" id="picture1"/>'
 });
}
// <!--basic functions-->

Webcam.set({
   width:370,
   height:300,
   image_format:"png",
   image_Quality:90
});

Webcam.attach(camera);

function randomnum(){
    Random = Math.random() * 17;
    ifs();
}

function ifs(){
    if(Random > 2){
        document.getElementById("perform_move").innerHTML = "Jab!";
        setTimeout(function(){
            takesnap();
        }, 5000);
        check();
    }

    if(Random > 4){
        document.getElementById("perform_move").innerHTML = "Cross!";
        setTimeout(function(){
            takesnap();
        }, 5000);
        check();
    }

    if(Random > 6){
        document.getElementById("perform_move").innerHTML = "Kick!";
        setTimeout(function(){
            takesnap();
        }, 5000);
        check();
    }
    
    if(Random > 8){
        document.getElementById("perform_move").innerHTML = "Uppercut!";
        setTimeout(function(){
            takesnap();
        }, 5000);
        check();
    }

    if(Random > 10){
        document.getElementById("perform_move").innerHTML = "Stance!";
        setTimeout(function(){
            takesnap();
        }, 5000);
        check();
    }

    if(Random > 12){
        document.getElementById("perform_move").innerHTML = "Hook!";
        setTimeout(function(){
            takesnap();
        }, 5000);
        check();
    }

    if(Random > 14){
        document.getElementById("perform_move").innerHTML = "Block!";
        setTimeout(function(){
            takesnap();
        }, 5000);
        check();
    }

    if(Random > 16){
        document.getElementById("perform_move").innerHTML = "Jab and Cross!";
        setTimeout(function(){
            takesnap();
        }, 7000);
        check();
    }
    setTimeout(function(){
    randomnum();
    }, 2000);
}

function check(){
    img = document.getElementById("picture1");
 classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/iWJnnogO3/model.json", work);
 classifier.classify(img,gotresults);
}

function work(){
    console.log("It is working!");
}

function gotresults(error,results){
 if(error){
    console.error(error);
 }

 else{
    console.log(results);

 if(results[0].label == "Jab" && results[0].confidence > 0.002){
    score = score + 1;
  document.getElementById("score").innerHTML = score;
 }

 if(results[0].label == "Cross" && results[0].confidence > 0.002){
    score = score + 1;
  document.getElementById("score").innerHTML = score;
 }

 if(results[0].label == "Kick" && results[0].confidence > 0.002){
    score = score + 1;
  document.getElementById("score").innerHTML = score;
 }

 if(results[0].label == "Upercut" && results[0].confidence > 0.002){
    score = score + 1;
  document.getElementById("score").innerHTML = score;
 }

 if(results[0].label == "Stance" && results[0].confidence > 0.002){
    score = score + 1;
  document.getElementById("score").innerHTML = score;
 }

 if(results[0].label == "Hook" && results[0].confidence > 0.002){
    score = score + 1;
  document.getElementById("score").innerHTML = score;
 }

 if(results[0].label == "Block" && results[0].confidence > 0.002){
    score = score + 1;
  document.getElementById("score").innerHTML = score;
 }

 if(results[0].label == "Jab and Cross" && results[0].confidence > 0.002){
    score = score + 1;
  document.getElementById("score").innerHTML = score;
 }

}
}

// <!--Practice page functions-->



