$(document).ready(function(){
    var login = $("body#login div div div table[border='0']")[0];

    $("img.ui-icon-home").attr("src", browser.extension.getURL("../Icons/GuilanLogo_150x150.png"));

    $(".web-tools-alert").remove();

    var moneyLeft = $("#creditId");
    if(moneyLeft.length > 0){
        var x  = parseInt($("#creditId").text());
        x /= 10;
        var element = $("<div class='web-tools-alert'></div>");

        if(x >= 5000){
            element.addClass("wt-success");
            element.text(x + " تومان شارژ داری. وضعیت خوبه.")
        }
        else if (x < 5000 && x > 0){
            element.addClass("wt-warn");
            element.text(x + " تومان شارژ داری. شارژت کم کم داره تموم میشه.")
        }
        else if(x == 0){
            element.addClass("wt-error");
            element.text(x + " تومان شارژ داری. شارژت تموم شده.")
        }
        else{
            element.addClass("wt-error");
            element.text(x + " تومان شارژ داری. شارژت تموم شده.")
        }

        $("div.border_right div.border_left div.main_body").prepend(element)

    }

});