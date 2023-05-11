$(function() {  
    $('#rouge').click(function(){
        $(this).css('background', 'red');
    
      });
    });
    $(document).ready(function(){     
        $("#b1").click(function(){
            $("#bleu").hide();
        });
        $("#b2").click(function(){
            $("#bleu").show();
        });
    });

    $(document).ready(function(){
        $("#b3").click(function(){
          $("#grosse").animate({left: '250px'});
        });
      });
      $( document ).ready(function() {

        $( ".cross" ).hide();
        $( ".menu" ).hide();
        $( ".hamburger" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
        $( ".hamburger" ).hide();
        $( ".cross" ).show();
        });
        });
        
        $( ".cross" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
        $( ".cross" ).hide();
        $( ".hamburger" ).show();
        });
        });
        
        });