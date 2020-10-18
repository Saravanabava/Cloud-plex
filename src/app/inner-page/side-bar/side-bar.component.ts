import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.addEventListener('load', function() {
      document.querySelector('input[type="file"]').addEventListener('change', function() {
          if (this.files && this.files[0]) {
              var img = document.querySelector('img');  // $('img')[0]
              img.src = URL.createObjectURL(this.files[0]); // set src to blob url
              //img.onload = imageIsLoaded;
          }
      });
    });

    // function imageIsLoaded() { 
    //   alert(this.src);  // blob url
    //   // update width and height ...
    // }

  }
  

}
