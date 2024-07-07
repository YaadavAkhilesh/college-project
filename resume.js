// // const about1  = document.querySelector("#about1");
// const about2  = document.querySelector("#about2");
// document.querySelector("#education1");
// document.querySelector("#project1");

var flag = 1;
document.querySelector("#about").addEventListener("click", function(){
    console.log(flag);
    if(flag==0){
        about1.style.display="block";
        about2.style.display="none";
        flag=1;
    }else{
        about1.style.display="none";
        about2.style.display="block";
        flag=0;
    }
});



var flag2 = 1;
document.querySelector("#education").addEventListener("click", function(){
    console.log(flag2);
    if(flag2==0){
        education1.style.display="block";
        education2.style.display="none";
        flag2=1;
    }else{
        education1.style.display="none";
        education2.style.display="block";
        flag2=0;
    }
});


var flag3 = 1;
document.querySelector("#projects").addEventListener("click", function(){
    console.log(flag3);
    if(flag3==0){
        project1.style.display="block";
        project2.style.display="none";
        flag3=1;
    }else{
        project1.style.display="none";
        project2.style.display="block";
        flag3=0;
    }
});
