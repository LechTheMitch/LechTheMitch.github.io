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
 $(".closemenu-diaa").click(function(){
    $(".sidebar").animate({
        right: "-300px",
    })
 })
 $("#readmore").click(function(){
    if($("#dots").css("display") == "none"){
        $("#dots").css("display","inline");
        $("#readmore").html("Read More");
        $("#more-text").css("display","none");
        return;
    }
    else{
        $("#dots").css("display","none");
        $("#readmore").html("Read Less");
        $("#more-text").css("display","inline");
    }
 })