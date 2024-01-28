/*
 jQuery makeFluid plugin v0.2.37
 (c) 2018, Rich
 https://t.me/rich_99000000
*/
//Example of resizing based on the viewport
//Scale a display ad to the current width of its defined space using the CSS 'transform' property
	
let numScale = 1, min_width_block_for_Frame = 480;

function makeFluid(elem){
	//stringifyr(elem);
	
	function calcX(width,width_el){
		r =  width/100;
		p =  width_el/r;
		var final_prc = parseInt(p*100)/100;
		//console.log("fin per "+final_prc+"%");
		return final_prc;
	}
	function stringifyr(val){
		var scl = JSON.stringify(val);
		console.log('stringify =>'+scl);
	}
	
	//console.log("u see fluid");
	function getSupportedProp(proparray){
			/*Since we are using a CSS3 property, we need to determine which vendor prefix the current device supports and use that. 
			This solution was found at http://www.javascriptkit.com/javatutors/setcss3properties.shtml */
			var root=document.documentElement //reference root element of document
			for (var i=0; i<proparray.length; i++){ //loop through possible properties
				if (proparray[i] in root.style){ //if property exists on element (value will be string, empty string if not set)
					//stringifyr(root.style);
					return proparray[i] //return thit string
				}
			}
		}
		
	var cssTransform = getSupportedProp(['transform', 'MozTransform', 'WebkitTransform', 'msTransform', 'OTransform']);
		
	function changeCssProperty(el, prop, value){
			if (prop){
				//console.log("target is "+target);
				  $(el).css(prop,value);
			}
		}
		
	if($(".frameblock").innerWidth() < min_width_block_for_Frame){
		var imgWidth = $(".frameblock").innerWidth();
		var imgHeight = $(".frameblock").innerHeight();
		var imgScalef = (imgWidth/imgHeight).toFixed(6);
		var per_not_100F = Number(calcX(min_width_block_for_Frame,imgWidth));
		//console.log("per_not_100F = "+per_not_100F);
		//console.log("imgWidth = "+imgWidth+"; imgHeight = "+imgHeight+"; imgScalef:"+imgScalef);
		var numScale = per_not_100F/100;
	}else{
		numScale = 1;
	}
	changeCssProperty(elem, cssTransform, 'scale('+ numScale +')');
}