function showOverallInfo(){
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
}