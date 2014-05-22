/*
###Yazar:Elizbar Yusuf
###Veb Sayt:http://elizbar.info
###Proje: tabPlugin.js
*/
(function($){
	$.fn.tabPlugin = function(ayar){
			var deger={
						tab:$('#tab_main'),
						tab_active_class:"active",
						tab_click:$('ul li'),
						effect:'fade',
						sec:500
					  };
					
			var ayar = $.extend(deger,ayar);
	
			return this.each(function(){
				
			
				$(ayar.tab).children().hide();
				$(ayar.tab).children().first().show();
				$(ayar.tab_click).first().addClass(ayar.tab_active_class);

				$(ayar.tab_click).click(function(){
					var index=$(this).index();
					$(ayar.tab_click).removeClass(ayar.tab_active_class);
					$(ayar.tab_click).eq(index).addClass(ayar.tab_active_class);
					$(ayar.tab).children().hide();
					if(ayar.effect=='fade'){
					$(ayar.tab).children().eq(index).stop().fadeIn(ayar.sec);
					}
					if(ayar.effect=='slide'){
					$(ayar.tab).children().children().eq(index).stop().slide(ayar.sec);
					}
					if(ayar.effect=='show'){
					$(ayar.tab).children().children().eq(index).stop().show(ayar.sec);
				}
					


});
});
}
})(jQuery);
