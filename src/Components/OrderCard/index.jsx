/* eslint-disable react/prop-types */
import { XMarkIcon } from '@heroicons/react/24/solid'


const OrderCard = props => {
    const { title, imageUrl, price, handleDelete, id } = props


    return(
        <div className="flex justify-between items-center gap-2 top-20 bottom-20">
            <div className='flex items-center gap-2 border'>
                <figure className=' w-20 h-20'> 
                    <img className=' w-full h-full rounded-lg object-cover' src={imageUrl} alt={title}/>
                </figure>
            </div>
            <p className='text-sm font-light text-center '>{title}</p>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>${price}</p>
                <XMarkIcon 
                onClick={() => handleDelete(id) }
                className='h-6 w-6 text-black cursor-pointer'/>
            </div>
        </div>
    )
}

export { OrderCard }