var getValue = document.getElementById("inputDisplay");


function displayBtn(num){
    getValue.value +=num; 
}

function calculate(){
    getValue.value = eval(getValue.value)
}

function cutText(){
        var arr = getValue.value.split("");
        arr[arr.length - 1] = "";
        getValue.value = arr.join("");
}
function clearText(){
    getValue.value = ""
}