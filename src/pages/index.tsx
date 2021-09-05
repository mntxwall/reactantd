import styles from './index.less';
import ProductList from "@/components/ProductList";

export default function IndexPage() {
  return (
    <>
      <ProductList name="Bag" title="Doctor"/>
      <div>
        <h1 className={styles.title}>Page index</h1>
      </div>
    </>
  );
}
