// Variables for for-loops and classes

var timeList = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var timeIdent = ["9amlink", "10amlink", "11amlink", "12pmlink", "1pmlink", "2pmlink", "3pmlink", "4pmlink", "5pmlink"];
var textTime = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

// Row to append columns to

var rowDiv = $(".container");
var makeRowDiv = $("<div>");
rowDiv.append(makeRowDiv);
makeRowDiv.attr("class", "row");

var timingList = $(".row");

for (var i=0; i<timeList.length; i++){
    var newTimingDiv = $("<div>"+timeList[i]+"</div>");
    timingList.append(newTimingDiv);
    newTimingDiv.attr({"class":"hour col-md-1","id":timeIdent[i]});
}

//9am Linking

var textList9 = $("#9amlink");
var newTextArea9 = $("<textarea>");
textList9.after(newTextArea9);
newTextArea9.attr({"class":"col-md-10","rows":"3","cols":"50", "id":"9amtext", "time":"9", "name":"datearea9am"});

var buttonLink9 = $("#9amtext");
var newButton9 = $("<button>");
buttonLink9.after(newButton9);
newButton9.attr({"type":"submit","class":"nineam saveBtn col-md-1"});

//10am Linking

var textList10 = $("#10amlink");
var newTextArea10 = $("<textarea>");
textList10.after(newTextArea10);
newTextArea10.attr({"class":"col-md-10","rows":"3","cols":"50", "id":"10amtext", "time":"10", "name":"datearea10am"});

var buttonLink10 = $("#10amtext");
var newButton10 = $("<button>");
buttonLink10.after(newButton10);
newButton10.attr({"type":"submit","class":"tenam saveBtn col-md-1"});

//11am Linking

var textList11 = $("#11amlink");
var newTextArea11 = $("<textarea>");
textList11.after(newTextArea11);
newTextArea11.attr({"class":"col-md-10","rows":"3","cols":"50", "id":"11amtext", "time":"11", "name":"datearea11am"});

var buttonLink11 = $("#11amtext");
var newButton11 = $("<button>");
buttonLink11.after(newButton11);
newButton11.attr({"type":"submit","class":"elevenam saveBtn col-md-1"});

//12pm Linking

var textList12 = $("#12pmlink");
var newTextArea12 = $("<textarea>");
textList12.after(newTextArea12);
newTextArea12.attr({"class":"col-md-10","rows":"3","cols":"50", "id":"12pmtext", "time":"12", "name":"datearea12pm"});

var buttonLink12 = $("#12pmtext");
var newButton12 = $("<button>");
buttonLink12.after(newButton12);
newButton12.attr({"type":"submit","class":"twelvepm saveBtn col-md-1"});

//1pm Linking

var textList1 = $("#1pmlink");
var newTextArea1 = $("<textarea>");
textList1.after(newTextArea1);
newTextArea1.attr({"class":"col-md-10","rows":"3","cols":"50", "id":"1pmtext", "time":"13", "name":"datearea1pm"});

var buttonLink1 = $("#1pmtext");
var newButton1 = $("<button>");
buttonLink1.after(newButton1);
newButton1.attr({"type":"submit","class":"onepm saveBtn col-md-1"});

//2pm Linking

var textList2 = $("#2pmlink");
var newTextArea2 = $("<textarea>");
textList2.after(newTextArea2);
newTextArea2.attr({"class":"col-md-10","rows":"3","cols":"50", "id":"2pmtext", "time":"14", "name":"datearea2pm"});

var buttonLink2 = $("#2pmtext");
var newButton2 = $("<button>");
buttonLink2.after(newButton2);
newButton2.attr({"type":"submit","class":"twopm saveBtn col-md-1"});

//3pm Linking

var textList3 = $("#3pmlink");
var newTextArea3 = $("<textarea>");
textList3.after(newTextArea3);
newTextArea3.attr({"class":"col-md-10","rows":"3","cols":"50", "id":"3pmtext", "time":"15", "name":"datearea3pm"});

var buttonLink3 = $("#3pmtext");
var newButton3 = $("<button>");
buttonLink3.after(newButton3);
newButton3.attr({"type":"submit","class":"threepm saveBtn col-md-1"});

//4pm Linking

var textList4 = $("#4pmlink");
var newTextArea4 = $("<textarea>");
textList4.after(newTextArea4);
newTextArea4.attr({"class":"col-md-10","rows":"3","cols":"50", "id":"4pmtext", "time":"16", "name":"datearea4pm"});

var buttonLink4 = $("#4pmtext");
var newButton4 = $("<button>");
buttonLink4.after(newButton4);
newButton4.attr({"type":"submit","class":"fourpm saveBtn col-md-1"});

//5pm Linking

var textList5 = $("#5pmlink");
var newTextArea5 = $("<textarea>");
textList5.after(newTextArea5);
newTextArea5.attr({"class":"col-md-10","rows":"3","cols":"50", "id":"5pmtext", "time":"17", "name":"datearea5pm"});

var buttonLink5 = $("#5pmtext");
var newButton5 = $("<button>");
buttonLink5.after(newButton5);
newButton5.attr({"type":"submit","class":"fivepm buttonText saveBtn col-md-1"});

//Button Text

$("button").text("Lock Task")



// click events

// 9am Button
$(".nineam").on("click", function(){
    var nineamText = document.getElementById("9amtext").value;
    localStorage.setItem("9amtext", nineamText);    
});

// 10am Button

$(".tenam").on("click", function(){
    var tenamText = document.getElementById("10amtext").value;
    localStorage.setItem("10amtext", tenamText);    
});

// 11am Button

$(".elevenam").on("click", function(){
    var elevenamText = document.getElementById("11amtext").value;
    localStorage.setItem("11amtext", elevenamText);    
});

// 12pm Button

$(".twelvepm").on("click", function(){
    var twelvepmText = document.getElementById("12pmtext").value;
    localStorage.setItem("12pmtext", twelvepmText);    
});

// 1pm Button

$(".onepm").on("click", function(){
    var onepmText = document.getElementById("1pmtext").value;
    localStorage.setItem("1pmtext", onepmText);

});

// 2pm Button

$(".twopm").on("click", function(){
    var twopmText = document.getElementById("2pmtext").value;
    localStorage.setItem("2pmtext", twopmText);

});

// 3pm Button


$(".threepm").on("click", function(){
    var threepmText = document.getElementById("3pmtext").value;
    localStorage.setItem("3pmtext", threepmText);

});

// 4pm Button

$(".fourpm").on("click", function(){
    var fourpmText = document.getElementById("4pmtext").value;
    localStorage.setItem("4pmtext", fourpmText);

});

// 5pm Button

$(".fivepm").on("click", function(){
    var fivepmText = document.getElementById("5pmtext").value;
    localStorage.setItem("5pmtext", fivepmText);

});


// Retrieving local storage //
$("#9amtext").val(localStorage.getItem("9amtext"));

$("#10amtext").val(localStorage.getItem("10amtext"));

$("#11amtext").val(localStorage.getItem("11amtext"));

$("#12pmtext").val(localStorage.getItem("12pmtext"));

$("#1pmtext").val(localStorage.getItem("1pmtext"));

$("#2pmtext").val(localStorage.getItem("2pmtext"));

$("#3pmtext").val(localStorage.getItem("3pmtext"));

$("#4pmtext").val(localStorage.getItem("4pmtext"));

$("#5pmtext").val(localStorage.getItem("5pmtext"));

// Moment Code

var m = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(m);

var hour = moment().hour();
console.log(hour);

$("textarea").each(function(){
    var calendarHour = parseInt($(this).attr("time"))
    if(calendarHour<hour){
        $(this).addClass("past");
    }else if(calendarHour>hour){
        $(this).addClass("future");
    }else{
        $(this).addClass("present");
    }
});

// // Variables to capture text area content
// var buttonNine = document.querySelector(".nineam");
// var buttonTen = document.querySelector(".tenam");
// var buttonEleven = document.querySelector(".elevenam");
// var buttonTwelve = document.querySelector(".twelvepm");
// var buttonOne = document.querySelector(".onepm");
// var buttonTwo = document.querySelector(".twopm");
// var buttonThree = document.querySelector(".threepm");
// var buttonFour = document.querySelector(".fourpm");
// var buttonFive = document.querySelector(".fivepm");

// // button clicks to capture text area content into local storage

// // Nine AM click event

// buttonNine.addEventListener("click", function(event){
//     event.preventDefault();

//     var nineamText = document.getElementById("9amtext").value;
//     localStorage.setItem("9amtext", nineamText);
// });

// // Ten AM click event

// buttonTen.addEventListener("click", function(event){
//     event.preventDefault();

//     var tenamText = document.getElementById("10amtext").value;
//     localStorage.setItem("10amtext", tenamText);
// });

// // 11 AM click event

// buttonEleven.addEventListener("click", function(event){
//     event.preventDefault();

//     var elevenamText = document.getElementById("11amtext").value;
//     localStorage.setItem("11amtext", elevenamText);
// });

// // 12 pm click event

// buttonTwelve.addEventListener("click", function(event){
//     event.preventDefault();

//     var twelvepmText = document.getElementById("12pmtext").value;
//     localStorage.setItem("12pmtext", twelvepmText);
// });

// // 1 pm click event

// buttonOne.addEventListener("click", function(event){
//     event.preventDefault();

//     var onepmText = document.getElementById("1pmtext").value;
//     localStorage.setItem("1pmtext", onepmText);
// });

// // 2 pm click event

// buttonTwo.addEventListener("click", function(event){
//     event.preventDefault();

//     var twopmText = document.getElementById("2pmtext").value;
//     localStorage.setItem("2pmtext", twopmText);
// });

// // 3 pm click event

// buttonThree.addEventListener("click", function(event){
//     event.preventDefault();

//     var threepmText = document.getElementById("3pmtext").value;
//     localStorage.setItem("3pmtext", threepmText);
// });

// // 4 pm click event

// buttonFour.addEventListener("click", function(event){
//     event.preventDefault();

//     var fourpmText = document.getElementById("4pmtext").value;
//     localStorage.setItem("4pmtext", fourpmText);
// });

// // 5 pm click event

// buttonFive.addEventListener("click", function(event){
//     event.preventDefault();

//     var fivepmText = document.getElementById("5pmtext").value;
//     localStorage.setItem("5pmtext", fivepmText);
// });


// // Assigning variable and adding text content for header date

// var m = moment().format("dddd, MMMM Do YYYY");

// $("#currentDay").text(m);

// console.log(m);

// // Finding hour from current moment function time - see moment documentation for Gets

// var hour = moment().hours()
// console.log(hour);

// // Using textarea and number attribute to check against hour

// $("textarea").each(function(){
//     var calendarHour = parseInt($(this).attr("time"))
//     if(calendarHour<hour){
//         $(this).addClass("past");
//     }else if(calendarHour>hour){
//         $(this).addClass("future");
//     }else{
//         $(this).addClass("present");
//     }
// })

// // Getting items from local storage after refresh

// $("#9amtext").val(localStorage.getItem("9amtext"));

// $("#10amtext").val(localStorage.getItem("10amtext"));

// $("#11amtext").val(localStorage.getItem("11amtext"));

// $("#12pmtext").val(localStorage.getItem("12pmtext"));

// $("#1pmtext").val(localStorage.getItem("1pmtext"));

// $("#2pmtext").val(localStorage.getItem("2pmtext"));

// $("#3pmtext").val(localStorage.getItem("3pmtext"));

// $("#4pmtext").val(localStorage.getItem("4pmtext"));

// $("#5pmtext").val(localStorage.getItem("5pmtext"));









