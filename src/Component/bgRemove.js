import "./bgRemove.css"
import close from '../assets/close.png'

const BgRemove = () =>
{
    return(
        <div className="Container">
            <div className="header">
                <img src={close} className="Xicon"/>
                <div className="header-title"> העלאת תמונה כדי להסיר את הרקע  </div>
                
                <button className="header-image" > העלאת תמונה</button>
                <div className="header-subtext">פורמטים נחתכים ,png, ipeg </div>
            </div>

        </div>
    )
}

export default BgRemove;