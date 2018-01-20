

$(document).ready(function() {

    console.log("fgfgf");

    var urlFood = /http[s]?:\/\/food.guilan.ac.ir[\w\W]*/gi;
    var urlErp  = /http[s]?:\/\/erp.guilan.ac.ir[\w\W]*/gi;
    var urlStu  = /http[s]?:\/\/stu.guilan.ac.ir[\w\W]*/gi;
    var urlCE   = /http[s]?:\/\/ce.guilan.ac.ir[\w\W]*/gi;

    var promise = browser.tabs.query({currentWindow: true, active: true}).then(TabSuccess, TabFailed);

    function TabSuccess(tabs){
        var tab = tabs[0];
        var url = tab.url;


        $(".popup-status .icon").removeClass("university food desktop student warning sign green yellow"); 
        $(".popup-status").removeClass("yellow green");

        if(url.match(urlFood)){
            $(".popup-status .icon").addClass("food green"); 
            $(".popup-status").addClass("green"); 
            $("#popup-header").html("سلف سرویس");
            $("#popup-text").html("امکانات ظاهری و خدمات جدید روی این صفحه اعمال شده است.");
        }
        else if (url.match(urlErp)){
            $(".popup-status .icon").addClass("university green"); 
            $(".popup-status").addClass("green"); 
            $("#popup-header").html("سامانه ERP");
            $("#popup-text").html("امکانات ظاهری و خدمات جدید روی این صفحه اعمال شده است.");
        }
        else if (url.match(urlStu)){
            $(".popup-status .icon").addClass("student green"); 
            $(".popup-status").addClass("green"); 
            $("#popup-header").html("خدمات دانشجویی");
            $("#popup-text").html("امکانات ظاهری و خدمات جدید روی این صفحه اعمال شده است.");
        }
        else if (url.match(urlCE)){
            $(".popup-status .icon").addClass("desktop green"); 
            $(".popup-status").addClass("green"); 
            $("#popup-header").html("گروه کامپیوتر");
            $("#popup-text").html("امکانات ظاهری و خدمات جدید روی این صفحه اعمال شده است.");
        }
        else{
            $(".popup-status .icon").addClass("warning sign yellow"); 
            $(".popup-status").addClass("yellow"); 
            $("#popup-header").html("غیر فعال");
            $("#popup-text").html("شما در صفحات تعیین شده دانشگاه گیلان حضور ندارید.");
        }
        
//        $("#aryan").html(tab.url);

    }
    function TabFailed(error){

    }

    


    

});