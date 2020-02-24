import React from 'react';
import './item.scss'


const Item =(props)=>{

    // console.log(props.items)
    const {ProductName,price,id,quantity}=props.items;

    return(   
    <div>
        <div className="shopping-cart">

            <div className="product">
            <div className="product-details">
            <img src="https://s.cdpn.io/3/dingo-dog-bones.jpg"/>
            <span className="product-title">{ProductName}</span>
            
            </div>
            <div className="product-price">{price}</div>
                <div className="product-quantity">
                {/* <input type="number" value="2" min="1"/> */}
                    <div className="small-box">{quantity}
                     <span onClick={()=>props.increment(id)}>Update</span></div>
            </div>
            <div className="product-removal">
                <button className="remove-product" onClick={()=>props.remove(id)}>
                Remove
            </button>
            </div>
           
            </div>
        </div>
                
    </div>
  )
}

export default Item;