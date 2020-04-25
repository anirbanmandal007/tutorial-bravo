import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".sidebar-dropdown > a").click(function() {
      $(".sidebar-submenu").slideUp(200);
      if (
          $(this)
          .parent()
          .hasClass("active")
      ) {
          $(".sidebar-dropdown").removeClass("active");
          $(this)
          .parent()
          .removeClass("active");
      } else {
          $(".sidebar-dropdown").removeClass("active");
          $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
          $(this)
          .parent()
          .addClass("active");
      }
  });

  $("#close-sidebar").click(function() {
      $(".page-wrapper").removeClass("toggled");
  });
  $("#show-sidebar").click(function() {
      $(".page-wrapper").addClass("toggled");
  });

  //Search
  $(".search-menu").on("keyup", function(e){
      var searchVal = $(this).val();
      var filterItems = $('[data-filter-item]');

      if ( searchVal != '' ) {
          filterItems.closest("li").addClass('d-none');
          $('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').closest("li").removeClass('d-none');

          $(".sidebar-dropdown").each((index, element) => {
              if( $(element).find("li").find('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').length == 0 ) {
                  $(element).addClass("d-none");
              } else {
                  $(element).removeClass("d-none");
                  if(!$(element).hasClass("active")){
                      // $(element).find("a:eq(0)").click();
                  }
              }
          });

      } else {
          filterItems.closest("li").removeClass('d-none');
          $(".sidebar-dropdown").removeClass('d-none');
          
          $(".sidebar-dropdown").each((index, element) => {
              if($(element).hasClass("active")){
                  // $(".sidebar-dropdown").find("a:eq(0)").click();
              }
          });
        }
    });

      //External link
      $("[data-ext-link]").on('click', function(){
          const src = $(this).attr("data-ext-link");
          $("#extIframe").attr("src", src);
          $("#extIframe").closest(".container-fluid").removeClass("d-none");
      });
    
  }

}
