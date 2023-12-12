import './Popup.css';
import close  from './assets/close.png'

const Popup = (props) => {

    const closePopup = () =>{
        props.setopenPopup(false)
    }

  return (
    <div>
     
        
          <div className='popup_overlay' ></div>
          <div className='popup'>
            <img className='close' src={close} onClick={closePopup}/>
            2. מטרות החברה
            לפי סעיף 32(1) לחוק – לעסוק בכל עיסוק חוקי.
            לפי סעיף 32(2) לחוק – לעסוק בכל עיסוק חוקי, למעט העיסוקים המפורטים להלן.
            לפי סעיף 32(3) לחוק – לעסוק בעיסוקים המפורטים להלן.
            החברה הוקמה למטרות ציבוריות, המפורטות להלן בלבד, וחל עליה איסור לחלק רווחים
          </div>
     
    </div>
  );
};

export default Popup;
