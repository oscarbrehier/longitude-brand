export default function ListItem({picture}) {

    return (

        <section className='w-full md:h-[72vh] h-auto flex md:flex-row flex-col justify-center'>
            <div className='h-[inherit] w-auto flex justify-center'>
                <img className='sm:h-[inherit] max-h-[60vh]' src={picture} alt="" />
            </div>
            <div className='h-[inherit] md:w-[30%] w-full flex items-center md:justify-start justify-center'>
                <div className='flex flex-col items-center'>
                    <h1 className='md:w-[80%] w-full font-monument uppercase text-2xl'>Lorem Ipsum</h1>
                    <p className='w-[80%] md:block hidden'>
                        Ipsum id labore laborum incididunt.
                        Aliqua veniam culpa anim velit est cillum cupidatat quis sunt veniam ad elit eu.
                    </p>
                    <div className='md:w-[80%] w-full mt-4 md:block flex justify-center'>
                        <a href="">
                            <div className='h-10 w-20 bg-black flex items-center justify-center rounded-lg'>
                                <p className='text-white font-monument font-extrabold'>+</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );

};