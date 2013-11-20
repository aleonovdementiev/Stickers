"use strict";

var CollectionView = Backbone.View.extend({
                        initialize: function() {
                                        this.collection = new StickersCollection();
                                        console.log(this.collection);
                                        this.collection.on("add", this.addSticker, this);
                                        this.collection.on("change", this.addToCollection, this);
                                    },
                    
                        events: {
                                    "dbclick": "render"
                                },
                    
                                                            
                        addSticker: function(sticker) {
                                    var view = new StickerView({model: Sticker});
                                    this.$el.append(view.render().el);					
                                },
                                                
                        addToCollection: function(sticker) {
                                            console.log("111");
                                        },        
                        render: function() {
                                    var sticker = new Sticker();
                                    this.collection.add(sticker); 
                                    console.log("123");
                                }
                    })