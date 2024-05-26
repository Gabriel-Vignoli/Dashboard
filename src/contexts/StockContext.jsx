import { createContext, useState } from "react";
import PropTypes from 'prop-types'

StockContextProvider.propTypes = {
    children: PropTypes.node
}

export const StockContext = createContext({})


// Item
// {name, descripition, quantity, price, category, createAt, updateAt}
export function StockContextProvider( {children }) {

const [itens, setItens] = useState(() => {
    const storedItens = localStorage.getItem('vignoli-react-stock')
    if (!storedItens) return []
    const itens = JSON.parse(storedItens)
    itens.forEach((item) => {
        item.createdAt = new Date(item.createdAt)
        item.updatedAt = new Date(item.updatedAt)
    });
    return itens
})

const addItem = (item) => {
   setItens(currentState => {
    const UpdatedItens = [item, ...currentState]
    localStorage.setItem('vignoli-react-stock', JSON.stringify(UpdatedItens))
    return UpdatedItens
   }) 
}

const deleteItem = (itemId) => {
    setItens(currentState => {
        const UpdatedItens = currentState.filter(item => item.id !== itemId)
        localStorage.setItem("vignoli-react-stock", JSON.stringify(UpdatedItens))
        return UpdatedItens
    })
}

const getItem = (itemId) => {
    return itens.find(item => item.id === +itemId)
  }

const updateItem = (itemId, newAttributes) => {
   setItens(currentState => {
    const itemIndex = currentState.findIndex(item => item.id === +itemId)
    const updatedItens = [...currentState]
    Object.assign(updatedItens[itemIndex], newAttributes, { updatedAt: new Date()})
    localStorage.setItem("vignoli-react-stock", JSON.stringify(updatedItens))
    return updatedItens
   })
}  

const stock = {
    itens,
    addItem,
    deleteItem,
    getItem,
    updateItem
}

    return (
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )
}