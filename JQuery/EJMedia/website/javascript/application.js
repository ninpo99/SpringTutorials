	$(document).ready(function() {
		$('#testUSlide').css({'position':'fixed','left':20,'bottom':20});
		$('#testDSlide').css({'position':'fixed','left':150,'bottom':20});

	

		// $('img').mouseover(function(event) {
		// 	// $('p').text('All hail Julius Caesar');
		// 	// $('#right').append('<p>Hey you just moused over Julius</p>');
		// 	$('#right').after('<p>Hey you just moused over Julius</p>');
		// });

		// $('button').mouseover(function(event) {
		// 	$('button').css('color','red');
		// });

		// $('#right').hover(function() {
		// 	$('div').css('background-color','yellow')
		// }, function() {
		// 	$('div').css('background-color','grey')
		// });

		// $('#right').hover(function() {
		// 	$('img').show()
		// }, function() {
		// 	$('img').hide()
		// });



		$('button').click(function(event) {
			// 	$('#right').hide();
			// 	$('div:not(#test,#center)').hide();
			// 	$('#left p:first').hide();
			// 	$('div:even').hide();
			// 	$('div:odd').hide();
			//  $('div:last').hide();
			// 	$("p:contains('center')").hide();
			// 	$('div:has(b)').hide();
			// 	$('body div:nth-child(3)').hide();
			// 	$('li:empty').hide();
			// 	$('#left').css('color','blue');
			// 	$('#left').css('border','solid 2px red');
			//  $('#left').css({'border':'solid 2px red', 'color':'blue'});
			//  $('p').html('<p>Tabby Cats</p>');
			// $('p').text('Tabby Cats');
			// $('p').html('<h2>Tabby Cats</h2>')
			// $('h2').text('give the H2 some text');
			// $('#left').css('color','blue').css('border','solid 2px red').fadeOut('20000');
			// $('p:last').addClass('para');
			// $('p:first').removeClass('para2');
			// $('p:first').toggleClass('para2');
			// $('#right').fadeIn(2500);
			// $('#center').fadeOut(2500);
			// $('#right').fadeIn(2500).fadeOut(2500);
			// $('#right').fadeTo(2500,0.5);
			// $('#right').fadeToggle(2500);
			// $('#right').append('<h2>We REALLY need a header</h2>');
			// $('#right').prepend('<h2>We REALLY need a header</h2>');
			// $('#right').after('<h2>We REALLY need a header</h2>');
			// $('#right').before('<h2>We REALLY need a header</h2>');
			// $('p').replaceWith('<p>new text everywhere</p>');
			// $('#right p').replaceWith('You just clicked a button');
			// $('#right p').remove();
			// $('div').remove();
			// $('img').attr('src', 'caesar2.jpeg');
			// $('img').removeAttr('src');
			$('li').each(function() {
				$(this).html("<li>Tigers</li>");
			});


		});

		$('#testUSlide').click(function(event) {
			$('#right').slideToggle(400);
		})

		// $('#testUSlide').click(function(event) {
		// 	$('#right').slideUp(400);
		// })

		// $('#testDSlide').click(function(event) {
		// 	$('#right').slideDown(400);
		// });

		// $('#pickdate').datepicker({numberOfMonths:3, changeMonth:true, changeYear:true, showWeek:true, weekHeader:"Week", showOtherMonths:true});
		// $('#pickdate').datepicker({maxDate: new Date(2019, 11, 25)});
		// $('#pickdate').datepicker({showButtonPanel:true,closeText: "Close Calendar"});
		// $('#pickdate').datepicker({showButtonPanel:true,currentText: "Current Date"});
		$('#pickdate').datepicker({yearSuffix: " BC", showButtonPanel:true,closeText: "Close Calendar", currentText:"Current Date"});
		// $('img').tooltip({content:"Hail Caesar"});
		// $('img').tooltip({track:true});
		// $('img').tooltip({show: {effect:'pulsate',duration:800}});
		// $('img').tooltip({show: {effect:'bounce',duration:800}});
		// $('img').tooltip({show: {effect:'explode',duration:800}});
		// $('img').tooltip({show: {effect:'highlight',duration:800}});
		// $('img').tooltip({show: {effect:'blind',duration:800}});
		$('img').tooltip();
		// $('#panels').accordion({collapsible:true});
		// $('#panels').accordion({event:"mouseover"});
		// instantaneous
		// $('#panels').accordion({animate:0}); 
		// $('#panels').accordion({animate:900, active:1, heightStyle: 'content'});
		// $('#panels').accordion({icons: { header: 'ui-icon-plus', activeHeader: 'ui-icon-minus'}},{animate:900}, {active:1}, {heightStyle: 'content'});
		// $('#panels').accordion({icons: { header: 'ui-icon-zoomin', activeHeader: 'ui-icon-zoomout'}},{animate:900}, {active:1}, {heightStyle: 'content'});
		// $('#panels').accordion({icons: { header: 'ui-icon-mail-closed', activeHeader: 'ui-icon-mail-open'}},{animate:900}, {active:1}, {heightStyle: 'content'});
		$('#panels').accordion({icons: { header: 'ui-icon-folder-collapsed', activeHeader: 'ui-icon-folder-open'}},{animate:900}, {active:1}, {heightStyle: 'content'});
	});