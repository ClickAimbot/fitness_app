import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <div>
            <div className='py-64 px-24'>
                <h1 className='text-5xl italic font-extrabold font-sans mb-4'>Welcome To <br/> AT Fitness</h1>
                <p className='mb-8 font-semibold text-xl font-weight-700'>Want to lose stubborn belly fat?</p>
                <div className='italic'>
                    <Link
                        href={'#plans'}
                        className='justify-center bg-primary uppercase text-[#f8fafc] rounded-md font-bold py-4 px-16 hover:bg-[#f8fafc] hover:text-primary transition duration-200 ease-in-out'
                    >
                    Join Now
                    </Link>
                    {/* <Link
                        href={'#about'}
                        className='justify-center uppercase gap-2 font-semibold mt-2'
                    >
                    Learn more
                    <ChevronDown />
                    </Link> */}
                </div>
            </div>
        </div>
    );
}