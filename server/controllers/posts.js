import mongoose from 'mongoose';
import PostProduct from '../models/postProduct.js';

export const getPosts = async (req, res) => {
    const { brand, ram, type, screen, storage, charger, isPromotion, price } = req.query;
    let filter = {};
    
    if (brand) filter.brand = brand;
    if (type) filter.type = type;
    if (ram) filter.ram = ram;
    if (screen) filter.screen = screen;
    if (storage) filter.storage = storage;
    if (charger) filter.charger = charger;
    if (isPromotion) filter.isPromotion = isPromotion;

    if (price) {
        const priceFilter = {};
        switch (price) {
            case 'below4':
                priceFilter.$lte = 4000000;
                break;
            case '4to10':
                priceFilter.$gte = 4000000;
                priceFilter.$lte = 10000000;
                break;
            case '10to20':
                priceFilter.$gte = 10000000;
                priceFilter.$lte = 20000000;
                break;
            case 'above20':
                priceFilter.$gte = 20000000;
                break;
            default:
                break;
        }
        filter.salePrice = priceFilter;
    }

    console.log('Filter:', filter); // Log bộ lọc để kiểm tra

    try {
        const postProducts = await PostProduct.find(filter);
        console.log('PostProducts:', postProducts); // Log kết quả truy vấn để kiểm tra
        res.status(200).json(postProducts);
    } catch (error) {
        console.error('Error fetching posts:', error.message); // Log lỗi để kiểm tra
        res.status(404).json({ message: error.message });
    }
}

export const getIdPosts = async (req, res) => {
    const { id } = req.params;

    try {
        const postDetailProduct = await PostProduct.findById(id);

        if (!postDetailProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(postDetailProduct);
    } catch (error) {
        console.error('Error fetching post by ID:', error.message); // Log lỗi để kiểm tra
        res.status(404).json({ message: 'Invalid ObjectId' });
    }
}
