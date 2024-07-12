import {
    faMobileScreenButton,
    faLaptop,
    faTabletScreenButton,
    faHeadphones,
    faClock,
    faDesktop,
} from '@fortawesome/free-solid-svg-icons';
export const menuBar = [
    {
        title: 'Điện thoại',
        id: 1,
        icon: faMobileScreenButton,
        completed: false,
    },
    {
        title: 'Laptop',
        id: 2,
        icon: faLaptop,
        completed: false,
    },
    {
        title: 'Tablet',
        id: 3,
        icon: faTabletScreenButton,
        completed: false,
    },
    {
        title: 'Phụ kiện',
        id: 4,
        icon: faHeadphones,
        completed: true,
    },
    {
        title: 'Smartwatch',
        id: 5,
        icon: faClock,
        completed: false,
    },
    {
        title: 'Đồng hồ',
        id: 6,
        icon: faClock,
        completed: false,
    },
    {
        title: 'Máy cũ, thu cũ',
        id: 7,
        icon: faMobileScreenButton,
        completed: true,
    },
    {
        title: 'PC, Máy in',
        id: 8,
        icon: faDesktop,
        completed: true,
    },
    {
        title: 'Sim, Thẻ cào',
        id: 9,
        icon: faDesktop,
        completed: false,
    },
    {
        title: 'Dịch vụ tiện ích',
        id: 10,
        icon: faDesktop,
        completed: true,
    },
];
export const bannerContent = [
    {
        title: 'Smartphone Đặc Quyền',
        id: 1,
        image: './image/banner-content1.png',
    },
    {
        title: 'Phụ kiện giảm đến 50%',
        id: 2,
        image: './image/banner-content2.png',
    },
    {
        title: 'Laptop xả kho Giảm đến 35%',
        id: 3,
        image: './image/banner-content3.png',
    },
    {
        title: 'Giảm đến 50+++',
        id: 4,
        image: './image/banner-content4.png',
    },
];
export const cateFuture = [
    {
        title: 'Điện thoại',
        image: './image/dtdd.png',
    },
    {
        title: 'Laptop',
        image: './image/laptop.png',
    },
    {
        title: 'Tablet',
        image: './image/tablet.png',
    },
    {
        title: 'Đồng hồ thông minh',
        image: './image/donghothongminh.png',
    },
    {
        title: 'Máy cũ giá rẻ',
        image: './image/maycugiare.png',
    },
    {
        title: 'Ốp lưng',
        image: './image/oplung.png',
    },
    {
        title: 'Chuột máy tinh',
        image: './image/chuotmaytinh.png',
    },
    {
        title: 'Bàn phím',
        image: './image/donghothongminh.png',
    },
    {
        title: 'Sim, thẻ cào',
        image: './image/donghothongminh.png',
    },
    {
        title: 'Đồng hồ thời trang',
        image: './image/donghothoitrang.png',
    },
    {
        title: 'Loa',
        image: './image/maycugiare.png',
    },
    {
        title: 'Tai nghe',
        image: './image/oplung.png',
    },
    {
        title: 'Sạc dự phòng',
        image: './image/chuotmaytinh.png',
    },
    {
        title: 'Camera',
        image: './image/donghothongminh.png',
    },
    {
        title: 'Cáp sạc',
        image: './image/donghothongminh.png',
    },
    {
        title: 'Máy tính bộ',
        image: './image/donghothoitrang.png',
    },
    {
        title: 'Máy in',
        image: './image/dtdd.png',
    },
    {
        title: 'Màn hình máy tính',
        image: './image/laptop.png',
    },
    {
        title: 'Thẻ nhớ',
        image: './image/tablet.png',
    },
    {
        title: 'Phụ kiện cho laptop',
        image: './image/donghothongminh.png',
    },
];
export const products = [
    {
        title: 'iPhone 15 Pro Max 256GB ',
        id: 1,
        image: './image/iphone-15-pro-max.png',
        price: 29290000,
        price_old: 34990000,
    },
    {
        title: 'iPhone 15 Pro Max 256GB ',
        id: 2,
        image: './image/iphone-15-pro-max.png',
        price: 29290000,
        price_old: 34990000,
    },
    {
        title: 'iPhone 15 Pro Max 256GB ',
        id: 3,
        image: './image/iphone-15-pro-max.png',
        price: 29290000,
        price_old: 34990000,
    },
];
export const filterData = [
    {
        items: [
            { name: 'SAMSUNG', value: 'samsung', image: 'image/logo-iphone.png' },
            { name: 'IPHONE', value: 'iphone', image: 'image/logo-iphone.png' },
            { name: 'OPPO', value: 'oppo', image: 'image/logo-iphone.png' },
            { name: 'XIAOMI', value: 'xiaomi', image: 'image/logo-iphone.png' },
            { name: 'REALME', value: 'realme', image: 'image/logo-iphone.png' },
            { name: 'HONOR', value: 'iphone', image: 'image/logo-iphone.png' },
            { name: 'TCL', value: 'tcl', image: 'image/logo-iphone.png' },
            { name: 'TECNO', value: 'tecno', image: 'image/logo-iphone.png' },
            { name: 'NOKIA', value: 'nokia', image: 'image/logo-iphone.png' },
            { name: 'MASSTEL', value: 'masstel', image: 'image/logo-iphone.png' },
            { name: 'MOBELL', value: 'mobell', image: 'image/logo-iphone.png' },
            { name: 'INTEL', value: 'intel', image: 'image/logo-iphone.png' },
        ],
        placeholder: 'Hãng',
        queryName: 'hang',
    },
    {
        items: [
            { name: '1,000', value: '10000' },
            { name: '2,000', value: '20000' },
            { name: '4,000', value: '40000' },
            { name: '7,000', value: '70000' },
            { name: '13,000', value: '13000' },
            { name: '20,000', value: '20000' },
        ],
        placeholder: 'GIÁ THẤP NHẤT',
        queryName: 'giathapnhat',
    },
    {
        items: [
            { name: '2,000', value: '20000' },
            { name: '4,000', value: '40000' },
            { name: '7,000', value: '70000' },
            { name: '13,000', value: '13000' },
            { name: '20,000', value: '20000' },
        ],
        placeholder: 'GIÁ CAO NHẤT',
        queryName: 'giaCaoNhat',
    },
    {
        items: [
            { name: 'ANDROID', value: 'android' },
            { name: 'IPHONE (IOS)', value: 'iphone' },
            { name: 'Điện thoại phổ thông', value: 'dien-thoai-pho-thong' },
            { name: '13,000', value: '13000' },
            { name: '20,000', value: '20000' },
        ],
        placeholder: 'LOẠI ĐIỆN THOẠI',
        queryName: 'loaiDienThoai',
    },
    {
        items: [
            { name: 'Chơi game, cấu hình cao', value: 'choi-game-cau-hinh-cao' },
            { name: 'Pin khủng trên 5000mAh', value: 'pin-khung' },
            { name: 'Chụp hình', value: 'chup-hinh' },
            { name: 'Livestream', value: 'livestream' },
            { name: 'Mỏng nhẹ', value: 'mong-nhe' },
        ],
        placeholder: 'NHU CẦU',
        queryName: 'nhuCau',
    },
    {
        items: [
            { name: '3GB', value: '3' },
            { name: '4GB', value: '4' },
            { name: '6GB', value: '6' },
            { name: '8GB', value: '8' },
            { name: '12GB', value: '12' },
        ],
        placeholder: 'RAM',
        queryName: 'ram',
    },
    {
        items: [
            { name: 'QQVGA', value: 'qqvga' },
            { name: 'QVGA', value: 'qvga' },
            { name: 'HD+', value: 'hd' },
            { name: 'FULLHD+', value: 'fullhd' },
            { name: '1.5K', value: '1.5k' },
            { name: '1.5K+', value: '1.5k+' },
            { name: '2K+', value: '2k+' },
            { name: 'Retina (Iphone)', value: 'retina' },
        ],
        placeholder: 'MÀN HÌNH',
        queryName: 'manhinh',
    },
    {
        items: [
            { name: '64GB', value: '64' },
            { name: '128GB', value: '128' },
            { name: '256GB', value: '256' },
            { name: '512GB', value: '512' },
            { name: '1TB', value: '1' },
        ],
        placeholder: 'DUNG LƯỢNG LƯU TRỮ',
        queryName: 'dungluongluutru',
    },
    {
        items: [
            { name: '64GB', value: '64' },
            { name: '128GB', value: '128' },
            { name: '256GB', value: '256' },
            { name: '512GB', value: '512' },
            { name: '1TB', value: '1' },
        ],
        placeholder: 'TÍNH NĂNG ĐẶC BIỆT',
        queryName: 'tinhnangdacbiet',
    },
];
export const optionPromo = [
    {
        title: 'CHUYÊN TRANG THƯƠNG HIỆU',
        images: [
            {
                name: 'img1',
                subImage: '/image/option1-promo.png',
            },
            {
                name: 'img2',
                subImage: '/image/option2-promo.png',
            },
            {
                name: 'img3',
                subImage: '/image/option3-promo.png',
            },
        ],
    },
    {
        title: 'CHUỖI MỚI DEAL KHỦNG',
        images: [
            {
                name: 'img1',
                subImage: '/image/option1-promo.png',
            },
            {
                name: 'img2',
                subImage: '/image/option2-promo.png',
            },
            {
                name: 'img3',
                subImage: '/image/option3-promo.png',
            },
        ],
    },
];
export const footerData = [
    'Tích điểm Quà tặng VIP',
    'Lịch sử mua hàng',
    'Tìm hiểu về mua trả góp',
    'Chính sách bảo hành',
    'Giới thiệu công ty (MWG.vn)',
    'Tuyển dụng',
    'Gửi góp ý, khiếu nại',
    'Tìm siêu thị (3.043 shop)',
    'Tổng đài hỗ trợ',
    'Gọi mua: 1900 232 460 (8:00 - 21:30)',
    'Khiếu nại: 1800.1062 (8:00 - 21:30)',
    'Bảo hành: 1900 232 464 (8:00 - 21:00)',
];
export const prosTest = [
    {
        title: 'iPhone 15 Pro Max 256GB',
        id: 1,
        image: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg',
        originalPrice: 34990000,
        salePrice: 29290000,
        isPromotion: true,
        promotionPercent: 16,
        screen: 'OLED 6.7 Super Retina XDR',
        ram: 8,
        battery: 5000,
    },
    {
        title: 'iPhone 15 Pro Max 256GB',
        id: 2,
        image: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg',
        originalPrice: 34990000,
        salePrice: 29290000,
        isPromotion: true,
        promotionPercent: 16,
        screen: 'OLED 6.7 Super Retina XDR',
        ram: 8,
        battery: 5000,
    },
    {
        title: 'iPhone 15 Pro Max 256GB',
        id: 3,
        image: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg',
        originalPrice: 34990000,
        salePrice: 29290000,
        isPromotion: false,
        screen: 'OLED 6.7 Super Retina XDR',
        ram: 8,
        battery: 5000,
    },
    {
        title: 'iPhone 15 Pro Max 256GB',
        id: 4,
        image: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg',
        originalPrice: 34990000,
        salePrice: 29290000,
        isPromotion: false,
    },
    {
        title: 'iPhone 15 Pro Max 256GB',
        id: 5,
        image: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg',
        originalPrice: 34990000,
        salePrice: 29290000,
        isPromotion: false,
    },
    {
        title: 'iPhone 15 Pro Max 256GB',
        id: 6,
        image: 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg',
        originalPrice: 34990000,
        salePrice: 29290000,
        isPromotion: false,
    },
];
