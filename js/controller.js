(function(){
    var current = 0; // 현재 위치
    var max = 0; 
    var container;
    
    function init() {
        container = jQuery(".slide ul");
        max = container.children().length;
        console.log("init ")
        
        events();
    }
    
    function events(){
        jQuery("button.prev").on("click", prev);
        jQuery("button.next").on("click", next);
    }
    
    function prev(e) {
        current--;
        if (current < 0) current = max=-1;
         console.log("prev btn ");
    }
    
    function next(e) {
        current++;
        if (current > max-1) current = 0;
         console.log("next btn ");
    }
    
    function animate() {
        var moveX = current * 940;
        TweenMax.to(container, 0.8, {marginLeft:-moveX, ease:Expo.easeOut});
         console.log("anime ");
    }
    
    function keyboard(e) {
        if (e.which ==39 /*right */ ) {
            next();
        } else if (e.which == 37 /* left */ ) {
            prev();
        }
    }
    
    jQuery(document).ready(init);
})();