import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.css']
})
export class BuyNowComponent implements OnInit{
  CodArr: string[] = ['Cash On Delivery','UPI']
  registaionInputValue!:FormGroup
  constructor(private buyser:UserService,private route:Router){}
  ngOnInit(): void {
    this.registaionInputValue = new FormGroup({
      name: new FormControl(''),
      address: new FormControl(''),
      contact: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
      cardholdername: new FormControl(''),
      card: new FormControl(''),
      expmonth: new FormControl(''),
      expyear: new FormControl(''),
      cvv: new FormControl(''),
      cod: new FormControl(''),

    })
  }
  submitdata(){
    // console.log("recived data:",this.registaionInputValue.value);
    
    this.buyser.BuyNow(this.registaionInputValue.value).subscribe((res:any)=>{
     console.log("submited data:",res);
     if (res.status == 200) {
      alert(res.msg);
      this.route.navigate(['/menu'])
    } else {
      alert(res.msg)
    }

    })
  }
}
