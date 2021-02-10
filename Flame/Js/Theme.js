$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            document.documentElement.setAttribute('data-theme','dark')
           
        }
        else if($(this).prop("checked") == false){
            document.documentElement.setAttribute('data-theme','light')
        }
    });
});