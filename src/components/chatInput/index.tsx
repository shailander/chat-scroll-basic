import { useState } from 'react'
import 'twin.macro'

function ChatInput({ setMsgs }: { setMsgs: (value: string) => void }) {
  const [inputMsg, setInput] = useState('')

  const handleSend = () => {
    if (inputMsg === '') {
      return
    }
    setMsgs(inputMsg)
    setInput('')
  }

  const handleEnter = (e: any) => {
    if (e.key === 'Enter') {
      setMsgs(inputMsg)
      setInput('')
    }
  }

  return (
    <div
      tw="h-full w-full flex justify-evenly items-center"
      style={{ borderTop: '2px solid black' }}
    >
      <input
        tw="bg-white w-9/12  px-4 h-12 rounded-2xl"
        value={inputMsg}
        onChange={(e: any) => setInput(e.target.value)}
        onKeyDown={handleEnter}
      />
      <button
        tw="w-12 h-12 bg-blue-700 rounded-full text-white"
        onClick={handleSend}
      >
        {'>>'}
      </button>
    </div>
  )
}

export default ChatInput
