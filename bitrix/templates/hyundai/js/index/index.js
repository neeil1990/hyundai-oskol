!function(e){var t={};function i(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i(i.s=3)}({3:function(e,t,i){e.exports=i("Bzd9")},Bzd9:function(e,t){$(document).ready(function(){var e=0;function t(){var t=$(window).outerWidth();if(e===t)return null;if(e=t,t>1599){if($(".large-video").length>0)return null;$(".slider__video").html(""),$(".slider__video").append('<video id="video" class="large-video" muted autoplay playsinline loop data-object-fit="cover"><source src="/video/CretaRockEdition/Ready-to-go_compressed.mp4"></video>')}else if(t>640){if($(".medium-video").length>0)return null;$(".slider__video").html(""),$(".slider__video").append('<video id="video" class="medium-video" muted autoplay playsinline loop data-object-fit="cover"><source src="/images/start/video/start_new_1280x440.mp4"></video>')}else{if($(".mobile-video").length>0)return null;$(".slider__video").html(""),$(".slider__video").append('<video id="video" class="mobile-video" muted autoplay loop playsinline><source src="/images/start/video/start_mobile.mp4"></video>')}}t(),$(window).on("resize",t),objectFitPolyfill(),$(".js-main-slider").owlCarousel({items:1,autoplay:!1,animateOut:"fadeOut",animateIn:"fadeIn"}),$(".js-news-slider").owlCarousel({items:4,dots:!1,responsive:{0:{items:1,dots:!0,nav:!0,autoHeight:!0,navText:['<div class="news__prev"><svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 125;" xml:space="preserve"><path d="M71.6,107.5c-0.7,0-1.3-0.2-1.8-0.7L27,64.7c-0.7-0.5-1.2-1.3-1.2-2.2c0-0.8,0.4-1.6,1-2.1l42.5-42.2c1-1,2.7-1,3.7,0s1,2.6,0,3.7L32.2,62.5l41.2,40.6c1,1,1,2.6,0,3.7C72.9,107.2,72.2,107.5,71.6,107.5z"/></svg></div>','<div class="news__next"><svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 125;" xml:space="preserve"><path d="M71.6,107.5c-0.7,0-1.3-0.2-1.8-0.7L27,64.7c-0.7-0.5-1.2-1.3-1.2-2.2c0-0.8,0.4-1.6,1-2.1l42.5-42.2c1-1,2.7-1,3.7,0s1,2.6,0,3.7L32.2,62.5l41.2,40.6c1,1,1,2.6,0,3.7C72.9,107.2,72.2,107.5,71.6,107.5z"/></svg></div>']},768:{items:2,dots:!0,nav:!0,autoHeight:!1,navText:['<div class="news__prev"><svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 125;" xml:space="preserve"><path d="M71.6,107.5c-0.7,0-1.3-0.2-1.8-0.7L27,64.7c-0.7-0.5-1.2-1.3-1.2-2.2c0-0.8,0.4-1.6,1-2.1l42.5-42.2c1-1,2.7-1,3.7,0s1,2.6,0,3.7L32.2,62.5l41.2,40.6c1,1,1,2.6,0,3.7C72.9,107.2,72.2,107.5,71.6,107.5z"/></svg></div>','<div class="news__next"><svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 125;" xml:space="preserve"><path d="M71.6,107.5c-0.7,0-1.3-0.2-1.8-0.7L27,64.7c-0.7-0.5-1.2-1.3-1.2-2.2c0-0.8,0.4-1.6,1-2.1l42.5-42.2c1-1,2.7-1,3.7,0s1,2.6,0,3.7L32.2,62.5l41.2,40.6c1,1,1,2.6,0,3.7C72.9,107.2,72.2,107.5,71.6,107.5z"/></svg></div>']},1280:{items:4}}})});new Vue({el:"#config",data:{hcData:[{bg:""}],hcCurrentIdx:0,hcTL:new TimelineMax({paused:!0}),hcNavTL:new TimelineMax({paused:!0}),hcbgTL:new TimelineMax({paused:!0}),hcSpeed:.75,hcAnimating:!1,direction:"next",hcNextbg:"",flag:!0,init:!1},methods:{getData:function(){this.hcData=configJSON,this.cacheImgs(this.hcCacheArray),this.hcNextbg=this.hcData[0].bg},goToPage:function(e){e>this.hcCurrentIdx?(this.direction="next",this.hcUpdate(e)):e<this.hcCurrentIdx&&(this.direction="prev",this.hcUpdate(e))},cacheImgs:function(e){if(e){this.cacheImgs.list||(this.cacheImgs.list=[]);for(var t=this.cacheImgs.list,i=0;i<e.length;i++){var n=new Image;n.onload=function(){var e=t.indexOf(this);-1!==e&&t.splice(e,1)},t.push(n),n.src=e[i]}}},hcPrev:function(){this.direction="prev",this.hcUpdate(this.hcCurrentIdx>0?this.hcCurrentIdx-1:this.hcTotal)},hcNext:function(){this.direction="next",this.hcUpdate(this.hcCurrentIdx<this.hcTotal?this.hcCurrentIdx+1:0)},hcUpdate:function(e){var t=document.querySelectorAll(".config__nav-item--prev"),i=document.querySelectorAll(".config__nav-item--next"),n=document.querySelectorAll(".config__nav-item--prev .config__item-title"),c=document.querySelectorAll(".config__nav-item--next .config__item-title"),s=document.querySelectorAll(".hc-car"),o="next"===this.direction?"-100%":"100%",r="next"===this.direction?"100%":"-100%",a=document.querySelectorAll(".hc-bg.hc-bg--next"),h=document.querySelectorAll(".hc-title-clip > *"),l=document.querySelectorAll(".hc-go-conf");this.hcAnimating=!0,this.hcNextbg=(this.direction,this.hcData[e].bg),this.hcbgTL.fromTo(a,this.hcSpeed,{opacity:0,ease:Power3.easeInOut},{opacity:1,ease:Power3.easeInOut}),this.hcTL.fromTo([s,h,l],this.hcSpeed,{x:"0%",ease:Power3.easeInOut},{x:o,ease:Power3.easeInOut,callbackScope:this,onComplete:function(){this.hcCurrentIdx=e,this.hcAnimating=!1}}).set([s,h,l],{x:r}).call(function(){this.hcCurrentIdx=e}).to([s,h,l],this.hcSpeed,{x:"0%",ease:Power3.easeInOut}),this.hcNavTL.restart(),this.hcNavTL.to(t,this.hcSpeed,{alpha:0,ease:Power3.easeInOut},0).to(n,.75*this.hcSpeed,{alpha:0,ease:Power3.easeInOut},0).to(c,.75*this.hcSpeed,{alpha:0,ease:Power3.easeInOut},0).to(i,this.hcSpeed,{alpha:0,ease:Power3.easeInOut,callbackScope:this,onComplete:function(){this.hcNavTL.reverse(0)}},0),this.hcbgTL.play(),this.hcTL.play(),this.hcNavTL.play(),this.cacheImgs(this.hcCacheArray)}},computed:{hcTotal:function(){return this.hcData.length-1},hcPrevIdx:function(){return this.hcCurrentIdx>0?this.hcCurrentIdx-1:this.hcTotal},hcNextIdx:function(){return this.hcCurrentIdx<this.hcTotal?this.hcCurrentIdx+1:0},hcCacheArray:function(){var e=[this.hcData[this.hcPrevIdx].bg,this.hcData[this.hcNextIdx].bg];return[this.hcData[this.hcPrevIdx>0?this.hcPrevIdx-1:this.hcTotal].picture,this.hcData[this.hcNextIdx<this.hcTotal?this.hcNextIdx+1:0].picture].concat(e)}},filters:{currencyFormat:function(e){return parseInt(e).toLocaleString("ru-RU")}},mounted:function(){this.getData();var e=this;e.init=!0,this.$nextTick(function(){var t=document.querySelector(".config__holder"),i=new Hammer.Manager(t,{touchAction:"pan-y"}),n=new Hammer.Swipe;i.add(n);i.on("swipe",function(t){t.deltaX;var i=t.offsetDirection;4===i?e.hcPrev():2===i&&e.hcNext()})})}})}});