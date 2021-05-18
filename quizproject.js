let currentQuestion = 0;
let score = 0;
let questions = [
   {
	"question": "In what century does the series take place?",
	"a": "24th century",
	"b": "22th century",
	"c": "26th century",
	"d": "28th century",
	"image":"quizimages/q1.jpg",
	"answer": "a"
   },
   {
	"question": "Which frightening antagonists are cyborgs that often attack the Enterprise?",
	"a": "The Ferengi",
	"b": "The Cardassians",
	"c": "The Borg",
	"d": "The Romulans",
	"image":"quizimages/q2.jpg",
	"answer": "c"
   }
 ];
 
 
 function loadQuestion() {
     
    // close light box for first question
    if (currentQuestion == 0) {
       closeLightBox();
    }
     
    // load the image
    let img = document.getElementById("image");
    img.src = questions[currentQuestion].image;
    img.style.maxWidth = "80%";
    
    // load the question and answers
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
    document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
    document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
    document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
    document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
 } // loadQuestion
 
 
 function markIt(ans) {
     
    let message = "";
    
    if (ans == questions[currentQuestion].answer) {
        
       // add 1 to score
       score++;
       
       // display score 
       document.getElementById("score").innerHTML = score + " / " + questions.length;
       
       message = "Correct!!!! Your score is " + score + " / " + questions.length;
    } else {
       message = "Incorrect :< Your score is " + score + " / " + questions.length; 
    } // else
        
   
    
    // move to the next question
    currentQuestion++;
    if (currentQuestion >= questions.length) {
       // create a special message
       message = "You are awesome or not ,or whatever, part of your mark is to give a good message based what the user's score is";
    } else {
       loadQuestion();
    }
    
    // show the lightbox
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
  
 }  // markIt
 
 function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
 } // closeLightbox
 
 
 
 
 
 
 
 
 
 
 
 
   
