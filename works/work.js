filterObjects("all");

function filterObjects(c){
    var x, i;
    x = document.getElementsByClassName("work");    
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("show");
        if(x[i].className.indexOf(c) > -1) x[i].classList.add("show")
    }
}



var btn = document.getElementsByClassName("btn");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace("active", "");
  this.className += " active";
  });
}
