import express from 'express';
import mongoose from 'mongoose';
import PostProduct from '../models/postProduct.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    const { brand, ram } = req.query;
    let filter = {};

    if (brand) filter.brand = brand;
    if (ram) filter.ram = ram;

    try {
        const postProducts = await PostProduct.find(filter);
        res.status(200).json(postProducts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default router;

// import PostProduct from '../models/postProduct.js';

// export const getPosts = async (req, res) => { 
//     try {
//         const postProducts = await PostProduct.find({brand: "iPhone"});
//         res.status(200).json(postProducts);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

// export const getSamsungPosts = async (req, res) => {
//     try {
//         const postSamsung = await PostProduct.find({
//             brand: "SAMSUNG"});
//         res.status(200).json(postSamsung);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }
