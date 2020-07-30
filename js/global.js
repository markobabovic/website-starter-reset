// for wordpress  jQuery(function ($) {
(function() {


    $(window).on('load', function(){
        $("body").addClass("load-done");
    });

    $(document).scroll(function(e){

    });

    $(window).resize(function(){

    });

    $(".custom-select .select-header").click(function (e) {
        e.stopPropagation();
        var thisParent = $(this).parent();
        var thisHeader = $(this);
        var thisbody = thisParent.find(".select-body");

        if (thisParent.hasClass("open-select")) {
            thisParent.removeClass("open-select");
        }
        else {
            $(".custom-select").removeClass("open-select");
            $(".language-bar").removeClass("open-languages");
            thisParent.addClass("open-select");
        }

    });

    $(".custom-select .select-body .item").click(function (e) {
        e.stopPropagation();

        var thisParent = $(this).parent().parent();
        var thisEl = $(this);
        var thisElInput = $(this).parent().parent().find("input");
        var thisElHeader = $(this).parent().parent().find(".select-header");
        thisElValue = thisEl.attr("data-value");
        thisElHeader.text(thisElValue);
        thisParent.removeClass("open-select");

        if (thisElInput.length) {
            thisElInput.attr("value", thisElValue);
            //console.log(thisElValue);
            thisElInput.trigger('change');
        }
    });

    $(window).click(function () {
        $(".custom-select").removeClass("open-select");
    });


})();

// for wordpress });



