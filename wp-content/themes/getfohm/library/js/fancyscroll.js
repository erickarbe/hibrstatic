if ($( window ).width() >= 1024) {


 $(function() {

    // init controller
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
          //triggerHook: 'onLeave'
      }
    });
  
    // pin scene
    new ScrollMagic.Scene({
      duration: '1000px', 
      triggerElement: ".holder",
      //triggerHook: 'onEnter'
    })
    .setPin(".holder")
    .addTo(controller);
    
  /*
    var tweenCover = TweenMax.to(".cover", 0.01, {
      opacity: 0
    });
  */
    
    var tweenTop = TweenMax.to(".topLayer", 1, {
      top: '-130px',
      //ease: Power4.easeInOut
    });
    
    var tweenBottom = TweenMax.to(".middleLayer", 1, {
      top: '-40px'
    });
    
    var tweenText = TweenMax.to([".top-textbox", ".bottom-textbox", ".base-textbox"], 0.01, {
      opacity: 1
    });
    
    var tweenTitle = TweenMax.to([".fixed-title"], 1, {
      opacity: 1,
      bottom: '520px'
    });
  
    //The Cover fade out
  /*
    new ScrollMagic.Scene({duration:'199px'})
      .setTween(tweenCover)
      .triggerElement('.holder')
      .addIndicators()
      .addTo(controller);
  */
    
    //Top Layer
    //new ScrollMagic.Scene({triggerElement: ".holder", offset: 200})
    new ScrollMagic.Scene({duration: '40%'})
      .setTween(tweenTop)
      .triggerElement('.holder')
      .offset(200)
      //.addIndicators()
      .addTo(controller);
    
    //Bottom Layer
    new ScrollMagic.Scene({duration: '40%'})
      .setTween(tweenBottom)
      .triggerElement('.holder')
      .offset(225)
      //.addIndicators()
      .addTo(controller);
    
    //Textboxes
    new ScrollMagic.Scene({duration: '40%'})
      .setTween(tweenText)
      .triggerElement('.holder')
      .offset(150)
      //.addIndicators()
      .addTo(controller); 
    
    //Title
    new ScrollMagic.Scene({duration: '40%'})
      .setTween(tweenTitle)
      .triggerElement('.holder')
      .offset(200)
      //.addIndicators()
      .addTo(controller); 
      
    //Bottom Textbox
/*
    new ScrollMagic.Scene({duration: '80%'})
      .setTween(tweenText)
      .triggerElement('.holder')
      .offset(150)
      //.addIndicators()
      .addTo(controller); 
*/

  })
  
  
  $(function() {
    var images = [
  		"https://hibr.com/wp-content/uploads/2017/06/001_unboxing.jpg",
  		"https://hibr.com/wp-content/uploads/2017/06/002_unboxing.jpg",
  		"https://hibr.com/wp-content/uploads/2017/06/003_unboxing.jpg",
  		"https://hibr.com/wp-content/uploads/2017/06/004_unboxing.jpg",
  		"https://hibr.com/wp-content/uploads/2017/06/005_unboxing.jpg",
  		"https://hibr.com/wp-content/uploads/2017/06/006_unboxing.jpg",
  		"https://hibr.com/wp-content/uploads/2017/06/007_unboxing.jpg",
      "https://hibr.com/wp-content/uploads/2017/06/008_unboxing.jpg",
      "https://hibr.com/wp-content/uploads/2017/06/009_unboxing.jpg",
      "https://hibr.com/wp-content/uploads/2017/06/010_unboxing.jpg",
      "https://hibr.com/wp-content/uploads/2017/06/011_unboxing.jpg",
      "https://hibr.com/wp-content/uploads/2017/06/012_unboxing.jpg",
      "https://hibr.com/wp-content/uploads/2017/06/013_unboxing.jpg",
      "https://hibr.com/wp-content/uploads/2017/06/014_unboxing.jpg",
      "https://hibr.com/wp-content/uploads/2017/06/015_unboxing.jpg",
      "https://hibr.com/wp-content/uploads/2017/06/016_unboxing.jpg",
      "https://hibr.com/wp-content/uploads/2017/06/017_unboxing.jpg",
      "https://hibr.com/wp-content/uploads/2017/06/018_unboxing.jpg",
      "https://hibr.com/wp-content/uploads/2017/06/019_unboxing.jpg",
      "https://hibr.com/wp-content/uploads/2017/06/020_unboxing.jpg",
      "https://hibr.com/wp-content/uploads/2017/06/021_unboxing.jpg",
      "https://hibr.com/wp-content/uploads/2017/06/022_unboxing.jpg",
      "https://hibr.com/wp-content/uploads/2017/06/023_unboxing.jpg",
      "https://hibr.com/wp-content/uploads/2017/06/024_unboxing.jpg",
      "https://hibr.com/wp-content/uploads/2017/06/025_unboxing.jpg",
      "https://hibr.com/wp-content/uploads/2017/06/026_unboxing.jpg",
      "https://hibr.com/wp-content/uploads/2017/06/027_unboxing.jpg",
  	];
    // TweenMax can tween any property of any object. We use this object to cycle through the array
  	var obj = {curImg: 0};
    // create tween
  	var tween = TweenMax.to(obj, 0.5,
  		{
  			curImg: images.length - 1,	// animate propery curImg to number of images
  			roundProps: "curImg",				// only integers so it can be used as an array index
  			repeat: 0,									// repeat 
  			immediateRender: true,			// load first image automatically
  			ease: Linear.easeNone,			// show every image the same ammount of time
  			onUpdate: function () {
  			  $("#boximage").attr("src", images[obj.curImg]); // set the image source
  			}
  		}
  	);
    // init controller
    var controller = new ScrollMagic.Controller();
    // build scene
    var scene = new ScrollMagic.Scene({
      triggerElement: ".box-holder", 
      duration: 2000
    })
            .setPin('.box-holder')
            .triggerHook(.2)
  					.setTween(tween)
  					.addTo(controller);
  })

}