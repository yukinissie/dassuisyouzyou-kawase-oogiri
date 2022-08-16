import { useLocation } from 'react-router-dom'
import { Sample } from './pages/Sample'
import { Sample2 } from './pages/Sample2'

// 参考にしたサイト：https://dev.to/aasthapandey/stop-url-from-changing-using-react-router-81n

type State = {
  state: {
    getby: string
  }
}

const switchTabs = (getby: string) => {
  switch (getby) {
    case 'sample2':
      return <Sample2 />
    default:
      return <Sample />
  }
}

function App() {
  const { state } = useLocation() as State
  if (state === null) {
    return <Sample />
  }
  return <>{switchTabs(state.getby)}</>
}

export default App
