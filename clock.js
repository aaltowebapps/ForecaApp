$(document).on("ready",start);
        function start(){
        var screenX = document.body.offsetWidth;
 		var screenY = document.body.offsetHeight;
        var sec = 0;
        /*
        $("svg").attr("viewBox","0 0 "+screenX+" "+screenY);
        $("circle").attr("cx",screenX/2)
        			.attr("cy",screenY/2)
        $("#position g").attr("transform","translate("+screenX/2+","+screenY/2+")");
		*/


        	setInterval(function(){				
				$("#hour").attr("transform","rotate("+sec*6+")")
				sec = sec+1;
        	},1000)
            

        }