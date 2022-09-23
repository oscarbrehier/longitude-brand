import * as comps from '../components/Components'

export default function Preview() {

    return (

        <section className="absolute w-full h-auto flex items-center flex-col">
            <div className="lg:h-screen h-auto flex items-center lg:mt-0 lg:mb-0 sm:mt-52 mb-32 mt-32">
                <div className="flex lg:flex-row flex-col justify-center mt-16">
                    <div className="h-[inherit]">
                        <img className="sm:h-[46vh] max-h-[60vh]" src="/t001.jpg" alt="tshirt" />
                        <p className="flex justify-center mt-2 cursor-pointer">Lorem Ipsum</p>
                    </div>
                    <div className="h-[inherit]">
                        <img className="sm:h-[46vh] max-h-[60vh]" src="/t002.jpg" alt="tshirt" />
                        <p className="flex justify-center mt-2">Lorem Ipsum</p>
                    </div>
                    <div className="h-[inherit]">
                        <img className="sm:h-[46vh] max-h-[60vh]" src="/t003.jpg" alt="tshirt" />
                        <p className="flex justify-center mt-2">Lorem Ipsum</p>
                    </div>
                </div>
            </div>
            <comps.Footer/>
        </section>

    );

};