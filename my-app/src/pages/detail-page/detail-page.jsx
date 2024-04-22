import React from "react";
import { useParams } from "react-router-dom";
import { datas } from "../../data";
import './detail-page.css'

export default function DetailPage() {

    const { id } = useParams()
    const finedData = datas.find(el => el.id == id)

    return(
        <div className="detail_container">
             <div><img src={finedData.img} alt="" /></div>
             <div>
                <h1>{finedData.title} </h1>
                <p>цвет:{finedData.color}</p>
                <p>дата выпуск:{finedData.year}</p>
                <p>память:{finedData.storage}</p>
                <h2>цена:{finedData.price}</h2>
                <button>Купить</button>
             </div>
        </div>
    )
}