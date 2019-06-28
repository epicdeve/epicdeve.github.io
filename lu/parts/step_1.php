<?php
define('IS_AJAX', isset($_SERVER['HTTP_X_REQUESTED_WITH']) &&      strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest');
?>
<div class="resource-select-wrapper">
	<div class="resource-select-header">
		<div class="resource-select-label">Wählen Sie Ihren Betrag aus</div>
	</div>
	<div class="resource-select-content">
		<div class="slider-outer">
			<div class="slider-wrapper">
				<div class="slick">
					<div class="slick-item">
						<div class="slick-image-wrapper">
							<img src="img/r-1.jpg" class="slide-item-img img-fluid" />
							<div class="slick-image-value-wrapper">
								<span class="slick-image-val">2500</span>
								<span class="slick-image-val-label">V-Bucks</span>
							</div>
						</div>
					</div>
					<div class="slick-item">
						<div class="slick-image-wrapper">
							<img src="img/r-2.jpg" class="slide-item-img img-fluid" />
							<div class="slick-image-value-wrapper">
								<span class="slick-image-val">7500</span>
								<span class="slick-image-val-label">V-Bucks</span>
							</div>
						</div>
					</div>
					<div class="slick-item">
						<div class="slick-image-wrapper">
							<img src="img/r-3.jpg" class="slide-item-img img-fluid" />
							<div class="slick-image-value-wrapper">
								<span class="slick-image-val">13500</span>
								<span class="slick-image-val-label">V-Bucks</span>
							</div>
						</div>
					</div>
					<div class="slick-item">
						<div class="slick-image-wrapper">
							<img src="img/r-4.jpg" class="slide-item-img img-fluid" />
							<div class="slick-image-value-wrapper">
								<span class="slick-image-val">75500</span>
								<span class="slick-image-val-label">V-Bucks</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	
		<div class="button-wrapper">
			<button id="generate-now" class="fortnite-button click-sound"><span>Generieren</span></button>
		</div>
	</div>	
</div>