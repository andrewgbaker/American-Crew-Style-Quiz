<?php include('includes/settings.php'); ?>
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

	<script type="text/javascript" src="<?php echo $asset_root; ?>/js/libs/modernizr.js"></script>
	
	<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
  
	<link rel="stylesheet" href="<?php echo $asset_root; ?>/css/style.css" />
  

</head>

	<body class="home">
	
	<img class="bg_load" src="<?php echo $asset_root; ?>/img/home_bg.jpg" alt="home_bg"/>
	<div class="home_bg" style="opacity: 0"></div>
	
		<a href="#" class="logo"></a>
		
		<article>
			<div class="wrap">
				<div class="home_content">
					<h1>What Hairstyle will <span>keep you on top?</span></h1>
					<p>From the world of business to the realm of women, the most successful men are the ones who know who they are and look the part. Answer a few questions about the things you like, and American Crew expert, Paul Wilson, will show you the hairstyles you should be sporting and give you tips for creating them.</p>
				 	<div class="start_btn"><a href="questions">Define Your Style</a></div>
				 	
				 	<section class="clearfix">
						<aside class="quote">
							<p>“Great hair won’t just help you attract more women. It’ll help you attract better jobs too.”</p>
							<span>–Paul Wilson,  American Crew Artistic Director & world–renowned stylist</span>
						</aside>
						<div>
							<img src="<?php echo $asset_root; ?>/img/paul_wilson.jpg" alt="paul wilson" />
						</div>
					</section>
				</div>
			</div>
		</article>
		
  
	
	
	<!-- jQuery if needed -->
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
        <script type="text/javascript" src="<?php echo $asset_root; ?>/js/libs/imagesloaded.min.js"></script>
        
        <script>
        	imagesLoaded( '.bg_load', function() {
        		$('.home_bg').css('opacity', '1');
        	});
      	</script>
        
    </body>
</html>