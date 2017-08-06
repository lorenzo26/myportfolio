$(function(){
$('.HSshowit').click(function(e) {
  var condition = $(this).attr("rev");
  if(condition == "more"){
    $(this).html("Show Less");
    $(this).attr("rev","less");
  }
  else{
    $(this).html("Show More");
    $(this).attr("rev","more");
  }
});
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}