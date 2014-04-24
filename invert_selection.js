$.fn.invert = function(){
		var getInvertedRgbColor, getInvertedColor, getColorArray, getInvertedColorNumber;
		var getColorArray = function(rgb_color){
			var color_arr = rgb_color.match(/rgb\((\d+),\s(\d+),\s(\d+)\)/);
			return(color_arr);
		}

		var getInvertedColorNumber = function(num){
			var new_num;
			if(num <= 127){
				new_num = parseInt(127) + parseInt((127 - num));
			}else{
				new_num = 127 - (num - 127)
			}
			return new_num + 1;
		}

		var getInvertedRgbColor = function(rgb_color){
			var colorArray = getColorArray(rgb_color);
			var invertedColorArray = new Array();
			var rgbString;
			for(var i=1;i<=3;i++){
				var invertedColor = getInvertedColorNumber(colorArray[i]);
				console.log( i + " turns into " + invertedColor);
				invertedColorArray.push(invertedColor);
			}
			rgbString = "rgb(" + parseInt(invertedColorArray[0]) + ", " + parseInt(invertedColorArray[1]) + ", " + parseInt(invertedColorArray[2]) + " )";
			return rgbString;

		}
		var color = this.css("color");
		var invertedColor = getInvertedRgbColor(color);
		console.log(color + " ===== " + invertedColor);
		var background = this.css("background-color");
		var invertedBackgroundColor = getInvertedRgbColor(background);
		console.log( background + " ===== " + invertedBackgroundColor);

		
		jQuery(this).on("mouseover",  function(){
			jQuery(this).css({"background":invertedBackgroundColor, "color":invertedColor});
		});
		jQuery(this).on("mouseleave",  function(){
			jQuery(this).css({"background":background, "color":color});
		});


		
	}
