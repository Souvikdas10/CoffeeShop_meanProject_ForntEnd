import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/Service/storage.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  allCart: any = {};
  cartPro!: any;
  cart_details!: any;
  single_details!: any
  details_id!: any
  imagePath: any = ""
  baseUrl: string = "http://localhost:2100/"
  folderPath: string = "upload/"
  existing:any={}

  constructor(private UserSer: UserService,
    private Storage: StorageService,
    private Activate: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.Activate.paramMap.subscribe((params) => {
      this.details_id = params.get('_id')
      // console.log("id",this.details_id);
      this.UserSer.single_data_fetch(this.details_id).subscribe((res: any) => {
        // console.log(res.data);
        this.single_details = res.data


        this.imagePath = this.baseUrl + this.folderPath
        // console.log(this.imagePath);
      })
    })
  }

  loadallproduct() {
    this.UserSer.Cart_data().subscribe((res) => {
      this.allCart = res
    })
  }


  addItemTocart(product: any) {
    // this.allCart.details_id
    this.cartPro = product
    // console.log("cart id:", this.cartPro);
    this.UserSer.Cart_data().subscribe(res=>{
      let all_cart_product=res;
      // console.log("All Cart Products: ",all_cart_product);
      let prod_id=all_cart_product.findIndex((x:any)=>x._id==this.cartPro._id && x.email==window.localStorage.getItem('email'))

      if(prod_id==-1)
      {
        let cart_product = {
          ...this.cartPro,
          email: window.localStorage.getItem('email'),
          quantity: 1
        }
        this.UserSer.AddToCart(cart_product).subscribe((res) => {
          this.allCart = res
          console.log("add to post:", this.allCart);
          alert("Item Cart Successfully")
          this.router.navigate(['/Cart'])
        })

      }
      else{
        this.existing=all_cart_product.find((x:any)=>x._id==this.cartPro._id && x.email==window.localStorage.getItem('email'))
        console.log("Existing: ",this.existing);
        let new_data={
          ...this.existing,
          quantity:this.existing?.quantity+1
        }
        this.UserSer.editQuant(this.existing.id,new_data).subscribe((res) => {
          this.allCart = res
          console.log("add to post:", this.allCart);
          alert("Item Cart Successfully")
          this.router.navigate(['/Cart'])
        })     
      }
    })
  }
}

