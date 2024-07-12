const BannerContent = ({ image, title }) => {
    return (
        <div className="grid grid-cols-3 rounded-2xl shadow-md py-4 gap-2 h-28">
            <img src={image} width={100} height={100} className="object-contain col-span-1 px-2" />
            <p className="col-span-2 text-lg font-medium center"> {title}</p>
        </div>
    );
};

export default BannerContent;
