import PropTypes from 'prop-types'
import useStock from '../hooks/useStock'
import { useNavigate } from 'react-router-dom'

DeleteButton.propTypes = {
    itemName: PropTypes.string,
    itemId: PropTypes.number
}

export default function DeleteButton({ itemId, itemName }) {

const { deleteItem } = useStock()  
const navigate = useNavigate()

const handleDelete = () => {
    if (confirm(`Are you sure you want to delete ${itemName}?`)) {
        deleteItem(itemId)
        navigate("/itens")
    }
}

    return(
        <button
        className="button is-danger small"
        onClick={handleDelete}>
            Delete
        </button>
    )
}