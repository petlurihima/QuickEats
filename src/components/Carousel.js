import React from 'react';

export const Carousel = () => {
    return (
        <div>
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" id="carousel">
                    <div className="carousel-caption" style={{ zIndex: "5" }}>
                        <form className="d-flex justify-content-center">
                            <input
                                className="form-control mr-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                style={{ width: "40%" }}
                            />
                            <button
                                className="btn btn-outline-success text-white bg-success"
                                type="submit"
                                style={{ marginLeft: "10px" }}
                            >
                                Search
                            </button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuFQ2XeBdGvZlavlMO4S1Fkl79BZ7AFtl42g&s"
                            className="d-block w-100"
                            alt="Burger"
                            style={{ height: "500px", objectFit: "cover", filter: "brightness(60%)" }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/20/f3bd7da3-8caa-4324-a891-8bec9f231d23_784367.jpg"
                            className="d-block w-100"
                            alt="Momos"
                            style={{ height: "500px", objectFit: "cover", filter: "brightness(60%)" }}
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://media.istockphoto.com/id/480742460/photo/samosa-on-a-plate-with-sauce-horizontal-top-view.jpg?s=612x612&w=0&k=20&c=M7OIvYUwFecg6mrgrRViq_bh1DXv3KI-1qh_MmRfHXQ="
                            className="d-block w-100"
                            alt="Samosa"
                            style={{ height: "500px", objectFit: "cover", filter: "brightness(60%)" }}
                        />
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
