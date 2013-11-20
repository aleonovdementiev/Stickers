"use strict";
    
$(function() {
    var stickers = new CollectionView({
                            el: $("#sticker_board"),
                            template: _.template($("#sticker-tpl").html()),
                            className: "sticker"
                        }),
        sticker = new StickerView({
                            el: $("#sticker_board"),
                            template: _.template($("#sticker-tpl").html()),
                            className: "sticker"
                        });
});