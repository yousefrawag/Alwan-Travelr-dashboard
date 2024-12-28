import React from 'react'

const SendMessage = () => {
  return (
    <form className='w-full '>
        <textarea placeholder='اكتب رسالتك' className='text-black w-full max-h-[250px] rounded-[10px] p-5 border outline-none focus:none mt-4 border-main'>

        </textarea>
    </form>
  )
}

export default SendMessage