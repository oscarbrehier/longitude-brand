const Image = ({ image }) => {

    return (

        <div style={{backgroundImage: `url(${image})`}} className="w-60 h-60 bg-cover inline-block"></div>

    );

};

export default Image;