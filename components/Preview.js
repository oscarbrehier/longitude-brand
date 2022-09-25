import Link from 'next/link';
import client from '../pages/api/client';

export default function Preview({ img }) {

    const image = img[0].image.asset._ref;
    const base = 'https://cdn.sanity.io/images/7mbpaot7/prod/';
    img['image_url'] = base + image.slice(6).replace('-png', '.png');

    return (

        <section className="absolute w-full h-auto flex items-center flex-col">

            <div className='h-screen w-full flex flex-col justify-center items-center space-y-16'>

                <img className='h-[80vh]' src={img.image_url} alt=""/>

                <div className='w-full flex justify-center space-x-4'>
                    <Link href="/shop">
                        <div className={`
                            h-10 w-60 rounded-lg 
                            hover:bg-[#${img[0].secondary_color}] hover:text-white text-black bg-[#00000009] 
                            flex items-center justify-center 
                            transition duration-700 cursor-pointer`}>
                            <p className='font-monument uppercase'>About</p>
                        </div>
                    </Link>
                    <Link href="/shop"><div className={`h-10 w-60 rounded-lg bg-[#${img[0].primary_color}] flex items-center justify-center  cursor-pointer`}>
						<p className='font-monument text-white uppercase'>Boutique</p>
                    </div></Link>
                    <Link href="/shop">
                        <div className={`
                            h-10 w-60 rounded-lg 
                            hover:bg-[#${img[0].secondary_color}] hover:text-white text-black bg-[#00000009] 
                            flex items-center justify-center 
                            transition duration-700 cursor-pointer`}>
                            <p className='font-monument uppercase'>Contact</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>

    );

};

{/* <div className="lg:h-screen h-auto flex flex-col justify-center lg:mt-0 lg:mb-0 sm:mt-52 mb-32 mt-32">
                <div className="flex lg:flex-row flex-col justify-center mt-16">
                    <div className="h-[inherit]">
                        <img className="sm:h-[56vh] max-h-[60vh]" src="/t001.jpg" alt="tshirt" />
                        <p className="flex justify-center mt-2 cursor-pointer">Lorem Ipsum</p>
                    </div>
                    <div className="h-[inherit]">
                        <img className="sm:h-[56vh] max-h-[60vh]" src="/t002.jpg" alt="tshirt" />
                        <p className="flex justify-center mt-2">Lorem Ipsum</p>
                    </div>
                    <div className="h-[inherit]">
                        <img className="sm:h-[56vh] max-h-[60vh]" src="/t003.jpg" alt="tshirt" />
                        <p className="flex justify-center mt-2">Lorem Ipsum</p>
                    </div>
                </div>
            </div> */}