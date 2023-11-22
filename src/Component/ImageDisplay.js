
import './ImageDisplay.css';
import axios from 'axios';

import { useRef, useState, useEffect } from "react";


const ImageDisplay = (props) => {

    const [color, setcolor] = useState('red')
    const [image_only_disp, setimage_only_disp] = useState('');
    const [upload_img_name, setupload_img_name] = useState(props.ShowImg);
    const [show_loader, setshow_loader] = useState(props.show_loader);


    useEffect(() => {
        setupload_img_name(props.ShowImg)
    }, [props.ShowImg])

    useEffect(() => {
        if (props.image_only === true) {
            setimage_only_disp('image_only_disp');
        } else {
            setimage_only_disp('');
        }
    }, [props.image_only]);

    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.click();
    }

    const color_change = (e) => {
        setcolor(e.target.value)
    }
    function color_choose_func(e) {
        console.log('Chosen color:', color);

        if (upload_img_name && upload_img_name != "no_bg_false") {
            setshow_loader(true)
            console.log(e.target.value);

            let formData = new FormData();

            formData.append("myFile", upload_img_name);
            formData.append("color", color);

            axios.post('http://localhost:5000/upload_image_with_color', formData)
                .then(res => {
                    setupload_img_name(res.data);
                    props.color_func();
                    setshow_loader(false)
                })
        } else {
            console.log("no_file_uploaded");
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
                            <span className='color_choosh' style={{ backgroundColor: color }}></span>
                        </div>
                        <input type="color" ref={inputElement} className="input_color" onBlur={color_choose_func} onChange={color_change}
                        />
                    </>
                    : ''}
                <div className={`image_pace ${image_only_disp}`}>
                    {upload_img_name && upload_img_name !== 'no_bg:false' && upload_img_name !== 'color:no_bg:false' ?
                        <img className='img_display' src={'http://localhost:5000/' + upload_img_name} />
                        : ''}
                </div>

                {show_loader ?
                    <div className='loader'>
                        <div className='text_loader'>39%</div>
                    </div>
                    : ''}

            </div>
        </div>
    )
}

export default ImageDisplay;