$(document).ready(function () {
    $('#tooglebtn').click(function () {
        $('#hide-show-content').toggle();
    })
})


$(document).ready(function () {
    $("#fadeinbtn").click(function () {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
});


$(document).ready(function(){
    $('#toggleouter').click(function(){
        $('#toogleinner').css({"left": "55px","color":"green"});
        $('#togglecontent').toggle();
    })
})


$(document).ready(function () {
    $("#traversing").children().css({ "border": "2px solid blue", "margin": "10px", "padding": "10px" });
})

$(document).ready(function () {
    $("h5").siblings().css({ "border": "2px solid red", "margin": "10px", "padding": "10px" });
})

$(document).ready(function () {
    $("p").filter('.para').css({ "border": "2px solid green", "margin": "10px", "padding": "10px" });
})