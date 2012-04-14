//Author: Davide TheZero
// silvethebest@yahoo.it


var site_url = '';
var nav  = [ '#home' ];

$(document).ready(function(){
	setBkgPos();
	
	for ( i = 0; i < nav.length; i++ ) {
		$(nav[i]).bind( 'mouseover', mMouseOver );
		$(nav[i]).bind( 'mouseout', mMouseOut );
		$(nav[i]).bind( 'click', mClick );
	}
	
	for ( i = 0; i < nav.length; i++ ) {
		// element with ‘active’ class will  start animation 
		if ( $(nav[i]).get(0).className.indexOf('active') >= 0 ){
			$(nav[i])
				.animate({ backgroundPosition:'(' + _getHPos( nav[i] ) +'px -30px}'},"fast",
					function(){ 
						$(this)
							.children()
								.animate({backgroundPosition:'(0px -40px)'},20)
								.animate({backgroundPosition:'(0px -20px)'},"fast");
						$(this)
							.animate({backgroundPosition:'(' + _getHPos( nav[i] ) +'px 50px)'},"fast")
							.animate({backgroundPosition:'(' + _getHPos( nav[i] ) +'px 25px)'},"fast");
						var parent = this;
						$(this)
							.children()
								.animate( {backgroundPosition:'(0px -45px)'},"fast",function(){
											$(parent).animate({backgroundPosition:'(' + _getHPos( parent.id ) +'px 25px)'},"fast");
											$(parent).css({backgroundImage: 'url(./img/nav.png)'});
									});
					});
			break;
		}
	}
	
            
	function me()
    {
		$('#page').hide('slow', function() {
			// Animation complete.
			$('#page').empty();
			$('#page').load('me.html');
			$('#page').show('slow', function() {
				// Animation complete.
			});
		});
        return;     
    }
	
	$('#home').click(function(){
       me(); 
    });

	
	 // Citazioni casuali nell'header della pagina
    var mottos = new Array(
        "Some call it piracy, We call it freedom! <br/>[TPB Community]",
        "The difference between Insanity and Genius is measured only by Success. <br/>[Anonymous]",
        "Teachers open us the doors of knowledge, but you must enter by yourself. <br/>[Anonymous]",
        "No Rain, No Rainbow...But More Rain you take, the Greater will be your Rainbow. <br/>[TheZero]",
        "Without an opponent the virtue rots. <br/>[Seneca]",
        "Everybody is a Genius, but if you Judge a Fish by its ability to climb a Tree, it will live its whole Life believing that it's Stupid. <br/>[Albert Einstein]",
        "I do not approve what you Say but I will defend to the Death your Right to do so. <br/>[Voltaire]",
        "Never discuss with Fools, first Pull you to their Level then Beat you with their Experience. <br/>[Anonymous]",
        "The Wise do not need Suggestions. Fools do not take account. <br/>[Anonymous]",
        "Never trust a computer you can not throw out the window. <br/>[Steve Wozniak]",
		"Good programmers know what to write, best know what to rewrite. <br/>[Eric Steven Raymond]",
        "To iterate is human, to recurse divine. <br/>[L. Peter Deutsch]",
        "An infinite number of monkeys typing into GNU Emacs would never make a good program. <br/>[Linus Torvalds]");
        
    function fetchRandomMotto()
    {
        var rnd = Math.floor(Math.random() * mottos.length);
        var randomMotto = mottos[Math.min(rnd, mottos.length - 1)];
        $("#cit").fadeOut(500, function()
        {
            $(this).html("\"" + randomMotto + "\"");
            $(this).fadeIn(500);
        });
    }
    
    setInterval(fetchRandomMotto, 20000);
    
    //main script
    fetchRandomMotto();
	me();
}); 

function _getHPos( id )
{
	for ( i = 0; i < nav.length; i++ ){
		if ( '#' + id == nav[i] ){
			return i*(-98);
		}
	}	
	
	return 0;
}

function setBkgPos()
{
	for ( i = 0; i < nav.length; i++ ){
		$(nav[i]).css({backgroundPosition: i*(-98) + 'px -25px'});
		$(nav[i] + ' div').css({ backgroundPosition: '0px -60px'});
	}
}

function mMouseOver(e)
{
	// element with ‘active’ class will ignore this event and do nothing
	if ( this.className.indexOf('active') >= 0  ){
		return;
	}
	
	$(this)
		// stop any animation that took place before this
		.stop()
		// step 1. change the image file
		.css({backgroundImage: 'url(./img/nav-over.png)',cursor: 'pointer'})
		// step.2 move up the navigation item a bit
		.animate({ backgroundPosition:'(' + _getHPos( this.id ) +'px -30px}'},"fast",
			// this section will be executed after the step.2 is done
			function(){ 
				$(this)
					.children()
						// step. 3 move the white box down
						.animate({backgroundPosition:'(0px -40px)'},20)
						// step 4. move the white box down
						.animate({backgroundPosition:'(0px -20px)'},"fast");
				$(this)
					// step 4. move the navigation item down
					.animate({backgroundPosition:'(' + _getHPos( this.id ) +'px 50px)'},"fast")
					// step 5. move the navigation item to its final position
					.animate({backgroundPosition:'(' + _getHPos( this.id ) +'px 25px)'},"fast");
				// store the parent element id for later usage
				var parent = this;
				$(this)
					.children()
						// step 5. move the white box to its final position
						.animate( {backgroundPosition:'(0px -45px)'},"fast",
							// this section will be executed after the step.5 is done
							function(){
								// step.6 change the image to its original image	
								$(parent).css({backgroundImage: 'url(./img/nav.png)'});
							});
			
			});
}

function mMouseOut(e)
{			
	// element with ‘active’ class will ignore this event and do nothing
	if ( this.className.indexOf('active') >= 0  ){
		return;
	}
	
	$(this)
		// stop any animation that took place before this
		.stop()
		// step.1 move down navigation item
		.animate({backgroundPosition:'(' + _getHPos( this.id ) +'px 40px )'}, "fast", 
			// this section will be executed after the step.1 is done
			function(){
				// step.2 white box move really fast
				$(this).children().animate({backgroundPosition:'(0px 70px)'}, "fast");
				// step 3. move navigation item up
				$(this).animate( {backgroundPosition:'(' + _getHPos( this.id ) +'px -40px)'}, "fast", 
					// this section will be executed after the step.3 is done
					function(){
						// step 4. move navigation item ot its original position
						$(this).animate( {backgroundPosition:'(' + _getHPos( this.id ) +'px -25px)'}, "fast",
							// this section will be executed after the step.4 is done
							function(){
								// move white box to its original position, ready for next animation
								$(this).children().css({ backgroundPosition:'0px -60px'});
							})
					})
			})
		.css({backgroundImage: 'url(./img/nav.png)', cursor: ''});
}

function mClick(e)
{
	//location.href = this.id;
}


$(function() {
	// OPACITY OF BUTTON SET TO 50%
	$(".UP").css("opacity","0.5");
 
	// ON MOUSE OVER
	$(".UP").hover(function () {
		// SET OPACITY TO 100%
		$(this).stop().animate({
			opacity: 1.0
		}, "slow");
	},
	// ON MOUSE OUT
	function () {
		// SET OPACITY BACK TO 50%
		$(this).stop().animate({
			opacity: 0.5
		}, "slow");
	});
});
