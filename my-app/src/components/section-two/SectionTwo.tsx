import React from "react";
import line from '../../images/line.png'

export const SectionTwo =()=>{
    return <div className="section-two">
        <div className="container">
            <div className="section-two__box">
                <img className="section-two__image" src={line} alt="img" />
                <h2 className="section-two__topic">Отзывы наших клиентов</h2>
                <p className="section-two__description">- Отличный салон! Душевное и профессиональное обслуживание :) А еще здорово делать сеанс всех процедур одновременно с любимым мужчиной!<span className="section-two__description-names"> - " Кирогазина Светлана "
                    </span></p>
                <p className="section-two__date">- 22.01.2023 -</p>
                <p className="section-two__description">- Мастер очень понравился! Доброжелательна, внимательна, аккуратна)) я ни разу не почувствовала дискомфорта или боли! Хорошее оборудование и материалы. Большой выбор цветов. В салоне душевная обстановка, всегда предложат чай/кофе, угостят вкусняшкой. Учтут все ваши пожелания и подберут удобное время.
                    <span className="section-two__description-names"> - " Сорокина-Совкова Мария "</span></p>
                <p className="section-two__date">- 14.02.2023 -</p>
                <p className="section-two__description">- Все отлично) Благодарю мастера Татьяну и приветливого администратора. Встретили, забрали верхнюю одежду, пр доложили чай. Прекрасный салон) Уже записалась на следующий маникюр к Татьяне
                    <span className="section-two__description-names"> - " Нижняя Наиля "</span></p>
                <p className="section-two__date">- 24.02.2023 -</p>
                <p className="section-two__description">- Была первый раз в этом салоне ,все очень даже понравилось ,сервис на высоте ! Мастер маникюра Светлана очень бережно и аккуратно сделала свою работу ,только восторг! Спасибо вам!
                    <span className="section-two__description-names"> - " Накдаунова Серафима "</span></p>
                <p className="section-two__date">- 3.04.2023 -</p>
            </div>
        </div>
    </div>
}