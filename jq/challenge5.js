
$('img').each(function(){
$('img').mouseenter(function(){
$('#image').css("backgroundImage", 'url(' +this.src+')');
$('#image').html(this.alt);

});

$('img').mouseleave(function(){
$("#image").css("backgroundImage", "url()");
$('#image').html("Hover/Tab over an image below.");
});

$('img').focus(function(){
$('#image').css("backgroundImage",'url(' +this.src+')'); 
$('#image').html(this.alt);

});
 
$('img').blur(function(){
$('#image').css("backgroundImage", 'url()'); 
$('#image').html("Hover/Tab over an image below.");
})

})