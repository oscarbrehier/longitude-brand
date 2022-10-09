import * as comps from '../components/Components';

const About = () => {

    return (

        <div className='relative'>
            <comps.Navbar position={'absolute'} />
            <div className='h-screen w-full flex items-center justify-center absolute'>
                <div className='bg-green-400 w-auto h-60'>
                    <comps.Image image={"/about/pic001.jpg"}/>
                    <comps.Image image={"/about/pic002.jpg"}/>
                    <comps.Image image={"/about/pic001.jpg"}/>
                    <comps.Image image={"/about/pic004.jpg"}/>
                    <comps.Image image={"/about/pic005.jpg"}/>
                    <comps.Image image={"/about/pic006.jpg"}/>
                    <comps.Image image={"/about/pic007.jpg"}/>
                    <comps.Image image={"/about/pic008.jpg"}/>
                </div>
            </div>
            {/* <comps.Footer /> */}
        </div>

    );

};

export default About;
