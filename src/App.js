import React from "react"
import Index from "./pages/Index"
import About from "./pages/About"
import BreakfastFoods from "./pages/BreakfastFoods"
import ModelComponents from "./pages/ModelComponents"
import ParentEducation from "./pages/ParentEducation"
import Activities from "./pages/Activities"
import Videos from "./pages/Videos"
import Brochures from "./pages/Brochures"
import PageNotFound from "./pages/PageNotFound"
import ModelBilesenBir from "./pages/ModelBilesenBir"
import ModelBilesenIki from "./pages/ModelBilesenIki"
import ModelBilesenUc from "./pages/ModelBilesenUc"
import ModelBilesenDort from "./pages/ModelBilesenDort"
import ModelBilesenBes from "./pages/ModelBilesenBes"
import ModelBilesenAlti from "./pages/ModelBilesenAlti"
import ModelBilesenYedi from "./pages/ModelBilesenYedi"
import ModelBilesenSekiz from "./pages/ModelBilesenSekiz"
import ModelBilesenDokuz from "./pages/ModelBilesenDokuz"
import {BrowserRouter,Routes, Route} from "react-router-dom"


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/hakkinda" element={<About/>} />
        <Route path="/kahvalti-besinleri" element={<BreakfastFoods/>} />
        <Route path="/model-bilesenleri" element={<ModelComponents/>} />
        <Route path="/ebeveyn-rolu" element={<ParentEducation/>} />
        <Route path="/etkinlikler" element={<Activities/>} />
        <Route path="/videolar" element={<Videos/>} />
        <Route path="/brosurler" element={<Brochures/>} />
        <Route path="/onceki-ilgili-davranis" element={<ModelBilesenBir/>} />
        <Route path="/algilanan-fayda" element={<ModelBilesenIki/>} />
        <Route path="/algilanan-engeller" element={<ModelBilesenUc/>} />
        <Route path="/algilanan-ozyeterlilik" element={<ModelBilesenDort/>} />
        <Route path="/olumlu-ve-olumsuz-etki" element={<ModelBilesenBes/>} />
        <Route path="/kisiler-arasi-etkiler" element={<ModelBilesenAlti/>} />
        <Route path="/durumsal-etkiler" element={<ModelBilesenYedi/>} />
        <Route path="/aninda-rekabet-eden-talepler-ve-tercihler" element={<ModelBilesenSekiz/>} />
        <Route path="/planlama-taahhudu" element={<ModelBilesenDokuz/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    
    
  )
}

export default App