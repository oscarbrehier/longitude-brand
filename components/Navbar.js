import Link from 'next/link';

export default function Navbar({position}) {

    return (

        <div className={`h-auto w-full z-20 ` + position}>
            <div className='mt-10 h-32 flex justify-center'>
                <img src="/logo.png" className='h-[inherit]' alt="logo" />    
			</div>
            <nav className="mt-10 w-auto flex justify-center">
                <ul className="flex flex-row space-x-4 uppercase cursor-pointer">
                    <li><Link href='/'>Acceuil</Link></li>
                    <li><Link href='/shop'>Boutique</Link></li>
                    <li>Contact</li>
                    <li>A propos</li>
                </ul>
            </nav>
        </div>

    );

};