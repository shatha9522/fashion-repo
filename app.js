 
 
 var name = takeUserInput('Enter your Name');
 while (name ===''){
     name = takeUserInput('Enter your name');
 }
 var gender = takeUserInput('Enter your gender');
  var message;

 if(gender === 'female')
 {
     message = 'women';
     alert(message);
 }
  else  { 
      message ='Go Home';
      alert(message);
  }
 var count =takeUserInput('please Enter the number of pic');
 for(var i =0;i < count; i++){
    
    document.write(i+"<img src='https://assets.ajio.com/medias/sys_master/root/hff/h07/16211011534878/-1117Wx1400H-461149056-pink-MODEL.jpg'>")
     console.log(count)
 }
 function takeUserInput(message){
return prompt(message);
 }