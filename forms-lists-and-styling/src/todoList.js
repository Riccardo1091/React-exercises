import React from 'react';

export class TodoList extends React.Component {

    state = {
        items: ["Mica", "pizza", "e", "fichi", "eh"]
    }

    // Setstate diretto
    // handleAddTodo = e => {
    //     e.preventDefault();
    //     this.setState({
    //         items: this.state.items.concat(e.target.elements.addTodo.value)
    //     })
    // }

    // Variante con callback e return
    // handleAddTodo = e => {
    //     e.preventDefault();
    //     this.setState(statoPrecedente => {
    //         return {
    //             items: statoPrecedente.items.concat(e.target.elements.addTodo.value)
    //         }
    //     })
    // }

    // Variante con callback "senza" return
    handleAddTodo = e => {
        e.preventDefault();
        this.setState(statoPrecedente => ({
                items: statoPrecedente.items.concat(e.target.elements.addTodo.value)
        }))
    }

    render() {
        return (
            <>     
                <form onSubmit={this.handleAddTodo}>
                    <input name="addTodo" type="text"/>
                    <button type="submit">Add</button>
                </form>
                <ul className="todo-list">
                    {this.state.items.map((item, index) => <li key={item + index}>{item}</li>)}
                </ul>
            </>
        )
            
    }
}