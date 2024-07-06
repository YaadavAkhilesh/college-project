// const about1  = document.querySelector("#about1");
const about2  = document.querySelector("#about2");
document.querySelector("#education1");
document.querySelector("#project1");

var flag = 1;

document.querySelector("#about").addEventListener("click", function(){
    console.log(flag);
    if(flag==0){
        // about1.style.display="block";
        about2.style.display="none";
        flag=1;
    }else{
        // about1.style.display="none";
        about2.style.display="block";
        flag=0;
    }
});
