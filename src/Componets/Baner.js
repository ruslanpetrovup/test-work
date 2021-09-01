import React from 'react';
import '../index.css'

const Baner = () => {
    return (
        <article className="baner">
            <h1 className="baner__head"> Платформа по бронированию жилья на несколько дней</h1>
            <button type="button" className="baner__button">YOUR PRICE <span>BOOKING</span></button>
            <div className="baner__lists">
            <ul className="baner__list">
                <li className="baner__item"><ul>
                    <li>Гостиницы</li>
                    <li>Отели</li>
                    <li>Мотели</li>
                </ul></li>
                <li className="baner__item">
                    <ul>
                    <li>Дома посуточно</li>
                    <li>Шале</li>
                    <li>Виллы</li>
                </ul>
                </li>
                <li className="baner__item">
                    <ul>
                    <li>Курортные отели</li>
                </ul>
                </li>
            </ul>
            <ul className="baner__list">
                <li className="baner__item"><ul>
                    <li>Квартиры посуточно</li>
                    <li>Апартаменты посуточно</li>
                    <li>Апарт - отели</li>
                    <li>Guest Houses</li>
                </ul></li>
                <li className="baner__item">
                    <ul>
                    <li>Хостелы</li>
                    <li>Комнаты посуточно</li>
                    <li>Capsule Hotels</li>
                </ul>
                </li>
                <li className="baner__item">
                    <ul>
                    <li>Дома для отпуска</li>
                </ul>
                </li>
            </ul>
            <div className="baner__backdrop">
                <h2>На платформе YOUR PRICE BOOKING отельеры видят вас и могут предложить вам персональную скидку.</h2>
                <p><span></span>YOUR PRICE BOOKING доступен в Киеве, Варшаве и городе Нью-Йорк.</p>
            </div>
            </div>
        </article>
    )
}
export default Baner 