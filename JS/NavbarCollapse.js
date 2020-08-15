/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// ===== Collapse navbar on click ====
/* $(".nav a").on("click", function() {
  $(".btn-navbar").click(); //bootstrap 2.x
  $(".navbar-toggle").click(); //bootstrap 3.x by Richard
  $('.navbar-toggler').click(); //bootstrap 4.x
}); */

$('.navbar-nav>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});