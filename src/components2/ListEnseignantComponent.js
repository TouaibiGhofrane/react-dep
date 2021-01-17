import React, { Component } from 'react'
import EnseignantService from '../services/EnseignantService'

class ListEnseignantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                enseignants: []
        }
        this.addEns = this.addEns.bind(this);
        this.editEns = this.editEns.bind(this);
        this.deleteEns = this.deleteEns.bind(this);
    }

    deleteEns(id){
        EnseignantService.deleteEns(id).then( res => {
            this.setState({enseignants: this.state.enseignants.filter(enseignant => enseignant.id !== id)});
        });
    }
    viewEns(id){
        this.props.history.push(`/enseignant/gestion/view-enseignant/${id}`);
    }
    editEns(id){
        this.props.history.push(`/enseignant/gestion/add-enseignant/${id}`);
    }

    componentDidMount(){
        EnseignantService.getEnseignants().then((res) => {
            this.setState({ enseignants: res.data});
        });
    }

    addEns(){
        this.props.history.push('/enseignant/gestion/add-enseignant/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Teacher's List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEns}> Add Teacher</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Cin </th>
                                    <th> Teacher First Name</th>
                                    <th> Teacher Last Name</th>
                                  
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.enseignants.map(
                                        enseignant=> 
                                        <tr key = {enseignant.id}>
                                              <td> {enseignant.cin}</td>
                                             <td> { enseignant.firstName} </td>   
                                             <td> {enseignant.lastName}</td>
                                            
                                             <td>
                                                 <button onClick={ () => this.editEns(enseignant.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEns(enseignant.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEns(enseignant.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListEnseignantComponent;
