// Write your code here
import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  render() {
    const {todoinfo, deleteUser} = this.props
    const {title, id} = todoinfo
    const onDelete = () => {
      deleteUser(id)
    }
    return (
      <li className="item">
        <p className="todopara">{title}</p>
        <button type="button" className="but" onClick={onDelete}>
          Delete
        </button>
      </li>
    )
  }
}
export default TodoItem
