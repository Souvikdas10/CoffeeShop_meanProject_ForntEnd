import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/Service/storage.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  item: any;
  img_path!: any
  baseUrl: string = "http://localhost:2100/"
  folderPath: string = "upload/"
  count: number = 1
  // subTotal:number=0;
  quantity: number = 0;
  miniquantity: number = 0;
  maxquantity: number = 10;
  additionalCharges: number = 0;

  constructor(private userSer: UserService,
    private stored: StorageService) { }
  ngOnInit(): void {
    this.userSer.Cart_data().subscribe((res) => {
      this.item = res;
      // this.item.forEach(element => {
      //   this.subTotal=this.subTotal +element.price
      // });


      this.img_path = this.baseUrl + this.folderPath
      console.log(this.img_path);
    })

  }


  del(id: number) {
    this.userSer.CartItemDelete(id).subscribe((res) => {
      console.log("Cart Item Delete:", res);
      this.userSer.Cart_data().subscribe((res) => {
        this.item = res
      })
    })
  }


  inc() {
    if (this.quantity < this.maxquantity) {
      this.quantity++
    }
  }
  dec() {
    if (this.quantity > this.miniquantity) {
      this.quantity--
    }
  }


  getSubtotal(item: any): number {
    return this.userSer.getSubtotal(item);
  }

  getTotal(item: any): number {
    let total = 0;
    this.userSer.forEach((element: any) => {
      total += this.getSubtotal(element);
    });
    return total;
  }

  // getGrandTotal(): number {
  //   return this.getTotal() + this.additionalCharges;
  // }

}
