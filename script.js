// Variables to capture text area content
var buttonNine = document.querySelector(".nineam");
var buttonTen = document.querySelector(".tenam");
var buttonEleven = document.querySelector(".elevenam");
var buttonTwelve = document.querySelector(".twelvepm");
var buttonOne = document.querySelector(".onepm");
var buttonTwo = document.querySelector(".twopm");
var buttonThree = document.querySelector(".threepm");
var buttonFour = document.querySelector(".fourpm");
var buttonFive = document.querySelector(".fivepm");

// button clicks to capture text area content into local storage

// Nine AM click event

buttonNine.addEventListener("click", function(event){
    event.preventDefault();

    var nineamText = document.getElementById("9amtext").value;
    localStorage.setItem("9amtext", nineamText);
});

// Ten AM click event

buttonTen.addEventListener("click", function(event){
    event.preventDefault();

    var tenamText = document.getElementById("10amtext").value;
    localStorage.setItem("10amtext", tenamText);
});

// 11 AM click event

buttonEleven.addEventListener("click", function(event){
    event.preventDefault();

    var elevenamText = document.getElementById("11amtext").value;
    localStorage.setItem("11amtext", elevenamText);
});

// 12 pm click event

buttonTwelve.addEventListener("click", function(event){
    event.preventDefault();

    var twelvepmText = document.getElementById("12pmtext").value;
    localStorage.setItem("12pmtext", twelvepmText);
});

// 1 pm click event

buttonOne.addEventListener("click", function(event){
    event.preventDefault();

    var onepmText = document.getElementById("1pmtext").value;
    localStorage.setItem("1pmtext", onepmText);
});

// 2 pm click event

buttonTwo.addEventListener("click", function(event){
    event.preventDefault();

    var twopmText = document.getElementById("2pmtext").value;
    localStorage.setItem("2pmtext", twopmText);
});

// 3 pm click event

buttonThree.addEventListener("click", function(event){
    event.preventDefault();

    var threepmText = document.getElementById("3pmtext").value;
    localStorage.setItem("3pmtext", threepmText);
});

// 4 pm click event

buttonFour.addEventListener("click", function(event){
    event.preventDefault();

    var fourpmText = document.getElementById("4pmtext").value;
    localStorage.setItem("4pmtext", fourpmText);
});

// 5 pm click event

buttonFive.addEventListener("click", function(event){
    event.preventDefault();

    var fivepmText = document.getElementById("5pmtext").value;
    localStorage.setItem("5pmtext", fivepmText);
});


// Assigning variable and adding text content for header date

var m = moment().format("dddd, MMMM Do YYYY");

$("#currentDay").text(m);

console.log(m);

// testing solutions for the first hour of work

// Finding hour from current moment function time - see moment documentation for Gets

var hour = moment().hours()
console.log(hour);

// testing variables

// var a = moment();
// var b = a.clone();
// console.log(b.toString());

// var c = moment().format("hA");
// console.log(c);

// text for 9 am div

// var nine = moment().hour(9);
// var nineText = nine.format("hA");
// $(".hournine").text(nineText);
// console.log(nineText.toString());

// checking on the difference in time
// var a to variable nine
// a.diff(nine, 'hours');
// console.log(a.diff(nine, 'hours'));

// checking on is before
// var d = moment(a, 'hour').isBefore(nine, 'hour');
// console.log(d);

// Using textarea and number attribute to 

$("textarea").each(function(){
    var calendarHour = parseInt($(this).attr("time"))
    if(calendarHour<hour){
        $(this).addClass("past");
    }else if(calendarHour>hour){
        $(this).addClass("future");
    }else{
        $(this).addClass("present");
    }
})

// Getting items from local storage after refresh

$("#9amtext").val(localStorage.getItem("9amtext"));

$("#10amtext").val(localStorage.getItem("10amtext"));

$("#11amtext").val(localStorage.getItem("11amtext"));

$("#12pmtext").val(localStorage.getItem("12pmtext"));

$("#1pmtext").val(localStorage.getItem("1pmtext"));

$("#2pmtext").val(localStorage.getItem("2pmtext"));

$("#3pmtext").val(localStorage.getItem("3pmtext"));

$("#4pmtext").val(localStorage.getItem("4pmtext"));

$("#5pmtext").val(localStorage.getItem("5pmtext"));









