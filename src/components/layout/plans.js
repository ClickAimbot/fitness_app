import Link from 'next/link';
import Image from 'next/image';

export default function Plans() {
    return (
        <div className="plans flex flex-row items-center justify-evenly text-center align-content space-evenly bg-[url('https://www.bodybuilding.com/images/2023/homepage/hp-background-1.jpg')]">
            <div id="icon1" className='flex'>
                <a href="https://www.trainerize.me/profile/atfitness9/?planGUID=de7a344153e64661987eef20dae508ad&mode=checkout" 
                    target="_blank" rel="noopener noreferrer">
                    <div className='py-4 px-16 hover:scale-105 hover:-rotate-12'>
                        <Image 
                            src={'/bodyfit-dude.png'} 
                            width={92}
                            height={92}
                            alt={'fitplan'}
                        />
                    </div>
                    <div className='mb-10 '>
                        <h3 className='text-white text-2xl uppercase italic'>
                            Online Training
                        </h3>
                        <p className='font-sans text-gray mt-2'>Workout & Diet Plan <br/> Weekly Check In Calls</p>
                    </div>
                </a>
            </div>
            <div className='icon-border'></div>
            <div id="icon2" className='flex'>
                <a href="https://www.trainerize.me/profile/atfitness9/?planGUID=21b57102b53f4f12b495574add645ddf&planSessionID=24749&mode=checkout" target="_blank" rel="noopener noreferrer">
                    <div className='py-4 px-16 hover:scale-105 hover:-rotate-12'>
                        <Image 
                            src={'/bodyfit-dude.png'} 
                            width={92}
                            height={92}
                            alt={'fitplan'}
                        />
                    </div>
                    <div className='mb-10'>
                        <h3 className='text-white text-2xl uppercase'>
                            In Person Training
                        </h3>
                        <p className='font-sans text-gray mt-2'>Intense Hour Long Session <br/> Daily Check Ins</p>
                    </div>
                </a>
            </div>
            <div className='icon-border'></div>
            <div id="icon3" className='flex'>
                <a href="https://atfitness9.trainerize.com/app/logon.aspx" target="_blank" rel="noopener noreferrer">
                    <div className='py-4 px-16 hover:scale-105 hover:-rotate-12'>
                        <Image 
                            src={'/bodyfit-dude.png'} 
                            width={92}
                            height={92}
                            alt={'fitplan'}
                        />
                    </div>
                    <div className='mb-10'>
                        <h3 className='text-white text-2xl uppercase'>
                            Exclusive Training
                        </h3>
                        <p className='font-sans text-gray mt-2'>Train With Me <br/> Only One Session Per Person</p>
                    </div>
                </a>
            </div>
        </div>
    )
}