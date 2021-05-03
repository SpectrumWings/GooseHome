import React from 'react'
import './Style.css';
import title from '../../images/title.png';
import goose from '../../images/goose_head.png';
import ImageUpload from '../../components/ImageUpload/Index'
import gb from "../../images/bbutton.png";

const MainPage = (props) => {
    let loginSet;
    let uploadSet;
    let uploadDisplay;
    let pageSet;
    let messageBlock;

    if (props.convo_prog == 2){
        loginSet = 
        <div className='upload_option'>
  
            <div className='got' onClick={props.go_upload}>I've got a Picture of a Goose</div>

            <div className='g' onClick={props.go_upload}>No, but I've got a Pet</div>

            <div className='no' onClick={props.no_upload}>Nope</div>
            
        </div>
    }

    if (props.convo_prog == 3 && props.action == false){
        uploadSet = 
        <div className='upload_option'>
            <div className = 'book' onClick={props.upload_form}>
            </div>
            
        </div>
    }
    
    if (props.action == true){
        console.log(props.action)
        uploadDisplay = 
        <section>

        <ImageUpload 
            close={props.close_upload} 
            prediction={props.prediction}
            submission={props.submission} 
            change={props.change} 
            filename={props.filename} 
            content={props.content}
            />
        </section>
      }

    if (props.action == false){
        messageBlock = 
        <p>
            {props.message}
            <div class="triangle-down"></div>
        </p>
    }

    return (
        <div className='background'>
            <header>
                <button className='header_button'>
                    About
                </button>
                <button className='header_button'>
                    Login
                </button>
            </header>
            <img src={title} alt="Goose Home" className="title"/>
         
            <div className='intro'>
                {uploadDisplay}
                
                <div className="message" onClick={props.convo}>
                    {messageBlock}
                    {loginSet}
                    {uploadSet}
                </div>
                {/* <ErrorMessage message={this.error}/>
        */}
       
            </div>
            
            <img src={goose} alt="Goose" className="goose"/>
        </div>
    )
}

export default MainPage