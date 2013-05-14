
Meteor.startup(function() {
Template.metrobox.rendered =function (){


  var thisBox = $('#'+this.firstNode.id);
  var colorIndex= Math.floor((Math.random()*7)+0);
  var myColors=new Array("#008299","#2672EC","#8C0095","#5133AB"
  ,"#AC193D","#D24726","#008A00","#094AB2");
  thisBox.css("background-color", myColors[colorIndex]);
  //1 if doublebox
      var doublebox= Math.floor((Math.random()*2)+1);
      if(doublebox==1){
          thisBox.width("200");
      }
      else{
        thisBox.width("100");
      }


  thisBox.fadeIn('slow');
}
});


iterateDivs = function(){
	// $( ".metrobox" ).each(function(index) {
	// 	var colorIndex= Math.floor((Math.random()*7)+0);
	// 	var myColors=new Array("#008299","#2672EC","#8C0095","#5133AB"
	// 		,"#AC193D","#D24726","#008A00","#094AB2");
	// 	$(this).css("background-color", myColors[colorIndex]);
 //  		//1 if doublebox
 //    	var doublebox= Math.floor((Math.random()*2)+1);
 //    	if(doublebox==1){
 //      		$(this).width("200");
 //    	}
 //    	else{
 //    		$(this).width("100");
 //    	}

	// });
}



printObject = function (o){
    var out = '';
  for (var p in o) {
    out += p + ': ' + o[p] + '\n';
  }
  alert(out);
}