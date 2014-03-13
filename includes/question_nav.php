<nav class="clearfix">
	<?php
	for($i=0;$i<6;$i++) {
	?>
	<a href="#" class="empty" id="question-nav-<?php echo $i; ?>">
		<div class="progress"><span></span></div>
		<p>Q<?php echo $i+1; ?></p>
	</a>
	<?php } ?>
</nav>