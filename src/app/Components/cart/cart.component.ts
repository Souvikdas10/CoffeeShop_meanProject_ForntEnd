import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/Service/storage.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  item:any;
  img_path!:any
  baseUrl: string = "http://localhost:2100/"
  folderPath: string = "upload/"

  constructor(private userSer: UserService,
    private stored: StorageService) { }
  ngOnInit(): void {
    this.userSer.Cart_data().subscribe((res)=>{
      this.item=res

      this.img_path = this.baseUrl + this.folderPath 
      console.log(this.img_path);
    })
  }
}
