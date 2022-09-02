
import {Global, css} from '@emotion/react'
import FontsCSS from '../src/style/fonts.css';
import NormalizeCSS from '../src/style/normalize.css';




export const GlobalStyle = () => {
  return <Global styles={css`${FontsCSS} ${NormalizeCSS}`} />
}

