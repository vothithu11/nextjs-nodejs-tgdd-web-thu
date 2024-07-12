import { cateFuture } from '@/datas/data';
import BoxCate from './BoxCate';
import ImageHighLightsLayout from '@/components/layout/ImageHighLightsLayout';

function CateFuture() {
    return (
        <ImageHighLightsLayout title={'DANH MỤC NỔI BẬT'} valueGrid={'grid-cols-10'}>
            {cateFuture.map((value) => (
                <BoxCate key={value.title} value={value} />
            ))}
        </ImageHighLightsLayout>
    );
}

export default CateFuture;
