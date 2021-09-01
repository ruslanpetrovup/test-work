import React,{useState} from 'react';
import Container from './Container';
import '../index.css';
import spriteHero from '../images/sprite-hero.svg';
import sprite from '../images/sprite.svg'

const Hero = () => {
    const [open, setOpen] = useState(false);
    const [bed, setBed] = useState(false)
    const onOpen = (evn) => {
        evn.preventDefault();
        setOpen(!open)
    }
    const addBed = (evn) => {
        evn.preventDefault();
        console.log('suka')
        setBed(!bed)
    }
    return (
        <Container>
        <section className="hero">
        <div className="hero__date">
            <span className="hero__date-span"><svg className="hero__date-icon"><use href={`${spriteHero}#local`}></use></svg></span>
           <div className="hero__data-location">
               <div className="hero__select">
            <select className="hero__select-form">
                <option value="value1" selected>Выберите локацию</option>
                <option value="value2">Заглушка</option>
                <option value="value3">Заглушка</option>
                </select>
                <button className="hero__select-number" type="button" onClick={onOpen}>Сколько вам нужно спален?</button>
            </div>
            <span className="hero__date-span-down">
                <svg class="hero__date-icon-down">
                <use class="hero__date-icon-down" href={`${sprite}#Group-down`}></use>
                </svg>
            </span>
            {open && <div className="hero__date-bed">
                <ul className="hero__list">
                    <li className="hero__item">
                    <span className="hero__item-span">
                    <svg className="hero__item-icon"><use href={`${spriteHero}#bed2`}></use></svg>   
                    </span>1 Спальня</li>
        
                    <li className="hero__item">
                    <span className="hero__item-span">
                    <svg className="hero__item-icon"><use href={`${spriteHero}#bed2`}></use></svg>
                    <svg className="hero__item-icon"><use href={`${spriteHero}#bed2`}></use></svg>
                    </span>2 Спальни</li>
                    <li className="hero__item">
                        <span className="hero__item-span">
                        <svg className="hero__item-icon-prim"><use href={`${spriteHero}#bed`}></use></svg>
                        <svg className="hero__item-icon-prim"><use href={`${spriteHero}#bed`}></use></svg>    
                        </span><p className="hero__item-title">ГБВКСС</p></li>
                        {bed && <><li className="hero__item">
                    <span className="hero__item-span">
                    <svg className="hero__item-icon"><use href={`${spriteHero}#bed2`}></use></svg>   
                    </span>3 Спальня</li>
                    <li className="hero__item">
                    <span className="hero__item-span">
                    <svg className="hero__item-icon"><use href={`${spriteHero}#bed2`}></use></svg>   
                    </span>4 Спальня</li></>}
                </ul>
                <button className="hero__date-button" type="button" onClick={addBed}><svg className="hero__date-icon-more"><use href={`${spriteHero}#tick`}></use></svg></button>
            </div>}
           </div>
        </div>
        </section>
        </Container>
    )
}
export default Hero