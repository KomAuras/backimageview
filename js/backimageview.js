this.backimageview = function(){
    //console.log('backimageview');
    xOffset = 100;
    yOffset = 150;
    $("div.s-image a img").hover(function(e){
        var image = this.src.replace(/.48x48./gi,'.750x0.');
        image = image.replace(/.200x0./gi,'.750x0.');
        $("body").append("<p id='pluginBackPreview'><img src='"+ image +"'/></p>");
        var scrollYpos = $(document).scrollTop();
        $("#pluginBackPreview")
            .css("bottom",-scrollYpos)
            .css("right","0px")
            .fadeIn("fast");
    },
    function(){
        $("#pluginBackPreview").remove();
    });
    $("div.s-image a img").mousemove(function(e){
        var scrollYpos = $(document).scrollTop();
        $("#pluginBackPreview")
            .css("bottom",-scrollYpos)
            .css("right","0px");
    });
    setTimeout(function() {
        backimageview();
    }, 1000);    
};

$(document).ready(function(){
    //console.log('ready');
    setTimeout(function() {
        backimageview();
    }, 1000);    
});

$(window).scroll(function() {
    var scrollYpos = $(document).scrollTop();
    $("#pluginBackPreview").css({
        'bottom': -scrollYpos,
        'position': 'absolute'
    });
});
