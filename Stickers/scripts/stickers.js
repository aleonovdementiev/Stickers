"use_strict";

$(function() {
    
    
    var Sticker = Backbone.Model.extend({
                defaults:   { 
                                stickertext: "doubleclick to edit sticker text"
                            }
            }),
        
        StickersCollection = Backbone.Collection.extend({
                                model: Sticker
                            }),
                            
        StickerView = Backbone.View.extend({
            
            el: $("#sticker_board"),
            template: _.template($("#sticker-tpl").html()),
            className: "sticker",
            
            initialize: function() {
                            this.model.on("change", this.render, this);
                        },
            
            events: {
                        "click": "stopPropagation",
                        "contextmenu": "deleteSticker",
                        "dbclick": "editSticker",
                        "blur": "saveText"
                    },
                    
            render: function() {		
                        this.$el.text(this.template(this.model.toJSON()));				
                        return this;	
                    },
                    
            stopPropagation: function(event) {
                                event.stopPropagation();
                            },

            deleteSticker: function(event) {
                                event.preventDefault();
                                this.$el.remove();
                                this.model.destroy();
                            },
                            
            editSticker: function(event) {
                            event.stopPropagation();
                            this.$el.attr("contentEditable", true);
                        },
                        
            saveText:   function(event) {
                            var newtext = this.$el.text();
                            
                            event.stopPropagation();
                            this.$el.attr("contentEditable", true);
                            this.model.set("stickertext", newtext);
                        }
                    
        }),
        
        CollectionView = Backbone.View.extend({
                initialize: function() {
                                this.collection = new StickersCollection();
                                this.collection.on("add", this.addSticker, this);
                                this.collection.on("change", this.addToCollection, this);
                            },
			
                events: {
                            "dbclick": "render"
                        },
			
                                        			
                addSticker: function(sticker) {
                            var view = new StickerView({model: Sticker});
                            this.$el.add(view.render().el);					
                        },
                                        
                addToCollection: function(sticker) {
                                    var sticker = new Sticker();
                                    this.collection.add(stiker);   
                                },        
                render: function() {
                            this.$el.html("");									
                            this.collection.each(this.addSticker, this);
                            console.log("123");
                        },
        }),
        
        sticker = new CollectionView();
        
    })