var backimageview_enabled = $('.backimageview-plugin').attr('data-state');
var backimageview_width = $('.backimageview-plugin').attr('data-width');

$('.backimageview-plugin').click(function (event) {
    var thisbutton = $(".backimageview-plugin");
    var state = thisbutton.attr('data-state');
    $.post('?plugin=backimageview&module=save', $(this).serializeArray().concat({
        name: 'state',
        value: state
    }), function callback(data) {
        console.log(data.data);
        thisbutton.html(data.data.text);
        thisbutton.attr("data-state", data.data.state);
        backimageview_enabled = data.data.state;
    }, 'json');
    return false;
});

this.backimageview = function () {
    $("div.s-image a img:not([had])").hover(function (e) {
            if (backimageview_enabled == 1) {
                $(this).attr("had", 1);
                var image = this.src;
                image = image.replace(/.48x48./gi, '.750x0.');
                image = image.replace(/.200x0./gi, '.750x0.');
                $("body").append("<div id='pluginBackPreview'><img src='" + image + "'/></div>");
                if (backimageview_width != 0)
                    $("#pluginBackPreview img").css("width", backimageview_width);
                var scrollYpos = $(document).scrollTop() - 10;
                $("#pluginBackPreview")
                    .css("bottom", -scrollYpos)
                    .css("right", "10px")
                    .fadeIn("fast");
            }
        },
        function () {
            $("#pluginBackPreview").remove();
        });

    $("div.s-image a img:not([mad])").mousemove(function (e) {
        $(this).attr("mad", 1);
        var scrollYpos = $(document).scrollTop() - 10;
        $("#pluginBackPreview")
            .css("bottom", -scrollYpos)
            .css("right", "10px");
    });

    setTimeout(function () {
        backimageview();
    }, 1000);
};

$(document).ready(function () {
    setTimeout(function () {
        backimageview();
    }, 1000);
});

$(window).scroll(function () {
    var scrollYpos = $(document).scrollTop() - 10;
    $("#pluginBackPreview").css({
        'bottom': -scrollYpos,
        'position': 'absolute'
    });
});
