import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/Service/storage.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // item: any=[];
  item:any;
  cart_items!:any;
  img_path!: any
  baseUrl: string = "http://localhost:2100/"
  folderPath: string = "upload/"
  allCart: any = {};
  cartPro!: any;
  newIncData!: any;
  newDecData!: any;
  cartlength: number = 0;
  subTotal: number = 0;
  grandTotal: number = 0;

  constructor(private userSer: UserService,
    private stored: StorageService) { }
  ngOnInit(): void {
    this.userSer.Cart_data().subscribe((res) => {
     this.item=res
      // this.cart_items = res;
      
      // this.item=this.cart_items.filter((data:any)=>{
      //   data.email==window.localStorage.getItem('email')
        
      // })
      // console.log("all data:",this.item);
      
      // console.log("number of cart product:", this.item.length);
      for (let i = 0; i < this.item.length; i++)
        this.grandTotal += res[i].sub_total
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


  inc(id: any) {

    // console.log("cart id:",id);
    this.userSer.cartSingleData(id).subscribe((res: any) => {
      // console.log("single cart data :",res.quantity);
      this.newIncData = {
        ...res,
        quantity: res.quantity + 1,
        sub_total: res.sub_total + Number(res.price)
      }
      this.userSer.editQuant(id, this.newIncData).subscribe((res) => {
        this.allCart = res
        console.log("add to post:", this.allCart);
        // alert("Item Cart Successfully")
        // this.router.navigate(['/Cart'])
        this.userSer.Cart_data().subscribe((res) => {
          this.cart_items = res;
          // this.item=this.cart_items.filter((data:any)=>{
          //   data.email==window.localStorage.getItem('email')
          // })
          this.grandTotal = 0;
          for (let i = 0; i < this.item.length; i++)
            this.grandTotal += res[i].sub_total
        })
      })
    })
  }
  dec(id: any) {
    this.userSer.cartSingleData(id).subscribe((res: any) => {
      this.newDecData = {
        ...res,
        quantity: res.quantity - 1,
        sub_total: res.sub_total - Number(res.price)
      }
      this.userSer.editQuant(id, this.newDecData).subscribe((res) => {
        this.allCart = res
        console.log("add to post:", this.allCart);
        // alert("Item Cart Successfully")
        // this.router.navigate(['/Cart'])
        this.userSer.Cart_data().subscribe((res) => {
          this.item = res;
          this.grandTotal = 0;
          for (let i = 0; i < this.item.length; i++)
            this.grandTotal += res[i].sub_total
        })
      })
    })
  }


  
}
