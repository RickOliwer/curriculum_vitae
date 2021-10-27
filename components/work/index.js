import Link from 'next/link'
import Pad from './comp/Pad'
import Computer from './comp/Computer'
import Phone from './comp/Phone'
import Info from './comp/Info'

const Work = ({fields}) => {
    return (
      <div className="w-full h-screen grid grid-cols-3">
        <section className="col-span-1">
          <Info {...fields}/>
        </section>
        <section className="col-span-2 w-full h-screen">
          <div className="bg-blue-900 w-full h-full relative">
            <div className="absolute pad">
              <Pad {...fields}/>
            </div>
            <div className="absolute computer">
              <Computer {...fields}/>
            </div>
            <div className="w-28 h-28 bg-red-900 absolute phone">
              <Phone {...fields}/>
            </div>
          </div>

        </section>

      </div>
    );
}
 
export default Work;