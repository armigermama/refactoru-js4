/**
 * What percentage of the page was viewed
**/

//Make life easier//
var D = document, W = window;

//size of browser window //
var browerWidth = W.innerWidth, browserHeight = W.innerHeight;

//size of document //
var DocWidth = D.body.clientWidth, DocHeight = D.body.clientHeight;

//scroll X Y
var scrOfY = W.pageYOffset;
if ((W.pageXOffset === 0) && (W.innerWidth === D.body.clientWidth)) {
  scrOfX = W.innerWidth;
} else {
  scrOfX = W.innerWidth + W.pageXOffset - D.body.style.margin  ;
}

function pageViewed () {
	var pctPageViewed = ((scrOfY + browserHeight) * scrOfX ) / ( DocWidth * DocHeight);
	alert( "You have viewed " + pctPageViewed + "% of this page.");	
}