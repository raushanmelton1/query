$("form").submit(function(){
    if($('input[name="standing"]:checked').val()){
      if($('input[name="fruit"]:checked').val()){
        return true
      } 
      else
        alert("Pick from fruit category.")
      return false
    }
    else
      if($('input[name="fruit"]:checked').val()){
        alert("Pick from class standing category.")
        return false 
      }
      else{
        alert("Pick one from each category.")
        return false 
  }
}); 