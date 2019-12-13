var actif=0;
function mouvement (){
    if(actif==0){
        document.getElementById("slide").classList.add("on");
        document.getElementById("content").classList.add("content-hide");
        document.getElementById("content").style.transition = "1s ease";
        actif=1;
    }
    else{
        document.getElementById("slide").classList.remove("on");
        document.getElementById("content").classList.remove("content-hide");
        document.getElementById("content").style.transition = "1s ease";
        actif=0;
    }
}
