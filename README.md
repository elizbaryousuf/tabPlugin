tabPlugin Examples
=========

//fade effect

$('#main').tabPlugin({
  tab:$('#tab_main'),
  tab_click:$('ul li'),
  tab_active_class:'active',
  effect:'fade',
  sec:1000
});


//slide effect

$('#main').tabPlugin({
  tab:$('#tab_main'),
  tab_click:$('ul li'),
  tab_active_class:'active',
  effect:'slide',
  sec:1000
});



//show effect

$('#main').tabPlugin({
  tab:$('#tab_main'),
  tab_click:$('ul li'),
  tab_active_class:'active',
  effect:'show',
  sec:1000
});
