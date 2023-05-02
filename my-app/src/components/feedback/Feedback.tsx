import React from "react";
import { useState } from "react";
import { useForm } from 'react-hook-form';

export const Feedback = (props:any) => {
    const {
        register,
        formState,
        handleSubmit

    } = useForm();

    const onSubmit =(data:any)=>{
        alert(JSON.stringify(data))
    }

    return <div className="feedback">
        <h2 className="feedback__topic">Запись <span>x-Nails</span></h2>
        <form className="feedback__form" onSubmit={handleSubmit(onSubmit)}>
            <label>Ваше имя:
                <input {...register('name', {
                    required:true
                })} />
            </label>
            <textarea name="Дополнительная информация" id="text" ></textarea>
            <input type="submit" />
        </form>
    </div>
}