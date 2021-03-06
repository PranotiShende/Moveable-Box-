import { Component, HostListener, OnInit } from '@angular/core';
import { OrderByPipe } from '../app/shared/OrderBy.component';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OrderByPipe]
})
export class AppComponent implements OnInit {
  
  title = 'Moveable-Box';
  boxCount = 0
  boxArray = [];
  selectedRowIndex: number;
  cWidth = 100;
  cHeight = 100;
  posLeft: number;
  posTop: number;

  ngOnInit(){
    // document.body.classList.add('bg-img');
  }

  addBox() {
    this.boxCount = this.boxCount + 1;
    var crrBox = 'box' + this.boxCount
    // document.getElementById(crrBox).offsetHeight + 'px';
    // document.getElementById(crrBox).style.height='100px';
    this.boxArray.push(this.boxCount);
  }

  selectedBox(i) {
    this.selectedRowIndex = i;
    console.log(this.selectedRowIndex)
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    var key_code = event.which || event.keyCode;
    var crrBox = 'box' + this.selectedRowIndex
    this.posLeft = document.getElementById(crrBox).offsetLeft;
    this.posTop = document.getElementById(crrBox).offsetTop;
    if (key_code == 37 || key_code == 65) //left arrow key
    {
      document.getElementById(crrBox).style.marginLeft = (this.posLeft - 70) + "px";
      document.getElementById(crrBox).style.backgroundColor = "#43a047"
    }
    if (key_code == 39 || key_code == 68) //right arrow key
    {
      document.getElementById(crrBox).style.marginLeft = (this.posLeft + 20) + "px";
      document.getElementById(crrBox).style.backgroundColor = "#43a047"
    }
    if (key_code == 38 || key_code == 87) //up arrow key
    {
      document.getElementById(crrBox).style.top = (this.posTop - 550) + "px";
      document.getElementById(crrBox).style.backgroundColor = "#43a047"
    }
    if (key_code == 40 || key_code == 83) //down arrow key
    {
      document.getElementById(crrBox).style.top = (this.posTop - 220 ) + "px";
      document.getElementById(crrBox).style.backgroundColor = "#43a047"
    }
    if (key_code == 46) {
      var elem = document.getElementById(crrBox);
      elem.remove();
    }
    if (key_code == 9) {
      this.selectedBox(this.selectedRowIndex + 1)
    }
  }


}

