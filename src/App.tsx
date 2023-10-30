import {useState} from 'react'
import Rating from './components/Rating'
import ThankYou from './components/ThankYou'

const App = () => {
  const [score, setScore] = useState<number | null>(null);

  return (
    <div>
      {score === null ? 
        (<Rating score={score} setScore={setScore} />) : 
        (<ThankYou score={score} />)
        }
    </div>
  )
}

export default App