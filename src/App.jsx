import Image from './components/Image'
import Input from './components/Input'
import Button from './components/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [MM, setMM] = useState('')
  const [YY, setYY] = useState('')
  const [CVC, setCVC] = useState('')

  const [validateName, setValidateName] = useState(true)
  const [validateNumber, setValidateNumber] = useState(true)
  const [validateMM, setValidateMM] = useState(true)
  const [validateYY, setValidateYY] = useState(true)
  const [validateCVC, setValidateCVC] = useState(true)

  const navigate = useNavigate()

  function onConfirmClick(e) {
    e.preventDefault()

    const cleanNumber = number.replace(/[^0-9]/g, '')

    const isNameValid = name.length > 0
    const isNumberValid = cleanNumber.length == 16
    const isMMValid = MM.length > 0
    const isYYValid = YY.length > 0
    const isCVCValid = CVC.length >= 3

    setValidateName(isNameValid)
    setValidateNumber(isNumberValid)
    setValidateMM(isMMValid)
    setValidateYY(isYYValid)
    setValidateCVC(isCVCValid)

    if (isNameValid && isNumberValid && isMMValid && isYYValid && isCVCValid) {
      navigate('/complete', { state: { name, number, MM, YY, CVC } })
    }
  }

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

        <form onSubmit={onConfirmClick} className='flex flex-col gap-6 p-6 lg:w-[465px] lg:self-center lg:ml-56 relative'>
          <Input
            className={`border w-full rounded-md px-4 py-2 focus-visible:outline focus-visible:outline-purple-500 ${validateName ? '' : 'border-red-500 focus-visible:outline-0'}`}
            description='CARDHOLDER NAME'
            htmlFor='name'
            id='name'
            placeholder='e.g. Jane Appleseed'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            onInput={(e) => {
              let value = e.target.value
              value = value.replace(/[^a-zA-Z\s]/g, '')
              e.target.value = value
            }}
          />

          {validateName ? null : <p className='text-sm text-red-500 absolute top-[95px]'>Type a valid name</p>}

          <Input
            className={`border w-full rounded-md px-4 py-2 focus-visible:outline focus-visible:outline-purple-500 ${validateNumber ? '' : 'border-red-500 focus-visible:outline-0'}`}
            description='CARD NUMBER'
            htmlFor='number'
            id='number'
            placeholder='e.g. 1234 5678 9123 0000'
            type='text'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onInput={(e) => {
              let value = e.target.value
              value = value.replace(/[^0-9]/g, '')
              if (value.length > 16) {
                value = value.slice(0, 16)
              }
              const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ')
              e.target.value = formattedValue
            }}
          />

          {validateNumber ? null : <p className='text-sm text-red-500 absolute top-[190px]'>Type a valid card number</p>}

          <div className='flex gap-4'>
            <div className='flex flex-col gap-2 w-1/2'>
              <span className="text-sm font-medium">EXP. DATE</span>

              <div className='flex gap-3'>
                <input
                  className={`border w-[50%] text-sm rounded-md px-2 py-2 focus-visible:outline focus-visible:outline-purple-500 ${validateMM ? '' : 'border-red-500 focus-visible:outline-0'}`}
                  type="number"
                  placeholder='MM'
                  value={MM}
                  onChange={(e) => setMM(e.target.value)}
                  onInput={(e) => {
                    let value = e.target.value
                    value = value.replace(/[^0-9]/g, '')
                    const numericValue = parseInt(value, 10)
                    if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 12) {
                      e.target.value = numericValue < 10 ? `0${numericValue}` : numericValue
                    } else {
                      e.target.value = ''
                    }
                  }}
                />

                <input
                  className={`border w-[50%] text-sm rounded-md px-2 py-2 focus-visible:outline focus-visible:outline-purple-500 ${validateYY ? '' : 'border-red-500 focus-visible:outline-0'}`}
                  type="number"
                  placeholder='YY'
                  value={YY}
                  onChange={(e) => setYY(e.target.value)}
                  onInput={(e) => {
                    let value = e.target.value
                    value = value.replace(/[^0-9]/g, '')
                    const numericValue = parseInt(value, 10)
                    if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 99) {
                      e.target.value = numericValue < 10 ? `0${numericValue}` : numericValue
                    } else {
                      e.target.value = ''
                    }
                  }}
                />
              </div>

              {validateMM && validateYY ? null : <p className='text-sm text-red-500 absolute top-[280px]'>Type a valid date</p>}
            </div>
            <div className='w-full'>
              <Input
                className={`border w-full rounded-md px-4 py-2 focus-visible:outline focus-visible:outline-purple-500 ${validateCVC ? '' : 'border-red-500 focus-visible:outline-0'}`}
                description='CVC'
                htmlFor='cvc'
                id='cvc'
                placeholder='e.g. 123'
                type='number'
                value={CVC}
                onChange={(e) => setCVC(e.target.value)}
                onInput={(e) => {
                  let value = e.target.value
                  value = value.replace(/[^0-9]/g, '')
                  if (value.length > 3 || isNaN(value)) {
                    e.target.value = ''
                  } else {
                    e.target.value = value
                  }
                }}
              />

              {validateCVC ? null : <p className='text-sm text-red-500 absolute top-[280px]'>Type a valid code</p>}
            </div>
          </div>

          <Button content='Confirm' />
        </form>
      </main>
    </>
  )
}

export default App
