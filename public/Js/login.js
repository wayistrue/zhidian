function getVerificationCode(){
    var arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
    var len = arr.length;
    var str = "";
    for(var i=0;i<4;i++){
        str += arr[parseInt(Math.random()*len)];
    }
    autoCode.innerHTML = str;
}
function loginBtn(){
    if(uname.value == ""){
        alert("用户名为空");
        return;
    }
    if(upwd.value == ""){
        alert("密码为空");
        return;
    }
    if(writeCode.value != autoCode.innerHTML){
        alert("验证码错误");
        return;
    }

    var xhr = new XMLHttpRequest();
      xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
          if(xhr.responseText == "0"){
            alert("登录失败");
          }else{
            var arr = JSON.parse(xhr.responseText);
            location = "index.html?name="+arr[0].name;
          }
        }
      }
      xhr.open('get',"http://localhost:8080/public/login/"+uname.value+"&"+upwd.value+"&"+utype.value,true);
        xhr.send();
}