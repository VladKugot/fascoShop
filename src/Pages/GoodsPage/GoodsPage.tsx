import { useParams } from "react-router-dom";

import goods from '../../../public/Goods.json';

export const GoodsPage = () => {
    const { id } = useParams<{ id: string }>();

    const goodsItem = goods.find(item => item.id.toString() === id)

    return (
        <div className="goods-page">
            <h1>Goods title: {goodsItem?.title}</h1>
            <h2>Goods id: {goodsItem?.id}</h2>
        </div>
    );
};