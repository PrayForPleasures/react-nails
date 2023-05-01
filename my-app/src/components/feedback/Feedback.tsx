import React from "react";
import { useState } from "react";
import { ForForm } from '../../data/feedback'

export const Feedback = (props:any) => {
    const [txt, setTxt] = ('')

    return <div className="feedback">
        <form className="feedback__form" action="">
            <h2 className="feedback__form-topic">Запись <span>x-Nails</span></h2>
            <label>
                <input type="text" name="имя"/>
            </label>
            <textarea name="Дополнительная информация" id="text" ></textarea>
            <button>Подтвердить</button>
        </form>
    </div>
}