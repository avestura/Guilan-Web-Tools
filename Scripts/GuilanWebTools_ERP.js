$(document).ready(function(){

    var targetNode = $('#contentMainContainer')[0];
    var config = { attributes: true, childList: true };
    var callback = function(mutationsList) {ImageChanger();};
    var observer = new MutationObserver(callback);
    observer.observe(targetNode, config);

    ImageChanger();

    function ImageChanger(){
        $("img[src='/Subsystem/Total/Resource/MenuIcon/changePassword.png']")
        .attr("src", browser.extension.getURL("../Images/ERP_NEW/ChangePassword.png"));
    
        $("img[src='/Subsystem/Total/Resource/MenuIcon/FreeBoard.png']")
        .attr("src", browser.extension.getURL("../Images/ERP_NEW/FreeBoard.png"));
    
        $("img[src='/Subsystem/Total/Resource/MenuIcon/cartable.png']")
        .attr("src", browser.extension.getURL("../Images/ERP_NEW/Letters.png"));
    
        $("img[src='/Subsystem/Total/Resource/MenuIcon/form1.png']")
        .attr("src", browser.extension.getURL("../Images/ERP_NEW/Form.png"));
    
        $("img[src='/Subsystem/Total/Resource/MenuIcon/office-domain.png']")
        .attr("src", browser.extension.getURL("../Images/ERP_NEW/Office.png"));
    
        $("img[src='/Subsystem/Total/Resource/MenuIcon/Register.png']")
        .attr("src", browser.extension.getURL("../Images/ERP_NEW/Graduate.png"));

        $("img[src='/Subsystem/Amozesh/Resource/MenuIcon/form-sabtenam.png']")
        .attr("src", browser.extension.getURL("../Images/ERP_NEW/TasbitEntekhabVahed.png"));

        $("img[src='/Subsystem/Amozesh/Resource/MenuIcon/zamanbandi-sabtnam.png']")
        .attr("src", browser.extension.getURL("../Images/ERP_NEW/Timing.png"));

        $("img[src='/Subsystem/Amozesh/Resource/MenuIcon/karname.png']")
        .attr("src", browser.extension.getURL("../Images/ERP_NEW/ReportCard.png"));

        $("img[src='/Subsystem/Amozesh/Resource/MenuIcon/kart-emtehan.png']")
        .attr("src", browser.extension.getURL("../Images/ERP_NEW/NameCard.png"));

        $("img[src='/Subsystem/Amozesh/Resource/MenuIcon/poll.png']")
        .attr("src", browser.extension.getURL("../Images/ERP_NEW/Professor.png"));

        $("img[src='/Subsystem/Amozesh/Resource/MenuIcon/tajdidnazar-nomarat.png']")
        .attr("src", browser.extension.getURL("../Images/ERP_NEW/FailRevision.png"));

        $("img[src='/Subsystem/Amozesh/Resource/MenuIcon/list.png']")
        .attr("src", browser.extension.getURL("../Images/ERP_NEW/Leave.png"));

        $("img[src='/Subsystem/Amozesh/Resource/MenuIcon/dorooh-darsi.png']")
        .attr("src", browser.extension.getURL("../Images/ERP_NEW/Books.png"));

        $("img[src='/Subsystem/Amozesh/Resource/MenuIcon/silas-droos.png']")
        .attr("src", browser.extension.getURL("../Images/ERP_NEW/BookShelf.png"));

        $("img[src='/SubSystem/pazhuheshi/Resource/MenuIcon/thesis.png']")
        .attr("src", browser.extension.getURL("../Images/ERP_NEW/GraduationCap.png"));

        $("img[src='/Subsystem/pazhuheshi/Tez/Resource/MenuIcon/Tez/FirstAgo.png']")
        .attr("src", browser.extension.getURL("../Images/ERP_NEW/StudentMale.png"));

        $("img[src='/Subsystem/Total/Resource/MenuIcon/fishe-shahriye.png']")
        .attr("src", browser.extension.getURL("../Images/ERP_NEW/Coins.png"));

        $("img[src='/SubSystem/Mali/Resource/MenuIcon/money.png']")
        .attr("src", browser.extension.getURL("../Images/ERP_NEW/Sales.png"));

        $("img[src='/SubSystem/Mali/Resource/MenuIcon/karname-mali.png']")
        .attr("src", browser.extension.getURL("../Images/ERP_NEW/Order.png"));

        $("img[src='/SubSystem/Mali/Resource/MenuIcon/jadval-shahriye.png']")
        .attr("src", browser.extension.getURL("../Images/ERP_NEW/MoneyGrid.png"));




    }


});