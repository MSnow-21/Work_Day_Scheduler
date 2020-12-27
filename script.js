
var buttonNine = document.querySelector(".nineam");

buttonNine.addEventListener("click", function(event){
    event.preventDefault();

    var nineamText = document.getElementById("9amtext").value;
    localStorage.setItem("9amtext", nineamText);


});


// Assigning variable and adding text content for header date

var m = moment().format("dddd, MMMM Do YYYY")

$("#currentDay").text(m);

console.log(m);

// 




