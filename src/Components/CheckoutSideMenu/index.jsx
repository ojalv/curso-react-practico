import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import './syles.css'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} overflow-y-scroll checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white z-10`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div>
          <XMarkIcon
            className='h-6 w-6 text-black cursor-pointer'
            onClick={() => context.closeCheckoutSideMenu()}/>
        </div>
      </div>
      <div className=' px-1 py-1 w-full h-1'>
      {
          context.cartProducts.map((product) => (
            <OrderCard 
            key={product.id} 
            id={product.id} 
            title= {product.title} 
            imageUrl={product.images[0]}  
            price={product.price}
            handleDelete={handleDelete}
            
            />
          ))
        }
      </div>
    </aside>
  )
}
// {
//     items?.map((item) => (
//       <OrderCard key={item.id} data={item}/>
//     ))
//   }

export {CheckoutSideMenu}