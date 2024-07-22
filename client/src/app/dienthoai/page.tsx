'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import productAPI from '@/api/productAPI'; // Đảm bảo bạn đã import đúng đường dẫn tới productAPI

const MyComponent = () => {
    const router = useRouter();
    const [params, setParams] = useState({});
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await productAPI.getAll(params);
                console.log(response);
                setPosts(response.data);
            } catch (error) {
                console.error('Failed to fetch posts', error);
                setError(error.message);
            }
        };

        fetchPosts();
    }, [params]); // Thêm params vào dependency array để useEffect chạy lại khi params thay đổi

    const handleClick = () => {
        const brand = 'REALME';
        const ram = '';
        // Cập nhật state params với giá trị mới
        setParams({ brand, ram });
        // Điều hướng tới trang mới nếu cần thiết
        router.push(`/dienthoai?brand=${brand}&ram=${ram}`);
    };

    const handleClickBrand = () => {
        const brand = 'REALME';
        // Cập nhật state params với giá trị mới
        setParams({ brand });
        // Điều hướng tới trang mới nếu cần thiết
        router.push(`/dienthoai?brand=${brand}`);
    };

    return (
        <>
            <button onClick={handleClick}>Go to iPhone</button>
            <button onClick={handleClickBrand}>Go to brandfilter</button>

            {error && <p>Error: {error}</p>}
            <div>
                {posts.map((post) => (
                    <li key={post._id} className="m-4">
                        <div>brand: {post.brand}</div>
                        <img src={post.image} alt="dien-thoai" className="w-32 h-32 object-cover" />
                    </li>
                ))}
            </div>
        </>
    );
};

export default MyComponent;
