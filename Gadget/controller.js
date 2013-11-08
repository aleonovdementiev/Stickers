"use strict";

function Controller(document) {

    var chck_clock = 0,
        delta_x = 0,
        delta_y = 0,
        x_element_drag,
        y_element_drag,
        new_x,
        new_y,
        ie = 0,
        op = 0,
        ff = 0,
        browser = navigator.userAgent,
        x, y,
        drgdrp = new DragDropObj(delta_x, delta_y, x_element_drag, y_element_drag, new_x, new_y, ie, x, y, browser),
        timer = new TimerObj(chck_clock);
    
    this.init = function() {
                
        function showTime(chck_clock) {
            clock_input_text.value = timer.startTime(chck_clock);
        }
        
        function checkRightClick() {
            clearInterval(showTime);
            chck_clock = 2;
            showTime(chck_clock);
            setInterval(function() {
                            showTime(chck_clock);
                        },1000000);
        };
    
        function checkLeftClick() {
            clearInterval(showTime);
            if(chck_clock === 0) {
                chck_clock = 1;
                showTime(chck_clock);
                setInterval(function() {
                                showTime(chck_clock);
                            },1000);
            } else {
                chck_clock = 0;
                showTime(chck_clock);
                setInterval(function() {
                                showTime(chck_clock);
                            },1000);               
            }
        };
        
        function getFuncSaveXY() {
            drgdrp.getSaveXY;
        }
        
        function getFuncClearXY() {
            drgdrp.getClearXY;
        }
        
        function getFuncMoveElementDrag() {
            drgdrp.getMoveElementDrag;
        }
        
        element_drag.addEventListener("onmousedown", getFuncSaveXY, false);
        document.addEventListener("onmousemove", getFuncMoveElementDrag, false);        
        clock_input.addEventListener("click",checkLeftClick,false);
        clock_input.addEventListener("contextmenu",checkRightClick,false);
        showTime(chck_clock);

        
        
    };
    var drgdrp = new DragDropObj(delta_x, delta_y, x_element_drag, y_element_drag, new_x, new_y, ie, x, y, browser);
    var timer = new TimerObj(chck_clock);
    
    return this;
}