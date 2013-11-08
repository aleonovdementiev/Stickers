"use strict";

function DragDropObj(delta_x, delta_y, x_element_drag, y_element_drag, new_x, new_y, x, y) { 
    
    element_drag.onmousedown = saveXY;
    document.onmouseup = clearXY;
    
    this.getSaveXY = function(obj_event) {
        saveXY(obj_event);
    };
    
    this.getClearXY = function(obj_event) {
        clearXY(obj_event);
    };
    
    this.getMoveElementDrag = function(obj_event) {
        moveElementDrag(obj_event);
    };
    
    function saveXY(obj_event) {
        x = obj_event.pageX;
        y = obj_event.pageY;
        x_element_drag = element_drag.offsetLeft;
        y_element_drag = element_drag.offsetTop;
        delta_x = x_element_drag - x;
        delta_y = y_element_drag - y;
        document.onmousemove = moveElementDrag;


    }
    
    function clearXY() {
        document.onmousemove = null;
    }
    
    function moveElementDrag(obj_event) {
        x = obj_event.pageX;
        y = obj_event.pageY;
        new_x = delta_x + x;
        new_y = delta_y + y;
        element_drag.style.top = new_y + "px";
        element_drag.style.left = new_x + "px";
    }
    
    return this;
};