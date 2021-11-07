import React from "react";
import './styles.css';



class AddDetails extends React.Component {
   state = {
    id: "",
    itemname: "",
    description: "",
    price: "", 
    quantity:"",
    stock_date:""
  };

  add = (e) => {
    e.preventDefault()
    if (this.state.itemname === "" || this.state.id === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addtoListHandler(this.state);
    
    this.setState({ id:"", itemname: "" ,description: "",price: "",quantity: "" ,stock_date: ""});

  };
  render() {
    return (
      <div >
        <h2 > STORE DETAILS</h2>
        <form  onSubmit={this.add} >
          <div className="field">
            <label>ID</label>
            <input
              type="text"
              name="id"
              placeholder="ID"
              value={this.state.id}
              onChange={(e) => this.setState({ id: e.target.value })}
            />
          </div>

          <div className="field">
            <label>ITEM NAME\\\</label>
            <input
              type="text"
              name="itemname"
              placeholder="NAME"
              value={this.state.itemname}
              onChange={(e) => this.setState({ itemname: e.target.value })}
            />
          </div>

          <div className="field">
            <label>DESCRIPTION</label>
            <input
              type="text"
              name="description"
              placeholder="DESCRIPTION"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </div>


          <div className="field">
            <label>PRICE</label>
            <input
              type="text"
              name="price"
              placeholder="price"
              value={this.state.price}
              onChange={(e) => this.setState({ price: e.target.value })}
            />
          </div>
          <div className="field">
            <label>QUANTITY</label>
            <input
              type="text"
              name="quantity"
              placeholder="quantity"
              value={this.state.quantity}
              onChange={(e) => this.setState({ quantity: e.target.value })}
            />
          </div>
            <div className="field">
                <label>STOCK</label>
                <input
                type="text"
                name="stock_date"
                placeholder="stock_date"
                value={this.state.stock_date}
                onChange={(e) => this.setState({stock_date: e.target.value})}
              />
              </div>

          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddDetails;