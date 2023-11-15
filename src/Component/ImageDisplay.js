
import './ImageDisplay.css';
import axios from 'axios';

import { useRef, useState, useEffect } from "react";


const ImageDisplay = (props) => {

    const [Color, setColor] = useState('red')
    const [image_only_disp, setimage_only_disp] = useState('');




    console.log('aaa', props.ShowImg)
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

    const func_choosh_color = (e) => {
        if ( props.ShowImg && props.ShowImg !== 'no_bg:false' ){
            console.log(e.target.value)

            let formData = new FormData();

            formData.append('UploadedFileName',  props.ShowImg)
            formData.append('color',  Color)

            axios.post('http://localhost:5000/upload_img_with_color', formData)
                .then(res => {
                    props.setShowImg(res.data)
                    props.color_func()

                })
                

        }
      
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
                <input type='color' ref={inputElement}  className='inputColor' onChange={ColorChange} onBlur={func_choosh_color}/>
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