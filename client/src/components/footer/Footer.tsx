import { footerData } from '@/datas/data';

function Footer() {
    return (
        <div className=" grid grid-cols-3 padding">
            {footerData.map((value) => (
                <p className="py-2" key={value}>
                    {value}
                </p>
            ))}
        </div>
    );
}

export default Footer;
