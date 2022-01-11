import styles from './Products.module.scss';
import Icon from '../../components/Icons/Icon';
import ProductList from '../../components/Products/ProductList';
import CheckboxText from '../../components/UI/CheckboxText';
import Facets from '../../components/UI/Facets/Facets';
import Pagination from '../../components/UI/Pagination';
import ProductCategoriesSkeleton from '../../components/Products/ProductCategoriesSkeleton';
import { commerce } from '../../services/commerce';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

const initialProductCategories = [];

for (let i = 0; i < 7; i++) {
  initialProductCategories.push({
    id: i,
    name: '',
    slug: '',
  });
}

function Products() {
  const params = useParams();

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [productCategories, setProductCategories] = useState({
    data: initialProductCategories,
  });
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(false);
  const [checkedFilter, setCheckedFilter] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    postPerPage: 9,
    total: 9,
  });

  const getProducts = useCallback(async () => {
    setIsProductsLoading(true);

    try {
      const commerceProducts = await commerce.products.list();
      setPagination({
        currentPage: commerceProducts.meta.pagination.current_page,
        postPerPage: 9,
        total: commerceProducts.meta.pagination.total,
      });

      if (params.category) {
        const filteredProducts = commerceProducts.data.filter(product =>
          product.categories.some(category => category.slug === params.category)
        );

        setProducts(filteredProducts);
      }

      if (checkedFilter.length > 0) {
        const filteredProducts = commerceProducts.data.filter(product =>
          product.categories.some(category =>
            checkedFilter.includes(category.slug)
          )
        );

        setProducts(filteredProducts);
      }

      if (!params.category && !checkedFilter.length) {
        const indexofLastPage = pagination.currentPage * pagination.postPerPage;
        const indexofFirstPage = indexofLastPage - pagination.postPerPage;
        setProducts(
          commerceProducts.data.slice(indexofFirstPage, indexofLastPage)
        );
      }
    } catch (error) {
      console.log('There is something wrong', error);
    }

    setIsProductsLoading(false);
  }, [checkedFilter, params]);

  const getCategories = useCallback(async () => {
    setIsCategoriesLoading(true);

    try {
      const commerceCategories = await commerce.categories.list();
      setProductCategories(commerceCategories);
    } catch (error) {
      console.log(error);
    }

    setIsCategoriesLoading(false);
  }, []);

  const paginate = pageNumber => {
    setPagination({
      ...pagination,
      currentPage: pageNumber,
    });
  };

  const filterClickHandler = () => {
    setIsFiltersOpen(state => !state);
  };

  const backdropHandler = () => {
    setIsFiltersOpen(false);
  };

  const categoryChangeHandler = event => {
    const currIndex = checkedFilter.indexOf(event.target.id);
    const newCheckedFilter = [...checkedFilter];

    if (currIndex === -1) {
      newCheckedFilter.push(event.target.id);
    } else {
      newCheckedFilter.splice(currIndex, 1);
    }

    setCheckedFilter(newCheckedFilter);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <>
      {isFiltersOpen && (
        <div className={styles.backdrop} onClick={backdropHandler}></div>
      )}
      <div className={styles.container}>
        <header className={styles.header}>
          {isFiltersOpen && (
            <Icon
              name='adjust-horizontal'
              color='gray'
              className={styles.filterIcon}
              onClick={filterClickHandler}
            />
          )}
          {!isFiltersOpen && (
            <>
              <figure className={styles.headerMedia}>
                <img
                  src='https://klbtheme.com/cosmetsy/wp-content/uploads/2021/02/index-50.jpg'
                  alt='Banner'
                  className={styles.headerImage}
                />
              </figure>
              <div className={styles.headerInfo}>
                <h1 className={styles.headerTitle}>
                  {params.category ? params.category : 'Products'}
                </h1>
                <p className={styles.headerDescriptions}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </>
          )}
        </header>
        <aside className={isFiltersOpen ? styles.filter : styles.sidebar}>
          {isFiltersOpen && <h2 className={styles.filterTitle}>Filters</h2>}
          <Facets title='product Categories'>
            <ul className={styles.productCategories}>
              {isCategoriesLoading &&
                productCategories.data.map(category => (
                  <li key={category.id}>
                    <ProductCategoriesSkeleton />
                  </li>
                ))}
              {!isCategoriesLoading &&
                productCategories.data.map(category => (
                  <li key={category.id}>
                    <CheckboxText
                      text={category.name}
                      input={{
                        id: category.slug,
                        name: category.slug,
                        onChange: categoryChangeHandler,
                      }}
                    />
                  </li>
                ))}
            </ul>
          </Facets>
        </aside>
        <main className={styles.main}>
          <ProductList
            products={products}
            postPerPage={pagination.postPerPage}
            isLoading={isProductsLoading}
            empty={{
              title: 'Tidak ada produk yang ditemukan',
              description: 'Silahkan pilih kategori lain',
            }}
          />
          <Pagination
            postPerPage={pagination.postPerPage}
            totalPosts={pagination.total}
            currentPage={pagination.currentPage}
            paginate={paginate}
          />
        </main>
      </div>
    </>
  );
}

export default Products;
