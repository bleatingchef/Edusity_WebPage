import React from 'react'
import './Contact.css'
import message from '../../assets/msg-icon.png'
import email from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ced67139-306d-4c70-a3dc-54b968fba943");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={message} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
             <ul>
                <li> <img src={email} alt="" />contact@educity.com</li>
                <li> <img src={phone} alt="" />+1 123-456-7890</li>
                <li> <img src={location} alt="" />77 Massachusetts Ave, Cambridge
MA 02139, United States</li>
             </ul>

        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="">Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required/>

                <label htmlFor="">Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile Numnber' required/>

                <label htmlFor="">Your E-mail</label>
                <input type="email" name='mail' placeholder='Enter Your E-mail' required />

                <label htmlFor="">Write your messages here</label>
                <textarea name="message" rows="6" placeholder='Enter your message'required></textarea>

                <button className='btn dark-btn'>Submit Now <img src= {white_arrow}alt="" /></button>
            </form>
            <span>{result}</span>

        </div>
    </div>
  )
}

export default Contact