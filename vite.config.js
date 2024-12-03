import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
})


const manifestForPlugin = {
  registerType:'prompt',
  includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest:{
    name:"Joaquin Business Select Price Comparison",
    short_name:"JRT BizzSel",
    description:"An App to compare Regular Price vs Business Select Price at Office Depot",
    icons:[{
      src: './public/JRT-BizSel.png',
      sizes:'192x192',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src:'./public/JRT-BizSel.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src: './public/JRT-BizSel.png',
      sizes:'180x180',
      type:'image/png',
      purpose:'apple touch icon',
    },
    {
      src: './public/JRT-BizSel.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'any maskable',
    }
  ],
  theme_color:'#171717',
  background_color:'#f0e7db',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
}