import { Product as ProductType } from "../../data"
import ButtonDelete from "../ButtonDelete"
import Count from "../Count"
import formatPrice from "../../utils/priceFormatter"
import "./style.scss"

const Product = ({
  product,
  deleteProduct,
  increase,
  decrease,
  changeValue,
}: {
  product: ProductType
  deleteProduct: (id: number) => void
  increase: (id: number) => void
  decrease: (id: number) => void
  changeValue: (id: number, value: string) => void
}) => {
  const { img, title, priceTotal, count, id } = product

  return (
    <section className="product">
      <div className="product__img">
        <img src={`./img/products/${img}`} alt={title} />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">
        <Count
          count={count}
          decrease={decrease}
          increase={increase}
          changeValue={changeValue}
          id={id}
        />
      </div>
      <div className="product__price">{formatPrice(priceTotal)} $</div>
      <div className="product__controls">
        <ButtonDelete deleteProduct={deleteProduct} id={id} />
      </div>
    </section>
  )
}

export default Product
