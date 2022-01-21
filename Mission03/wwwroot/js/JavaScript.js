////document.getElementById("btnSend").addEventListener("click", function () {
////    alert("This worked");
////})

//// Assignments 55 %
//Group Project 5 %
//    Quizzes 10 %
//        Exams 20 %
//            INTEX 10


$("#btnSend").click(function () {
    /*establishing variables for the different grade types and assigning them
     their corresponding decimal value for grade weight*/
    var assignment = $("#assval").val() * .55
    var gproject = $("#groupval").val() * .05
    var quizzes = $("#quizval").val() * .10
    var exams = $("#examval").val() * .20
    var intex = $("#intexval").val() * .10
    var tot = assignment + gproject + quizzes + exams + intex;
    
    var letter = 'F';
    /*series of if/elseif statements to output the correct letter grade based on input*/
    if (tot > 89) {
        letter = 'A'
    }
    else if (tot > 79) {
        letter = 'B'
    }
    else if (tot > 69) {
        letter = 'C'
    }
    else if (tot > 59) {
        letter = 'D'
    }
    /*alert box to output the grade*/
    alert("Percentage: " + tot + "\n" +
        "Grade: " + letter);

    /*$("#Buster").fadeToggle(); just playin*/
})


