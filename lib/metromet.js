

Meteor.startup(function() {



Template.metrobox.helpers({

    firstImage: function() {
      var imgUrl = getThumbUrl(this.images[0]);
      return imgUrl;
    },
    randomColor: function() {
      var colorIndex= Math.floor((Math.random()*7)+0);
      var myColors=new Array(
        "#F3B200",
        "#77B900",  
        "#2572EB",  
        "#B01E00",
        "#C1004F",
        "#7200AC",
        "#4617B4",
        "#006AC1",
        "#008287",
        "#199900",
        "#00C13F",
        "#FF981D",
        "#FF2E12",
        "#FF1D77",
        "#AA40FF",
        "#1FAEFF",
        "#56C5FF",
        "#00D8CC",
        "#91D100",
        "#E1B700",
        "#FF76BC",
        "#00A3A3",
        "#FE7C22"
      );
    return myColors[colorIndex];
    },
  });


Template.metrobox.rendered =function (){
  var thisBox = $(this.firstNode);
  
  //1 if doublebox
      var doublebox= Math.floor((Math.random()*2)+1);
      if(doublebox==1){
          thisBox.width("205");
      }
      else{
        thisBox.width("100");
      }

      //thisBox.slideToggle();
  thisBox.fadeIn('slow');
}
});