import Link from "next/link"
import User from "../icons/User"
import Search from "../icons/Search"
import ShoppingCart from "../icons/ShoppingCart"

export default function Header() {
    return (
    <header className="header py-4">
        <header className='text-xl flex ml-4 mr-4 items-center italic font-bold'>
            <Link href={'/'}>
                AT Fitness
            </Link>
            <nav className='nav-links ml-12 flex items-center justify-between px-2 gap-8'>
                <div>
                    <Link href='Plans' className="hover:border-b-2 border-primary">
                        Plans
                    </Link>
                </div>
                <div>
                    <Link href='About' className="hover:border-b-2 border-primary">
                        About
                    </Link>
                </div>
                <div>
                    <Link href='Contact' className="hover:border-b-2 border-primary">
                        Contact
                    </Link>
                </div>
            </nav>
            <div className="flex grow justify-end items-center">
                <div className="">
                    <form className="header-form">
                        <div className="flex items-center bg-white rounded-full px-4 py-2 text-sm border-2 border-black">
                            <div className="mr-2">
                                <Search />
                            </div>
                            <input 
                                className="border-none bg-white focus:outline-none focus:ring-0"
                                type="text" 
                                placeholder="Search plans, articles" 
                            />
                        </div>
                    </form>
                </div>
                <Link href={'/account'} className='px-2 ml-2'>
                    <User />
                </Link>
                {/* <div className="px-2">
                    <Link href={'/cart'}>
                        <ShoppingCart />
                    </Link>
                </div> */}
            </div>
        </header>
    </header>
    )
}