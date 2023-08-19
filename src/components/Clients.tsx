import data from '../data'
import { Slider } from './Slider'

const Clients = () => {
  return (
    <div className='bg-primary-100 px-20 py-40' id='clients'>
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl text-center">
            Clientes
          </h2>
        <Slider slides={data.ui.clients} />
    </div>
  )
}

export default Clients;