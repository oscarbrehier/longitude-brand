import * as comps from '../components/Components';

export default function Contact() {

    return (

        <div className='h-screen flex flex-col justify-between'>
            <comps.Navbar/>  
            <div className=' flex items-center justify-center'>
                <form action="" className='space-y-4'>
                    <div className='flex space-x-4'>
                        <div>
                            <p>Nom & Prénom</p>
                            <div className='h-12 w-80 bg-zinc-100 flex justify-center'>
                                <input className='h-12 w-[90%] bg-zinc-100' type="text" />
                            </div>
                        </div>
                        <div>
                            <p>Adresse mail</p>
                            <div className='h-12 w-80 bg-zinc-100 flex justify-center'>
                                <input className='h-12 w-[90%] bg-zinc-100' type="email" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Message</p>
                        {/* <input className='h-12 bg-zinc-100 w-[41rem]' type="text" /> */}
                        <div className='h-40 w-[41rem] bg-zinc-100 flex justify-center'>
                            <textarea className='bg-zinc-100 h-40 w-[95%] resize-none overflow-hidden pt-4' name="name" id=""></textarea>
                        </div>
                    </div>
                    <div>
                        <button type='submit' className='h-12 w-[41rem] bg-zinc-200'>Envoyer</button>
                    </div>
                </form>
            </div>
            <comps.Footer/>
        </div>

    )

}