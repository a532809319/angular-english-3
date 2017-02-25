import { Component } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dir works!';
  private  switch=true;
  private  items =[322,53,42,52,32,33,44,35,];
  private  a=100;

  Swich(){
    this.switch=!this.switch;
    //alert(1)
  }

}
