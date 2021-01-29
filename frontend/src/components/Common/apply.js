import React, {Component} from 'react';
import axios from 'axios';

export default class Apply extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            language: '',
            college :'',
            school:'',
            csy:'',
            cey:'',
            ssy:'',
            sey:'',
            rating:'',
            sop:'',
            title:'',
            date:null
        }
        console.log(this.props.match.params.title);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeLanguage = this.onChangeLanguage.bind(this);
        this.onChangeCollege = this.onChangeCollege.bind(this);
        this.onChangeSchool = this.onChangeSchool.bind(this);
        this.onChangeCsy = this.onChangeCsy.bind(this);
        this.onChangeCey = this.onChangeCey.bind(this);
        this.onChangeSsy = this.onChangeSsy.bind(this);
        this.onChangeSey = this.onChangeSey.bind(this);
        this.onChangeSop = this.onChangeSop.bind(this);
        this.onChangerating = this.onChangerating.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeName(event) {
        this.setState({ name: event.target.value });
    }

    onChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    onChangeLanguage(event) {
        this.setState({ language: event.target.value });
    }

    onChangeCollege(event) {
        this.setState({ college: event.target.value });
    }

    onChangeSchool(event) {
        this.setState({ school: event.target.value });
    }
    onChangeCsy(event) {
        this.setState({ csy: event.target.value });
    }

    onChangeCey(event) {
        this.setState({ cey: event.target.value });
    }
    onChangeCey(event) {
        this.setState({ cey: event.target.value });
    }
    onChangeSsy(event) {
        this.setState({ ssy: event.target.value });
    }
    onChangeSey(event) {
        this.setState({ sey: event.target.value });
    }
    onChangerating(event) {
        this.setState({ rating : event.target.value });
    }
    onChangeSop(event) {
        this.setState({ sop : event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            language: this.state.language,
            college :this.state.college,
            school:this.state.school,
            csy:this.state.csy,
            cey:this.state.cey,
            ssy:this.state.ssy,
            sey:this.state.sey,
            rating:this.state.rating,
            title: this.props.match.params.title,
            sop: this.state.sop,
            date: Date.now()
        }
        axios.post('http://localhost:4000/user/jobapplicant', newUser)
             .then(res => {alert("Created\t" + res.data.name);console.log(res.data)})
             ;

        this.setState({
            name: '',
            email: '',
            language: '',
            college :'',
            school:'',
            csy:'',
            cey:'',
            ssy:'',
            sey:'',
            rating:'',
            sop:'',
            date:null
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>name: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.name}
                               onChange={this.onChangeName}
                               />
                    </div>
                    <div className="form-group">
                        <label>language </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.language}
                               onChange={this.onChangeLanguage}
                               />
                    </div>
                    <div className="form-group">
                        <label>college </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.college}
                               onChange={this.onChangeCollege}
                               />
                    </div><div className="form-group">
                        <label>school </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.school}
                               onChange={this.onChangeSchool}
                               />
                    </div><div className="form-group">
                        <label>College start year </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.csy}
                               onChange={this.onChangeCsy}
                               />
                    </div><div className="form-group">
                        <label>College end year </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.cey}
                               onChange={this.onChangeCey}
                               />
                    </div><div className="form-group">
                        <label>School start year</label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.ssy}
                               onChange={this.onChangeSsy}
                               />
                    </div><div className="form-group">
                        <label>School end year </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.sey}
                               onChange={this.onChangeSey}
                               />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">SOP</label>
                        <textarea onChange={this.onChangeSop} value={this.state.Sop} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.email}
                               onChange={this.onChangeEmail}
                               />  
                    </div>
                    <div class="form-check">
                        <p>Rating&nbsp;&nbsp;(1->5)</p>
                    <label class="form-check-label" for="exampleRadios1">
                            <span>1</span>&nbsp;&nbsp;
                        </label>
                        <input  onChange={this.state.onChangerating} value="1" class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label class="form-check-label" for="exampleRadios1">
                            2&nbsp;&nbsp;
                        </label>
                         <input  onChange={this.state.onChangerating} value="2" class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <label class="form-check-label" for="exampleRadios1">
                            3&nbsp;&nbsp;
                        </label>
                        <input  onChange={this.state.onChangerating} value="3" class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <label class="form-check-label" for="exampleRadios1">
                            4&nbsp;&nbsp;
                        </label>
                        <input  onChange={this.state.onChangerating} value="4" class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <label class="form-check-label" for="exampleRadios1">
                            5&nbsp;&nbsp;
                        </label>
                        <input  onChange={this.state.onChangerating} value="5" class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}