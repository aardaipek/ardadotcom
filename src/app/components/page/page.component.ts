import { Component, OnInit } from '@angular/core';
import $ from "jquery";
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  today = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
    this.toTopButton();
  }

  toTopButton() {
    var btn = $('#button');
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    btn.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, '300');
    });
  }



}
