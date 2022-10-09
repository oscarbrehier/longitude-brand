import Link from 'next/link';

export default function Navbar({position, color, top}) {

    if(!top) top = 'mt-10'

    return (

        <div className={`h-auto w-full z-20 font-courrier ` + position}>
            <div className={`sm:h-32 h-20  flex justify-center ` + top}>
                <img src='/logo.png' className='h-[inherit]' alt="logo" />    
			</div>
            <nav className="sm:mt-4 mt-5 w-auto flex justify-center">
                <ul className="flex flex-row space-x-4 uppercase cursor-pointer">
                    <li><Link href='/'>Acceuil</Link></li>
                    <li><Link href='/shop'>Boutique</Link></li>
                    <li><Link href='contact'>Contact</Link></li>
                    <li><Link href="/a-propos">A propos</Link></li>
                </ul>
            </nav>
        </div>

    );

};