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
        $(this).next(".sidebar-submenu").slideUp(200);
        if (  $(this).parent().hasClass("active") ) {
            $(this).closest(".sidebar-dropdown").removeClass("active");
            $(this).parent().removeClass("active");
        } else {
            $(this).closest(".sidebar-dropdown").removeClass("active");
            $(this).next(".sidebar-submenu").removeClass("d-none").slideDown(200);
            $(this).parent().addClass("active");
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
                    $(element).removeClass("active");
                    $(element).addClass("d-none");
                    $(element).find(".sidebar-submenu").addClass("d-none")
                } else {
                    $(element).removeClass("d-none").addClass("active");
                    $(element).find(".sidebar-submenu").addClass("d-block");
                    $(element).click();
                    if(!$(element).hasClass("active")){
                        // $(element).find("a:eq(0)").click();
                    }
                }
            });

        } else {
            $(".sidebar-dropdown").removeClass("active");
            filterItems.closest("li").removeClass('d-none');
            $(".sidebar-dropdown").removeClass('d-none');
            $(".sidebar-submenu").removeClass("d-block").addClass("d-none");

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
