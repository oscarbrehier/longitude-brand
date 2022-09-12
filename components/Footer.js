import Link from 'next/link';

export default function Footer() {

    return (

        <section className="h-auto w-full">
            <div className="w-full h-24 flex justify-center">
                <img className="h-[inherit]" src="/footer001.png" alt=""/>
            </div>
            <div className="h-[15vh] w-full flex justify-center space-x-10">
                <div className="h-[inherit] w-auto flex justify-center flex-col">
                    <p className="font-extrabold uppercase">Rejoignez notre liste</p>
                    <form className="w-[20vw] h-12 flex">
                        <div className="border border-black w-[12vw] h-[inherit] flex items-center justify-center">
                            <input type="text" placeholder="Email"/>
                        </div>          
                        <div className="bg-black w-[8vw] h-[inherit] flex items-center justify-center">
                            <button type="submit" className="text-white">Soumettre</button>    
                        </div>                       
                    </form>
                </div>
                <div className="h-[inherit] w-auto flex justify-center flex-col">
                    <p className="font-bold uppercase">Réseaux</p>
                    <ul>
                        <a href='https://instagram.com/thelongitudebrand' className='cursor-pointer hover:underline'>
                            <li>Instagram</li>
                        </a>
                        <a href="" className='cursor-pointer hover:underline'>
                            <li>Twitter</li>
                        </a>
                    </ul>
                </div>
            </div>
        </section>

    );

};