import './input.css'

import Form from './components/Form/Form'
import ProductList from './components/Product-List/ProductList'

function App() {
  
  return (
    <div className='flex flex-row  border-2'>
      <div className='border-2 w-1/2 '>
        < Form/>
      </div>
      <div className='border-2 w-1/2 '>
        <ProductList/>
      </div>
    </div>
  )
}

export default App
