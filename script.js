function selectList(value) {
    var el = document.getElementsByClassName('col-sm-6');
    var elm = document.querySelectorAll('[data-select-type='+value+']');

    for (var i = 0; i < el.length; i++) {
        el[i].style.display="none";
    }

    elm[0].style.display="block";
}

document.getElementById("grid").addEventListener("click", function(){
    var el = document.getElementsByClassName('col-sm-6');
    for (var i = 0; i < el.length; i++) {
    	el[i].classList.remove("list-group-item");
        el[i].classList.add("grid");
    }
});
document.getElementById("list").addEventListener("click", function(){
    var el = document.getElementsByClassName('col-sm-6');
    for (var i = 0; i < el.length; i++) {
    	el[i].classList.add("list-group-item");
        el[i].classList.remove("grid");
    }
});
