import * as comps from '../../components/Components';

export const getStaticProps = async () => {

    const res = await fetch('https://oqhgpxi6.api.sanity.io/v2021-06-07/data/query/longitude?query=*');
    const data = await res.json();

    return {
        props: {
            items: data.result
        },
    }

};

export default function Shop({ items }) {

    return (

        <div className='relative'>
            <comps.Navbar position={'absolute'} />
            <div className='h-auto w-full absolute mt-10'>
                <comps.ListItem picture={'/t001.jpg'} />
                <comps.ListItem picture={'/t002.jpg'} />
                <comps.ListItem picture={'/t003.jpg'} />
                <comps.ListItem picture={'/t004.jpg'} />
                {items.map((item) => (
                    <comps.ListItem key={Math.random()} picture={item.url} />
                ))}
                <comps.Footer />
            </div>
        </div>

    );

};

