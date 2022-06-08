import './employees-add-form.css';

const EmployeesAddForm = () => {
    return(
        <div className="app-add-form">
            <h3>Додайте нового працівника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Як його зовати?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="з/п в $?" />

                <button type="submit"
                        className="btn btn-outline-light">Добавити</button>
            </form>
        </div>
    );
}

export default EmployeesAddForm;