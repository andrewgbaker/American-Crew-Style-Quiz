<?php include('../includes/settings.php'); ?>
<!DOCTYPE html>
<!--[if lt IE 9 ]>    <html lang="en" class="no-js ie ie8"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html class='no-js' lang='en'>
  <!--<![endif]-->
<head>
	<?php include('../includes/standard_meta.php'); ?>
	<?php include('../includes/header_scripts.php') ?>	
</head>

	<body class="questions-page">
	
		<!-- BEGIN LOADING OVERLAY -->
		<section class="load_wrap">
	
			<div class="logo loader">
			  <span class="b1"></span>
			  <span class="b2"></span>
			  <span class="b3"></span>
			  <span class="b4"></span>
			</div>
		
			<p>Loading<br />the<br />quiz<br /><span class="dot_three">.&nbsp;</span><span class="dot_two">.&nbsp;</span><span class="dot_one">.&nbsp;</span></p>
			
  		</section>
  		<!-- END LOADING OVERLAY -->
  		
		<div class="question-page-content" data-script="QuestionPage">
			<!-- BEGIN: Question 1 -->
			<div class="grid clearfix question-group next" id="clothes">
				<div class="bgLoad">
					<img src="<?php echo $asset_root; ?>/img/questions/skinnyjeans_bg.jpg" alt="skinny jeans" />
					<img src="<?php echo $asset_root; ?>/img/questions/polo_bg.jpg" alt="polo" />
					<img src="<?php echo $asset_root; ?>/img/questions/suit_bg.jpg" alt="suit" />
					<img src="<?php echo $asset_root; ?>/img/questions/leather_bg.jpg" alt="leader jacket" />
					<img src="<?php echo $asset_root; ?>/img/questions/basict_bg.jpg" alt="basic t" />
				</div>
				<section class="question">
					<a class="logo q_logo"></a>
					<h3>Walk into your closet. What's the first thing you see?</h3>
					<?php include('../includes/question_nav.php'); ?>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/skinnyjeans_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/skinnyjeans.png" alt="Skinny Jeans" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>Skinny Jeans</h5>
								<p>You can wear them for nearly any occasion. And their back pocket is just big enough to hold a U-lock.</p>
							</div>
						</a>
					</div>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/polo_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/polo.png" alt="A Polo Shirt" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>A polo shirt</h5>
								<p>It's got more class than a t-shirt, so whether you're going to a friend's pool party or a DJ's show, it's your go-to.</p>
							</div>
						</a>
					</div>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/suit_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/suit.png" alt="A Nice Suit" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>A tailored suit</h5>
								<p>When you look good, you feel good. And you wear your custom-fitted blazers like a second skin.</p>
							</div>
						</a>
					</div>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/leather_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/leather.png" alt="Leather Jacket" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>A well-worn leather jacket</h5>
								<p>Its style is timeless and its endurance seems to be too. That jacket has weathered just about as much as you have. And it’s still going strong.</p>
							</div>
						</a>
					</div>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/basict_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/basict.png" alt="Basic T Shirt" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>A basic t-shirt</h5>
								<p>It doesn't have a deep V neckline, an extra-slim fit or excessive embellishments. It doesn't need any of that. It's a t-shirt.</p>
							</div>
						</a>
					</div>
				</section>
			</div><!-- END: Question 1 -->
			<!-- BEGIN: Question 2 -->
			<div class="grid clearfix question-group" id="music">
				<section class="question">
					<a class="logo q_logo"></a>
					<h3>What’s your favorite type of music?</h3>
					<?php include('../includes/question_nav.php'); ?>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/jazz_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/jazz.png" alt="Jazz" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>Jazz</h5>
								<p>It’s smooth. It’s full of energy. It’s classy. When you think about it, your favorite songs are a lot like you.</p>
							</div>
						</a>
					</div>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/punkrock_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/punkrock.png" alt="Old School Punk" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>Old School Punk</h5>
								<p>You’ll live once, and you’ll live fast. You need a sound track that can keep up.</p>
							</div>
						</a>
					</div>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/classicRock_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/classicRock.png" alt="Rock Classics" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>Rock Classics</h5>
								<p>You know that some things in life are timeless. Like real instruments. And actual music.</p>
							</div>
						</a>
					</div>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/havent_heard_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/havent_heard.png" alt="You Haven't Heard" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>"You haven't heard of them."</h5>
								<p>To you, mainstream is a dirty word. You avoid the Top 40 like a suburban chain restaurant.</p>
							</div>
						</a>
					</div>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/beats_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/beats.png" alt="Beats" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>b34ts</h5>
								<p>Nothing lifts your mood quite like a good drop. You know that beats are an important part of a balanced breakfast.</p>
							</div>
						</a>
					</div>
				</section>
			</div><!-- END: Question 2 -->
			<!-- BEGIN: Question 3 -->
			<div class="grid clearfix question-group" id="friday_plans">
				<section class="question">
					<a class="logo q_logo"></a>
					<h3>It's Friday night. What are your plans?</h3>
					<?php include('../includes/question_nav.php'); ?>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/divebar_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/divebar.png" alt="Hit Up A Dive Bar" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>Hit up a dive bar</h5>
								<p>You don’t want to throw on a collared shirt just so you can elbow your way through a crowded bar. You just want to have a drink and a decent conversation.</p>
							</div>
						</a>
					</div>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/nicedinner_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/nicedinner.png" alt="A Nice Dinner" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>A nice dinner</h5>
								<p>Those who dine well, live well. Luckily, you're well acquainted with all the best chefs in town.</p>
							</div>
						</a>
					</div>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/underground_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/underground.png" alt="Underground Show" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>Underground show</h5>
								<p>The tickets are cheap. The drinks are cheap. And the music is top shelf.</p>
							</div>
						</a>
					</div>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/goingtogame_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/goingtogame.png" alt="Going to the game" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>Going to the game</h5>
								<p>You’re wearing a jersey. You’re holding a disposable cup of beer. And you’re heckling the ref. HD’s got nothing on this.</p>
							</div>
						</a>
					</div>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/bottleservice_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/bottleservice.png" alt="Bottle Service" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>Bottle service</h5>
								<p>Pouring your own drinks and making your own guest list is your favorite way to get the weekend started.</p>
							</div>
						</a>
					</div>
				</section>
			</div><!-- END: Question 3 -->
			<!-- BEGIN: Question 4 -->
			<div class="grid clearfix question-group" id="drinking">
				<section class="question">
					<a class="logo q_logo"></a>
					<h3>What are you drinking?</h3>
					<?php include('../includes/question_nav.php'); ?>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/bourbon_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/bourbon.png" alt="Bourbon" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>Single Barrel Bourbon</h5>
								<p>When it comes to your conversations and your cocktails, you’d rather people give it to you straight.</p>
							</div>
						</a>
					</div>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/gin_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/gin.png" alt="gin" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>London Dry Gin</h5>
								<p>You know that quality is important. And unless those bar nuts are imported Marcona almonds, you'll pass.</p>
							</div>
						</a>
					</div>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/tequila_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/tequila.png" alt="Tequila" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>Tequila Reposado</h5>
								<p>Your policy is that if the bartender can pour a good drink, then you'll serve up a good time.</p>
							</div>
						</a>
					</div>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/newest_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/newest.png" alt="Newest Thing" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>The newest thing on the menu</h5>
								<p>You're looking for a lot more than a buzz when you order a cocktail. And to you, expected in uninspiring.</p>
							</div>
						</a>
					</div>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/beer_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/beer.png" alt="Beer" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>Just Give Me a Beer</h5>
								<p>You're not looking for fancy glassware or garnishes. But you could go for an order of wings.</p>
							</div>
						</a>
					</div>
				</section>
			</div><!-- END: Question 4 -->
			<!-- BEGIN: Question 5 -->
			<div class="grid clearfix question-group" id="girl">
				<section class="question">
					<a class="logo q_logo"></a>
					<h3>What are you looking for in a girl?</h3>
					<?php include('../includes/question_nav.php'); ?>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/smartissexy_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/smartissexy.png" alt="Smart is Sexy" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>Smart is Sexy</h5>
								<p>If she knows much about global politics, then you want to know a few things about her too.</p>
							</div>
						</a>
					</div>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/senseofhumor_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/senseofhumor.png" alt="Sense of Humor" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>A good sense of humor</h5>
								<p>Forget oysters, laughter is the best aphrodisiac.</p>
							</div>
						</a>
					</div>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/taste_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/taste.png" alt="Taste" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>The girl's got to have taste</h5>
								<p>If she can’t appreciate your music, your movies or your style, then you’ll never appreciate her.</p>
							</div>
						</a>
					</div>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/keepup_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/keepup.png" alt="Keep up" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>Someone who can keep up with me</h5>
								<p>You’ll do what you want, when you want. You're not slowing down for anybody.</p>
							</div>
						</a>
					</div>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/dontcare_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/dontcare.png" alt="Good Time" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>Don’t care, I’m just looking for a good time</h5>
								<p>You change girls as often as you change your underwear. In fact, sometimes more often.</p>
							</div>
						</a>
					</div>
				</section>
			</div><!-- END: Question 5 -->
			<!-- BEGIN: Question 6 -->
			<div class="grid clearfix question-group" id="hair">
				<section class="question">
					<a class="logo q_logo"></a>
					<h3>Finally, tell us a little bit about your hair.</h3>
					<?php include('../includes/question_nav.php'); ?>
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/wavy_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/wavy.png" alt="Wavy" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>It's wavy</h5>
								<p>It has texture, but lacks discipline. So some mornings you roll out of bed looking like a certified platinum rock star. And others, more like a karaoke bar's regular.</p>
							</div>
						</a>
					</div>
				</section>
				<section class="question hair_blank">
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/curly_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/curly.png" alt="Curly" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>It's curly</h5>
								<p>If your hair were an amusement ride, it'd be the mechanical bull. It's not always easy to control. But then again, neither are you.</p>
							</div>
						</a>
					</div>
				</section>
				<section class="question hair_blank">
				</section>
				<section class="flip-container answer-tile">
					<div class="flipper">
						<div style="background: url('<?php echo $asset_root; ?>/img/questions/straight_bg.jpg');" class="front">
							<div class="answer">
								<div>
									<img src="<?php echo $asset_root; ?>/img/questions/straight.png" alt="Straight" />
								</div>
							</div>
						</div>
						<a href="#" class="back">
							<div>
								<h5>It's just straight</h5>
								<p>It's easy to manipulate and even easier to predict. So when you wake up in the morning, you know what to expect. With your hair, anyway.</p>
							</div>
						</a>
					</div>
				</section>
			</div><!-- END: Question 6 -->
			<!-- OTHER QUESTIONS GO HERE -->
	  </div>
	  
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
	  
  	<form action="/recommend.php" method="POST" data-script="QuizTracker">
  		<input type="hidden" name="clothes" id="value-clothes" value="">
  		<input type="hidden" name="music" id="value-music" value="">
  		<input type="hidden" name="friday_plans" id="value-friday_plans" value="">
  		<input type="hidden" name="drinking" id="value-drinking" value="">
  		<input type="hidden" name="girl" id="value-girl" value="">
  		<input type="hidden" name="hair" id="value-hair" value="">
  	</form>
        <?php include('../includes/footer_scripts.php'); ?>
    </body>
</html>