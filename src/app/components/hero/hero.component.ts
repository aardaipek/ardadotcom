import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
    background = "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";
    transition = "background 0.2s ease-in-out";
  backgroundColor = [
      " linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
      "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
      "linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)",
      "linear-gradient(to top, #37ecba 0%, #72afd3 100%)",
      "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)",
      "linear-gradient(to top, #00c6fb 0%, #005bea 100%)",
      "linear-gradient(to top, #88d3ce 0%, #6e45e2 100%)",
      "linear-gradient(to top, #5f72bd 0%, #9b23ea 100%)",
      "linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)",
      " linear-gradient(to top, #09203f 0%, #537895 100%)",
      "linear-gradient(60deg, #29323c 0%, #485563 100%)"
  ];
  
 
  constructor() { }

  ngOnInit() {
    this.changeBackground();
  }

  changeBackground(){
      setInterval(()=>{
        this.background = this.backgroundColor[Math.floor(Math.random() * this.backgroundColor.length)];
      },6000)
    
  }

}
