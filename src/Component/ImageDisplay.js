import './ImageDisplay.css';
import { useRef, useState } from "react";


const ImageDisplay = (props) => {

    const [Color, setColor] = useState('red')
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
            {props.ImageOnly == false ? 
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
                <div className='imagePlace'>
                    
                </div>
            </div>

        </div>
    )
}

export default ImageDisplay;