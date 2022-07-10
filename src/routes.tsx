import { Routes, Route, Navigate } from 'react-router-dom'
import MedicineAnimal from './components/MedicineAnimal'
import Medicines from './components/Medicines'
import StartAnimals from './components/StartAnimals'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<StartAnimals />} />
            <Route path='/medicines/:animal' element={<Medicines />} />
            <Route path='/:animal/:medicine' element={<MedicineAnimal />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    )
}