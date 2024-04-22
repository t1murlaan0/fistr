import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import './basket-page.css'
import { deleteItemFromCard } from '../../redux/basket'

export default function BasketPage() {

    const baskets = useSelector(state => state.basket.items)
    const dispatch = useDispatch()
    const count = baskets.reduce((acc , data) => acc += data.price , 0)

    return (
        <div>
            {
                baskets.length ? <div>
                    {
                        baskets.map(item => {
                            return (
                                <div className="basket_items">
                                    <div>
                                        <div><img src={item.img} alt="" /></div>
                                        <div>
                                            <h1>{item.title}</h1>
                                            <p>{item.price}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => dispatch(deleteItemFromCard(item.id))}>Удалить из корзину</button>
                                </div>
                            )
                        })
                    }
                <p>Общая сумма товаров: {count}</p>
                </div> : <h1>Корзина пуст</h1>
            }
        </div>
    )
}