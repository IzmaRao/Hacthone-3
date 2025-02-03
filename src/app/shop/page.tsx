import dynamic from 'next/dynamic';

const Shop = dynamic(() => import('@/components/Shop'));


function ShopProduct() {
  return <div>
    <Shop/>
  </div>
}

export default ShopProduct;
