function changeCategory(id){
    var drinks=document.getElementsByClassName("drink");
    for(var n=0;n<4;n++)
{
    drinks[n].classList.remove("active");
    if(id !="cck"){
        document.getElementsByClassName("alc")[0].style.display="none";
    }
    else{
        document.getElementsByClassName("alc")[0].style.display="block";
    }
     if(id !="soft"){
        document.getElementsByClassName("soft")[0].style.display="none";
    }
    else{
        document.getElementsByClassName("soft")[0].style.display="block";
    }   
}
document.getElementById(id).classList.add("active");
    }