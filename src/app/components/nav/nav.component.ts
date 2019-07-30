import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.scroll();
    this.navScroll();
  }

  navScroll() {
    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
            event.preventDefault();
            $("html, body").animate(
              {
                scrollTop: target.offset().top
              },
              1000,
              function() {
               
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                  return false;
                } else {
                  $target.attr("tabindex", "-1"); 
                  $target.focus(); 
                }
              }
            );
          }
        }
      });
  }

  scroll() {
    $(function() {
      var menu = $(".navbar");
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll >= 620) {
          menu.addClass("custom");
        } else {
          menu.removeClass("custom");
        }
      });
    });
  }
}
