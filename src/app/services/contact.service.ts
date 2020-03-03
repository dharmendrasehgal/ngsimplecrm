import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  getData() {
    return this.http.get('http://localhost:3000/contacts');
  }
  getDataRecord(id) {
    return this.http.get('http://localhost:3000/contacts/'+id);
  }
  pushData(contact) {
    if(contact.id !== null){
      return this.http.put('http://localhost:3000/contacts/'+contact.id, contact)
        .subscribe(res => {
                console.log('Contact Updated: ', res);
              });
    } else {
      return this.http.post('http://localhost:3000/contacts', contact)
              .subscribe(res => {
                console.log('New Contact Added: ', res);
              });
    }
  }
  removeContact(contact) {
    return this.http.delete('http://localhost:3000/contacts/'+contact.id);
  }
}
