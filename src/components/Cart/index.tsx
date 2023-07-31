import CartFooter from "../CartFooter"
import CartHeader from "../CartHeader"
import Product from "../Product"
import { cart as data } from "../../data"
import { useState } from "react"

const Cart = () => {
  const [cart, setCart] = useState(data)

  const deleteProduct = (id: number) => {
    setCart((cart) => {
      return cart.filter((cart) => cart.id !== id)
    })
  }

  const increase = (id: number) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: ++product.count,
            priceTotal: ++product.count * product.price,
          }
        }

        return product
      })
    })
  }

  const decrease = (id: number) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          const newCount = product.count - 1 > 1 ? product.count - 1 : 1
          return {
            ...product,
            count: newCount,
            priceTotal: newCount * product.price,
          }
        }

        return product
      })
    })
  }

  const products = cart.map((product) => {
    return (
      <Product
        product={product}
        key={product.id}
        deleteProduct={deleteProduct}
        increase={increase}
        decrease={decrease}
      />
    )
  })

  return (
    <section className="cart">
      <CartHeader />

      {products}

      <CartFooter />
    </section>
  )
}

export default Cart
