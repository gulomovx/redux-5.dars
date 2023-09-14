import Product from "./Product"
import { useSelector } from "react-redux"
const BasketProducts = () => {

    const { products, total } = useSelector((store) => store.basket)
    if (products == 0) {
        return <h1 className="mt-4 text-4xl font-mono">No items left!</h1>
    }
  return (
      <div>
          {products.map((item) => {
              const {name, price, image, amount}=item   
              return (
                  <Product
                      key={new Date().getTime + Math.random()}
                      name={name}
                      price={price}
                      image={image}
                      amount={amount}
                  />
              )
          })}
          <hr />
          <div className="my-8 flex justify-between items-center">
              <h1 className="text-3xl font-mono font-bold">Total</h1>
              <h1 className="text-2xl">$ { total.toFixed(2)}</h1>
          </div>
    </div>
  )
}

export default BasketProducts