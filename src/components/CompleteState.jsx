import Image from './Image'
import Button from './Button'
import { Check } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

function CompleteState() {
    const navigate = useNavigate()
    const location = useLocation()
    const { name, number, MM, YY, CVC } = location.state
    return (
        <>
            <main className='min-h-screen flex flex-col lg:flex-row gap-24'>
                <Image
                    name={name}
                    number={number}
                    MM={MM}
                    YY={YY}
                    CVC={CVC}
                />

                <div className='flex flex-col gap-6 p-6 lg:w-[465px] lg:self-center lg:ml-56'>
                    <div className='self-center text-white bg-gradient-to-b from-purple-600 to-purple-950 rounded-full p-4'>
                        <Check size={48} />
                    </div>

                    <h1 className='text-3xl text-center'>THANK YOU!</h1>

                    <span className='text-center text-slate-500 font-medium'>We have added your card details</span>

                    <Button onClick={() => navigate('/')} content='Continue' />
                </div>
            </main>
        </>
    )
}

export default CompleteState