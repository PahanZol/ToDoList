$("ul").on("click", "li", function(){
	$(this).toggleClass("clicked");
})

$( "ul" ).on("click", "span", function(event){

	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation()
})

$("input[type='text']").on("keypress", function(event){
	if(event.which===13)
	{
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + $("input[type='text']").val() + "</li>")
		$(this).val('');
	}

})

$(".fa-plus").on("click", function(){
	$("input").slideToggle()
})