import React, { Component } from 'react'

export class Todoinput extends Component {
    render() {
        const {item ,handleChange,handleSubmit,editItem} =this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                              <i className="fas fa-book"/>  
                            </div>
                        </div>
                        <input type="text" className="form-control text-capitalize"
                        placeholder="add to do item"
                        value={item}
                        onChange={handleChange}/>
                    </div>
                    <button 
                    className={editItem ? "btn btn-block btn-success mt-3" :"btn btn-block btn-primary mt-3"}
                     type="submit" >{editItem ?"Edit item":"Add item"}</button>
                </form>

            </div>
        )
    }
}

export default Todoinput
