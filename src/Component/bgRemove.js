import "./bgRemove.css"
import DownloasImage from "./downloas-image";
import close  from '../assets/close.png'
import logo from '../assets/logo.png'
import banner from '../assets/banner.png'
import ImageDisplay from "./ImageDisplay";
import {useState} from 'react'

const BgRemove = () =>
{


    const titel='תמונה חינם';
    const subtitle="612x408  תצוגה מקדימה של תמונה";
    const subsubtext="איכות טובה עד 0.25 מגה פיקסל"
    const buttext = 'הורד';
    const dtitle = 'pro';
    const dsubtitle="1280x1920  תצוגה מקדימה של תמונה";

    const [tabName, settabName] = useState('no_bg')
   
    const ng_down = (e) => {
    debugger;

        if(e.target.className == 'no-pg'){
            settabName('original')
        } else{
            settabName('no_bg')
        }

    }


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
                        <DownloasImage titel={titel} subtitle={subtitle} buttext={buttext} subsubtext={subsubtext} borderline={true} />
                        <DownloasImage titel={dtitle}  buttext={ 'HD' + ' ' + buttext} dsubtitle={dsubtitle} subsubtext={subsubtext} imagePro={true}/>


                                
                        </div>  

                    </div>
                    <div className='mainLeft'>
                            <div className='no-pg' style={{borderBottom: (tabName != "no_bg" ? "3px solid #9C27B0": "")}} onClick={ng_down}> הסרת רקע </div>
                            <div className='original' style={{borderBottom: (tabName == "no_bg" ? "3px solid #9C27B0": "")}}  onClick={ng_down} > מקורי </div>
                        <div className='middleLeft'>
                            <ImageDisplay />


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