function showLbPic(){
    setInterval(function(){
        for(var i=0;i<4;i++){
            showPic(i);
            if(i==3){
                i==0;
            }
        }
    },5000);
}

function showPic(index){
    switch(index){
        case 1:
        lbImg.src="./source/banner10.png";
        break;
        case 2:
        lbImg.src="./source/banner10.png";
        break;
    }
}