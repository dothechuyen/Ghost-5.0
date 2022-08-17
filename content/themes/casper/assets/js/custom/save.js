var saved = false;
function save(){
    saved = !saved;
    if(saved){
        document.getElementsById("cls-1").setAttribute("fill", '#00bea5')
    }
    else document.getElementById("cls-1").setAttribute("fill", "grey")
}