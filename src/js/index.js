import "@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js";
import "@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "../css/index.css";
$(function(){
    $(".nav-item").click(function(){
        $(this).closest("ul").find(".nav-item").removeClass("active")
        $(this).addClass("active")
    });
    $("#bars").click(function(){
        $(".sidebar").animate({width: 'toggle'});
        $(".layer").fadeToggle(100);
    });
    $(".layer").click(function(){
        $(".sidebar").animate({width: 'toggle'})
        $(".layer").fadeOut(150); 
    });
    $(".search-icon").click(function(){
        $(".search-click").fadeToggle(300);
    });
    $(".subc").click(function(){
        $(this).toggleClass(".csc");
        $(this).text() == 'تم الإشتراك' ? 'اشتراك' : 'تم الإشتراك';
    });
    $("#filter").click(function(){
        $(".allcheck").slideToggle("slow");
        
    });
    $("input:checkbox").click(function(){
        var box =$(this);

        if (box.is(":checked")) {
            var group ="input:checkbox[name='"+box.attr("name")+"']";
            $(group).prop("checked", false);
            box.prop("checked", true);
        }
    });
    $(".thumb-like").click(function(){
        $(".thumb-like").toggleClass("like");
        $(".thumb-dislike").removeClass("like");
    });
    $(".thumb-dislike").click(function(){
        $(".thumb-dislike").toggleClass("like")
        $(".thumb-like").removeClass("like");
    });
    $(".subc").click(function(){
        $(this).toggleClass("csc");
        $(this).text($(this).text() == 'تم الإشتراك' ? 'اشتراك' : 'تم الإشتراك');
    });
    $(".reply").click(function(){
        $(this).closest(".card").find(".card-inner").slideToggle("slow");
    });
    $(".love").click(function(){
        $(this).children(".fa-heart").toggleClass("loved");
    });
    $(".fa-xmark").click(function(){
        $(this).closest(".card").remove();
    });
});
