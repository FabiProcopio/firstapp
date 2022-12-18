import React from "react"
import Footer from "../../components/Footer";
import Header from "../../components/header/header";
import './styles.css'


function Contact(){
    return (
        <>
            <Header />

            <h4>
                Ask us something or give feedback!
            </h4>
            
            <div className="contact">
                <form className="form" action="action-page.php">

                    <label for='fname'></label>
                    <input type={'text'} id='fname' name="firstname" placeholder="Your name..." />

                    <label for='lname'></label>
                    <input type={'text'} id='lname' name="lastname" placeholder="Your last name..." />

                    <label for='message'></label>
                    <textarea id='message' name="message" placeholder="Write something..." style={{height: '200px'}}> 
                    </textarea>

                    <input className="submit" type={'submit'} value='Submit' />

                </form>
            </div>
            
            <Footer />
        </>
    )
}

export default Contact;