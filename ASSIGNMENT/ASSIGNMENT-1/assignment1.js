let answers = {
    q1: "class",
    q2: "3",
    q3: "4",
    q4: "9",
    q5: "5"
};

let time = 60;
let timer;


function startQuiz() {

    document.getElementById("startPage").style.display = "none";

    document.getElementById("quizPage").style.display = "block";

    document.getElementById("q1").style.display = "block";

    startTimer(1);
}


function startTimer(question) {

    time = 60;

    document.getElementById("timer" + question).innerHTML =
        "Time: 01:00";

    timer = setInterval(function() {

        time--;

        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        document.getElementById("timer" + question).innerHTML =
            "Time: 0" + minutes + ":" + seconds;


        if (time == 0) {

            clearInterval(timer);

            let q = document.getElementById("q" + question);

            let options = q.getElementsByTagName("input");

            for (let i = 0; i < options.length; i++) {

                options[i].disabled = true;
            }


            if (question < 5) {

                nextQuestion(question);

            } else {

                submitbutton();
            }
        }

    }, 1000);
}


function checkAnswer(option, question) {

    if (option.value == answers[question]) {

        option.parentElement.style.background = "lightgreen";

    } else {

        option.parentElement.style.background = "#ffcccc";
    }


    let q = document.getElementById(question);

    let options = q.getElementsByTagName("input");

    for (let i = 0; i < options.length; i++) {

        options[i].disabled = true;
    }
}


function nextQuestion(current) {

    clearInterval(timer);

    document.getElementById("q" + current).style.display = "none";

    document.getElementById("q" + (current + 1)).style.display = "block";

    startTimer(current + 1);
}


function submitbutton() {

    clearInterval(timer);

    let score = 0;

    for (let i = 1; i <= 5; i++) {

        let question = document.getElementById("q" + i);

        let selected = question.querySelector(
            "input[type='radio']:checked"
        );

        if (selected && selected.value == answers["q" + i]) {

            score++;
        }
    }


    document.getElementById("q5").style.display = "none";

    document.getElementById("result").style.display = "block";

    document.getElementById("score").innerHTML =
        "Your Score: " + score + " / 5";
}