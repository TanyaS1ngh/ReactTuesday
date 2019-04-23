import React from 'react';

export default class ProductComponent extends React.Component{

    render(){
        return(
            <div className="col-md-3">
                <div className="card text-black  mb-3" style={{"max-width": "50rem"}}>
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6">
                            {this.props.cardDetails.type}
                        </div>
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-3">
                            <button className="btn btn-danger"  onClick = {this.props.RemoveProduct.bind(null,this.props.cardDetails.id)}
                                > <i className="fas fa-trash-alt"></i>
                            </button>   
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={this.props.cardDetails.img} className="card-img img" alt="..."/>
                        </div>
                        <div className="col-md-6">
                            <p className="card-text">
                                <h5 className="card-title">{this.props.cardDetails.id}</h5>    
                            </p>
                            <p className="card-text">
                                <h5 className="card-title">{this.props.cardDetails.name}</h5>    
                            </p>
                            <p className="card-text">
                                Rating: {this.props.cardDetails.rating}
                            </p>
                            <p className="card-text" >
                                Likes    {this.props.cardDetails.likes}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-6">
                            <button className="btn btn-info"   
                            > <i className="fas fa-thumbs-up"></i>
                            </button>   
                        </div>
                        <div className="col-6">
                            <button className="btn btn-info"   
                            > <i className="fas fa-thumbs-down"></i>
                            </button>   
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        )

    }
}