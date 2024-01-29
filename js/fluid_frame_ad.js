/*
jQuery makeFluid plugin v0.4.88
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
				parentWidth = frameParent.outerWidth();

			if(parentWidth < frameWidth){
				var perNot100 = Number(calcX(frameWidth,parentWidth,));
				numScale = perNot100/100;
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
	
	function calcX(frame,parentE){
		r =  frame/100, p =  parentE/r, finalPercent = parseInt(p*100)/100;
		return finalPercent;
	}
	
	function stringifyr(val){
		var scl = JSON.stringify(val);
		console.log('stringify =>'+scl);
	}
		
	function changeCssProperty(el, value){
		if (value){
			$(el).css({ 'overflow': 'hidden', 'transform-origin': '0px 0px', '-webkit-transform-origin': '0 0','scale':''+value+'' });
		}
	}

}

makeFluid();
$(window).resize(function(){
	makeFluid();
});