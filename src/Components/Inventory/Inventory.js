import React from 'react';
import fakeData from '../../fakeData';

const Inventory = () => {
    const product = {};
    const handleAddProduct = () =>{
        fetch('http://localhost:5000/addProduct',{
            method:'POST',
            headers:{ 
                'Content-Type' : 'application/json'
            },

            body: JSON.stringify(product)
        })
    }
    return (
        <div>
            <form action="">
                <p><span>Name:</span><input type="text"/></p>
                <p><span>Descrption:</span><input type="text"/></p>
                <p><span>Quantity:</span><input type="text"/></p>
                <p><span>Uploda Image</span><input type="file"/></p>

            <button onClick={handleAddProduct}>Add Product</button>
            </form>
            
        </div>
    );
};

export default Inventory;