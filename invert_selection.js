<html>
<body>


<textarea rows="10" cols="50" id="textarea_content">
	this is a textarea, it will have a credit card 4456 5443 5456 3432 number in it
</textarea>


<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>


	$(document).on("ready", function(){
		jQuery("#textarea_content").invert();
	});

	$.fn.invert = function(){
		var color = this.css("color");
		console.log(color);
		var background = this.css("background-color");
		var getColorArray = function(rgb_color){
			var color_arr = rgb_color.match(/rgb\((\d+),\s(\d+),\s(\d+)\)/);
			return(color_arr);
		}


		var invertedColor = getInvertedColor(color);
		var invertedBackgroundColor = getInvertedColor(background);

		if(color == "black"){
			var alt_color  = "white"
			var alt_background = "black";
		}

		if(background == "white"){
			var alt_color = "white";
			var alt_background = "black";
		}

		
		jQuery(this).on("mouseover",  function(){
			jQuery(this).css({"background":alt_background, "color":alt_color});
		});
		jQuery(this).on("mouseleave",  function(){
			jQuery(this).css({"background":background, "color":color});
		});


		
	}


</script>
</body>
</html>
