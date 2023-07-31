import formatPrice from "../../utils/priceFormatter"

import "./style.scss"

const CartFooter = ({ total }: { total: { count: number; price: number } }) => {
  const { count, price } = total

  return (
    <footer className="cart-footer">
      <div className="cart-footer__count">{formatPrice(count)} items</div>
      <div className="cart-footer__price">{price} $</div>
    </footer>
  )
}

export default CartFooter
