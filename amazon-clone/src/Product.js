import React from 'react'
import "./Product.css"
function Product() {
    return (
        <div className="product">
         <div className="product__info">
             <p>title</p>
             <p className="product__price">
                 <small>$</small>
                 <strong>price</strong>
             </p>
           <div className="product_rating">
               <p>🌟</p>
           </div>
         </div>
         <img
         src="https://m.media-amazon.com/images/I/31Bt-aWn4oL._AC_SY161_.jpg"
        alt=""
        />
        <button>Add to Basket</button>
    </div>
    )
}

export default Product
