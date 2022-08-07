import { useState } from 'react'
import './style.css'

function List({ contacts }) {

  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key].toString().toLowerCase().includes(filterText.toLowerCase());
    })
  })

  console.log(filtered);

  return (
    <>

      <input className='contacts-filter' type="text" placeholder="Rehberde ara" value={filterText} onChange={e => setFilterText(e.target.value)} />

      {
        filtered.map((contact, key) => (
          <ul  className='contact-items'>
            <li>
              <p key={key}>{contact.fullName}</p>
              <p key={key}>{contact.phoneNumber}</p>
            </li>
          </ul>
        ))
      }

      <h3 className='result-counter'>Sonuç: {filtered.length}</h3>
    </>
  )
}

export default List