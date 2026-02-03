import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  const rating = product.rating || 0
  const rederStar = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`w-4 h-4 ${index < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ))
  }
  return (
    <div className="group bg-white rounded-2xl shadow:md hover:shadow-2xl transition-all duration-300 overflow-hidden border order-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-meduim">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gery-600 text-sm mb-4 line-clamp-1">
          {product.description}
        </p>

        <div className="flex items-center mb-4">
          <div className="flex items-center">{rederStar(product.rating)}</div>
          <span className="">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price.toFixed()}
          </span>
          <button
            onClick={handleAddToCart}
            className="group/btn bg-gray-200 text-gray-900 px-4 py-2 rounded-lg hover:shadow-lg transform hover-scale-105 transition-all duration-200 flex items-center space-x-2 cursor-pointer"
          >
            <span className="font-medium">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
