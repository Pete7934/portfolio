window.onload = function(){   
branch = document.getElementsByClassName('navMenu');
    for(var l = 0; l < branch.length; l++){
        console.log(branch[l]);
        branch[l].addEventListener('click', function(){
            var temp = this.getAttribute('id');
            temp = temp.slice(0,3);
            clearDisplay(temp);
        });
    }
}
function clearDisplay(temp){
    var content = document.getElementsByClassName("contentBox");
    for(var i = 0; i < content.length; i++){
        if(content[i].getAttribute("id")==temp){
            content[i].style.display = "block";
            
        }
        else{
            content[i].style.display = "none";
        }
    }
}