'use client';
import { useState, useEffect } from 'react';
import ProductsLayout from '@/components/layout/ProductsLayout';
import { filterData } from '@/datas/data';
import productAPI from '@/api/productAPI';
import { useRouter } from 'next/navigation';
import ProductCard from '@/components/productCard/ProductCard';

const P = () => {
    const [selectedFeatures, setSelectedFeatures] = useState({});
    const [params, setParams] = useState({});
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await productAPI.getAll(params);
                console.log('API response:', response); // Debug log
                setPosts(response.data);
            } catch (error) {
                console.error('Failed to fetch posts', error);
                setError(error.message);
            }
        };

        fetchPosts();
    }, [params]);
    const handleSelectFeature = (selectedParams) => {
        setSelectedFeatures((prevSelectedFeatures) => ({
            ...prevSelectedFeatures,
            ...selectedParams,
        }));
        console.log('Selected Features:', selectedParams); // Debug log

        // Update params dynamically
        const updatedParams = {
            ...params,
            ...selectedParams,
        };
        setParams(updatedParams);

        // Navigate to the new page
        const queryParams = new URLSearchParams(updatedParams).toString();
        router.push(`/phone?${queryParams}`);
    };

    return (
        <ProductsLayout filterData={filterData} onSelectFeature={handleSelectFeature}>
            <div className="grid grid-cols-5">
                {posts.map((item) => (
                    <ProductCard product={item} bgImage={'bg-white'} moreInfo={true} />
                ))}
            </div>
        </ProductsLayout>
    );
};

export default P;
