var app = {

  
    
    initialize : function() {
        var self = this;
        $('body').html(new LoginView().render().el);
//           
//    if (navigator.notification) {
//        navigator.notification.alert('message', null, 'title', 'OK');
//    } else {
//        alert('title' ? ('title '+ ": " + 'message') : 'message');
//    }
//
//   
    
 // Check of browser supports touch events...
    if (document.documentElement.hasOwnProperty('ontouchstart')) {
        // ... if yes: register touch event listener to change the "selected" state of the item
        $('body').on('touchstart', 'a', function(event) {
            $(event.target).addClass('tappable-active');
        });
        $('body').on('touchend', 'a', function(event) {
            $(event.target).removeClass('tappable-active');
        });
    } else {
        // ... if not: register mouse events instead
        $('body').on('mousedown', 'a', function(event) {
            $(event.target).addClass('tappable-active');
        });
        $('body').on('mouseup', 'a', function(event) {
            $(event.target).removeClass('tappable-active');
        });
    }
}
    
    
}

