export default function ListItem({picture}) {

    return (

        <section className='w-full h-[72vh] flex justify-center'>
            <div className='h-[inherit] w-auto'>
                <img className='h-[inherit]' src={picture} alt="" />
            </div>
            <div className='h-[inherit] w-[30%] flex items-center'>
                <div className='flex flex-col items-center'>
                    <h1 className='w-[80%] font-monument uppercase text-2xl'>Lorem Ipsum</h1>
                    <p className='w-[80%]'>
                        Ipsum id labore laborum incididunt.
                        Aliqua veniam culpa anim velit est cillum cupidatat quis sunt veniam ad elit eu.
                    </p>
                    <div className='w-[80%] mt-4'>
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