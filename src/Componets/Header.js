import React from 'react';
import ContainerHed from './ContainerHed';
import '../index.css';
import logo from '../images/logo.jpg'
import sprite from '../images/sprite.svg'

const Header = () => {
    return (
        <header className="header">
        <ContainerHed>
                <div className="header__navigation">
                    <a href=''><img src={logo}/></a>
            <ul className="header__list">
                <li className="header__item">ru<span>
                    <svg className="header__item-icon">
                                <use href={`${sprite}#Group`}></use>
                        </svg>
                        </span></li>
                <li className="header__item">Гривня</li>
                <li className="header__item">UAH<span><svg className="header__item-icon">
                            <use href={`${sprite}#Group`}></use>
                </svg></span></li>
            </ul>
               </div>
                <a className="header__title"><span className="header__title-span"><svg className="header__title-icon"><use href={`${sprite}#Vector2`}></use></svg></span>Для отельеров</a>
            <button type='button' className="header__button">Войти</button>
        </ContainerHed>
        </header>
    )
}
export default Header