'use client';
// import ProductItem from '@/components/ProductItem/ProductItem';
// import { products } from '@/datas/data';

// export default function Products() {
//     return (
//         <div>
//             {products.map((product) => (
//                 <ProductItem product={product} key={product.id} old={true} iphone={true} />
//             ))}
//         </div>
//     );
// }

import React, { useEffect, useState } from 'react';
import productAPI from '@/api/productAPI';

const PhonePage = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        const fetchPosts = async () => {
            const params = {
                ram: 12,
                brand: 'SAMSUNG',
            };
            try {
                const response = await productAPI.getAll(params);
                console.log(response);
                setPosts(response.data); // Ensure you access the data property
            } catch (error) {
                console.error('Failed to fetch posts', error);
                setError(error.message); // Set error message to state
            }
        };

        fetchPosts();
    }, []);

    if (error) {
        return <div>Error: {error}</div>; // Render error message if there's an error
    }

    return (
        <div>
            <h1>Post List</h1>
            <ul>
                {posts.map((post) => (
                    <>
                        <li key={post._id}>RAM {post.ram}</li>
                        <img src={post.image} alt="dien-thoai" />
                    </>
                ))}
            </ul>
        </div>
    );
};

export default PhonePage;
