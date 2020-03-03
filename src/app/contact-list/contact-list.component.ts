import { Component, OnInit } from '@angular/core';

import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts;
  constructor(
    private contactService: ContactService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.contactService.getData()
      .subscribe( res => {
        this.contacts = res
      });
  }

  removeMe(contact) {
    this.contactService.removeContact(contact)
        .subscribe(res => {
          window.alert('Contact removed!');
        });
  }

  updateMe(contact) {
    this.router.navigate(['/create-contact', {'id': contact.id}]);
  }

}
