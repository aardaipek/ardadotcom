import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
    background =  "linear-gradient(60deg, #29323c 0%, #485563 100%)"
    transition = "background 0.2s ease-in-out";
  backgroundColor = [
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
      },15000)
    
  }

}
