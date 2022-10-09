import * as comps from '../../components/Components';
import client from '../api/client';

export const getStaticProps = async () => {

    const res = await client.fetch('*[_type == "shopitem"]');

    return {
        props: {
            res
        }
    }

};

export default function Shop({ res }) {

    const data = [];

    res.map((item) => {

        const img = item.image.asset._ref;
        const base = 'https://cdn.sanity.io/images/7mbpaot7/prod/';
        item['image_url'] = base + img.slice(6).replace('-png', '.png');
        data.push(item);

    })

    return (

        <div className=''>
            <div className=' h-screen w-full flex flex-col items-center justify-center'>
                <comps.Navbar top={'mt-0'} />
                <div className='h-16 w-auto rounded-full border-black border-2 mt-10'>
                    <p className='font-monument flex items-center justify-center h-[inherit] uppercase text-4xl cursor-default px-5'>↓ BOUTIQUE ↓</p>
                </div>
            </div>
            <div className='h-auto w-full'>
                {data.map((d) => (
                    <comps.ListItem key={Math.random()} picture={d.image_url} name={d.name} description={d.short_description} link={d._id} />
                ))}
                {/* <comps.Footer /> */}
            </div>
        </div>

    );

};

