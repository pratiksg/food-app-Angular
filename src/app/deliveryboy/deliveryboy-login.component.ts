import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeliveryboyService } from './deliveryboy.service';
import { AuthenticationService } from './deliveryboy-authenticate.service';



@Component({
    templateUrl:"./deliveryboy-login.component.html",
    selector:"deliveryboy-login"
})
export class DeliveryboyLoginComponent implements OnInit{
    invalidLogin = false;

    constructor(private router: Router,
        private loginservice: AuthenticationService,
      private deliveryboyService : DeliveryboyService) { }
  
      ngOnInit() {
      }
  
      checkLogin() {
        let email = (<HTMLInputElement>document.getElementById("email")).value;
        let password= (<HTMLInputElement>document.getElementById("password")).value;
  
        this.deliveryboyService.logInDetailsOfDeliveryboy(email,password).subscribe((data)=>{
          if(data!=null) {
            
            this.invalidLogin = this.loginservice.authenticate(true,email);;
            this.router.navigate(['/home']);
          } 
          else
          this.invalidLogin = true;
  
        })
        
      }

}