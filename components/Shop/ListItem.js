import Link from "next/link";

export default function ListItem({name, description, picture, link}) {

    return (

        <section className={`w-full h-screen md:flex-row flex-col justify-center flex`}>
            <div className='md:h-[inherit] h-auto w-auto flex md:items-center justify-center'>
                <img className='sm:h-[inherit] max-h-[70vh]' src={picture} alt="" />
            </div>
            <div className='md:h-[inherit] h-auto md:w-[30%] w-full flex items-center md:justify-start justify-center'>
                <div className='flex flex-col items-center'>
                    <h1 className='md:w-[80%] w-full font-monument uppercase text-2xl'>{name}</h1>
                    <p className='w-[80%] md:block hidden'>
                        {description}
                    </p>
                    <div className='md:w-[80%] w-full mt-4 md:block flex justify-center cursor-pointer'>
                        <Link href={`/shop/product/${link}`}>
                            <div className='h-10 w-20 bg-black flex items-center justify-center rounded-lg'>
                                <p className='text-white font-monument font-extrabold'>+</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );

};