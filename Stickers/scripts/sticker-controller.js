"use strict";

var StickerView = Backbone.View.extend({
            
                    model: Sticker,
                    
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
                                    this.$el.attr("contentEditable", true);
                                    event.stopPropagation();
                                },
                                
                    saveText:   function(event) {
                                    var newtext = this.$el.text();
                                    
                                    event.preventDefault();
                                    this.$el.attr("contentEditable", true);
                                    this.model.set("stickertext", newtext);
                                }
                            
                })
        
        
        
        
        
        
        