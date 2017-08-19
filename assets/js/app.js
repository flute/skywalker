// fullscreen cover
if( $('.page').hasClass('common') && location.hash !== '#open' ){
	$('.index #menu').addClass('cover')
}
if( $(window).width() >= 768 ){
	$('.index .slidenav').removeClass('slidenav');
	// show/hide slide nav
	$('#show-slide-nav').click(function(event) {
		if( $('#menu').hasClass('open') ){
			//$('#menu').removeClass('open').css({'opacity':'0','width':'0px'});
			$('#menu').removeClass('open').css({'left':'-240px'});
			$('.slidenav').removeClass('open');
		}else{
			$('#menu').addClass('open').css({'left':'0'});
			$('.slidenav').addClass('open');
		}
		
	});
}else{
	$('.contents').css('width', $(window).width()-30 );
	$('.markdown-body').css('max-width', $(window).width() );
	if( $('.page').hasClass('index') || $('.page').hasClass('pages') ){
		$('#show-slide-nav').click(function(event) {
			if( $('#menu').hasClass('open') ){
				$('#menu').removeClass('open').css({'left':'-240px'});
				$('.slidenav').addClass('open');
			}else{
				$('#menu').addClass('open').css({'left':'0'});
				$('.slidenav').removeClass('open');
			}
			
		});
	}else if( $('.page').hasClass('post') ){
		$('#show-slide-nav').click(function(event) {
			if( $('#menu').hasClass('open') ){
				$('#menu').removeClass('open').css({'left':'-240px'});
				$('.slidenav').removeClass('open');
			}else{
				$('#menu').addClass('open').css({'left':'0'});
				$('.slidenav').addClass('open');
			}
			
		});
	}
	
}

if( $(window).width() >= 768 ){
	// close slide nav
	$('.closeslide').click(function(){
		$('#menu').removeClass('open').css({'left':'-240px'});
		$('.slidenav').removeClass('open');
	})
}else{
	if( $('.page').hasClass('index') || $('.page').hasClass('pages') ){
		// close slide nav
		$('.closeslide').click(function(){
			$('#menu').removeClass('open').css({'left':'-240px'});
			$('.slidenav').removeClass('open');
			$('#menu').addClass('open');
		})
	}else if( $('.page').hasClass('post') ){
		// close slide nav
		$('.closeslide').click(function(){
			$('#menu').removeClass('open').css({'left':'-240px'});
			$('.slidenav').removeClass('open');
			$('#menu').removeClass('open');
		})
	}
	
}

// click avatar show cover
$('.common .avatar img').click(function(){
	if( $('#menu').hasClass('cover') ){
		$('#menu').removeClass('cover')
	}else{
		$('#menu').addClass('cover')
	}
})
$('.profile ul.nav li a').click(function(){
	if( $('#menu').hasClass('cover') ){
		$('#menu').removeClass('cover')
	}
})
// post page scroll to fixed header
$('.post main').scroll(function (){
	var sTop = $(".contents").offset().top;
	if( $('.post .contents').hasClass('fixtop') ){
		if( sTop >= -10 ){
			$('.post nav').removeClass('fixtop');$('.post .contents').removeClass('fixtop');
		}
	}else{
		if( sTop <= 60  ){
			$('.post nav').addClass('fixtop');$('.post .contents').addClass('fixtop');
		} 
	}
});
// bing background
if( $('.page').hasClass('post') ){
	$.ajax({
		method:'get',
		url:'https://bing.ioliu.cn/v1/rand?type=json',
		dataType:'jsonp',
		success:function(result){
			if( result.status.code === 200 ){
				var url = result.data.original_pic;
					url = 'url('+url+')';
				$('.post header.nav-wrapper').css('background',url+' center center / cover  no-repeat fixed')
			}else{
				console.log( result.status.message )
			}
		},
		error:function(err){
			console.error(err);
		}
	});
	// pre/next post
	var pre = Math.floor(Math.random()*10),
		next = Math.floor(Math.random()*10+10),
		pre = 'https://bing.ioliu.cn/v1/blur?d='+pre+'&w=640&h=480&r=1',
		next = 'https://bing.ioliu.cn/v1/blur?d='+next+'&w=640&h=480&r=1';

	$('.card-pre img').prop('src', pre);
	$('.card-next img').prop('src', next);
}
// material design button effect
var addRippleEffect = function (e) {
	console.log('233')
    var target = e.target;
    var rect = target.getBoundingClientRect();
    var ripple = target.querySelector('.ripple');
    if (!ripple) {
        ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
        target.appendChild(ripple);
    }
    ripple.classList.remove('show');
    var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
    var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
    ripple.style.top = top + 'px';
    ripple.style.left = left + 'px';
    ripple.classList.add('show');
    return false;
}
$('.waves-effect').click(function(e){
	addRippleEffect(e);
})
// highlight.js
$(document).ready(function() {
	$('pre code').each(function(i, block) {
		if( !$(this).hasClass('hljs') ){
			$(this).addClass('hljs')
		}
		// hljs line number
		var lines = $(this).text().split('\n').length - 1;
		var $numbering = $('<ul/>').addClass('pre-numbering');
		$(this)
		    .addClass('has-numbering')
		    .parent()
		    .append($numbering);
		for(i=1;i<=lines;i++){
		    $numbering.append($('<li/>').text(i));
		}
	});
});
hljs.initHighlightingOnLoad();
