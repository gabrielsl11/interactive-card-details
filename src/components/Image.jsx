import bgCardFront from '../images/bg-card-front.png'
import bgCardBack from '../images/bg-card-back.png'
import bgMainMobile from '../images/bg-main-mobile.png'

import { Circle } from 'lucide-react'

function Image() {
    return (
        <>
            <div className='mt-[-12.5%] lg:mt-0 flex items-center justify-center relative'>
                <img
                    className='w-full lg:h-full lg:min-w-80 sm:mt-[-20%]'
                    src={bgMainMobile}
                    alt="Mobile background"
                />

                <div>
                    <img
                        className='w-64 lg:min-w-72 absolute left-[100px] bottom-[35px] lg:left-[225px] lg:bottom-[360px]'
                        src={bgCardBack}
                        alt="Card back"
                    />
                    <img
                        className='w-64 lg:min-w-72 absolute left-[20px] bottom-[-50px] lg:left-[175px] lg:bottom-[540px]'
                        src={bgCardFront}
                        alt="Card front"
                    />
                    <Circle
                        className='text-slate-100 bg-slate-100 rounded-full absolute left-[40px] bottom-[45px] lg:left-[200px] lg:bottom-[650px]'
                    />
                    <Circle
                        size={15}
                        className='text-slate-100 absolute left-[70px] bottom-[50px] lg:left-[235px] lg:bottom-[655px]'
                    />
                    <span
                        className='text-lg lg:text-xl text-slate-100 absolute left-[40px] bottom-[-20px] lg:left-[200px] lg:bottom-[580px] lg:min-w-72'
                    >
                        0000 0000 0000 0000
                    </span>
                    <span
                        className='text-sm font-extralight text-slate-100 absolute left-[40px] bottom-[-40px] lg:left-[200px] lg:bottom-[555px] lg:min-w-72'
                    >
                        Jane Appleseed
                    </span>
                    <span
                        className='text-sm font-extralight text-slate-100 absolute left-[215px] bottom-[-40px] lg:left-[400px] lg:bottom-[555px]'
                    >
                        00/00
                    </span>
                    <span
                        className='text-sm font-medium text-slate-100 absolute left-[300px] bottom-[97.5px] lg:left-[450px] lg:bottom-[430px]'
                    >
                        000
                    </span>
                </div>
            </div>
        </>
    )
}

export default Image