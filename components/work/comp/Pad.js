import Image from 'next/image'

const Pad = ({img_comp}) => {
    return (
        <div class="ipads">
        <div class="ipads__power-btn"></div>
        <div class="ipads__left-btn"></div>
        <div class="ipads__details"></div>
        <div class="ipads__screen">
          <div class="ipads__content">
                  <div class="ipad__inner_content">
                    <Image 
                    layout="fill" 
                    src={`/images/pad/${img_comp}.png`} 
                    />
                </div>
          </div>  
        </div>
        <div class="ipads__home-btn"></div>
      </div>
    );
}
 
export default Pad;