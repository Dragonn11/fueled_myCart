import React from 'react';
import './item.scss'


const Item =(props)=>{

    // console.log(props.items)
    const {ProductName,price,id,quantity,image}=props.items;

    return(   
    <div>
        <div className="shopping-cart">

            <div className="product">
            <div className="product-details">
            <img src={image}/>
            <span className="product-title">{ProductName}</span>
            
            </div>
            <div className="product-price">{price}</div>
                <div className="product-quantity">
                {/* <input type="number" value="2" min="1"/> */}
                    <div className="small-box">{quantity}
                     <span onClick={()=>props.increment(id)}>Update</span></div>
            </div>
            <div className="product-removal"><i class="fa fa-close" onClick={()=>props.remove(id)}></i>
            </div>
           
            </div>
        </div>
                
    </div>
  )
}

export default Item;