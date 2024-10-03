import React from 'react';

export const Card = (props) => {
    const { foodName, imgsrc, options, description } = props; // Destructuring individual props

    let priceOptions = Object.keys(options[0]); // Accessing the options array

    const handleAddCart=()=>{}

    return (
        <div>
            <div className="card mt-3" style={{ width: "18rem", maxHeight: "460px" }}>
                <img
                    src={imgsrc}
                    alt={foodName}
                    style={{ height: "150px", objectFit: "cover" }} // Adjust image height and fit
                />
                <div className="card-body">
                    <h5 className="card-title">{foodName}</h5>
                    <p className="card-text">{description}</p> {/* Displaying description */}
                    <div className='container w-100'>
                        <div className='d-flex'>
                            <select className='m-2 h-100 bg-success rounded'>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100 bg-success rounded'>
                                {priceOptions.map((optionKey) => {
                                    return <option key={optionKey} value={optionKey}>{optionKey}</option>
                                })}
                            </select>
                        </div>
                        <div className='d-inline h-100 fs-5'>
                            Total Price: ₹{options[0]["full"]} {/* Showing the full price by default */}
                        </div>
                    </div>
                    <hr></hr>
                    <button className='btn btn-success justify-center ms-2' onClick={handleAddCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};
