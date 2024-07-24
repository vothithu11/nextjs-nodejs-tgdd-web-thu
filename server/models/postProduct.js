import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    ram: Number,
    battery: Number,
    camera: Number,
    charger: Number,
    desc: String,
    image: String,
    isPromotion: Boolean,
    originalPrice: Number,
    promotionPercent: Number,
    rate: Number,
    salePrice: Number,
    screen: String,
    storage: Number,
    title: String,
    brand: String,
    category: String,
    type: String
    
})

var PostProduct = mongoose.model('PostProduct', postSchema);

export default PostProduct;