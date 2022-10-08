import * as comps from '../components/Components';

const About = () => {

    return (

        <div className=''>
            <comps.Navbar position={''} />
            <div className='h-screen flex flex-col items-center justify-center space-y-4 mt-10 mb-20'>
                <div className='h-44 w-auto flex space-x-4'>
                    <div className='w-44 h-[inherit bg-[url(/about/pic001.jpg)] bg-cover'></div>
                    <div className='w-44 h-[inherit bg-[url(/about/pic002.jpg)] bg-cover'></div>
                    <div className='w-44 h-[inherit bg-[url(/about/pic003.jpg)] bg-cover'></div>
                    <div className='w-44 h-[inherit bg-[url(/about/pic004.jpg)] bg-cover'></div>
                </div>
                <div className='h-44 w-auto flex space-x-4'>
                    <div className='w-44 h-[inherit bg-[url(/about/pic005.jpg)] bg-cover'></div>
                    <div className='w-44 h-[inherit bg-[url(/about/pic006.jpg)] bg-cover'></div>
                    <div className='w-44 h-[inherit bg-[url(/about/pic007.jpg)] bg-cover'></div>
                    <div className='w-44 h-[inherit bg-[url(/about/pic008.jpg)] bg-cover'></div>
                </div>
                <div className='h-44 w-auto flex space-x-4'>
                    <div className='w-44 h-[inherit bg-[url(/about/pic009.jpg)] bg-cover'></div>
                    <div className='w-44 h-[inherit bg-[url(/about/pic010.jpg)] bg-cover'></div>
                    <div className='w-44 h-[inherit bg-[url(/about/pic011.jpg)] bg-cover'></div>
                    <div className='w-44 h-[inherit bg-[url(/about/pic012.jpg)] bg-cover'></div>
                </div>
            </div>
            <comps.Footer/>
        </div>

    );

};

export default About;
