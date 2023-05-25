import { createSlice } from "@reduxjs/toolkit";

const initialState=(true)

export const cartSlice= createSlice({
    name: "car",
    initialState,
    reducers:{ 
        
        updateCart: (state) => {
            // console.log("cambiando estado ----> redux");
            return !state; // Alternar el valor booleano entre true y false
          },
          
        // addToCart:(state, {payload}) => {
        //     const {id}= payload

        //     const find= state.Cart.find((item)=> item.id ===id);
        //     if(find) {//si encuentro mismo item en la lista
        //         return state.Cart.map((item)=>
        //             item.id===id
        //             ? {
        //                 quantity: item.quantity +1
        //               }
        //             : item

        //         );
        //     }else{
        //             state.Cart.push({payload,quantity:1})
        //     }
        // },increment: (state, {payload})=>{
        //     return state.Cart.map((item)=>
        //         item.id=== payload
        //         ?{
        //             item,quantity: item.quantity +1 ,  
        //         }
        //         : item
        //     );
        // },decrement:(state,{payload})=>{
        //     return state.Cart.map((item)=>
        //         item.id===payload
        //         ?{
        //             item, quantity:item.quantity-1
        //         }
        //         :item
        //     );
        // },removeItem:(state,action)=>{
        //     const itemId = action.payload;
        //     return state.Cart.filter((item)=> item.id !== itemId)
        // },clear:(state)=>{
        //     return state.Cart=[]
        // },

    }
})

export const { updateCart,
    // clear, removeItem, decrement,increment,addToCart
}=cartSlice.actions
export default cartSlice.reducer