// ----------DISPLAY - UNDISPLAY NAV BAR MOBILE SCREEN (MAX 767px)-----------------------
function openNav() {
    var nav = document.getElementById("containernav");
    if ($(nav).css('display') =='none') {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}
//---------------------LOAD MASONRY WITH JQUERY----------------------------------------
$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
  //gutter: 20, doesn't work, dunno why
});