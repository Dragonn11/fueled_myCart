import React from 'react';
import './item.scss'
var classNames = require('classnames');

const Item =(props)=>{

    // console.log(props.items)
    const {ProductName,price,id,quantity,image}=props.items;

    var liClasses = classNames({
        'product': true,
        'product-black': id%2!==0
      });
  

    return(   
    <div>
        <div className="shopping-cart">

            <div className={liClasses}>
            <div className="product-details">
            <img src={image}/>
            <span className="product-title">{ProductName}</span>
            
            </div>
            <div className="product-price">{price}</div>
                <div className="product-quantity">
                    <div className="small-box">{quantity}
                     <span onClick={()=>props.increment(id)}>Update</span></div>
            </div>
            <div className="product-removal"><i className="fa fa-close" style={{"position":"relative","top":"10px"}} onClick={()=>props.remove(id)}></i>
            </div>
           
            </div>
        </div>
                
    </div>
  )
}

export default Item;