// function sweden(){
//   var allYellow = document.querySelectorAll('.yellow');

//   // var sweYellow= document.getElementById('swedenyellow');
//   for(var i = 0 ; i< allYellow.length ; i++){
//   allYellow[i].addEventListener('click', function(){
    
  
//  this.classList.toggle = 'swedenyellow'; 
     
 
    
    
//   })
//   }
// }
// sweden();

$('#swe').hover(
       function(){ $(this).addClass('swedenblue') },
       function(){ $(this).removeClass('swedenblue') }
);
$('#den').hover(
       function(){ $(this).addClass('swedenyellow') },
       function(){ $(this).removeClass('swedenyellow') }
);


function Smiley(){
   this.classList.toggle('showtext');
  
 }
function SwedenYellow(){
  
  this.classList.toggle('swedenyellow');
 
}
function borderNone(){
   this.classList.toggle('bordernone');
  
}
function SwedenBlue(){
  
    this.classList.toggle('swedenblue');
}
var allTds = document.querySelectorAll('td');
var allBlue = document.querySelectorAll('.blue');
var allYellow = document.querySelectorAll('.yellow');
var smiley = document.querySelector('#smiley');

smiley.addEventListener('click', Smiley);



for (var i = 0 ; i <= allTds.length ; i++){
  
  if(allTds[i].className === 'blue' ){
  allTds[i].addEventListener('click', SwedenBlue);
     
    
   }
  else if(allTds[i].className === 'yellow'){
      allTds[i].addEventListener('click', SwedenYellow);
  }

}

 

// for(var i = 0 ; i< allBlue.length; i++){
  
//   allBlue[i].addEventListener('click', SwedenBlue);
// }

// function classToggle() {
//     this.classList.toggle('class1');
//     this.classList.toggle('class2');
// }
// var all = document.querySelectorAll('#div');

// for(var i = 0 ; i < all.length ; i++){
  
//   all[i].addEventListener('click', classToggle);
// }