(function(a){a.fn.extend({ResIframe:function(b){var c={syntax:""};var b=a.extend(c,b);return a("iframe",this).each(function(f){if(a(this).parent().hasClass("wpb_video_wrapper")||a(this).parents().hasClass("kc_video_wrapper")||a(this).parents().hasClass("kc_wrap-video-bg")){return;
}var e=b,g=a(this);$players=/www.youtube.com|www.youtube-nocookie.com|player.vimeo.com|bandcamp.com/;if(g.attr("src")!==undefined&&g.attr("src")!==""&&g.attr("src").search($players)>0){var d=(g.height()/g.width())*100;
g.css({position:"absolute",top:"0",left:"0",width:"100%",height:"100%"});g.wrap('<div class="iframe-wrap" style="width:100%;position:relative;padding-top:'+d+'%" />');
}});}});})(jQuery);
(function(b){var a=b.fn.on,c;
b.fn.on=function(){var e=Array.apply(null,arguments);var g=e[e.length-1];if(isNaN(g)||(g===1&&e.pop())){return a.apply(this,e);}var d=e.pop();var f=e.pop();
e.push(function(){var h=this,i=arguments;clearTimeout(c);c=setTimeout(function(){f.apply(h,i);},d);});return a.apply(this,e);};}(this.jQuery||this.Zepto));
(function(c,b,a,d){c.fn.doubleTapToGo=function(e){if(!("ontouchstart" in b)&&!navigator.msMaxTouchPoints&&!navigator.userAgent.toLowerCase().match(/windows phone os 7/i)){return false;
}this.each(function(){var f=false;c(this).on("click",function(h){var g=c(this);if(g[0]!=f[0]){h.stopPropagation();h.preventDefault();f=g;}});c(a).on("click touchstart MSPointerDown",function(k){var j=true,g=c(k.target).parents();
for(var h=0;h<g.length;h++){if(g[h]==f[0]){j=false;}}if(j){f=false;}});});return this;};})(jQuery,window,document);