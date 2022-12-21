import React from 'react';
import {FilterValuesType} from "../App";

type AppButtonType = {
   name: string
   filter?: FilterValuesType
   callback: () => void
}

export const AppButton = (props: AppButtonType) => {
   const onClickHandler = () => {
     props.callback()
   }

   return (
      <button className={props.filter === props.name ? 'active-filter' : ''} onClick={onClickHandler}>{props.name}</button>
   );
};
