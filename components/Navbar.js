import Link from 'next/link';

export default function Navbar({position, color}) {

    return (

        <div className={`h-auto w-full z-20 ` + position}>
            <div className='mt-10 sm:h-32 h-20  flex justify-center'>
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