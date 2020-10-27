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

    document.addEventListener("DOMContentLoaded", function(event) {
      var address = document.querySelector('.address')
      if (!navigator.geolocation){
        console.log("Geolocation is not supported by your browser");
      } else {
        navigator.geolocation.getCurrentPosition(success, error);
      }
        
      function success(position:any) {
        let long:any  = position.coords.latitude;
        let lat:any = position.coords.longitude;
        ipLookup(long, lat)
      }
      function error() {
        console.log("Unable to retrieve your location");
      }
      function ipLookup(long,lat) {
        fetch('https://extreme-ip-lookup.com/json/')
        .then( res => res.json())
        .then(response => {
          fallbackProcess(response)
        })
      }    
      function fallbackProcess(response:any) {
        address.innerHTML = `${response.country}`
      }
    });

  }
  

}
