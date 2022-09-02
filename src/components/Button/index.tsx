import { CustomButtonProps } from "./interfaces"


import './style.css'

const rootClass = 'weather-button'


export const CustomButton = ({value, onClick }:CustomButtonProps ) => {

  return (
    <button className={rootClass} onClick={ onClick }>{ value }</button>
  )
}