import { BiShoppingBag, BiX } from 'react-icons/bi'

const CartSidebar = () => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 blackdrop-blur-sm z-50 transition-all duration-300`}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
            <BiShoppingBag className="w-6 h-6" />
            <span>Shopping cart</span>
          </h2>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
            <BiX className="w-6 h-6" />
          </button>
        </div>

        
      </div>
    </>
  )
}

export default CartSidebar
