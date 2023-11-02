import './ImageDisplay.css';

const ImageDisplay = () => {
    return (
        <div>
            <div className='imDisContainer'>
                <div className='textIm'>
                    אל תשכח להוריד את הקבצים, הם ימחקו אוטומטית כשתצא מהדף
                </div>
                <div className='color_'>צבע רקע</div>
                <input type='color'/>

            </div>

        </div>
    )
}

export default ImageDisplay;