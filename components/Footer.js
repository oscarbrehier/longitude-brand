import Link from 'next/link';

export default function Footer() {

    return (

        <footer className="h-auto w-full my-8 flex flex-col items-center">

            <div className="w-full h-24 flex justify-center">
                <img className="h-[inherit]" src="/footer001.png" alt="" />
            </div>

            <div className="h-[inherit] w-auto flex justify-center mt-8 space-x-4">
                <p className="font-bold uppercase">Réseaux</p>
                <ul className='flex'>
                    <a href='https://instagram.com/thelongitudebrand' target="blank" className='cursor-pointer hover:underline'>
                        <li>Instagram</li>
                    </a>
                    <a href="" className='cursor-pointer hover:underline ml-4'>
                        <li>Twitter</li>
                    </a>
                </ul>
            </div>

        </footer>

    );

};