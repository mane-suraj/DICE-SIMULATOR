var userName = window.prompt("Enter you Name");
if (userName != "")
{
    document.querySelectorAll(".playerContainer h2")[0].innerHTML = userName;
}
else
{
    userName = "Player 1"
    document.querySelectorAll(".playerContainer h2")[0].innerHTML = userName;
}

const btn = document.querySelector("#rollBtn");

btn.onclick = function()
{

    var randomNumber1 = Math.floor((Math.random())*6)+1;

    var randomImage1 = "Dice"+randomNumber1+".jpg";
    var path1 = "https://raw.githack.com/mane-suraj/DICE-SIMULATOR/main/Images/"+randomImage1;
    var changeImage1 = document.querySelectorAll("img")[0];
    changeImage1.setAttribute("src", path1)

    var randomNumber2 = Math.floor((Math.random())*6)+1;
    var randomImage2 = "Dice"+randomNumber2+".jpg";
    var path2 = "https://raw.githack.com/mane-suraj/DICE-SIMULATOR/main/Images/"+randomImage2;
    var changeImage2 = document.querySelectorAll("img")[1];
    changeImage2.setAttribute("src", path2)


    var result = document.querySelector("#Result");
    result.classList.add("afterRollResult");

    if(randomNumber1>randomNumber2)
    {
        result.innerHTML = userName + " Wins!! &#x1F389;";
    }
    else if (randomNumber1<randomNumber2)
    {
        result.innerHTML = "Computer Wins!! &#x1F389;";
    }
    else
    {
        result.innerHTML = "Match Draw!";
    }
}
