var LoginView = function () {
 
    this.initialize = function () {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('click', '.capture-button', this.changePicture);
    };
 
    this.render = function() {
        LoginView.template = Handlebars.compile($("#LoginView").html());
        this.el.html(LoginView.template());
        return this;
    };
   
    
    this.changePicture = function (event) {
        event.preventDefault();  
            
  
         if (!navigator.camera) {
             if (navigator.notification) 
                {
                navigator.notification.alert("Camera API not supported for this device", null, 'Oops!!!', 'OK'); 
                }
            else
                {
                  alert('ERROR' ? ('ERROR'+ ": " + 'Camera API not supported') : 'Camera API not supported');
                }
      
                return;
         }        
        
        
      var options =   {   quality: 40,
                        destinationType:0,
                        sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
                        encodingType: 0     // 0=JPG 1=PNG
                    };
 
    navigator.camera.getPicture(
        
        function(imageData) {
      
            setTimeout(function() { 
               
                var smallImage = document.getElementById('smallImage');
                smallImage.style.display = 'block';

           // Show the captured photo
           // The inline CSS rules are used to resize the image
            //
                smallImage.src = "data:image/jpeg;base64," + imageData;    
                
                if (navigator.notification) {
                    navigator.notification.alert('Picture succesfully taken', null, 'Message', 'OK');
                } else {
                    alert('Message' ? ('Message'+ ": " + 'Picture succesfully taken') : 'Picture succesfully taken');
                }}, 1);


     
            
        },
        function() {
           
         setTimeout(function() { 
    
                    if (navigator.notification) {
                    navigator.notification.alert('Error taking picture', null, 'ERROR', 'OK');
                } else {
                    alert('ERROR' ? ('ERROR'+ ": " + 'Error taking picture') : 'Error taking picture');
                    }}, 1);
       
           
        },
        options);
 
    return false;
};
     
    this.initialize();
}                                                                                                                             

