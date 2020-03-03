import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
  formData;
  checkoutForm;
  activeContact;
  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.checkoutForm = this.formBuilder.group({
      id: null,
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      isActive: ''
    });
   }

  ngOnInit(): void {
    this.activeContact = this.route.snapshot.paramMap.get("id");
    this.activeContact && this.contactService.getDataRecord(this.activeContact)
      .subscribe(res => {
        this.checkoutForm.setValue(res)
      });
  }

  addContact(data) {
    this.formData = data;
    this.contactService.pushData(data);
    this.checkoutForm.reset();
    this.router.navigate(['contacts']);
  }

}
