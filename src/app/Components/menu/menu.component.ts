import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // allItem!: any
  allItem: any = {};
  img_path: any = "";
  baseUrl: string = "http://localhost:2100/"
  folderPath: string = "upload/"
  discountedPrice!: number;
  originalPrice:any;

  constructor(private httpSer: UserService, private Activate: ActivatedRoute) {
       this.originalPrice = 100;
        this.discountedPrice = this.httpSer.calculateDiscountedPrice(this.originalPrice);
    

  }
  ngOnInit(): void {
    this.httpSer.item_Menu().subscribe((res: any) => {
      this.allItem = res.data;
      // console.log("All item:", this.allItem);

      this.img_path = this.baseUrl + this.folderPath
      // console.log(this.img_path);

      // console.log("all image:", this.baseUrl,this.folderPath,this.allItem.image);

    })



  }
}