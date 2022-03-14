import { useState } from 'react'
import "./ContactForm.css";

const ContactForm = ({ toggleVisibility, setContact }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')

    const handleContactForm = (e) => {
        e.preventDefault()
        toggleVisibility.current.toggleVisibility()

        const objContact = {
            name,
            phone,
            address,
            comment
        }
        setContact(objContact)
        setName('')
        setPhone('')
        setAddress('')
        setComment('')
    }

    return (
        <div className='ContactContainer'>
            <div className='contactInf'>Contact Information</div>
            <form className='ContactForm' onSubmit={handleContactForm}>
            <label className='LabelContact'>Name:
                <input
                className='InputContact'
                type='text'
                value={name}
                placeholder='Your First Name'
                onChange={({ target }) => setName(target.value)}
                />
            </label>  
            <label className='LabelContact'>Phone:
                <input
                className='InputContact'
                type='text'
                value={phone}
                placeholder='Phone Number'
                onChange={({ target }) => setPhone(target.value)}
                />
            </label>
            <label className='LabelContact'>Address:
                <input
                className='InputContact'
                type='text'
                value={address}
                placeholder='Delivery Address'
                onChange={({ target }) => setAddress(target.value)}
                />
            </label>
            <label className='LabelContact'>Comment: 
                <input
                className='InputContact'
                type='text'
                value={comment}
                placeholder='*Obligatory comment*'
                onChange={({ target }) => setComment(target.value)}
                />
            </label>
            <button className='ButtonConfirm' type='submit'>Confirm</button>
            </form>
        </div>
    )
}

export default ContactForm