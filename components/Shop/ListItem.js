import Link from "next/link";

export default function ListItem({name, description, picture, link}) {

    return (

        <section className={`w-full h-screen md:flex-col flex-col justify-center flex`}>
            <div className='h-auto w-auto flex md:items-center justify-center'>
                <img className='max-h-[60vh]' src={picture} alt="" />
            </div>
            <div className='h-auto w-full flex flex-col items-center justify-center'>
                <div className="uppercase font-monument text-xl py-4">
                    <p>{name}</p>
                </div>
                <Link href={`/shop/product/${link}`}>
                    <div className="h-16 w-auto rounded-full border-black border-2 cursor-pointer">
                        <h1 className='w-auto font-monument uppercase text-3xl h-[inherit] flex items-center justify-center px-5'>→ plus ←</h1>
                    </div>
                </Link>
            </div>
        </section>

    );

};