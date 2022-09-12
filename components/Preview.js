import * as comps from '../components/Components'

export default function Preview() {

    return (

        <section className="absolute w-full h-auto flex items-center flex-col">
            <div className="h-screen flex items-center">
                <div className="flex flex-row justify-center mt-16">
                    <div className="h-[inherit]">
                        <img className="h-[46vh]" src="/t001.jpg" alt="tshirt" />
                        <p className="flex justify-center mt-2 cursor-pointer">Lorem Ipsum</p>
                    </div>
                    <div className="h-[inherit]">
                        <img className="h-[46vh]" src="/t002.jpg" alt="tshirt" />
                        <p className="flex justify-center mt-2">Lorem Ipsum</p>
                    </div>
                    <div className="h-[inherit]">
                        <img className="h-[46vh]" src="/t003.jpg" alt="tshirt" />
                        <p className="flex justify-center mt-2">Lorem Ipsum</p>
                    </div>
                </div>
            </div>
            <comps.Footer/>
        </section>

    );

};