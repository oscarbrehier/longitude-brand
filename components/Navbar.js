export default function Navbar() {

    return (

        <div className="h-auto w-full absolute z-20">
            <div className='mt-10 h-32 flex justify-center'>
                <img src="/logo.png" className='h-[inherit]' alt="logo" />    
			</div>
            <nav className="mt-10 w-auto flex justify-center">
                <ul className="flex flex-row space-x-4 uppercase cursor-pointer">
                    <li>Acceuil</li>
                    <li>Boutique</li>
                    <li>Contact</li>
                    <li>A propos</li>
                </ul>
            </nav>
        </div>

    );

};