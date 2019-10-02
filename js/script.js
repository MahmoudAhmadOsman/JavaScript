     function validate_form() {

         if (document.formOne.name.value == "") {
             alert("Full name is required!");
             document.formOne.name.focus();
             return false
         }

         if (document.formOne.age.value == "") {
             alert("Age is required!");
             document.formOne.age.focus();
             return false
         }


         if (document.formOne.email.value == "") {
             alert("Email address is required!");
             document.formOne.email.focus();
             return false
         }

         if (document.formOne.phone.value == "") {
             alert("Phone number is required!");
             document.formOne.phone.focus();
             return false

         }


         if (document.formOne.state.value == "") {
             alert("State value is required!");
             document.formOne.state.focus();
             return false

         }

         if (document.formOne.zipCode.value == "") {
             alert("Zip code is required!");
             document.formOne.zipCode.focus();
             return false

         } else {
             let message = document.getElementById("message");
             message.style.display = "block";
             let thankyou = document.getElementById("thank_you");

             thankyou.innerHTML = '<b>Thank you</b> for your message! <i class="text-danger">This is just a testing!</i>';


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




     // Click and hover Events

     // var changeText = document.getElementById("btn")
     // changeText.onclick = changeContent;
     // changeText.onblur = backToDefault;

     // function changeContent() {
     //     changeText.innerHTML = "The text is changed by javascript";
     //     changeText.style.backgroundColor = "#5574C3";
     //     changeText.style.width = "70%";
     //     changeText.style.color = "#fff";
     //     changeText.style.border = "0px";
     // }

     // function backToDefault() {
     //     changeText.style.backgroundColor = "#EB0909";
     //     changeText.style.width = "100%";
     //     changeText.style.height = "40px";
     //     changeText.style.color = "#fff";
     //     changeText.style.borderRadius = "15px 5px 15px 5px";
     // } 






     // all_plans section

     $(document).ready(function() {
         $(".all_plans li").on("click", function() {

             $(this).addClass("li_bg").siblings().removeClass('li_bg');

             //console.log( $(this).data('class'));


             // check

             if ($(this).data('class') === 'all') {

                 $('#hosting_plans .col-md-3').css("opacity", 1);
                 $("#hosting_plans img").addClass("all_div_plans");
                 $("#hosting_plans img").removeClass("border_right");

             } else {

                 //$("#hosting_plans img").addClass("border_right").siblings().removeClass("border_right");
                 $("#hosting_plans img").removeClass("all_div_plans");

             }

         });


         //Disabled button

         $("form").submit(function(event) {

             event.preventDefault();
             let btnSubmit = $('.btnSubmit').val();
             if (btnSubmit == "") {
                 //alert("File name is required");
                 $('p.file_name').fadeIn();

                 return false

             } else {
                 $('p.file_name').hide();
             }



             //disable the submit button after form submition
             $(".btnSubmit").attr("disabled", true);
             $(".btnSubmit").addClass("block_cursor");
             $('p.lead').fadeIn(1000);
             return true;

         });











     }); //End of document.reay bracket