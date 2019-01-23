import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  formData: PaymentDetail;
  readonly rootURL = 'http://localhost:57548/api';
  list: PaymentDetail[];

  constructor(private http: HttpClient) { }

  postPaymentDetail(formData: PaymentDetail) {
    return this.http.post(this.rootURL + '/PaymentDetail', formData);

  }

  refreshList() {
    this.http.get(this.rootURL + '/PaymentDetail')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }
}
