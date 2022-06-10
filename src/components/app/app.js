import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import './app.css';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [
                {name: 'Johny', salary: '1200', increase: false, id:1},
                {name: 'Alexa', salary: '1800', increase: true, id:2},
                {name: 'Anna', salary: '2400', increase: false, id:3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return{
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem =  (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render(){
        return(
            <div className="app">
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                    <EmployeesList 
                        data={this.state.data}
                        onDelete={this.deleteItem}
                    />
                    <EmployeesAddForm 
                        onItemAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;