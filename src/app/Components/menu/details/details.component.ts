import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

single_details!:any
details_id!:any
imagePath:any=""
baseUrl: string = "http://localhost:2100/"
folderPath: string = "upload/"


  constructor(private UserSer: UserService,
              private Activate: ActivatedRoute) { }


  ngOnInit(): void { 
   this.Activate.paramMap.subscribe((params)=>{
    this.details_id=params.get('_id')
    console.log("id",this.details_id);
    this.UserSer.single_data_fetch(this.details_id).subscribe((res:any)=>{
      console.log(res.data);
      this.single_details=res.data


      this.imagePath = this.baseUrl + this.folderPath 
      console.log(this.imagePath);
      
      
    })
    
   })
  }

}
