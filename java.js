
function turnon() {

    document.getElementById("main").style.backgroundColor = "white";

    document.getElementById("main").style.color= "black";

    document.getElementById("main").style.border= "5px double black";


    
    var x = document.getElementsByClassName("ax-1");
    var i;
    for ( i = 0; i < x.length; i++) {
        
        x[i].style.boxShadow = "2px 2px 6px #2d2d2d"; 
    }

    var x = document.getElementsByClassName("ax-2");
    var i;
    for ( i = 0; i < x.length; i++) {
        
        x[i].style.boxShadow = "2px 2px 6px #2d2d2d"; 
    }
    
    var x = document.getElementsByClassName("ax-3");
    var i;
    for ( i = 0; i < x.length; i++) {
        
        x[i].style.boxShadow = "2px 2px 6px #2d2d2d"; 
    }
}


function turnoff() {
    
    document.getElementById("main").style.backgroundColor = "black";
    
    document.getElementById("main").style.color = "white";

    document.getElementById("main").style.border= "5px double white";

    
    var x = document.getElementsByClassName("ax-1");
    var i;

    for ( i = 0; i < x.length; i++) {
        
        x[i].style.boxShadow = "2px 2px 6px white"; 
    }

    var x = document.getElementsByClassName("ax-2");
    var i;
    for ( i = 0; i < x.length; i++) {
        
        x[i].style.boxShadow = "2px 2px 6px white"; 
    } 
    
    var x = document.getElementsByClassName("ax-3");
    var i;
    for ( i = 0; i < x.length; i++) {
        
        x[i].style.boxShadow = "2px 2px 6px white"; 
    }

}