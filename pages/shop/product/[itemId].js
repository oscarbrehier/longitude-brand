import { useRouter } from "next/router";
import * as comps from '../../../components/Components';
import client from "../../api/client";
import { useState } from "react";

export const getServerSideProps = async ({ params }) => {

    const res = await client.fetch(`*[_id in path("${params.itemId}")]`);

    if(res.length == 0) {

        return { notFound: true, }

    }

    const base = 'https://cdn.sanity.io/images/7mbpaot7/prod/';

    const img = res[0].image_transparent.asset._ref;
    res[0]['image_url'] = base + img.slice(6).replace('-png', '.png');

    return {
        props: {
            res
        }
    }

}

const ProductDetail = ({ res }) => {
    
    const prx = 12.3;

    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }

    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(prx);
    const [color, setColor] = useState([true, false, false])

    const handleClick = async (e, a) => {

        a == true 
        ? setCount(count + 1)
        : setCount(count -1 <= 0 ? count : count - 1);

        a == true 
        ? setPrice(round(price + prx, 1))
        : setPrice(round(price - prx <= 0 ? price : price - prx, 1));

    }

    const handleColor = (e, a) => {

        console.log(a)
        setColor(a);

    }

    return (

        <div className={`py-10`}>
            <comps.Navbar position={''} />
            <section className="h-auto w-full">
                <div className="w-full flex justify-center">
                    <img className="max-w-[60%]" src={res[0].image_url} alt="" /> {/* bg-opacity 24% */}
                </div>
                <div className="w-full flex items-center flex-col space-y-4">
                    <h1 className="font-monument text-5xl">{res[0].name}</h1>
                    <p className="w-1/4 text-center font-courrier">{res[0].description}</p>
                </div>
                <div className="w-full flex justify-center items-center mt-24 space-x-4">
                    <div className={`h-16 w-auto rounded-full border-black border-2`}>
                        <h1 className={`w-auto font-monument uppercase text-3xl h-[inherit] flex items-center justify-center px-5 select-none`}>
                            <span className="cursor-pointer" onClick={(e) => handleClick(e, false)}>-</span> 
                            &nbsp;{count}&nbsp; 
                            <span className="cursor-pointer" onClick={(e) => handleClick(e, true)}>+</span>
                        </h1>
                    </div>
                    <div className={`h-16 w-auto rounded-full border-black border-2 cursor-pointer ${color[0] == true ? 'text-black border-black' : 'text-zinc-400 border-zinc-400'}`} onClick={(e) => handleColor(e, [true, false, false])}>
                        <h1 className={`w-auto font-monument uppercase text-3xl h-[inherit] flex items-center justify-center px-5 select-none`}>
                            &nbsp;S&nbsp; 
                        </h1>
                    </div>
                    <div className={`h-16 w-auto rounded-full border-black border-2 cursor-pointer ${color[1] == true ? 'text-black border-black' : 'text-zinc-400 border-zinc-400'}`} onClick={(e) => handleColor(e, [false, true, false])}>
                        <h1 className={`w-auto font-monument uppercase text-3xl h-[inherit] flex items-center justify-center px-5 select-none`}>
                            &nbsp;M&nbsp; 
                        </h1>
                    </div>
                    <div className={`h-16 w-auto rounded-full border-2 cursor-pointer ${color[2] == true ? 'text-black border-black' : 'text-zinc-400 border-zinc-400'}`} onClick={(e) => handleColor(e, [false, false, true])}>
                        <h1 className={`w-auto font-monument uppercase text-3xl h-[inherit] flex items-center justify-center px-5 select-none`}>
                            &nbsp;L&nbsp; 
                        </h1>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center mt-4 mb-24 space-x-4">
                <div className={`h-16 w-auto rounded-full border-black border-2 select-none`}>
                        <h1 className={`w-auto font-monument uppercase text-3xl h-[inherit] flex items-center justify-center px-5`}>
                            { price } euros
                        </h1>
                    </div>
                    <div className={`h-16 w-auto rounded-full border-black bg-black border-2 cursor-pointer select-none`}>
                        <h1 className={`w-auto font-monument uppercase text-3xl h-[inherit] flex items-center justify-center px-5 text-white`}>
                            + panier +
                        </h1>
                    </div>
                </div>
            </section>
            <comps.Footer/>
        </div>

    );

};

export default ProductDetail;