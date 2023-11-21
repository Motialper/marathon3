import './bgRemove.css';

import DownloasImage from "./downloas-image";
import Popup from './Popup';
import close from '../assets/close.png'
import logo from '../assets/logo.png'
import banner from '../assets/banner.png'
import DownloadImg from '../assets/DownloadImg.png';
import not_robot from '../assets/not_robot.png'
import axios from 'axios';

import ImageDisplay from "./ImageDisplay";
import { useState, useRef } from 'react'

const BgRemove = () => {


    const titel = 'תמונה חינם';
    const subtitle = "612x408  תצוגה מקדימה של תמונה";
    const subsubtext = "איכות טובה עד 0.25 מגה פיקסל"
    const buttext = 'הורד';
    const dtitle = 'pro';
    const dsubtitle = "1280x1920  תצוגה מקדימה של תמונה";

    const [tabName, settabName] = useState('no_bg')
    const [openPopup, setopenPopup] = useState(false)
    const [Open_poup_download, setOpen_poup_download] = useState(false)
    const [ShowEror, setShowEror] = useState(false)
    const [ShowImg, setShowImg] = useState(false)


    const upluodImage = useRef()

    const chooshFile = () => {
        upluodImage.current.click()
    }

    const ng_down = (e) => {
        if (e.target.className == 'no-pg') {
            settabName('original')
        } else {
            settabName('no_bg')
        }

    }

    const Open_Popup = () => {
        setopenPopup(true)
    }

    const Poup_download = () => {
        setOpen_poup_download(true)
    }

    const send_to_server = (e) => {
        let file = (e.target.files[0])
        
        if ( file.type == "image/png" ||  file.type == "image/jpeg"){
            setShowEror(false)

            let formData = new FormData();

            formData.append('myFile', file);  
            let headers = {     
                'content-type': 'multipart/form-data' 
            }

        axios.post(`http://localhost:5000/upload_img`, formData, headers )
        .then(res => {
            setShowImg(res.data)
         
        })
    } else {
        setShowEror(true)
    }
    }


    return (
        <div>
            <div className="Container">
                <div className="header">
                    <img src={close} className="Xicon" />
                    <div className="header-title"> העלאת תמונה כדי להסיר את הרקע  </div>

                    <button className="header-image" onClick={chooshFile}> העלאת תמונה</button>
                    <input type="file" className="chooshfile" ref={upluodImage} onChange={send_to_server}/>
                    <div className='header_error'>
                        <div className="header-subtext">פורמטים נחתכים ,png, ipeg </div>
                            {ShowEror ?  <p className="error"> קובץ לא נתמך</p> : " "}
                        </div>
                </div>

                <div className='mainBudy'>
                
                    <div className='mainRight'>
                   
                        <div className='middleRight'>

                            <DownloasImage  showpopup={Poup_download} titel={titel} subtitle={subtitle} buttext={buttext} subsubtext={subsubtext} borderline={true} />
                            <DownloasImage  showpopup={Poup_download}  titel={dtitle} buttext={'HD' + ' ' + buttext} dsubtitle={dsubtitle} subsubtext={subsubtext} imagePro={true} />



                        </div>
                      
                    </div>
                    <div className='mainLeft'>
                  
                        <div className='no-pg' style={{ borderBottom: (tabName != "no_bg" ? "3px solid #9C27B0" : "") }} onClick={ng_down}> הסרת רקע </div>
                        <div className='original' style={{ borderBottom: (tabName == "no_bg" ? "3px solid #9C27B0" : "") }} onClick={ng_down} > מקורי </div>
                        <div className='middleLeft'>
                            {tabName !== 'no_bg' ?
                                <ImageDisplay className='img_display' image_only={false} ShowImg={'no_bg:'+ ShowImg}/>
                                :
                                <ImageDisplay image_only={true} ShowImg={ShowImg} />
                            }
                            {openPopup && <Popup setopenPopup={setopenPopup} />}
                            

                        {Open_poup_download ? 
                        
                            <div className='down_image_popup'>

                                <div  className="top_img">
                                    <img className="img_down" src={DownloadImg}/>
                                </div>
                                <img className='close_img' src={close} onClick={()=>setOpen_poup_download(false)}/>

                                <p className="down_image_text_title"> אישור להורדת תמונה </p>
                                <p className="down_image_text" >? האם להוריד את תמונה </p>
                                
                                <div className="input_" >
                                <img src={not_robot}  className='not_robot'/>

                                    <input type='checkbox' /> <span> אני לא רובוט </span>

                                </div>
                                <div className="buttons">
                                    <button className="but_appeoval">אישור</button>
                                    <button className="but_cancel" onClick={()=>setOpen_poup_download(false)}>ביטול</button>
                                </div>
                            </div>
                            : ''}

                        </div>
                        <div className='text-middel-footer'>.על ידי העלאת תמונה אני מסכים לתנאים ונגבלות</div>
                        <button className='button-company' onClick={Open_Popup}> תקנון חברה</button>

                    </div>

                </div>
                <div className='footer'>
                    <img src={logo} className='logo' />
                    <a href='https://chat.openai.com' target="_blank"> <img src={banner} className='banner' /></a>

                </div>


            </div>
        </div>
    )
}

export default BgRemove;