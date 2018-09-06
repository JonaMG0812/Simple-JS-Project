$(document).ready(function(){

	// Slider
	if(window.location.href.indexOf('index') > -1){
	  $('.gallery').bxSlider({
	    mode: 'fade',
	    captions: false,
	    slideWidth: 1200,
	    responsive: true,
	    pager: true
	  });
	}

	// Posts
	if(window.location.href.indexOf('index') > -1){
		var posts = [
			{
				title: 'Title 1',
				date: 'Posted:  ' + moment().date() + " / " + moment().format("MMMM") + " / " + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
			},
			{
				title: 'Title 2',
				date: 'Posted: ' + moment().date() + " / " + moment().format("MMMM") + " / " + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
			},
			{
				title: 'Title 3',
				date: 'Posted: ' + moment().date() + " / " + moment().format("MMMM") + " / " + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
			},
			{
				title: 'Title 4',
				date: 'Posted: ' + moment().date() + " / " + moment().format("MMMM") + " / " + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
			},
			{
				title: 'Title 5',
				date: 'Posted: ' + moment().date() + " / " + moment().format("MMMM") + " / " + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Fusce sapien nibh, tempor fermentum mauris ac, tincidunt maximus diam. Quisque bibendum sed dui sit amet euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse quam sem, scelerisque sit amet libero nec, congue blandit dolor. Aliquam a vehicula mi. Morbi id convallis dolor. Nulla eu libero nec nulla fermentum viverra quis at magna. Quisque rutrum augue nulla, bibendum viverra sapien viverra vel. Quisque malesuada ultrices felis eu porttitor.'
			},
		];

		posts.forEach((item, index) => {
			var post = `
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					<a href="#" class="button-more">Read More</a>
				</article>`;
			$("#posts").append(post);
		});
	}


	// Selecting Theme
	var theme = $("#theme");

	$("#to-gray").click(function(){
		theme.attr("href", "css/gray.css");
	});
	
	$("#to-purple").click(function(){
		theme.attr("href", "css/purple.css");
	});
	
	$("#to-blue").click(function(){
		theme.attr("href", "css/blue.css");
	});
	
	// Scrollup
	$('.scrollup').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

	// Fake Login
	$("#login form").submit(function(){
		var form_name = $("#form_name").val();
		localStorage.setItem("form_name", form_name);
	});

	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");
		about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
		about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");
		$("#login").hide();
		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});
	}

	// Accordeon
	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}

	// Clock
	if(window.location.href.indexOf('clock') > -1){
		setInterval(function(){
			var reloj = moment().format("hh:mm:ss");
			$('#clock').html(reloj);
		}, 1000);	
	}

	// Validation
	if(window.location.href.indexOf('contact') > -1){
		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});
		$.validate({
		    lang: 'en',
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
		});
	}

});