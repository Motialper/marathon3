import './downloas-image.css'
  
import newImg from '../assets/new.png'


const DownloasImage = (props) =>{

    const Open_Popup_down = () => {
        props.showpopup()

    }
    
    return(
        <div  className = 'downContainer' style={{borderBottom : props.borderline ?  '1px solid #5e5c5c' : ''}}>
            <div className='downTitle' >{props.titel}
            {props.imagePro ? <img className='newImage' src={newImg} /> : ''}
            </div>
            <div className='downSubTitle'>{props.subtitle}</div>
            <div className='downSubTitle'> {props.dsubtitle} </div>
            <button className='downButton' onClick={Open_Popup_down}> {props.buttext} </button>
            <div className ='downSubSubText'> {props.subsubtext}</div>

           
    </div>


    )
    
}

export default DownloasImage;