 function validate_form() {

     if (document.formOne.name.value == "") {
         alert("Name is required!");
         document.formOne.name.focus();
         return false
     }

     if (document.formOne.age.value == "") {
         alert("Age is required!");
         document.formOne.age.focus();
         return false
     }


     if (document.formOne.email.value == "") {
         alert("Email is required!");
         document.formOne.email.focus();
         return false
     }

     if (document.formOne.phone.value == "") {
         alert("Phone number is required!");
         document.formOne.phone.focus();
         return false

     }


     if (document.formOne.state.value == "") {
         alert("State number is required!");
         document.formOne.state.focus();
         return false

     }

     if (document.formOne.zipCode.value == "") {
         alert("Zip code is required!");
         document.formOne.zipCode.focus();
         return false

     }



 }



 //Self invokin function

 (function() {
     var pid = document.getElementsByClassName("btn")[0];
     pid.addEventListener("mouseover", changeColor, false);

     function changeColor() {
         this.style.color = "#ccc";
     }
     pid.addEventListener("mouseout", mouseLeave, false);

     function mouseLeave() {
         this.style.color = "#000";
     }
 }());




 //Start of JavaScript Click Event

 var changeText = document.getElementById("btn")
 changeText.onclick = changeContent;
 changeText.onblur = backToDefault;

 function changeContent() {
     changeText.innerHTML = "The text is changed by javascript";
     changeText.style.backgroundColor = "#5574C3";
     changeText.style.width = "60%";
     changeText.style.color = "#fff";
     changeText.style.border = "0px";
 }

 function backToDefault() {
     changeText.style.backgroundColor = "#EB0909";
     changeText.style.width = "50%";
     changeText.style.height = "40px";
     changeText.style.color = "#fff";
     changeText.style.borderRadius = "15px 5px 15px 5px";
 }