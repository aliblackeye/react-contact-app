import { useState } from "react";
import './style.css'
const initialValues = { fullName: "", phoneNumber: "" };

function Form({ addContact, contacts }) {

    const [form, setForm] = useState(initialValues)

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.fullName === '' || form.phoneNumber === "") {
            return false;
        }

        addContact([form, ...contacts])
        setForm(initialValues)
    }

    return (
        <form onSubmit={onSubmit} className="contacts-form">
            <div>
                <input type="text" name="fullName" placeholder="Adı Soyadı" onChange={e => setForm({ ...form, [e.target.name]: e.target.value })} value={form.fullName} />
            </div>

            <div>
                <input type="text" name="phoneNumber" placeholder="Telefon Numarası" onChange={e => setForm({ ...form, [e.target.name]: e.target.value })} value={form.phoneNumber} />
            </div>

            <div className="form-btn">
                <button className="btn add-btn" type="submit">Ekle</button>
            </div>
        </form>
    )
}

export default Form