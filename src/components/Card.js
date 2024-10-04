import React, { useState,useRef,useEffect } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

export const Card = (props) => {
    let dispatch=useDispatchCart();
    let data=useCart()
    const priceRef=useRef();
    let options = props.options || {}; 
    let priceOptions = Object.keys(options); 
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");

    const handleAddCart = async() => {

        let food=[];
        for(const item of data){
            if (item.id === props.foodItem._id){
                food=item;
                break;
            }
        }
        if (food) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty });
            } else {
                await dispatch({
                    type: "ADD",
                    id: props.foodItem._id,
                    name: props.foodItem.name,
                    price: finalPrice,
                    qty: qty,
                    size: size,
                    img: props.foodItem.img
                });
                console.log("Size different so simply ADD one more to the list");
            }
        } else {
            await dispatch({
                type: "ADD",
                id: props.foodItem._id,
                name: props.foodItem.name,
                price: finalPrice,
                qty: qty,
                size: size,
                img: props.foodItem.img
            });
        }
        // if (food !== []) {
        //     if (food.size === size) {
        //         await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        //     }
        //     else if (food.size !== size) {
        //         await dispatch({ type: "ADD", id: props.foodItem._id, name:props.foodItem.name, price: finalPrice, qty: qty, size: size, img: props.foodItem.img })
        //         console.log("Size different so simply ADD one more to the list")
        //     }
        //     return
        // }
        // else{
        //     await dispatch({ type: "ADD", id: props.foodItem._id, name:props.foodItem.name, price: finalPrice, qty: qty, size: size,img:props.foodItem.img })
        // }
    };

    let finalPrice=qty * parseInt(options[size]);
    useEffect(()=>{
        setSize(priceRef.current.value)
    },[])

    return (
        <div>
            <div className="card mt-3" style={{ width: "18rem", maxHeight: "460px" }}>
                <img
                    src={props.foodItem.img}
                    alt={props.foodItem.name}
                    style={{ height: "150px", objectFit: "cover" }} // Adjust image height and fit
                />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <p className="card-text">{props.foodItem.description}</p> {/* Displaying description */}
                    <div className='container w-100'>
                        <div className='d-flex'>
                            <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                                {Array.from(Array(6), (e, i) => (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>
                            <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                                {priceOptions.map((i) => {
                                    return <option key={i} value={i}>{i}</option>
                                })}
                            </select>
                        </div>
                        <div className='d-inline h-100 fs-5'>
                            Total Price: ₹{finalPrice}/- 
                        </div>
                    </div>
                    <hr></hr>
                    <button className='btn btn-success justify-center ms-2' onClick={handleAddCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};
