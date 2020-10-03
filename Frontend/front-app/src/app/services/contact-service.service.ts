import { Contact } from './../../../models/contact';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // tslint:disable-next-line:typedef
  getContacts()
  {
    return this.http.get<Contact[]>('http://localhost:3100/api/contacts');
  }
  // tslint:disable-next-line:typedef
  addContact(newContact)
  {
    return this.http.post<Contact>('http://localhost:3100/api/add', newContact, this.httpOptions);
  }

  // tslint:disable-next-line:typedef
  deleteContact(id: string)
  {
    return this.http.delete<any>('http://localhost:3100/api/delete/' + id);
  }

}
