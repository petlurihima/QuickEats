import React from 'react';

export const Carousel = () => {
    return (
        <div>
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {/* Burger Image */}
                        <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        {/* Momos Image */}
                        <img src="https://source.unsplash.com/900x700/?food,momos" className="d-block w-100" alt="Momos" />
                    </div>
                    <div className="carousel-item">
                        {/* Pizza Image */}
                        <img src="https://source.unsplash.com/900x700/?food,pizza" className="d-block w-100" alt="Pizza" />
                    </div>
                </div>

                {/* Carousel Previous Button */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                {/* Carousel Next Button */}
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};
