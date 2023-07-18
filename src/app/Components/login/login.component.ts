import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginInputValue!: FormGroup;
  changetype: boolean = true;
  visible: boolean = true;
  constructor(private UserSer: UserService,
    private route:Router
    ) { }
  ngOnInit(): void {
    this.loginInputValue = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("([a-z0-9.-]+)@([a-z]{2,15}).([a-z.]{2,10})$")]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,15}$")])
    })
  }

  view() {
    this.changetype = !this.changetype;
    this.visible = !this.visible;
  }

  submitData() {
    console.log("login Form Data:", this.loginInputValue.value);

    this.UserSer.loginUser(this.loginInputValue.value).subscribe((res: any) => {
      console.log("Responce after Login:", res.user);
      if (res.status == true) {
        // alert("Login Successfully")
        alert(res.msg)
        this.route.navigate(['/menu'])
      } else {
        alert("Login Error");
        // alert(res.msg);
      }
    })
  }
}