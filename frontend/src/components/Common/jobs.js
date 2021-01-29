import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Apply from "./apply";
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

import SearchIcon from "@material-ui/icons/Search";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

class Jobs extends Component {
    
    constructor(props) {
        super(props);
        this.state = {users: [],sortedUsers: [], sortName:true};
        this.renderIcon = this.renderIcon.bind(this);
        this.sortChange = this.sortChange.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/user/jobs')
             .then(response => {
                 console.log(response.data);
                 this.setState({users: response.data, sortedUsers:response.data, searchText:''});
             })
             .catch(function(error) {
                 console.log(error);
                //  console.log("errorrrr");    
             })
    }

    sortChange(){

        var array = this.state.users;
        var flag = this.state.sortName;
        array.sort(function(a, b) {
            if(a.date != undefined && b.date != undefined){
                return (1 - flag*2) * (new Date(a.date) - new Date(b.date));
            }
            else{
                return 1;
            }
          });
        this.setState({
            users:array,
            sortName:!this.state.sortName,
        })
    }

    renderIcon(){
        if(this.state.sortName){
            return(
                <ArrowDownwardIcon/>
            )
        }
        else{
            return(
                <ArrowUpwardIcon/>
            )            
        }
    }

    deletejob(title){
        console.log(title);
        axios.delete('http://localhost:4000/user/deletejob/'+ title )
        .then(response => {
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
           //  console.log("errorrrr");    
        })
    }
    customFunction(e){
        console.log(e.target.value);
        this.setState({
            searchText:e.target.value
        })
    }

    render() {
        return (
            <div>
                <Grid container>
                <Grid item xs={12} md={3} lg={3}>
                    <List component="nav" aria-label="mailbox folders">
                        <ListItem text="true">
                                        <h3>Filters</h3>
                        </ListItem>
                    </List>
                </Grid>
                    <Grid item xs={12} md={9} lg={9}>
                    <List component="nav" aria-label="mailbox folders">
                        <TextField 
                        id="standard-basic" 
                        label="Search" 
                        fullWidth={true}   
                        InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            )}}
                        // onChange={customFunction}
                        />
                    </List>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} md={3} lg={3}>
                        <List component="nav" aria-label="mailbox folders">

                            <ListItem button>
                                <form noValidate autoComplete="off">
                                    <label>Salary</label>
                                    <TextField id="standard-basic" label="Enter Min" fullWidth={true} />
                                    <TextField id="standard-basic" label="Enter Max" fullWidth={true}/>
                                </form>                                                                
                            </ListItem>
                            <Divider />
                            <ListItem button divider>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={this.state.users}
                                    getOptionLabel={(option) => option.name}
                                    style={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Select Names" variant="outlined" />}
                                />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={9} lg={8}>
                        <Paper>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                            <TableCell> Sr No.</TableCell>
                                            <TableCell> <Button onClick={this.sortChange}>{this.renderIcon()}</Button>Date</TableCell>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Email</TableCell>
                                            <TableCell>Title</TableCell>
                                            <TableCell>noofposition</TableCell>
                                            <TableCell>noofapplicant</TableCell>
                                            <TableCell>deadline</TableCell>
                                            <TableCell>language</TableCell>
                                            <TableCell>typeofjob</TableCell>
                                            <TableCell>duration</TableCell>
                                            <TableCell>salary</TableCell>
                                            <TableCell>Apply here</TableCell>
                                            <TableCell>Delete link</TableCell>
                                            
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {
                                this.state.users.map((user,ind) => (
                                        <TableRow key={ind}>
                                            <TableCell>{ind}</TableCell>
                                            <TableCell>{user.date}</TableCell>
                                            <TableCell>{user.name}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>{user.title}</TableCell>
                                            <TableCell>{user.noofposition}</TableCell>
                                            <TableCell>{user.noofapplicant}</TableCell>
                                            <TableCell>{user.deadline}</TableCell>
                                            <TableCell>{user.language}</TableCell>
                                            <TableCell>{user.typeofjob}</TableCell>
                                            <TableCell>{user.duration}</TableCell>
                                            <TableCell>{user.salary}</TableCell>
                                            <TableCell><Link to={`/Apply/${user.title}`}>Apply now </Link></TableCell>
                                            <TableCell><button onClick={() => this.deletejob(user.title)}></button></TableCell>

                                        </TableRow>
                                ))
                                }
                                </TableBody>
                            </Table>
                        </Paper>               
                    </Grid>    
                </Grid>            
            </div>
        )
    }
}

export default Jobs;