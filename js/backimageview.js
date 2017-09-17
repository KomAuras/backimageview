this.backimageview = function(){
    $("div.s-image a img:not([had])").hover(function(e){
        $(this).attr("had", 1);
        var image = this.src.replace(/.48x48./gi,'.750x0.');
        image = image.replace(/.200x0./gi,'.750x0.');
        $("body").append("<div id='pluginBackPreview'><img src='"+ image +"'/></div>");
        var scrollYpos = $(document).scrollTop()-10;
        $("#pluginBackPreview")
            .css("bottom",-scrollYpos)
            .css("right","10px")
            .fadeIn("fast");
    },
    function(){
        $("#pluginBackPreview").remove();
    });

    $("div.s-image a img:not([mad])").mousemove(function(e){
        $(this).attr("mad", 1);
        var scrollYpos = $(document).scrollTop()-10;
        $("#pluginBackPreview")
            .css("bottom",-scrollYpos)
            .css("right","10px");
    });

    setTimeout(function() {
        backimageview();
    }, 1000);    
};

$(document).ready(function(){
    setTimeout(function() {
        backimageview();
    }, 1000);    
});

$(window).scroll(function() {
    var scrollYpos = $(document).scrollTop()-10;
    $("#pluginBackPreview").css({
        'bottom': -scrollYpos,
        'position': 'absolute'
    });
});
