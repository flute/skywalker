/*! lightense-images v1.0.4 | © Tunghsiao Liu | MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Lightense=t():e.Lightense=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e){switch("undefined"==typeof e?"undefined":o(e)){case"undefined":throw"You need to pass an element!";case"string":return document.querySelectorAll(e);case"object":return e}}function t(e){var t=e.length;if(t)for(var r=0;r<t;r++)n(e[r]);else n(e)}function n(e){e.src&&(e.classList.add("lightense-target"),e.addEventListener("click",function(t){return k.keyboard&&(t.metaKey||t.ctrlKey)?y.open(e.src,"_blank"):void u(this)},!1))}function i(){var e="\n.lightense-backdrop {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: "+(k.zIndex-1)+";\n  padding: 0;\n  margin: 0;\n  transition: opacity "+k.time+"ms ease;\n  cursor: zoom-out;\n  opacity: 0;\n  background-color: rgba(255, 255, 255, .98);\n  visibility: hidden;\n}\n\n@supports (-webkit-backdrop-filter: blur(30px)) {\n  .lightense-backdrop {\n    background-color: rgba(255, 255, 255, .6);\n    -webkit-backdrop-filter: blur(30px);\n    backdrop-filter: blur(30px);\n  }\n}\n\n.lightense-wrap {\n  position: relative;\n  transition: transform "+k.time+"ms "+k.cubicBezier+";\n  z-index: "+k.zIndex+";\n  pointer-events: none;\n}\n\n.lightense-target {\n  cursor: zoom-in;\n  transition: transform "+k.time+"ms "+k.cubicBezier+";\n  pointer-events: auto;\n}\n\n.lightense-open {\n  cursor: zoom-out;\n}\n\n.lightense-transitioning {\n  pointer-events: none;\n}",t=h.head||h.getElementsByTagName("head")[0],n=h.createElement("style");n.styleSheet?n.styleSheet.cssText=e:n.appendChild(h.createTextNode(e)),t.appendChild(n)}function a(){k.container=h.createElement("div"),k.container.className="lightense-backdrop",h.body.appendChild(k.container)}function s(e){var t=e.width,n=e.height,r=y.pageYOffset||h.documentElement.scrollTop||0,o=y.pageXOffset||h.documentElement.scrollLeft||0,i=k.target.getBoundingClientRect(),a=t/i.width,s=y.innerWidth||h.documentElement.clientWidth||0,c=y.innerHeight||h.documentElement.clientHeight||0,l=s-k.padding,d=c-k.padding,u=t/n,p=l/d;t<l&&n<d?k.scaleFactor=a:u<p?k.scaleFactor=d/n*a:k.scaleFactor=l/t*a;var f=s/2,g=r+c/2,m=i.left+o+i.width/2,b=i.top+r+i.height/2;k.translateX=f-m,k.translateY=g-b}function c(){k.target.classList.add("lightense-open"),k.wrap=h.createElement("div"),k.wrap.className="lightense-wrap",setTimeout(function(){k.target.style.transform="scale("+k.scaleFactor+")"},20),k.target.parentNode.insertBefore(k.wrap,k.target),k.wrap.appendChild(k.target),setTimeout(function(){k.wrap.style.transform="translate3d("+k.translateX+"px, "+k.translateY+"px, 0)"},20),k.background&&(k.container.style.backgroundColor=k.background),k.container.style.visibility="visible",setTimeout(function(){k.container.style.opacity="1"},20)}function l(){f(),k.target.classList.remove("lightense-open"),k.wrap.style.transform="",k.target.style.transform="",k.target.classList.add("lightense-transitioning"),k.container.style.opacity="",setTimeout(function(){k.container.style.visibility="",k.container.style.backgroundColor="",k.wrap.parentNode.replaceChild(k.target,k.wrap),k.target.classList.remove("lightense-transitioning")},k.time)}function d(){var e=Math.abs(k.scrollY-y.scrollY);e>=k.offset&&l()}function u(e){if(k.target=e,k.target.classList.contains("lightense-open"))return l();k.scrollY=y.scrollY,k.background=k.target.getAttribute("data-background")||!1,k.padding=k.target.getAttribute("data-padding")||v.padding;var t=new Image;t.onload=function(){s(this),c(),p()},t.src=k.target.src}function p(){y.addEventListener("keyup",g,!1),y.addEventListener("scroll",d,!1),k.container.addEventListener("click",l,!1)}function f(){y.removeEventListener("keyup",g,!1),y.removeEventListener("scroll",d,!1),k.container.removeEventListener("click",l,!1)}function g(e){e.preventDefault(),27===e.keyCode&&l()}function m(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};b=e(n),k=r({},v,o),i(),a(),t(b)}var b,y=window,h=document,v={time:300,padding:40,offset:40,keyboard:!0,cubicBezier:"cubic-bezier(.2, 0, .1, 1)",zIndex:2147483647},k={};return m},a=i();e.exports=a}])});

// fullscreen cover
if( $('.page').hasClass('common') && location.pathname === '/' && location.hash !== '#open' ){
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
		type: 'GET',
		dataType: 'json',
		url: 'https://img.ldsun.com/bing/random/3',
		success: function(result){
			if( result && result.status ){
				var bg = result.data[0];
					bg = 'url('+bg+')';
				var pre = result.data[1];
				var next = result.data[2];
				//nav-bg
				$('.post header.nav-wrapper').css('background',bg+' center center / cover  no-repeat');
				//pre/next post
				$('.card-pre img').prop('src', pre);
				$('.card-next img').prop('src', next);
			}else{
				console.log('load img failed...')
			}
		},
		error: function(err){
			console.error(err);
		}
	})
}

// materail effet
var addRippleEffect = function (e) {
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
	});
	//Lightense('img');
	Lightense('.post-html img', {
		time: 300,
		padding: 40,
		offset: 40,
		keyboard: true,
		cubicBezier: 'cubic-bezier(.2, 0, .1, 1)',
		zIndex: 900
	});
});
hljs.initHighlightingOnLoad();
