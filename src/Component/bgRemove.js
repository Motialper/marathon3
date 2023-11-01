import "./bgRemove.css"
import DownloasImage from "./downloas-image";
import close  from '../assets/close.png'
import logo from '../assets/logo.png'
import banner from '../assets/banner.png'

const BgRemove = () =>
{
    return(
        <div>
            <div className="Container">
                <div className="header">
                    <img src={close} className="Xicon"/>
                    <div className="header-title"> העלאת תמונה כדי להסיר את הרקע  </div>
                    
                    <button className="header-image" > העלאת תמונה</button>
                    <div className="header-subtext">פורמטים נחתכים ,png, ipeg </div>
                </div>

                <div className='mainBudy'>
                    <div className='mainRight'>
                        <div className='middleRight'>
                            <DownloasImage />

                                
                        </div>  

                    </div>
                    <div className='mainLeft'>
                            <div className='no-pg'> הסרת רקע </div>
                            <div className='original'> מקורי </div>
                        <div className='middleLeft'>


                        </div>
                            <div className='text-middel-footer'>.על ידי העלאת תמונה אני מסכים לתנאים ונגבלות</div>
                            <button className='button-company'> תקנון חברה</button>
                        
                         </div>

                </div>
                <div className='footer'>
                    <img src={logo} className='logo'/>
                   <a href='https://chat.openai.com' target="_blank"> <img src={banner} className='banner'/></a>

                </div>

            </div>
        </div>
    )
}

export default BgRemove;