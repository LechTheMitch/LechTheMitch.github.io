let info1=document.getElementById("plus-info-1")
let info2=document.getElementById("plus-info-2")
let info3=document.getElementById("plus-info-3")
let info4=document.getElementById("plus-info-4")
let icon1=document.getElementById("plus-icon-1")
let icon2=document.getElementById("plus-icon-2")
let icon3=document.getElementById("plus-icon-3")
let icon4=document.getElementById("plus-icon-4")
icon1.onclick=function(){
        info1.style.display='flex';
        info2.style.display='none';
        info3.style.display='none';
        info4.style.display='none';
    }

    icon2.onclick=function(){
    info2.style.display='flex';
    info1.style.display='none';
    info3.style.display='none';
    info4.style.display='none';
}

icon3.onclick=function(){
        info3.style.display='flex';
        info1.style.display='none';
        info2.style.display='none';
        info4.style.display='none';
    }
    
    icon4.onclick=function(){
    info4.style.display='flex';
    info1.style.display='none';
    info2.style.display='none';
    info3.style.display='none';
}



// let info=document.getElementsByClassName("plus-info-1")
// let icon=document.getElementsByClassName("plus-icon-1")

// for(let y=1;y<=4;y++){
// icon[y].onclick=function(){
//     for(let i=1;i<=4;i++){
//         if(i!=y){
//             info[i].style.display='none';

//         }
//         else{
//             info[i].style.display='flex';
//         }
//        }
        
// }
// }
          
