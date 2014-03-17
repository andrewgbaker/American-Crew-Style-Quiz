<?php include('includes/settings.php'); ?>
<!DOCTYPE html>
<!--[if lt IE 9 ]>    <html lang="en" class="no-js ie ie8"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html class='no-js' lang='en'>
  <!--<![endif]-->
<head>
  <?php include('includes/standard_meta.php'); ?>
  <?php include('includes/header_scripts.php'); ?>
</head>

	<body class="home" data-script="HomePage">
	
	<img class="bgLoad" src="<?php echo $asset_root; ?>/img/home_bg.jpg" alt="home_bg"/>
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
							<span>–Paul Wilson,  American Crew Artistic Director</span>
						</aside>
						<div>
							<img src="<?php echo $asset_root; ?>/img/paul_wilson.jpg" alt="paul wilson" />
						</div>
					</section>
				</div>
			</div>
		</article>
		
  		<script type="text/javascript">

		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-15564012-4']);
		  _gaq.push(['_trackPageview']);
		
		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();
		
		</script>
	
	
	<!-- jQuery if needed
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
        <script type="text/javascript" src="<?php echo $asset_root; ?>/js/libs/imagesloaded.min.js"></script>
        <script type="text/javascript" src="<?php echo $asset_root; ?>/js/site.js"></script>  -->
        <?php include('includes/footer_scripts.php'); ?>
        
    </body>
</html>