var _ = require('lodash');

//var myArray = [1,2,3,4,5,6,7,8,9];
//console.log('Answer: ', _.without(myArray, 5)); 

var inputfield = document.getElementById("inputfield");
var button = document.getElementById("button");
var ul = document.querySelector("ul");
var body = document.querySelector("body");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");


function changeBackground(val1=color1.value, val2=color2.value){
    body.style.background = `linear-gradient(to right, ${val1}, ${val2})`;
}

color1.addEventListener("input", ()=>{changeBackground(color1.value, undefined)});
color2.addEventListener("input", ()=>{changeBackground(undefined, color2.value)});

function inputLength(data) {
    return data.value.trim().length;
}

function createListItem(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputfield.value));
    ul.appendChild(li);
    inputfield.value="";
}

button.addEventListener("click", ()=>{
    if(inputLength(inputfield)>0){
        createListItem();
    }
});

inputfield.addEventListener("keypress", (e)=>{
    if (inputLength(inputfield)>0 && e.keyCode === 13) {
        createListItem();
    }
});
