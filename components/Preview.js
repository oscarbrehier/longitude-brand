import * as comps from '../components/Components'

export default function Preview() {

    return (

        <section className="absolute w-full h-auto flex items-center flex-col">

            <div className='h-screen w-full flex flex-col justify-center items-center space-y-16'>
                <img className='h-[80vh]' src="/preview.png" alt=""/>
                <div className='w-full flex justify-center space-x-4'>
                    <a href="/shop">
                        <div className='
                            h-10 w-60 rounded-lg 
                            hover:bg-[#f22a9b9d] hover:text-white text-black bg-[#00000009] 
                            flex items-center justify-center 
                            transition duration-700'>
                            <p className='font-monument uppercase'>About</p>
                        </div>
                    </a>
                    <a href="/shop"><div className='h-10 w-60 rounded-lg bg-[#f22a9b] flex items-center justify-center'>
						<p className='font-monument text-white uppercase'>Boutique</p>
                    </div></a>
                    <a href="/shop">
                        <div className='
                            h-10 w-60 rounded-lg 
                            hover:bg-[#f22a9b9d] hover:text-white text-black bg-[#00000009] 
                            flex items-center justify-center 
                            transition duration-700'>
                            <p className='font-monument uppercase'>Contact</p>
                        </div>
                    </a>
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