import Link from 'next/link'
import Pad from './comp/Pad'
import Computer from './comp/Computer'
import Phone from './comp/Phone'
import Info from './comp/Info'

const Work = ({fields}) => {
    return (
      <div className="w-full h-screen grid grid-cols-3">
        <section className="col-span-1 flex flex-col justify-center align-center info">
          <Info {...fields}/>
        </section>
        <section className="col-span-2 w-full h-screen">
          <div className="w-full h-full relative">
            <div className="absolute pad">
              <Pad {...fields}/>
            </div>
            <div className="absolute computer">
              <Computer {...fields}/>
            </div>
            <div className="absolute phone">
              <Phone {...fields}/>
            </div>
          </div>

        </section>

      </div>
    );
}
 
export default Work;