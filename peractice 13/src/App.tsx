import './App.css'
import { Navbar } from './componencts/Navabar.tsx'
import { Contact } from './componencts/Contact.tsx'
import { Body} from './componencts/Body.tsx'
function App() {


  return (
    <>
      <div className='max-w-[1440px] mx-[auto] my-[0] p-8 text-center'>
      <Navbar/>
      <Contact/>
      <Body/>
      </div>
    </>
  )
}

export default App
