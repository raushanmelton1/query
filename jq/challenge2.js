$(document).ready(function(){
$('#useBilling').click(function(){
	if ($(this).is(":checked")){
		$("#home").val($('#billing').val());
		$("#home").prop("disabled", true);
        }
        else{
          $("home").val("");
          $("#home").prop("disabled", false);
        }
})
})