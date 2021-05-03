canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

car1_width=120
car1_height=70
car1_image="car-1.png"
car1_x=10
car1_y=10

car2_width=120
car2_height=70
car2_image="car-2.png"
car2_x=10
car2_y=100

background_image="car-track.gif"
img_car1="car-1.png"
img_car2="car-2.png"

function add(){
    tag_b=new Image();
    tag_b.onload=uploadbackground;
    tag_b.src=background_image;

    tag_car1=new Image();
    tag_car1.onload=uploadcar1;
    tag_car1.src=img_car1;
    
    tag_car2=new Image();
    tag_car2.onload=uploadcar2;
    tag_car2.src=img_car2;
}


function uploadbackground(){
    ctx.drawImage(tag_b,0,0,canvas.width,canvas.height);
}

function uploadcar1(){
    ctx.drawImage(tag_car1,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2(){
    ctx.drawImage(tag_car2,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",my_key_down);
function my_key_down(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38"){
        up();
        console.log("car 1 up");
    }

    if(keypressed=="40"){
        down();
        console.log("car 1 down");
    }

    if(keypressed=="37"){
        left();
        console.log("car 1 left");
    }

    if(keypressed=="39"){ 
        right();
        console.log("car 1 right");
    }



    if(keypressed=="87"){
        w();
        console.log("car 2 up");
    }

    if(keypressed=="83"){
        s();
        console.log("car 2 down");
    }

    if(keypressed=="65"){
        a();
        console.log("car 2 left");
    }

    if(keypressed=="68"){
        d();
        console.log("car 2 right");
    }

}

function up(){
if(car1_y>=0){
    car1_y=car1_y-10;
    console.log("when up arrow is pressed,x="+car1_x+"y="+car1_y);
    uploadbackground();
    uploadcar1();
}
}

function down(){
    if(car1_y<=500){
        car1_y=car1_y+10;
        console.log("when down arrow is pressed,x="+car1_x+"y="+car1_y);
        uploadbackground();
        uploadcar1();
    }
    }

    function left(){
        if(car1_x>=0){
            car1_x=car1_x-10;
            console.log("when left arrow is pressed,x="+car1_x+"y="+car1_y);
            uploadbackground();
            uploadcar1();
        }
        }

        function right(){
            if(car1_x<=700){
                car1_x=car1_x+10;
                console.log("when right arrow is pressed,x="+car1_x+"y="+car1_y);
                uploadbackground();
                uploadcar1();
            }
            }




 function w(){
      if(car2_y>=0){
          car2_y=car2_y-10;
          console.log("when up arrow is pressed,x="+car2_x+"y="+car2_y);
          uploadbackground();
          uploadcar2();
         }
    }
                
function s(){
    if(car2_y<=500){
       car2_y=car2_y+10;
       console.log("when down arrow is pressed,x="+car2_x+"y="+car2_y);
       uploadbackground();
       uploadcar2();
     }
 }
                
 function a(){
    if(car2_x>=0){
       car2_x=car2_x-10;
       console.log("when left arrow is pressed,x="+car2_x+"y="+car2_y);
       uploadbackground();
       uploadcar2();
     }
 }
                
function d(){
    if(car2_x<=700){
       car2_x=car2_x+10;
       console.log("when right arrow is pressed,x="+car2_x+"y="+car2_y);
       uploadbackground();
       uploadcar2(); 
     }
}