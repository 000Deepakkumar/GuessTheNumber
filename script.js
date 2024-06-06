document.querySelector("#again").addEventListener('click', function () {
    document.querySelector(".win-lose").textContent = "🏷️ Start guessing...";
    tofind = Math.trunc((Math.random() * 100) + 1)
    score = 10
    document.querySelector("body").style.backgroundColor = "black";
})

var score = document.querySelector(".score").textContent;
var tofind = Math.trunc((Math.random() * 100) + 1)

document.querySelector("#check").addEventListener("click", function () {

    const value = document.querySelector(".input").value;
    let highscore = document.querySelector(".highscore").textContent;

    if (score < 1) {
        document.querySelector(".score").textContent = 0
        document.querySelector(".win-lose").textContent = "☠️ You have Lost the Game !";
    }

    else {

        if (!value)
            document.querySelector(".win-lose").textContent = " ⚠️ No User Input!";

        else if (value > tofind) {
            document.querySelector(".win-lose").textContent = "📈 Too high !";
            score--;
            document.querySelector(".score").textContent = score
        }

        else if (value < tofind) {
            document.querySelector(".win-lose").textContent = "📉 Too low !";
            score--;
            document.querySelector(".score").textContent = score
        }

        else {
            document.querySelector(".win-lose").textContent = "🌟 You have Win the Game !";
            if (highscore < score) {
                document.querySelector(".highscore").textContent = score
            }
            document.querySelector("body").style.backgroundColor = "green";
        }
    }

}) 
