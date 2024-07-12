import mongoose from 'mongoose';

// const postSchema = mongoose.Schema({
//     title: String,
//     originalPrice: Number,
//     salePrice: Number,
//     image: String,
//     isPromotion: Boolean,
//     promotionPercent: Number,
//     category: {
//         name: String,
//         id: Number, 
//     }
    
// })
const postSchema = mongoose.Schema({
    title: String,
    originalPrice: Number,
    salePrice: Number,
    isPromotion: Boolean,
    promotionPercent: Number,
    ram: String,
    storage: String,
    camera: String,
    battery: String,
    charger: String,
    rate: Number,
    screen: String,
    image: String,
    desc: String
    
})

var PostProduct = mongoose.model('PostProduct', postSchema);

export default PostProduct;