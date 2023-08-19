import data from '../data'
import { Slider } from './Slider'

const Brands = () => {
  return (
    <div className='px-20 py-40' id='brands'>
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl text-center">
            Marcas
          </h2>
        <Slider slides={data.ui.brands} />
    </div>
  )
}

export default Brands;