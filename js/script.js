function changeCategory(id){
    var drinks=document.getElementsByClassName("drink");
    for(var n=0;n<4;n++)
{
    drinks[n].classList.remove("active");
    
}
  document.getElementsByClassName("alc")[0].style.display="none";
    document.getElementsByClassName("soft")[0].style.display="none";
      document.getElementsByClassName("noalc")[0].style.display="none";
        document.getElementsByClassName("hot")[0].style.display="none";

if(id =="cck")
 {
        document.getElementsByClassName("alc")[0].style.display="block";
    }
if(id =="soft")
 {
        document.getElementsByClassName("soft")[0].style.display="block";
    }
    if(id =="noalc")
 {
        document.getElementsByClassName("noalc")[0].style.display="block";
    }
        if(id =="hot")
 {
        document.getElementsByClassName("hot")[0].style.display="block";
    }
document.getElementById(id).classList.add("active");
    }


    

    function chooseDay(id,idevent){
        var days=document.getElementsByClassName("day");
        var events=document.getElementsByClassName("event");
    for(var n=0;n<7;n++)
    {
        days[n].classList.remove("active");
        events[n].style.display="none";


    }
document.getElementById(id).classList.add("active");
document.getElementById(idevent).style.display="flex";

    }


    function show_current_cck(number){
        var cocktailz=document.getElementById("cocktailz");
        console.log(cocktailz);
        cocktailz.children[number].style.animation="showCocktail  1.5s ease-in forwards";
       setTimeout(() => {
           cocktailz.children[number].style.animation="";
               cocktailz.children[number].style.opacity="0"; 
       }, 3000);


    }