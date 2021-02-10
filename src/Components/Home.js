import React, { Component, setState} from 'react';
import SingleInstitute from "./SingleInstitute";
import "../index"
import '../App.css';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
        institutes:[ {
                    id: 0,
                    name: " ",
                    location: " ",
                    email: " ",
                    excerpt: " "
                }]
        };
    } 
    getData(){
        setTimeout(async() => {
            await fetch(`http://localhost:3000/institutes`)
        .then(Response => Response.json())
        .then((data)=> this.setState({institutes : data}
            // ,()=> console.log(this.state.institutes)
            ));
        }, 1000)
      }

    componentDidMount() {
        this.getData();
};

    render() {
   
    return ( 
        <div class="wrapper">
        <ul>
          <li>
            <input type="checkbox" id="list-item-1"></input>
            <label for="list-item-1" class="first">List of All institutes</label>
            <ul>
              
            {this.state.institutes.map((institute) => ( <
                   SingleInstitute key={institute}
                   institute={institute} />
               ))}
            </ul>
          </li>
 
        </ul>
        </div>
        );
    }
};

