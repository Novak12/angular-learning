import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css']
})
export class Sample1Component implements OnInit {
  @Input() message: string;
  @Output() update = new EventEmitter<{ text: string }>();
  flag: boolean;
  constructor() { }

  ngOnInit() {
    console.log('get in sample1')
  }

  ngOnDisdroy(){
    console.log('out of sample1')
  }

  setFlag(event) {
    if (this.flag) {
      this.flag = false;
    } else {
      this.flag = true;
    }
  }

}
