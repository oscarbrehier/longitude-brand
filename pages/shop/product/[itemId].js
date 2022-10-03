import { useRouter } from "next/router";
import * as comps from '../../../components/Components';
import client from "../../api/client";

export const getServerSideProps = async ({ params }) => {

    const res = await client.fetch(`*[_id in path("${params.itemId}")]`);

    if(res.length == 0) {

        return { notFound: true, }

    }

    return {
        props: {
            res
        }
    }

}

const ProductDetail = ({ res }) => {

    const img = res[0].image_transparent.asset._ref;
    const base = 'https://cdn.sanity.io/images/7mbpaot7/prod/';
    res[0]['image_url'] = base + img.slice(6).replace('-png', '.png');

    return (

        <div className="bg-[url('/mockup_designs/design.png')] bg-cover bg-center py-10">
            <comps.Navbar position={''} />
            <section className="h-auto w-full">
                <div className="w-full flex justify-center">
                    <img className="max-w-[60%]" src={res[0].image_url} alt="" /> {/* bg-opacity 24% */}
                </div>
                <div className="w-full flex items-center flex-col mb-24 space-y-4">
                    <h1 className="font-monument text-5xl">{res[0].name}</h1>
                    <p className="w-1/4 text-center">{res[0].description}</p>
                </div>
            </section>
            <comps.Footer/>
        </div>

    );

};

export default ProductDetail;