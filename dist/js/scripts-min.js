$(document).ready(function(){$("header .link a").each(function(o,t){$(t).on("click",function(){!function(o,t,n){const c=$("html, body");$(window).width()>768?c.animate({scrollTop:$(o).offset().top-t},700):c.animate({scrollTop:$(o).offset().top-n},700)}($(this).attr("href"),120,100)})})});