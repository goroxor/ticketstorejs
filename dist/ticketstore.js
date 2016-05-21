window.onload = function(e){
    var store_url = $('#ts-store').data('store') + '?iframe=true';
    var pm_support = typeof(window.postMessage) == 'function';
    var scrolling = 'yes';
    var style = "width:100%;border:none;padding:0 0 0 0;";
    var default_height = 800;
    if ($("#ts-store").attr('data-default-height')) {
        default_height = $('#ts-store').data('default-height');
    }
    if(pm_support){
        scrolling = 'no';
        style = "width:100%;border:none;padding:0 0 0 0;overflow:hidden;";
        window.addEventListener("message", function(event) {
            document.getElementById('ts-store-frame').height = event.data + "px";
        });
    }
    $('<iframe>', {
        src:            store_url,
        id:             'ts-store-frame',
        frameborder:    0,
        scrolling:      scrolling,
        style:          style,
    }).appendTo('#ts-store');
    if(!pm_support){
        $('#ts-store-frame').height(default_height);
    }
};
