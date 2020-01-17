import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ardadotcom';
  isResumePage:Boolean = false;
  controlPage:Function = ()=>{
    if(window.location.pathname =='/resume'){
      this.isResumePage = true;
    }else {
      this.isResumePage = false;
    }
  }
  
  constructor() {} 

  ngOnInit(){
    console.log(this)
  }
 
}
