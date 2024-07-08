importScripts ('../lib/jquery-3.7.1.min.js');

 //Responsive Menu
 $(".openmenu").click(function(){
    $(".sidebar").animate({
        right: "0px",
    })
 })
 $(".closemenu").click(function(){
    $(".sidebar").animate({
        right: "-250px",
    })
 })