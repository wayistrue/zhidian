document.querySelector(".middle>.left>ul").addEventListener("click",function(e){
    var li = e.target;
    if(li.nodeName == "LI"){
        if(li.innerHTML == "公司简介"){
            location = "introduction.html"
        }else if(li.innerHTML == "企业文化"){
            location = "culture.html"
        }else if(li.innerHTML == "合作伙伴"){
            location = "cooperativePartner.html"
        }else{
            location = "contact-us.html"
        }
    }
}) 