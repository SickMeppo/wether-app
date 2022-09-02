import { DefaultLayoutProps } from './interfaces'

import './style.css'


 const rootClass = 'wether-container'


export const DefaultLayout = ( { children }: DefaultLayoutProps ) => {


  return (
    <div className={ rootClass }> {children} </div>
  )
}