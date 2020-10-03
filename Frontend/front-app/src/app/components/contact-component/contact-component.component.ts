import { Contact } from './../../../../models/contact';
import { ContactServiceService } from './../../services/contact-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.scss'],
  providers: [ContactServiceService]
})
export class ContactComponentComponent implements OnInit {
  contacts: Contact[];
  contact: Contact;
  // tslint:disable-next-line:variable-name
  first_name: string;
  // tslint:disable-next-line:variable-name
  last_name: string;
  phone: string;

  constructor(private cons: ContactServiceService) { }

  ngOnInit(): void {
    this.cons.getContacts().subscribe(contacts => this.contacts = contacts);
  }

  // tslint:disable-next-line:typedef
  deteleContact(id: string)
  {
    const co = this.contacts;
    this.cons.deleteContact(id).subscribe(data => {
      if (data.n === 1)
      {
        for (let i = 0; i < co.length; i++)
        {
          if (co[i]._id === id)
          {
            co.splice(i, 1);
          }
        }
      }
    });
  }

  // tslint:disable-next-line:typedef
  addContact()
  {
    const newcon = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone
    };

    const newc = new Contact();
    newc.first_name = this.first_name;
    newc.last_name = this.last_name;
    newc.phone = this.phone;

    this.cons.addContact(newcon).subscribe(data => {
      this.contacts.push(newc);
    });
  }

}
