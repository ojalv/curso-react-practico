import { NavLink } from 'react-router-dom'
const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className='flex justify-between items-center fixed w-full z-10 py-5 px-8 text-sm font-light top-0'>
            <ul className='flex items-center gap-3'>
                <li className=' font-semibold text-lg'>
                    <NavLink
                        to='/'
                        className={({ isActive, isPending }) =>
                        isPending ? undefined : isActive ? undefined : undefined
                   }
                          >
                        Shopi
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/'
                        className={({ isActive, isPending }) =>
                        isPending ? undefined : isActive ? activeStyle : undefined
                   }
                    >
                        All
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/clothes'
                        className={({ isActive, isPending }) =>
                        isPending ? undefined : isActive ? activeStyle : undefined
                    }
                    >
                        Clothes
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/electronics'
                        className={({ isActive, isPending }) =>
                        isPending ? undefined : isActive ? activeStyle : undefined
                   }
                   >
                        Electronics
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/fornitures'
                        className={({ isActive, isPending }) =>
                        isPending ? undefined : isActive ? activeStyle : undefined
                   }
                   >
                        Fornitures
                    </NavLink>
                </li>
                
                <li>
                    <NavLink 
                        to='/toys'
                        className={({ isActive, isPending }) =>
                        isPending ? undefined : isActive ? activeStyle : undefined
                   }
                   >
                        Toys
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/others'
                        className={({ isActive, isPending }) =>
                        isPending ? undefined : isActive ? activeStyle : undefined
                   }
                   >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className=' text-black/60'>
                        user@mail.com 
                </li>

                <li>
                    <NavLink 
                        to='/my-orders'
                        className={({ isActive, isPending }) =>
                        isPending ? undefined : isActive ? activeStyle : undefined
                   }
>
                        My Orders
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/my-account'
                        className={({ isActive, isPending }) =>
                        isPending ? undefined : isActive ? activeStyle : undefined
                   }
>
                        My Account
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/sign-in'
                        className={({ isActive, isPending }) =>
                        isPending ? undefined : isActive ? activeStyle : undefined
                   }
                   >
                        Sign In
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to='/my-order'
                        className={({ isActive, isPending }) =>
                        isPending ? undefined : isActive ? undefined : undefined
                   }
                   >
                        🛒 0
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export { Navbar }