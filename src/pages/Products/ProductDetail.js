import styles from './ProductDetail.module.scss';
import Button from '../../components/UI/Button';
import Icon from '../../components/Icons/Icon';
import InputCounter from '../../components/UI/InputCounter';
import MainSwiper from '../../components/Products/MainSwiper';
import ThumbSwiper from '../../components/Products/ThumbSwiper';
import Radio from '../../components/UI/Radio';
import Tab from '../../components/UI/Tab';
import ProductList from '../../components/Products/ProductList';
import Form from '../../components/UI/Form';
import ProductDetailsSkeleton from '../../components/Products/ProductDetailsSkeleton';
import ProductGallerySkeleton from '../../components/Products/ProductGallerySkeleton';
import ProductThumbSkeleton from '../../components/Products/ProductThumbSkeleton';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { commerce } from '../../services/commerce';
import { useSelector } from 'react-redux';
import { useParams, useNavigate, useLocation } from 'react-router';
import { useEffect, useState, useCallback } from 'react';
import swal from 'sweetalert';

const content = {
  tabs: [
    { id: 'description', text: 'Deskripsi' },
    { id: 'how', text: 'Cara Menggunakan' },
    { id: 'ingredients', text: 'Bahan' },
  ],
  panels: [
    {
      id: 'description',
      text: (
        <>
          <p>Inovasi sunblock harian dari Carasun the Tropical Skin Expert!</p>
          <p>
            Solar Smart UV Protector melindungi optimal dengan SPF 45 yang
            menangkal 97.8% UVB, dan PA++++ perlindungan tertinggi terhadap UVA
            yang dapat memicu hyperpigmentasi dan penuaan dini. Berkat teknologi
            yang dipatenkan CloudLike™️, Carasun memiliki tekstur unik seringan
            awan yang non-comedogenic, membuat kulitmu terasa nyaman dan tetap
            fresh hingga 8 jam! Formulanya yang Halal dibuat tanpa alkohol,
            teruji klinis sesuai untuk kulit sensitif. Diperkaya Ekstrak Beras
            dan CityStem, menutrisi kulit serta melindungi dari radikal bebas.
          </p>
        </>
      ),
    },
    {
      id: 'how',
      text: (
        <p>
          Carasun the Tropical Skin Expert adalah produk yang dibuat dengan
          teknologi yang dipatenkan CloudLike™️. Teknologi ini memiliki tekstur
          unik seringan awan yang non-comedogenic, membuat kulitmu terasa nyaman
          dan tetap fresh hingga 8 jam! Formulanya yang Halal dibuat tanpa
          alkohol, teruji klinis sesuai untuk kulit sensitif. Diperkaya Ekstrak
          Beras dan CityStem, menutrisi kulit serta melindungi dari radikal
          bebas.
        </p>
      ),
    },
    {
      id: 'ingredients',
      text: (
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint
        </p>
      ),
    },
  ],
};

function ProductDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const authSelector = useSelector(state => state.auth);
  const { authStatus } = authSelector;
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isAddToCartLoading, setIsAddToCartLoading] = useState(false);

  const fetchProduct = useCallback(async () => {
    setIsLoading(true);
    try {
      const commerceProducts = await commerce.products.list();
      const getProduct = commerceProducts.data.find(
        product => product.permalink === productId
      );

      if (getProduct) {
        const updatedProduct = getProduct.related_products
          .map(prod => ({
            ...prod,
            categories: getProduct.categories,
          }))
          .slice(0, 4);

        setProduct(getProduct);
        setRelatedProducts(updatedProduct);
      } else {
        swal('Oops!', 'Produk tidak ditemukan', 'error');
        navigate('/');
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [productId, navigate]);

  const handleAddToCart = async event => {
    event.preventDefault();

    if (authStatus === null) {
      navigate('/login', { state: { from: location } });
    }

    setIsAddToCartLoading(true);
    try {
      const docRef = doc(db, 'cart', authStatus.uid);
      const cartSnap = await getDoc(docRef);
      const cartId = cartSnap.data().id;
      await commerce.cart.add(product.id, +event.target[0].value);
      const cart = await commerce.cart.retrieve(cartId);
      await setDoc(docRef, cart);
      swal('Berhasil', 'Produk berhasil ditambahkan ke keranjang', 'success');
    } catch (error) {
      console.log(error);
    }
    setIsAddToCartLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProduct();
  }, [fetchProduct]);

  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        {isLoading && (
          <>
            <ProductThumbSkeleton />
            <ProductGallerySkeleton />
          </>
        )}
        {!isLoading && product && (
          <>
            <ThumbSwiper assets={product.assets} onSwiper={setThumbsSwiper} />
            <MainSwiper assets={product.assets} thumbsSwiper={thumbsSwiper} />
          </>
        )}
      </div>
      <div className={styles.details}>
        {isLoading && <ProductDetailsSkeleton />}
        {!isLoading && product && (
          <>
            <header className={styles.detailHeader}>
              <h1 className={styles.name}>{product.name}</h1>
              <div className={styles.prices}>
                {/* <p className={styles.priceBefore}>Rp 200.000</p> */}
                <p className={styles.priceAfter}>
                  {product.price.formatted_with_symbol}
                </p>
              </div>
            </header>
            <main className={styles.detailMain}>
              <Form onSubmit={handleAddToCart}>
                <div className={styles.options}>
                  <h4 className={styles.optionTitle}>Ukuran</h4>
                  <Radio
                    label='Ukuran'
                    options={['8ml', '12ml', '25ml']}
                    radio={{
                      element: 'button',
                      theme: 'secondary-gray',
                    }}
                    className={styles.optionSizes}
                  />
                </div>
                <div className={styles.options}>
                  <h4 className={styles.optionTitle}>Kuantitas</h4>
                  <InputCounter
                    onMinusClick={() => {
                      if (quantity > 1)
                        setQuantity(prevQuantity => prevQuantity - 1);
                    }}
                    onPlusClick={() => {
                      setQuantity(prevQuantity => prevQuantity + 1);
                    }}
                    onInputChange={event => setQuantity(event.target.value)}
                    value={quantity}
                  />
                </div>
                <div className={styles.actions}>
                  <Button
                    element='button'
                    theme='secondary-color'
                    size='xl'
                    text='Tambahkan ke keranjang'
                    input={{
                      type: 'submit',
                    }}
                    icon={
                      isAddToCartLoading ? (
                        <Icon name='spinner' color='primary' />
                      ) : (
                        <Icon name='cart-plus' color='primary' />
                      )
                    }
                  />
                  <Button
                    element='link'
                    theme='primary'
                    size='xl'
                    text='Beli Sekarang'
                    input={{
                      to: '/checkout',
                    }}
                  />
                </div>
              </Form>
            </main>
          </>
        )}
      </div>
      <div className={styles.info}>
        <Tab content={content} />
      </div>
      <div className={styles.related}>
        <h3 className={styles.relatedTitle}>Related Products</h3>
        <ProductList
          products={relatedProducts}
          postPerPage={4}
          isLoading={isLoading}
          empty={{
            title: 'Tidak ada produk yang terkait',
            text: 'Silahkan coba lainnya',
          }}
        />
      </div>
    </div>
  );
}

export default ProductDetail;
