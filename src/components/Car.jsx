const Car = ({ car }) => {
    const { image, make, model, year } = car;
    return (
        <div className="card dark:bg-black dark:text-white w-96 bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{model}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Car;
