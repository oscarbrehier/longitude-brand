const getStaticProps = async () => {

    const res = await fetch('https://longitude-cms.herokuapp.com/api/shop-items?populate=*');
    const data = await res.json();

    return {
        props: { items: data }
    };

};

export default getStaticProps;