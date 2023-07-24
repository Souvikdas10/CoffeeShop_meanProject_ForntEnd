import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profile_pic: any = {};
  img_path: any = "";
  profile_id:any="";
  baseUrl: string = "http://localhost:2100/"
  folderPath: string = "upload/"
  
  constructor(private userser:UserService,private Active:ActivatedRoute){}
  ngOnInit(): void {
    this.Active.paramMap.subscribe((params)=>{
      this.profile_id=params.get('_id')
      console.log('_id',this.profile_id);
      
      // this.userser.profile_data(this.profile_id).subscribe((res:any)=>{
      //   this.profile_pic=res.data
      //   console.log(this.profile_pic);    
      // })
    
    })
  }
}
