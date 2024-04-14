import React from 'react'

function Contact() {
    return (
        <div className="main_container">
            <h2 style={{
                color: "rgba(2, 6, 12, 0.75)"
            }}>
                Contact Us
            </h2>
            <form action="#" className='form'>
                <div className='contact_name_section'>
                    <input type="text" name="name" placeholder='Enter Your Name' />
                    <input type="email" name="email" placeholder='Enter Your Email' />
                </div>
                <div className='contact_message_section'>
                    <textarea name="message" id="" cols="42" rows="10" placeholder='How can I help you?'></textarea>
                </div>

                <button className='contact_submit_btn' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact