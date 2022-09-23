import * as comps from '../../components/Components';

export default function Shop() {

    return (

        <div>
            <comps.Navbar />
            <div className='h-auto w-full mt-10'>
                <comps.ListItem picture={'/t001.jpg'}/>
                <comps.ListItem picture={'/t002.jpg'}/>
                <comps.ListItem picture={'/t003.jpg'}/>
                <comps.ListItem picture={'/t004.jpg'}/>
                <comps.Footer />
            </div>
        </div>

    );

};