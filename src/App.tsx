import { useLocation } from 'react-router-dom'
import { Main } from './pages/Main'

// 参考にしたサイト：https://dev.to/aasthapandey/stop-url-from-changing-using-react-router-81n

type State = {
  state: {
    getby: string
  }
}

const switchTabs = (getby: string) => {
  switch (getby) {
    default:
      return <Main />
  }
}

function App() {
  const { state } = useLocation() as State
  if (state === null) {
    return <Main />
  }
  return <>{switchTabs(state.getby)}</>
}

export default App
