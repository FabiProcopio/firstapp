import React from "react"
import Footer from "../../components/Footer";
import Header from "../../components/header/header";
import CommentBox from "../../components/Commentbox/Commentbox";


import './styles.css'


function Comments(){

    
    return (
        <>
            <Header />

            <h4>
                Comments
            </h4>

            <CommentBox />
            

            
            
            <Footer />
        </>
    )
}

export default Comments;