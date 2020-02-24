import React,{Component} from 'react';
import Item from './item';
import './item.scss'


class Cart extends Component{

    state={
        subtotal:null,
        Tax:0,
        Total:null,
        Additional_Comments:null,
        cartItems:[

            {
                id:0,
                ProductName:"Nexus Mobile",
                image:"img/product-1.png",
                price:1500,
                quantity:2
            },
            {
                id:1,
                ProductName:"Samsung Galaxy",
                image:"img/product-2.png",
                price:500,
                quantity:3
            },
            {
                id:2,
                ProductName:"Motorola Razr",
                image:"img/product-3.png",
                price:200,
                quantity:3
            }
        ]
    }

    componentDidMount(){
        let subtotal = 0;
        this.state.cartItems.map((i)=>{
            subtotal += i.price;
        })
       this.setState({subtotal:subtotal,Total:subtotal});
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
    textareaHandler=(e)=>{
        
        let comments = e.target.value;
        this.setState({Additional_Comments:comments})
        console.log(this.state.Additional_Comments)
    }
    submit=()=>{
        console.log(this.state);
    }
    render(){
        return(
        <React.Fragment >
        <header className="App-header">
        <div>ORDERFORM</div>
        <div style={{ "position":"relative","left":"82%"}}>Cart</div>
        <div className="cart-box">{this.state.cartItems.length}</div>
        </header>    

        <div style={{ "position":"relative","right":"44%","padding":"42px","fontSize":"25px","color":"white"}}>Your Cart</div>
        <button className="home-button">Home->Checkout</button>
        <div>
        <div className="column-labels">
                
                <label className="product-details">Product Name</label>
                <label className="product-price">Price</label>
                <label className="product-quantity">Quantity</label>
                <label className="product-removal">Remove</label>
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
            <div className="totals-value" id="cart-subtotal" style={{"position":"relative","bottom":"2px","color":"white"}}>{this.state.subtotal}</div>
            </div>
            <div className="totals-item">
                <label style={{"position":"relative","bottom":"54px"}}>Tax (5%)</label>
            <div className="totals-value" id="cart-tax" style={{"position":"relative","bottom":"54px","color":"white"}}>{this.state.Tax}</div>
            </div>
       
        <div className="totals-item totals-item-total">
            <label style={{"position":"relative","bottom":"32px"}}>Grand Total</label>
            <div className="totals-value" id="cart-total" style={{"position":"relative","bottom":"32px","color":"white"}}>{this.state.Total}</div>
        </div>
        <button className="checkout" onClick={()=>this.submit()}>Checkout</button>
        </div>
            <div style={{ "position":"absolute","left":"500px","color":"white","textAlign":"left","bottom":"10px"}}>
                All orders should be sent by special delivery,which
                <br/>
                will be insured and will need to be signed for
                <br/>
                Allow 4-6 weeks for delivery.
            </div> 
        <div style={{"position":"relative","bottom":"60px","right":"492px"}}>
        
            
            <textarea onChange={(e)=>this.textareaHandler(e)} style={{"backgroundColor":"black","color":"white"}}></textarea>
        </div>
        </React.Fragment>
        )

    }
}

export default Cart;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                