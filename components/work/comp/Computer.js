import Image from 'next/image'
//import img from './images/wine-comp.png'
const Computer = ({img_comp}) => {

    return (

            <div className="monitor">
                <div className="browser__bar">
                    <div className="ball"></div>
                </div>
                <div className="monitor__inner_content">
                    
                    <Image 
                        layout="fill" 
                        src={`/images/comp/${img_comp}.png`} 
                        priority
                        />
                </div>
                <div className="base"></div>
            </div>
    );
}
 
export default Computer;