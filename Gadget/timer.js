"use strict";

function TimerObj() {
    
    this.startTime = function(chck_clock) {
        var tm = new Date(),
            hour = tm.getHours(),
            min = tm.getMinutes(),
            sec = tm.getSeconds(),
            result;
            
        min = checkTime(min);
        sec = checkTime(sec);
        
        if(chck_clock === 0) {
            result=hour+":"+min;
        }
        if(chck_clock === 1) {
            result=hour+":"+min+":"+sec;
        }
        if(chck_clock === 2) {
            result=checkTime(tm.getDate())+"."+checkTime(tm.getMonth())+"."+tm.getFullYear();
        }
        return result;
    };
    
    function checkTime(i) {
        if (i<10) {
            i="0" + i;
        }
        return i;
    };
        
    return this;
};