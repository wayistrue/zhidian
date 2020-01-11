function tologin(){
    window.location.href = "login.html";
}
function getVerificationCode(){
    var arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
    var len = arr.length;
    var str = "";
    for(var i=0;i<4;i++){
        str += arr[parseInt(Math.random()*len)];
    }
    autoCode.innerHTML = str;
}
function register(){
    var phone = rightInputDiv.firstElementChild.value;
    var pwd = rightInputDiv.firstElementChild.nextElementSibling.value;
    var type = utype.value;
    if(agree.checked == false){
        alert("请先阅读协议并同意");
    }else if(rightInputDiv.firstElementChild.value == ""){
        console.log("............");
        alert("请填写手机号");
    }else if(rightInputDiv.firstElementChild.nextElementSibling.value == "" || rightInputDiv.firstElementChild.nextElementSibling.nextElementSibling.value == ""){
        alert("请填写密码");
    }else if(rightInputDiv.firstElementChild.nextElementSibling.value != rightInputDiv.firstElementChild.nextElementSibling.nextElementSibling.value){
        alert("密码不一致");
    }else if(verCode.value != autoCode.innerHTML){
        alert("验证码不一致");
    }else{
        console.log(phone,pwd,type);
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4 && xhr.status==200){
                if(xhr.responseText=="1"){
                    alert("新建成功");
                }else{
                    alert("新建失败");
                }
            }
        }
        xhr.open("post","http://localhost:8080/public/register_woseek/",true);
        var formdata = "phone="+phone+"&pwd="+pwd+"&type="+type;
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(formdata);    
    }
}