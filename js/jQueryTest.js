$(document).ready(function() {
    function check() {
        var c = 0;
        var q1 = document.quiz.question1.value;
        var q2 = document.quiz.question2.value;
        var q3 = document.quiz.question3.value;
        var q4 = document.quiz.question4.value;
        var q5 = document.quiz.question5.value;
        var q6 = document.quiz.question6.value;
        var q7 = document.quiz.question7.value;
        var q8 = document.quiz.question8.value;
        var q9 = document.quiz.question9.value;
        var result = document.getElementById('result');
        var quiz = document.getElementById('quiz');

        if (q1 == "D") {
            c++
        }
        if (q2 == "B") {
            c++
        }
        if (q3 == "A") {
            c++
        }
        if (q4 == "C") {
            c++
        }
        if (q5 == "A") {
            c++
        }
        if (q6 == "B") {
            c++
        }
        if (q7 == "B") {
            c++
        }
        if (q8 == "D") {
            c++
        }
        if (q9 == "A") {
            c++
        }

        quiz.style.display = "none";
        if (c <= 3) {
            result.textContent = 'Imao/la si ${c} tačnih odgovora! Tvoj nivo je A1 :)';
        } else if (c <= 5) {
            result.textContent = 'Imao/la si ${c} tačnih odgovora! Tvoj nivo je A2 :)';
        } else if (c <= 7) {
            result.textContent = 'Imao/la si ${c} tačnih odgovora! Tvoj nivo je B1 :)';
        } else if (c <= 8) {
            result.textContent = 'Imao/la si ${c} tačnih odgovora! Tvoj nivo je B2 :)';
        } else {
            result.textContent = 'Imao/la si ${c} tačnih odgovora! Tvoj nivo je C1 :)';
        }
    }
  });
