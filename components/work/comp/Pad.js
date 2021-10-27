import Image from 'next/image'

const Pad = ({img_pad}) => {
    return (
        <div className="ipads">
        <div className="ipads__power-btn"></div>
        <div className="ipads__left-btn"></div>
        <div className="ipads__details"></div>
        <div className="ipads__screen">
          <div className="ipads__content">
                  <div className="ipad__inner_content">
                    <Image 
                    layout="fill" 
                    src={`/images/pad/${img_pad}.png`} 
                    />
                </div>
          </div>  
        </div>
        <div className="ipads__home-btn"></div>
      </div>
    );
}
 
export default Pad;