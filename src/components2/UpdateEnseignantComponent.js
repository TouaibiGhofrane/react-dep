import React, { Component } from 'react'
import EnseignantService from '../services/EnseignantService';

class UpdateEnseignantComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            cin: '',
            firstName: '',
            lastName: '',
            
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateEnseignant = this.updateEnseignant.bind(this);
    }

    componentDidMount(){
        EnseignantService.getEnseignantById(this.state.id).then( (res) =>{
            let ens = res.data;
            this.setState({ cin: ens.cin,
                firstName: ens.firstName,
                lastName: ens.lastName
               
            });
        });
    }

    updateEnseignant = (e) => {
        e.preventDefault();
        let ens = {cin: this.state.emailId,firstName: this.state.firstName, lastName: this.state.lastName};
        console.log('ens => ' + JSON.stringify(ens));
        console.log('id => ' + JSON.stringify(this.state.id));
        EnseignantService.updateEnseignant(ens, this.state.id).then( res => {
            this.props.history.push('/enseignant/gestion/enseignants');
        });
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeCinHandler= (event) => {
        this.setState({cin: event.target.value});
    }

    cancel(){
        this.props.history.push('/enseignant/gestion/enseignants');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Teacher</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Cin : </label>
                                            <input placeholder="Cin" name="cin" className="form-control" 
                                                value={this.state.cin} onChange={this.changeCinHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                      

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEnseignantComponent
