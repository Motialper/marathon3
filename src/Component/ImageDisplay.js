import './ImageDisplay.css';
import { useRef, useState, useEffect } from "react";


const ImageDisplay = (props) => {

    const [Color, setColor] = useState('red')
    const [image_only_disp, setimage_only_disp] = useState('');

    useEffect(() => {
        if(props.image_only === true) {
            setimage_only_disp('image_only_disp');
        } else {
            setimage_only_disp('');
        }
    },[props.image_only]);

    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.click();
    }

    const ColorChange = (e) => {
        setColor(e.target.value)
    }
    
    return (
        <div>
           
            <div className='imDisContainer'>
            {props.image_only == false ? 
                 <>
                <div className='textIm'>
                    אל תשכח להוריד את הקבצים, הם ימחקו אוטומטית כשתצא מהדף
                </div>
                <div className='color_' onClick={focusInput} >צבע רקע
                    <span className='color_choosh' style={{backgroundColor : Color}}></span>
                </div>
                <input type='color' ref={inputElement}  className='inputColor' onChange={ColorChange}/>
                </>
                : ''}
                <div className={`image_pace ${image_only_disp}`}>
                    {props.ShowImg && props.ShowImg !== 'no_bg:false'? 
                    <img className='img_display' src={'http://localhost:5000/' +props.ShowImg}/>
                    : ''}
                </div>
            </div>

        </div>
    )
}

export default ImageDisplay;