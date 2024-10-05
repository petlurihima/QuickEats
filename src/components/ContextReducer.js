import React,{useReducer,useContext, createContext} from 'react'

const CartStateContext=createContext();
const CartDispatchContext=createContext();

const reducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,{id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price,img:action.img}]
        case "REMOVE":
            let newArr=[...state]
            newArr.splice(action.index,1)
            return newArr;
        case "DROP":
            return []
        case "UPDATE":
            return state.map(food => {
                if (food.id === action.id && food.size === action.size) {
                    const newQty = food.qty + parseInt(action.qty);
                    const newTotalPrice = newQty * (action.options[food.size] ? parseInt(action.options[food.size]) : 0); 
                    return { ...food, qty: newQty, price: newTotalPrice }; 
                }
                return food; // Return unchanged food item
            });
        default:
            console.log("Error in Reducer");
    }
}

export const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,[])
    return(
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart=()=>useContext(CartStateContext);
export const useDispatchCart=()=>useContext(CartDispatchContext);