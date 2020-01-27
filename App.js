var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var currentHour = moment().format("HH");
var task;

document.getElementById("currentDay").innerHTML = currentTime.toString();

// pull data atribute for time comparisons and remember to parse int
$("input").each(function(index, element){
    if(currentHour > $(element).attr("id")){
        $(element).addClass("past");
    }else if(currentHour === $(element).attr("id")){
        $(element).addClass("present")
    }else if(currentHour < $(element).attr("id")){
        $(element).addClass("future")
    }
})

$("#saveButton09").click((event) => {
    event.preventDefault();
    var inputVal = ($("#09").val());
    const key = "task-09";
    console.log(key);
    localStorage.setItem(key, inputVal);
})

$("#saveButton10").click((event) => {
    event.preventDefault();
    var inputVal = ($("#10").val());
    const key = "task-10";
    console.log(key);
    localStorage.setItem(key, inputVal);
})

$("#saveButton11").click((event) => {
    event.preventDefault();
    var inputVal = ($("#11").val());
    const key = "task-11";
    console.log(key);
    localStorage.setItem(key, inputVal);
})

$("#saveButton12").click((event) => {
    event.preventDefault();
    var inputVal = ($("#12").val());
    const key = "task-12";
    console.log(key);
    localStorage.setItem(key, inputVal);
})

$("#saveButton1").click((event) => {
    event.preventDefault();
    var inputVal = ($("#13").val());
    const key = "task-13";
    console.log(key);
    localStorage.setItem(key, inputVal);
})

$("#saveButton2").click((event) => {
    event.preventDefault();
    var inputVal = ($("#14").val());
    const key = "task-14";
    console.log(key);
    localStorage.setItem(key, inputVal);
})

$("#saveButton3").click((event) => {
    event.preventDefault();
    var inputVal = ($("#15").val());
    const key = "task-15";
    console.log(key);
    localStorage.setItem(key, inputVal);
})

$("#saveButton4").click((event) => {
    event.preventDefault();
    var inputVal = ($("#16").val());
    const key = "task-16";
    console.log(key);
    localStorage.setItem(key, inputVal);
})

$("#saveButton5").click((event) => {
    event.preventDefault();
    var inputVal = ($("#17").val());
    const key = "task-17";
    console.log(key);
    localStorage.setItem(key, inputVal);
})

const populate = () => {
    for(let i = 0; i < 9; i++) {
        let temp;
        let num = 9 + i;
        let str = "task-";
        if(num === 9) {
            str = "task-09";
            temp = "09";
        } else {
            str = "task-" + num;
            temp = num.toString();
        }
        console.log("temp =>", temp);
        const data = localStorage.getItem(str);
        console.log("data =>", data);
        if(data) {
            console.log("Got here", document.getElementById(temp).setAttribute("value", data));
            console.log(data);
        }
    }
}

$( document ).ready(function() {
    populate();
});


