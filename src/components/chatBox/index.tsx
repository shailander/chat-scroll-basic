import { useEffect, useMemo, useRef, useState } from 'react'
import { throttle } from 'lodash'
import 'twin.macro'

function ChatBox({ msgs }: { msgs: string[] }) {
  const chatListRef = useRef<null | HTMLDivElement>(null)
  const messagesEndRef = useRef<null | HTMLDivElement>(null)
  const isBottomRef = useRef(true)

  const [showCommentButton, setShowCommentButton] = useState(false)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'end',
    })
  }

  useEffect(() => {
    if (isBottomRef.current) {
      scrollToBottom()
    } else {
      console.log(isBottomRef, 'bottom ref')

      setShowCommentButton(true)
    }
  }, [msgs?.length])

  const handleContainerScroll = () => {
    console.log('scroll', isBottomRef.current, showCommentButton)

    if (!chatListRef.current) return
    const { scrollTop, offsetHeight, scrollHeight } = chatListRef.current
    const isBottom =
      Math.abs(scrollHeight - scrollTop - offsetHeight) < 70 ? true : false
    if (isBottomRef.current) setShowCommentButton(false)
    isBottomRef.current = isBottom
  }

  const throttleHandleScroll = useMemo(
    () => throttle(handleContainerScroll, 30),
    []
  )

  return (
    <div
      tw="w-full  overflow-hidden overflow-y-scroll h-full"
      ref={chatListRef}
      onScroll={throttleHandleScroll}
    >
      {msgs.map((item: string, index: number) => (
        <div
          key={index}
          tw="bg-red-300 mx-4 my-2 px-4 h-16 rounded-2xl flex items-center justify-start"
        >
          {item}
        </div>
      ))}
      <div ref={messagesEndRef} />
      {showCommentButton && (
        <button
          tw="absolute h-8 w-44 bg-blue-700 rounded-full top-96 left-1/2 -translate-x-1/2 transform text-center text-white"
          onClick={() => {
            scrollToBottom()
            setShowCommentButton(false)
          }}
        >
          New Comments
        </button>
      )}
    </div>
  )
}

export default ChatBox
