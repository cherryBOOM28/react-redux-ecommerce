import { BiMinus } from 'react-icons/bi'
import { PiPlus } from 'react-icons/pi'
import { TbTrash } from 'react-icons/tb'

const CartItem = ({ item }) => {
  return (
    <div className="flex itmes-center space-x-4 bg-gray-50 rounded-xl">
      <img src={item.image} className="w-16 h-16 object-cover rounded-lg" />
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-gray-900 truncate">{item.name}</h4>
        <p>Item price</p>
      </div>
      <div className="flex items-center space-x-2">
        <button className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 cursor-pointer">
          <BiMinus className="w-4 h-4" />
        </button>
        <span className="w-8 text-center font-medium">Qty</span>
        <button className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-color duration-200 cursor-pointer">
          <PiPlus className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <span className="font-bold text-gray">Total price</span>
        <button className="p-1 rounded-full text-red-500 hover:bg-red-50 transition-color duration-200 cursor-pointer">
          <TbTrash className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default CartItem
