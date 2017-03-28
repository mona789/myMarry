/* 
* @Author: zty
* @Date:   2015-10-13 15:48:53
* @Last Modified time: 2016-03-11 11:26:21
*/
window.onload = function(){

	$('#dowebok').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5','page6'],
		menu: '#menu',
		'navigation': false,
		//'scrollingSpeed':800,
		verticalCentered:true,
		slidesNavigation:false,
		afterLoad: function(anchorLink, index){
			if(index == 1){
				$('#menu li').removeClass('now');
				$('#menu li').eq(0).addClass('now');
				$('header').animate({height: '96px'});
				$('nav').animate({marginTop:'30px'});
				$('.logo').animate({marginTop: '30px'});
			}
			if (index == 2){
				$('.style_list li').addClass('xuan');
				$('.more').removeClass('little');
			}
			if(index == 3){
				$('#menu li').removeClass('now');
				$('#menu li').eq(1).addClass('now');
				$('.more').addClass('little');
			}
			if (index == 4){
				$('#menu li').removeClass('now');
				$('#menu li').eq(2).addClass('now');
				$('.more').removeClass('little');
			}
			if(index == 5){
				$('#menu li').removeClass('now');
				$('#menu li').eq(3).addClass('now');
				$('.tree').stop().animate({height:'632px'},1200,function(){
					$(this).find('.fadein').fadeIn(800,function(){
						$('.tree').addClass('row');
					});
				});
			}
			if(index == 6){
			}
		},
		onLeave: function(index, direction){
			if(index == 1){
				$('header').animate({height: '66px'});
				$('nav').animate({marginTop:'15px'});
				$('.logo').animate({marginTop: '15px'});
			}
			if (index == 2){
				$('.style_list li').removeClass('xuan');
			}
			if (index == 3){

			}
			if(index == 5){
				$('.tree').stop(true,true).animate({height:'0px'},200,function(){
					$('.leaf_border,.leaf_border1').hide();
				});
				$('.tree').removeClass('row');
			}
		}
	});
	$('nav li').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).find('.nav_zh').stop().fadeOut(800);
		$(this).find('.nav_en').stop().fadeIn(800);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).find('.nav_en').stop().fadeOut(800);
		$(this).find('.nav_zh').stop().fadeIn(800);
	});
	//控制mask和放大镜
	$('.box').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).find('.img_mask').stop().fadeIn();
		$(this).find('.square').stop().animate({opacity: 1, left: '155px'});
		$(this).find('.fdj').stop().animate({opacity: 1,right:'177px'});
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).find('.img_mask').stop().fadeOut();
		$(this).find('.square').stop().animate({opacity: 0, left: '0'});
		$(this).find('.fdj').stop().animate({opacity: 0,right:'0'});
	});
	$('.owl-prev,.owl-next').addClass('btns');
	$('.changebtn').find('a').click(function(event){
		/* Act on the event */
		$(this).parent().addClass('clicked');
		$(this).parent().siblings().removeClass('clicked');
	});
	//2016.3.1
	$('.more').click(function() {
		console.log(123);
		$('.absbox').css({'transform':'translateX(-546px)'});
	});
	$('.plus').click(function(event){
		$('.absbox').css({'transform':'translateX(0px)'});
	});

	$('#menu li').click(function(event) {
		/* Act on the event */
		$(this).addClass('now').siblings().removeClass('now');
	});
	$('.zxly').click(function(event){
		$(this).addClass('now').siblings().removeClass('now');
		$('.changebtn').find('a').eq(0).click();
	});
	$('.rczp').click(function(event){
		$(this).addClass('now').siblings().removeClass('now');
		$('.changebtn').find('a').eq(1).click();
	});
	$('.lxwm').click(function(event){
		$(this).addClass('now').siblings().removeClass('now');
		$('.changebtn').find('a').eq(2).click();
	});
	check();
	show ();
}
var flag=true;
function check() {
			$('.active').on('click',function () {
				let width=$('body').width();
				if( flag&&width<1140 ) {
					$('.dis').css({'display':'block'});
					flag=false;
				} else if( !flag&&width<1140){
					$('.dis').css({'display':'none'});
					flag=true;
				}
				else {
					$('.dis').css({'display':'block'});
				};
			})
}
function show () {
	var flag=true;
		$('#dowebok').on('mouseenter',function () {
			if (flag) {
			$('.big-box').css({'display':'none'});
			console.log(123);
			flag=false;}else {
				$('header').on('mouseenter',function () {
					$('.big-box').css({'display':'block'});
					console.log(456);
					flag=true;
				})
			}
})}