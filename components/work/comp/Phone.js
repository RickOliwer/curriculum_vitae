import Image from 'next/image'
const Phone = ({img_phone}) => {
    return (
        <div className="iphone">
            <div className="iphone__power-btn"></div>
            <div className="iphone__left-btn"></div>
            <div className="iphone__details"></div>
            <div className="iphone__screen">
                <div className="iphone__content">
                    <div className="iphone__inner_content">
                        <Image 
                        layout="fill" 
                        src={`/images/phone/${img_phone}.png`} 
                        />
                    </div>
                </div>  
            </div>
            <div className="iphone__home-btn"></div>
        </div>
    );
}
 
export default Phone;