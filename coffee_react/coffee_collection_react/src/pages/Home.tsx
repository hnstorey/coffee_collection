import Background from '../assets/images/coffee_beans.jpg'
import CoffeeCups from '../assets/images/coffee_cups.jpg'

function Home() {
  return (
    <>
      <div style={{ backgroundImage: `url(${ Background })`}} className='home'>
      </div>
      <div className='imagediv'>
        <img src={CoffeeCups} alt='Circle of white coffee cups with liquid increasing in darkness' className='Centerimage'></img>
      </div>
    </>
  )
}

export default Home
