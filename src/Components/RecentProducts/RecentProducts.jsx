import React, { use } from 'react';
import Product from '../Product/Product';

const RecentProducts = ({recentProductsPomise}) => {
    const products = use(recentProductsPomise);
    console.log(products);
    return (
        <div>
            <h3 className='text-5xl text-center'>Recent <span className='text-primary'>Products</span></h3>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
        </div>
    );
};

export default RecentProducts;