import { Product as ProductType } from "../../data"
import ButtonDelete from "../ButtonDelete"
import Count from "../Count"
import "./style.scss"

const Product = ({
  product,
  deleteProduct,
  increase,
  decrease,
}: {
  product: ProductType
  deleteProduct: (id: number) => void
  increase: (id: number) => void
  decrease: (id: number) => void
}) => {
  const { img, title, priceTotal, count, id } = product

  return (
    <section className="product">
      <div className="product__img">
        <img src={`./img/products/${img}`} alt={title} />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">
        <Count count={count} decrease={decrease} increase={increase} id={id} />
      </div>
      <div className="product__price">{priceTotal} руб.</div>
      <div className="product__controls">
        <ButtonDelete deleteProduct={deleteProduct} id={id} />
      </div>
    </section>
  )
}

export default Product
