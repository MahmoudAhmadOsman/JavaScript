function validateForm() {
    var fname = document.forms['form-one']['fname'].value;


    if (fname == '') {
        alert('First name is required!');
        var fname = document.getElementById('fname').value;
        fname.style.backgroundColor = "yellow";
        return false;

    } else {
        return true;
    }
}



//Sefl invokin function

(function() {
    var pid = document.getElementsByClassName("btn")[0];
    pid.addEventListener("mouseover", changeColor, false);

    function changeColor() {
        this.style.color = "#f00";
    }
    pid.addEventListener("mouseout", mouseLeave, false);

    function mouseLeave() {
        this.style.color = "#000";
    }
}());




//Start of JavaScript Click Event

var changeText = document.getElementById("btn")
changeText.onclick = myFunction;
changeText.onblur = backtodefault;

function myFunction() {
    changeText.innerHTML = "The text is changed by javascript";
    changeText.style.backgroundColor = "#5574C3";
    changeText.style.width = "300px";
    changeText.style.color = "#000";
    changeText.style.borderRadius = "0px";
}

function backtodefault() {
    changeText.style.backgroundColor = "#EB0909";
    changeText.style.width = "250px";
    changeText.style.height = "40px";
    changeText.style.color = "#fff";
    changeText.style.borderRadius = "15px 5px 15px 5px";
}
 
