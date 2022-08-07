/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

import List from './List'
import Form from './Form'
import './style.css'


function Contacts() {

    const [contacts, setContacts] = useState(
        [
            {
                fullName: "Ali Karagöz",
                phoneNumber: "0500 500 00 00"
            },
        ]);

    useEffect(() => {
        console.log(contacts)
    }, [contacts])


    return (
        <div className="contacts">
            <h1 className="contacts-title">Rehber</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts