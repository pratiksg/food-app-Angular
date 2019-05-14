import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Deliveryboy } from './deliveryboy';
import { Observable } from 'rxjs';

@Injectable()
export class DeliveryboyService {
    baseUrl = "http://10.246.93.31:8089";

    headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' })
    constructor(private http: HttpClient) { }

    registrationDetailsOfDeliveryboy(deliveryboy: Deliveryboy): Observable<Deliveryboy> {
        
        console.log(Deliveryboy);

        return this.http.post<Deliveryboy>(this.baseUrl + "/deliverboy", deliveryboy);
    }
    logInDetailsOfDeliveryboy(email,password) {
      

        return this.http.get(this.baseUrl+"/deliveryboy/"+email+"/"+password);    }
}
