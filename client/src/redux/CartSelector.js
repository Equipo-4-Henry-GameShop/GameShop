

const {createSelector}= require ('@reduxjs/toolkit');

const carSelector=(state) =>state.cart;

export const carTotalSelector= createSelector([carSelector],(cart)=>
    cart.reduce((total, current)=>(total+=current.quantity),0)
    );

export const cartTotalPriceSelector= createSelector([carSelector], (cart)=>
    cart.reduce((total,current)=>(total+= current.price * current.quantity),0)
) 


