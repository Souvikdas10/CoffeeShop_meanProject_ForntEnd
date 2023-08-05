import { Component, OnInit } from '@angular/core';
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

  constructor(private httpSer: UserService) { }
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
