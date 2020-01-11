function showLbPic(){
    // var index = 1;
    // setInterval(function(){
    //     if(index<5){
    //         showPic(index);
    //         index++;
    //     }else{
    //         index=1;
    //     }
    // },5000);
    banner();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var result = xhr.responseText;
            var arr = JSON.parse(result);
            console.log(arr[0]);

            var cargoTitle = document.querySelectorAll("#info .infoContent");
            cargoTitle[0].firstElementChild.firstElementChild.innerHTML = arr[0].title;
            var demand = cargoTitle[0].querySelectorAll("p");
            demand[0].lastElementChild.innerHTML = arr[0].demand;
            demand[1].lastElementChild.innerHTML = arr[0].begin;
            demand[2].lastElementChild.innerHTML = arr[0].end;
            demand[3].innerHTML = arr[0].distance;
            demand[5].firstElementChild.innerHTML = arr[0].begin_time;
            demand[5].lastElementChild.innerHTML = arr[0].end_time;
            demand[7].innerHTML = arr[0].price;

            cargoTitle[1].firstElementChild.firstElementChild.innerHTML = arr[1].title;
            var demand = cargoTitle[1].querySelectorAll("p");
            demand[0].lastElementChild.innerHTML = arr[1].demand;
            demand[1].lastElementChild.innerHTML = arr[1].begin;
            demand[2].lastElementChild.innerHTML = arr[1].end;
            demand[3].innerHTML = arr[1].distance;
            demand[5].firstElementChild.innerHTML = arr[1].begin_time;
            demand[5].lastElementChild.innerHTML = arr[1].end_time;
            demand[7].innerHTML = arr[1].price;
            
            cargoTitle[2].firstElementChild.firstElementChild.innerHTML = arr[2].title;
            var demand = cargoTitle[2].querySelectorAll("p");
            demand[0].lastElementChild.innerHTML = arr[2].demand;
            demand[1].lastElementChild.innerHTML = arr[2].begin;
            demand[2].lastElementChild.innerHTML = arr[2].end;
            demand[3].innerHTML = arr[2].distance;
            demand[5].firstElementChild.innerHTML = arr[2].begin_time;
            demand[5].lastElementChild.innerHTML = arr[2].end_time;
            demand[7].innerHTML = arr[2].price;
            
            cargoTitle[3].firstElementChild.firstElementChild.innerHTML = arr[3].title;
            var demand = cargoTitle[3].querySelectorAll("p");
            demand[0].lastElementChild.innerHTML = arr[3].demand;
            demand[1].lastElementChild.innerHTML = arr[3].begin;
            demand[2].lastElementChild.innerHTML = arr[3].end;
            demand[3].innerHTML = arr[3].distance;
            demand[5].firstElementChild.innerHTML = arr[3].begin_time;
            demand[5].lastElementChild.innerHTML = arr[3].end_time;
            demand[7].innerHTML = arr[3].price;
            
            cargoTitle[4].firstElementChild.firstElementChild.innerHTML = arr[4].title;
            var demand = cargoTitle[4].querySelectorAll("p");
            demand[0].lastElementChild.innerHTML = arr[4].demand;
            demand[1].lastElementChild.innerHTML = arr[4].begin;
            demand[2].lastElementChild.innerHTML = arr[4].end;
            demand[3].innerHTML = arr[4].distance;
            demand[5].firstElementChild.innerHTML = arr[4].begin_time;
            demand[5].lastElementChild.innerHTML = arr[4].end_time;
            demand[7].innerHTML = arr[4].price;
            
            cargoTitle[5].firstElementChild.firstElementChild.innerHTML = arr[5].title;
            var demand = cargoTitle[5].querySelectorAll("p");
            demand[0].lastElementChild.innerHTML = arr[5].demand;
            demand[1].lastElementChild.innerHTML = arr[5].begin;
            demand[2].lastElementChild.innerHTML = arr[5].end;
            demand[3].innerHTML = arr[5].distance;
            demand[5].firstElementChild.innerHTML = arr[5].begin_time;
            demand[5].lastElementChild.innerHTML = arr[5].end_time;
            demand[7].innerHTML = arr[5].price;
            
            cargoTitle[6].firstElementChild.firstElementChild.innerHTML = arr[6].title;
            var demand = cargoTitle[6].querySelectorAll("p");
            demand[0].lastElementChild.innerHTML = arr[6].demand;
            demand[1].lastElementChild.innerHTML = arr[6].begin;
            demand[2].lastElementChild.innerHTML = arr[6].end;
            demand[3].innerHTML = arr[6].distance;
            demand[5].firstElementChild.innerHTML = arr[6].begin_time;
            demand[5].lastElementChild.innerHTML = arr[6].end_time;
            demand[7].innerHTML = arr[6].price;
            
            cargoTitle[7].firstElementChild.firstElementChild.innerHTML = arr[7].title;
            var demand = cargoTitle[7].querySelectorAll("p");
            demand[0].lastElementChild.innerHTML = arr[7].demand;
            demand[1].lastElementChild.innerHTML = arr[7].begin;
            demand[2].lastElementChild.innerHTML = arr[7].end;
            demand[3].innerHTML = arr[7].distance;
            demand[5].firstElementChild.innerHTML = arr[7].begin_time;
            demand[5].lastElementChild.innerHTML = arr[7].end_time;
            demand[7].innerHTML = arr[7].price;
        }
    }
    xhr.open("get","http://localhost:8080/public/getCargoInfo",true);
    xhr.send();

    var search = decodeURI(location.search.split("=")[1]);
    if(search != "undefined"){
        loadReg.style.display = "none";
        welLoad.style.display = "inline";
        welLoad.lastElementChild.innerHTML = search;
    }else{
        loadReg.style.display = "inline";
        welLoad.style.display = "none";
    }
}

function showPic(index){
    switch(index){
        case 1:
            bannerImg.src="./source/banner10.png";
            break;
        case 2:
            bannerImg.src="./source/bannerBg9.jpg";
            break;
        case 3:
            bannerImg.src="./source/banner4_con.jpg";
            break;
        case 4:
            bannerImg.src="./source/banner2_con.png";
            break;
        default:
            break;
    }
}

function banner(){
    var i=0;
    var LIWIDTH=1000;
    var DURATION=500;
    var LICOUNT=4;
    var ulImgs=document.getElementById("ul-imgs");
    var ulIdxs=document.getElementById("ul-idxs");
    var lis=ulIdxs.children;
    function moveTo(to){
      if(to==undefined){
        to=i+1;
      }
      if(i==0){
        if(to>i){
          ulImgs.className="transition";
        }else{
          ulImgs.className="";
          ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
          setTimeout(function(){
            moveTo(LICOUNT-1);
          },100);
          return;
        }
      }
      i=to;
      ulImgs.style.marginLeft=-i*LIWIDTH+"px";
      for(var li of lis){
        li.className=""
      }
      console.log(i);
      if(i==LICOUNT){
        i=0;
        setTimeout(function(){
          ulImgs.className="";
          ulImgs.style.marginLeft=0;
        },DURATION)
      }
      lis[i].className="active";
    }

    var btnLeft=document.getElementById("btn-left");
    var btnRight=document.getElementById("btn-right");
    var canClick=true;
    btnRight.onclick=function(){
      move(1)
    }
    function move(n){
      if(canClick){
        console.log(i+n);
        moveTo(i+n);
        canClick=false;
        setTimeout(function(){
          canClick=true;
        },DURATION+100);
      }
    }
    btnLeft.onclick=function(){
      move(-1);
    }
    var interval=3000;
    var timer=setInterval(function(){
      moveTo()
    },3000);
    var banner=document.getElementById("banner");
    banner.onmouseover=function(){
      clearInterval(timer);
    }
    banner.onmouseout=function(){
      timer=setInterval(function(){
        moveTo()
      },3000);
    }
    var ulIdxs=document.getElementById("ul-idxs");
    var canClick=true;
    ulIdxs.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
            for(var i=0;i<lis.length;i++){
              if(lis[i]==li){
                break;
              }
            }
            moveTo(i);
            setTimeout(function(){
              canClick=true;
            },DURATION);
          }
        }
      }
    }
}
    