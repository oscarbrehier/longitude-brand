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
        item['image_url'] = base + img.slice(6).replace('-jpg', '.jpg');
        data.push(item);

    })

    return (

        <div className='relative'>
            <comps.Navbar position={'absolute'} />
            <div className='h-auto w-full absolute mt-10'>
                {data.map((d) => (
                    <comps.ListItem key={Math.random()} picture={d.image_url} name={d.name} description={d.short_description} />
                ))}
                <comps.Footer />
            </div>
        </div>

    );

};

