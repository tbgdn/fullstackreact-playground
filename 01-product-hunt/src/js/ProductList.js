import React, {Component} from 'react';
import Product from "./Product";
import Seed from "./Seed";

class ProductList extends React.Component{
    state = {
        products: []
    };

    componentDidMount(){
        this.setState({products: new Seed().products});
    }

    handleProductUpVote = (productId) => {
        const nextProducts = this.state.products.map((product) => (
            product.id === productId ?
                Object.assign({}, product, {votes: product.votes + 1}) :
                product
        ));
        this.setState({
            products: nextProducts
        });
    };

    render(){
        const products = this.state.products.sort((a,b) => (b.votes - a.votes));
        return products.map((product) =>
            <div className='ui stackable items'>
                <Product
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submitterAvatarUrl={product.submitterAvatarUrl}
                    productImageUrl={product.productImageUrl}
                    onVote={this.handleProductUpVote}
                />
            </div>
        );
    }
}

export default ProductList;