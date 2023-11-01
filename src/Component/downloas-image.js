import './downloas-image.css'

const DownloasImage = (props) =>{

    return(
        <div  className = 'downContainer'>
            <div className='downTitle'>{props.titel}</div>
            <div className='downSubTitle'>{props.subtitle}</div>
            <div className='downSubTitle'> {props.dsubtitle} </div>
            <button className='downButton'> {props.buttext} </button>
            <div className ='downSubSubText'> {props.subsubtext}</div>
    </div>


    )
    
}

export default DownloasImage;