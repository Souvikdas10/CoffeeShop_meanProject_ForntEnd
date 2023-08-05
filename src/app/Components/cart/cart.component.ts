import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/Service/storage.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  email!: string | null;
  CartP!:any;
  // email!: string;
  constructor(private userSer: UserService,
    private stored: StorageService) { }

  ngOnInit(): void {
    // this.stored.email=window.localStorage.getItem('email'),
    // {
    //   if (this.stored) {
    //     this.email = window.localStorage.getItem('email');
    //   }

    //   this.userSer.Cart_data().subscribe((res) => {
    //     console.log("response", res);
    //     this.CartP=res.filter(x=>x.email==this.stored.email)
    //     if(this.CartP.length>0)
    //   {
    //   this.CartP.findindex((x: { pid: any; })=>x.pid==pid)
    //   }
    //   })
    // }
  }
}
