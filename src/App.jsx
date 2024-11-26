import Image from './components/Image'
import Input from './components/Input'
import Button from './components/Button'

function App() {

  return (
    <>
      <main className='min-h-screen flex flex-col lg:flex-row gap-24'>
        <Image />

        <form className='flex flex-col gap-6 p-6 lg:w-[465px] lg:self-center lg:ml-56'>
          <Input
            description='CARDHOLDER NAME'
            htmlFor='name'
            id='name'
            placeholder='e.g. Jane Appleseed'
          />

          <Input
            description='CARD NUMBER'
            htmlFor='number'
            id='number'
            placeholder='e.g. 1234 5678 9123 0000'
          />

          <div className='flex gap-4'>
            <div className='flex flex-col gap-2 w-1/2'>
              <span className="text-sm font-medium">EXP. DATE</span>
              <div className='flex gap-3'>
                <input className="border w-[50%] text-sm rounded-md px-2 py-2 focus-visible:outline focus-visible:outline-purple-500" type="number" placeholder='MM' />
                <input className="border w-[50%] text-sm rounded-md px-2 py-2 focus-visible:outline focus-visible:outline-purple-500" type="number" placeholder='YY' />
              </div>
            </div>
            <div className='w-full'>
              <Input
                description='CVC'
                htmlFor='cvc'
                id='cvc'
                placeholder='e.g. 123'
              />
            </div>
          </div>

          <Button onClick={(event) => event.preventDefault()} />
        </form>
      </main>
    </>
  )
}

export default App
