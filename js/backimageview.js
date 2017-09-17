this.backimageview = function(){
    xOffset = 100;
    yOffset = 150;
    $("div.s-image a img").hover(function(e){
        var image = this.src.replace(/48x48/gi,'750x0');
        image = image.replace(/200x0/gi,'750x0');
        $("body").append("<p id='pluginBackPreview'><img src='"+ image +"'/></p>");
        $("#pluginBackPreview")
            .css("top",(e.pageY - xOffset) + "px")
            .css("left",(e.pageX + yOffset) + "px")
            .fadeIn("fast");
    },
    function(){
        $("#pluginBackPreview").remove();
    });
    $("div.s-image a img").mousemove(function(e){
        $("#pluginBackPreview")
            .css("top",(e.pageY - xOffset) + "px")
            .css("left",(e.pageX + yOffset) + "px");
    });
};

$(document).ready(function(){
    setTimeout(function() {
        backimageview();
    }, 2000);    
});