var grow = function() {
	// Step 1. What element do we want to animate?
   var ohnoes = document.getElementById("ohnoes");
   ohnoes.style.width = "50px";
  
   // Step 2. What function will change it each time?
   var startTime = new Date().getTime();
   var makeItBigger = function() {
       var currTime = new Date().getTime();
       var newWidth = (50 + ((currTime - startTime)/1000) * 30);
       ohnoes.style.width = newWidth + "px"; 
       
        if (newWidth < 300) {
            window.requestAnimationFrame(makeItBigger);
		}
   };
	
};
