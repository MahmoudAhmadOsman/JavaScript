 


 //var titles = document.getElementsByClassName("title");

 
 //Array.from(titles).forEach(function(item){
 	//console.log(item);
 //});


 // all td elements
 //this returns HTML Collection, but you need to convert it to array 
 //so that you can loop through them
 var book_title = document.querySelectorAll('#book-list a.title');


 Array.from(book_title).forEach(function(book_title){
 	 book_title.textContent += ' [book title]';
 	 
 });
 





//Delete Book

 let lists = document.querySelectorAll('#book-list tr td');
 
Array.from(lists).forEach(function(items){
 
items.addEventListener('click', function(event){
 let td = event.target.parentElement;;
    td.parentNode.removeChild(td);
  });

});





//Create new elements
 
const forms = document.forms;


// add books
const addForm = forms['add_books'];
addForm.addEventListener('submit', function(event){
  event.preventDefault();

  console.log(addForm);
 

});









