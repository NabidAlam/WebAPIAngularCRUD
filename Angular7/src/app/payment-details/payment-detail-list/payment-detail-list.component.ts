import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: []
})
export class PaymentDetailListComponent implements OnInit {

  constructor(private service: PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: PaymentDetail) {
this.service.formData = Object.assign({}, pd);
  }

  onDelete (PId) {

if (confirm('Are you sure want to delete this record?')) {
  this.service.deletePaymentDetail(PId)
    .subscribe(res => {
      this.service.refreshList();
      this.toastr.warning('Deleted successfully', 'Payment Detail Register');
    },
      err => {
        console.log(err);
      });
}
  }
}
