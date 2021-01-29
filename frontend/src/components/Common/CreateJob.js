import React, {Component} from 'react';
import axios from 'axios';
import NavBar from '../templates/Navbar'

export default class CreateJob extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            email: '',
            name:'',
            noofposition:'',
            noofapplicant:'',
            deadline: '',
            language:'',
            typeofjob:'',
            duration:'',
            salary:'',
            date:null
        }

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNoofposition = this.onChangeNoofposition.bind(this);
        this.onChangeNoofapplicant = this.onChangeNoofapplicant.bind(this);
        this.onChangeDeadline = this.onChangeDeadline.bind(this);
        this.onChangeLanguage = this.onChangeLanguage.bind(this);
        this.onChangeTypeofjob = this.onChangeTypeofjob.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeSalary = this.onChangeSalary.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeTitle(event) {
        this.setState({ title: event.target.value });
    }
    onChangeEmail(event) {
        this.setState({ email: event.target.value });
    }
    onChangeName(event) {
        this.setState({ name: event.target.value });
    }
    onChangeNoofapplicant(event) {
        this.setState({ noofapplicant : event.target.value });
    }
    onChangeNoofposition(event) {
        this.setState({ noofposition: event.target.value });
    }
    onChangeTypeofjob(event) {
        this.setState({ typeofjob: event.target.value });
    }
    onChangeDuration(event) {
        this.setState({ duration: event.target.value });
    }

    onChangeSalary(event) {
        this.setState({ salary: event.target.value });
    }
    onChangeLanguage(event){
        this.setState({language:event.target.value});
    }
    onChangeDeadline(event){
        this.setState({deadline:event.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            title: this.state.title,
            noofposition:this.state.noofposition,
            noofapplicant:this.state.noofapplicant,
            deadline: this.state.deadline,
            language:this.state.language,
            typeofjob:this.state.typeofjob,
            duration:this.state.duration,
            salary:this.state.salary,
            date: Date.now()
        }
        console.log(newUser);
        axios.post('http://localhost:4000/user/createjob', newUser)
             .then(res => {alert("Created\t" + res.data.name);console.log(res.data)})
             ;

        this.setState({
            title: '',
            email: '',
            name:'',
            noofposition:'',
            noofapplicant:'',
            deadline: '',
            language:'',
            typeofjob:'',
            duration:'',
            salary:'',
        });
    }

    render() {
        return (
            <div>
                <NavBar />
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title :</label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.title}
                               onChange={this.onChangeTitle}
                               />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.email}
                               onChange={this.onChangeEmail}
                               />  
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.name}
                               onChange={this.onChangeName}
                               />  
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">type of</label>
                        <select onChange={this.onChangeTypeofjob} value={this.state.typeofjob} class="form-control" id="exampleFormControlSelect1">
                        <option>Full time</option>
                        <option>Part time</option>
                        <option>Work from Home</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Duration in months: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.duration}
                               onChange={this.onChangeDuration}
                               />  
                    </div>
                    <div className="form-group">
                        <label>No of applicant </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.noofapplicant}
                               onChange={this.onChangeNoofapplicant}
                               />  
                    </div>
                    <div className="form-group">
                        <label>No of position </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.noofposition}
                               onChange={this.onChangeNoofposition}
                               />  
                    </div>
                    <div className="form-group">
                        <label>Language </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.language}
                               onChange={this.onChangeLanguage}
                               />  
                    </div>
                    <div className="form-group">
                        <label>Deadline (in text yyyy-mm-dd:HH-MM-SS): </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.deadline}
                               onChange={this.onChangeDeadline}
                               />  
                    </div>
                    <div className="form-group">
                        <label>salary</label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.salary}
                               onChange={this.onChangeSalary}
                               />  
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}