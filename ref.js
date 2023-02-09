$(document).ready(function(){
    $("#ref").click(function(){
        var val = $("#references").val();
        if (val == 1){
            $(".Ser").show("fast","swing");
        }else if (val == "2"){
            $(".Dav").show('fast','swing');
        }else if (val == "3"){
            $(".Ben").show('fast','swing');
        }else if (val =="4"){
            $(".Ken").show('fast','swing');
        }
});

$("#Contact").click(function(){
$(".contin").show('fast','swing');
});

$("#Experience").click(function(){
$(".exp").show('fast','swing');
});
$(".close").click(function(){
    hide();
});
function hide(){
$(".Ser").hide();
$(".Dav").hide();
$(".Ben").hide();
$(".exp").hide();
    $(".contin").hide();
    $(".Ken").hide();}
    hide();
});
