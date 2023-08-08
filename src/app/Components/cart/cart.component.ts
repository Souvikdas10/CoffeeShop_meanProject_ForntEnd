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
  // count: number = 1
  // subTotal:number=0;
  // existing: any = {}
  allCart: any = {};
  cartPro!: any;

  // quantity: number = 0;
  // miniquantity: number = 0;
  // maxquantity: number = 10;
  // additionalCharges: number = 0;

  grandTotal: number = 0;

  constructor(private userSer: UserService,
    private stored: StorageService) { }
  ngOnInit(): void {
    this.userSer.Cart_data().subscribe((res) => {
      this.item = res;
      this.img_path = this.baseUrl + this.folderPath
      // console.log(this.img_path);
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


  inc(index: any) {
    this.item[index].quantity++;
    // this.userSer.Cart_data().subscribe(res => {
    //   let all_cart_product = res;
    //   console.log("cart page:", all_cart_product);

    //   this.existing = all_cart_product.find((x: any) => x._id == this.item._id)
    //   console.log("aa Existing: ", this.existing);
    //   let new_data = {
    //     ...this.existing,
    //     quantity: this.existing?.quantity + 1
    //   }
    //   this.userSer.editQuant(this.existing.id, new_data).subscribe((res) => {
    //     this.allCart = res
    //     console.log("add to post:", this.allCart);
    //     alert("Item Cart Successfully")
    //     // this.router.navigate(['/Cart'])
    //   })
    // })
  }
  dec(index: any) {
    this.item[index].quantity--;
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

  getGrandtotal(price: any) {
    this.userSer.forEach((element: any) => {
      // this.grandTotal = this.getSubtotal(element);
      // this.grandTotal=this.grandTotal+element.price
      this.grandTotal = this.grandTotal + element.price
    });
  }

  // getGrandTotal(): number {
  //   return this.getTotal(item :any) + this.additionalCharges;
  // }
  // calculateGrandTotal(): void {
  //   this.grandTotal = this.userSer.calculateTotal();
  // }

}
