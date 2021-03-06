import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { Observable, Observer } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'gettoken',
  template: '',
  providers: [DataService]
})
export class GettokenComponent implements OnInit {

   id;
   token;  
  constructor(public http: Http, private router: Router, private route: ActivatedRoute, private myService: DataService ){ 
    this.token = this.route.snapshot.params['token'];
    this.id = this.route.snapshot.params['id'];
    console.log("token: ",this.token);
    console.log("id: ",this.id);
    localStorage.setItem("token",this.token);
    localStorage.setItem("id",this.id);
    console.log(localStorage.getItem("token"));
    console.log(localStorage.getItem("id"));
    
    this.router.navigate(['/yourdashboard', {id: this.id}]);

   }


  ngOnInit() {
 
  }
  


  
}
