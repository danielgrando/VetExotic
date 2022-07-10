import { Routes, Route, Navigate } from 'react-router-dom'
import Bibliography from './components/Bibliography'
import Dosages from './components/Dosages'
import Farmacology from './components/Farmacology'
import MedicineAnimal from './components/MedicineAnimal'
import Medicines from './components/Medicines'
import StartAnimals from './components/StartAnimals'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<StartAnimals />} />
            <Route path='/medicines/:animal' element={<Medicines />} />
            <Route path='/:animal/:medicine' element={<MedicineAnimal />} />
            <Route path='/:animal/:medicine/dosages' element={<Dosages />} />
            <Route path='/:animal/:medicine/farmacology' element={<Farmacology />} />
            <Route path='/:animal/:medicine/bibliography' element={<Bibliography />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    )
}