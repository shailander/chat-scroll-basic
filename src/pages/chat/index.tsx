import { useState } from 'react'
import 'twin.macro'
import ChatBox from '../../components/chatBox'
import ChatInput from '../../components/chatInput'

function Index() {
  const [msgs, setMsgs] = useState<string[]>([
    'Hello',
    'World',
    'Java',
    'Python',
    'Hello',
    'World',
    'Java',
    'Python',
  ])
  return (
    <div tw="h-screen w-screen flex justify-center items-center">
      <div tw="h-3/4 w-96 bg-gray-300">
        <div tw="h-5/6  border-4 border-blue-300 relative">
          <ChatBox msgs={msgs} />
        </div>
        <div tw="h-1/6">
          <ChatInput setMsgs={(value) => setMsgs((prev) => [...prev, value])} />
        </div>
      </div>
    </div>
  )
}

export default Index
