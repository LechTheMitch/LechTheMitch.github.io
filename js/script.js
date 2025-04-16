'use strict';
console.log("Hi");

//Simple back to top button
$(window).scroll ( function (){
    let scrolled = $(window).scrollTop();
    if (scrolled > 500) $(".backtotop").show(500);
    if (scrolled < 500) $(".backtotop").hide(500);
})
$(".backtotop").click(function (){
    $("html , body").animate({ scrollTop: "0"} , 0)
});

 //Let's open and close the mobile menu
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

 //Let's open and close the popup
 $(".openPopup").click(function(){
    $(".popupOverlay, .popupContent").addClass("active")
 })
 $(".closePopup").click(function(){
    $(".popupOverlay, .popupContent").removeClass("active")
 })