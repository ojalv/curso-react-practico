import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { totalPrice } from '../../Utils'
import './syles.css'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.23',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder({...context.order, orderToAdd})
    context.setCartProducts([])
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
      <div className=' px-1 py-1 w-auto '>
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
      <div className='px-6 py-6'>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total</span>
          <span className=' font-medium text-xl'>${totalPrice(context.cartProducts)}</span>
        </p>
      </div>
      <button
      onClick={() => handleCheckout()}
      >Checkout</button>
    </aside>
  )
}
// {
//     items?.map((item) => (
//       <OrderCard key={item.id} data={item}/>
//     ))
//   }

export {CheckoutSideMenu}