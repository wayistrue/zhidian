var li = document.getElementsByTagName("ul")[0].firstElementChild;
li.onclick = function(){
    li.className = "checkLi";
    li.nextElementSibling.className = "noCheckLi";
    li.nextElementSibling.firstElementChild.style.cssText = "desplay:none;color:rgb(0, 153, 255);";
}
var li2 = li.nextElementSibling;
li2.onclick = function(){
    this.className = "checkLi";
    li.className = "noCheckLi";
    li2.firstElementChild.style.display = "block";
}
li2.firstElementChild.onclick = function(){
    this.style.color = "orange";
}