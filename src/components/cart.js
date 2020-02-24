import React,{Component} from 'react';
import Item from './item';
import './item.scss'
import App from '../App';

class Cart extends Component{

    state={
        subtotal:2000,
        Tax:0,
        Total:2000,
        cartItems:[

            {
                id:0,
                ProductName:"mobile",
                image:"",
                price:1500,
                quantity:2
            },
            {
                id:1,
                ProductName:"Laptop",
                image:"",
                price:500,
                quantity:3
            },
            {
                id:2,
                ProductName:"Laptop",
                image:"",
                price:200,
                quantity:3
            }
        ]
    }

    handleRemove=(id)=>{
        const remainder = this.state.cartItems.filter((item)=>{
            if(item.id !==id) return item;
        })
        this.setState({cartItems:remainder});
    }
    handleIncrement=(id)=>{
        
        let copycartItem = [... this.state.cartItems]
        let getItem = copycartItem.find(item=>item.id===id);
        let currentItem = getItem.quantity;
        copycartItem[id].quantity= currentItem + 1;
        this.setState({cartItems:[... copycartItem]})
    }
    render(){
        return(
        <React.Fragment >
        <header className="App-header">
        <div>ORDERFORM</div>
        <div style={{ "position":"relative","left":"58%"}}>Cart</div>
        <div className="cart-box">{this.state.cartItems.length}</div>
        </header>    

        <div style={{ "position":"relative","right":"44%","padding":"42px","font-size":"25px","color":"white"}}>Your Cart</div>
        <button className="home-button">Home->Checkout</button>
        <div>
        <div className="column-labels">
                
                <label className="product-details">Product Name</label>
                <label className="product-price">Price</label>
                <label className="product-quantity">Quantity</label>
                <label className="product-removal">Remove</label>
                {/* <label className="product-line-price">Total</label> */}
        </div>
            <ul>
                {
                    this.state.cartItems.map((item,index)=>{
                    return <Item items = {item} key={index} 
                                 remove={this.handleRemove}
                                 increment={this.handleIncrement}/>
                    })
                }
            </ul>

            {/* <Item items={this.state.cartItems}/> */}
        </div>
        <div className="totals">
            <div className="totals-item">
             <label className="delivery-info">Delivery Info</label>  
             <label className="additional">Additional Comments</label> 
            <label>Subtotal</label>
             <div className="totals-value" id="cart-subtotal">71.97</div>
            </div>
            <div className="totals-item">
                <div style={{ "position":"relative","left":"33%","color":"white","text-align":"left"}}>All orders should be sent by special delivery,which
                <br/>
                will be insured and will need to be signed for
                <br/>
                Allow 4-6 weeks for delivery.
                </div> 
                <label style={{"position":"relative","bottom":"54px"}}>Tax (5%)</label>
                <div className="totals-value" id="cart-tax" style={{"position":"relative","bottom":"54px"}}>3.60</div>
            </div>
       
        <div className="totals-item totals-item-total">
            <label style={{"position":"relative","bottom":"54px"}}>Grand Total</label>
            <div className="totals-value" id="cart-total" style={{"position":"relative","bottom":"54px"}}>90.57</div>
        </div>
        <button className="checkout">Checkout</button>
        </div>
        <div style={{"position":"relative","bottom":"109px","right":"504px"}}>
            
            <textarea></textarea>
        </div>
        </React.Fragment>
        )

    }
}

export default Cart;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                