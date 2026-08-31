
function App() {


  return (
    <>
      <CounterPage/>
    </>
  )
}

export default App

import { useEffect, useState } from "react"

export const Counter = () => {
  const { count, inc, dec, reset, changeStep } = useCounter(0, 1, 3)

  return <div>
    <h2>{count}</h2>
    <p>⏰ Автосброс через 3 сек</p>
    <button onClick={inc}>Увеличить</button>
    <button onClick={dec}>Уменьшить</button>
    <button onClick={reset}>Сбросить</button>
    <button onClick={() => changeStep(5)}>Установить шаг 5</button>
  </div>
}

export const CounterWithoutAutoReset = () => {
  const { count, inc, dec, reset, changeStep } = useCounter(5, 5, 0)

  return <div>
    <h2>{count}</h2>
    <p>🔒 Без автосброса</p>
    <button onClick={inc}>Увеличить</button>
    <button onClick={dec}>Уменьшить</button>
    <button onClick={reset}>Сбросить</button>
    <button onClick={() => changeStep(5)}>Установить шаг 5</button>
  </div>
}

const useCounter = (startValue = 0, startStep = 1, autoResetTime = 0) => {
  const [count, setCount] = useState(startValue)
  const [step, setStep] = useState(startStep)

  useEffect(() => {
    if (autoResetTime === 0 || autoResetTime === null) return
    let intervalId = null
    if (autoResetTime > 0) {
      intervalId = setInterval(() => {
        setCount(0)
      }, autoResetTime * 1000)
    }

    return () => {
      if(intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [])

  const inc = () => {
    setCount(count + step)
  }

  const dec = () => {
    setCount(count - step)
  }

  const reset = () => {
    setCount(startValue)
  }

  const changeStep = (newStep: number) => {
    alert('Шаг изменен на 5')
    setStep(newStep)
  }

  return { count, inc, dec, reset, changeStep }
}


export const CounterPage = () => {
  return (
      <div>
        <Counter />
        <CounterWithoutAutoReset />
      </div>
  )
}