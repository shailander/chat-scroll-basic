export const throttling = (callback: (args: any) => void, delay: number) => {
  let timerId: NodeJS.Timeout | undefined
  return (args: any) => {
    if (timerId) return
    callback(args)
    timerId = setTimeout(() => {
      timerId = undefined
    }, delay)
  }
}
