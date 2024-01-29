/*
 jQuery makeFluid plugin v0.4.86
 (c) 2018-2024, Rich
 https://t.me/rich_99000000
*/
//Example of resizing based on the viewport
//Scale a display ad to the current width of its defined space using the CSS 'transform' property
	
let numScale = 1;

function makeFluid(){
	
		iframes = $("iframe");
		for (i = 0; i < iframes.length; i++){
			let frameWidth = $(iframes[i]).outerWidth(),
				frameHeight = $(iframes[i]).outerHeight(),
				frameParent = $(iframes[i]).closest("div"),
				parent_w = frameParent.outerWidth();

			if(parent_w < frameWidth){ //console.log('parent_small');
				var per_not_100F = Number(calcX(frameWidth,parent_w,));
				numScale = per_not_100F/100;
			}else{
				numScale = 1;
			}

			changeCssProperty($(iframes[i]), numScale);

			if(numScale !== 1){
				editParent(frameParent,frameHeight,numScale);
			}else{
				$(frameParent).removeAttr("style");
			}
			
		}
		//console.log(iframes);

	function editParent(el,elHeight,scale){
		$(el).css({'overflow': 'hidden','height': ''+Number(elHeight*100)/100 * Number(scale)+''});
	}
	
	function calcX(width,width_el){
		r =  width/100, p =  width_el/r, final_prc = parseInt(p*100)/100;
		return final_prc;
	}
	function stringifyr(val){
		var scl = JSON.stringify(val);
		console.log('stringify =>'+scl);
	}
		
	function changeCssProperty(el, value){ // as array
		//console.log("changeCssProperty event; numScale="+value);
		if (value){
			$(el).css({ 'overflow': 'hidden', 'transform-origin': '0px 0px', '-webkit-transform-origin': '0 0','scale':''+value+'' });
		}
	}

}

makeFluid();
$(window).resize(function(){
	makeFluid();
});