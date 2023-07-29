import { Component } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { StorageService } from './Service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientSide';

  token!: any;
  data!: any;
  name!: any;
  // image!: any;
  load: boolean = false;

  constructor(private router: Router,
    private storeSer: StorageService
  ) { }
  ngOnInit(): void {
    this.router.events.subscribe(enent => {
      if (enent instanceof RouteConfigLoadStart) {
        this.load = true;
        console.log("Loding started");
      } else if (enent instanceof RouteConfigLoadEnd) {
        setTimeout(() => {
          this.load = false;
          console.log("loading done");
        }, 1500)
      }
    })
  }

  //loggin 
  logggedIn() {
    this.token = this.storeSer.getToken();
    // console.log("Token Value:", this.token);
    if (this.token) {
      this.data = this.storeSer.getData();
      // console.log("User data:", this.data);
      this.name = this.data[0].name
      // this.image = this.data[0].image
    }
    return this.token;
  }



  //loggin out
  loggingOut() {
    this.storeSer.getDestroy();
    alert("LogOut Successfully")
    this.router.navigate(['/login'])
  }

}
