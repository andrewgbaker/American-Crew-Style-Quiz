<!DOCTYPE html>
<!--[if lte IE 9 ]>    <html lang="en" class="no-js ie ie8"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html class='no-js' lang='en'>
  <!--<![endif]-->
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>American Crew Style Select</title>
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta name="author" content="Karsh Hagan">  	
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

	<script type="text/javascript" src="js/libs/modernizr.js"></script>
	
	<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
  
	<link rel="stylesheet" href="css/style.css" />
   	

	<!--[if IE]>
		<script type="text/javascript">
			 var console = { log: function() {} };
		</script>
	<![endif]-->
		
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
	
	<script type="text/javascript" src="js/libs/jquery.fullPage.min.js"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			$.fn.fullpage({
		        verticalCentered: true,
		        resize : true,
		        anchors:['firstSlide', 'secondSlide'],
		        scrollingSpeed: 700,
		        easing: 'easeInQuart',
		        menu: false,
		        navigation: false,
		        navigationPosition: 'right',
		        navigationTooltips: ['firstSlide', 'secondSlide'],
		        slidesNavigation: true,
		        slidesNavPosition: 'bottom',
        		css3: true,
        		fixedElements: "#demosMenu"
			});
			
			setTimeout(function() {
				if ($('#section1').hasClass('look_down')) {
					$('#section1').toggleClass('look_down');
					$('header').toggleClass('header_up');
				}
			}, 7000);
			
			$('.expand').on( "click", function() {
				$('#section1').toggleClass('look_down');
				$('header').toggleClass('header_up');
			});
		});
	</script>

</head>
<body class="results">

<header>
	<article>
		<h1>You Are a Gentleman</h1>
		<p>Your drinks are stiff and so is your upper lip. You give women hope that chivalry might not be dead after all. And you’re either dressed well or not at all. You need a look that has structure, order and plenty of confidence. </p>
	</article>
	<a href="#" class="logo"></a>
	<div class="expand"></div>
</header>
<a href="#" class="logo"></a>
<div class="share start_btn"><a href="#">Share +</a></div>

<!-- SECTION 1
<div class="section " id="section0">
	<h1>fullPage.js</h1>
	<p>CSS3</p>
	<img src="imgs/fullPage.png" alt="fullPage" />
</div>
-->
<div class="section look_down" id="section1">
	<div class="slide clearfix" data-anchor="slide1">
		<article>
			<div class="look_wrap">
				<h5>Your Looks</h5>
				<h2>1/3. The Single Malt</h2>
				<p>If you’re on your way out for a nice dinner, the Single Malt is a great choice. Its strong perimeter and ample texture show that your taste is especially refined.</p>
				<p class="quote">“To give this look more texture, finish the style by combing your fingers through your hair.” – Paul Wilson, American Crew Artistic Director</p>
				<div class="product clearfix">
					<div class="wrap">
						<img src="img/product.jpg" />
					</div>
					<div class="cta">
						<div class="start_btn"><a href="#">Find a Stylist</a></div>
						<div class="start_btn primary"><a href="#">Buy Product</a></div>
					</div>
				</div>
				<p>To create the Single Malt, you’ll need <a href="#">American Crew Forming Cream</a>, <a href="#">Daily Shampoo</a> and an <a href="#">American Crew stylist</a> to show you how. </p>
				<h6>Not Where you Thought You'd End Up? <a href="#">Restart the Quiz > </a><a href="#" class="nav_icon">Q1</a></h6>
			</div>
		</article>
		<div class="look_img"></div>
	</div>
    <div class="slide" data-anchor="slide2"> 
    	<article>
			<div class="look_wrap">
				<h5>Your Look</h5>
				<h2>The Single Malt</h2>
				<p>If you’re on your way out for a nice dinner, the Single Malt is a great choice. Its strong perimeter and ample texture show that your taste is especially refined.</p>
				<p class="quote">“To give this look more texture, finish the style by combing your fingers through your hair.” – Paul Wilson, American Crew Artistic Director</p>
				<div class="product clearfix">
					<div class="wrap">
						<img src="img/product.jpg" />
					</div>
					<div class="cta">
						<div class="start_btn"><a href="#">Find a Stylist</a></div>
						<div class="start_btn primary"><a href="#">Buy Product</a></div>
					</div>
				</div>
				<p>To create the Single Malt, you’ll need American Crew Forming Cream, Daily Shampoo and an American Crew stylist to show you how. </p>
			</div>
		</article>
		<div class="look_img two"></div>
    </div>
    <div class="slide" data-anchor="slide3"> Slide 3 </div>
    <div class="slide" data-anchor="slide4"> Slide 4 </div></div>
</body>
</html>
