
import React from 'react';
import Button from './Button.jsx';
import './Calculator.css';
import {Link} from "react-router-dom";

class Calculator extends React.Component 
{

    constructor() {
        super();
        this.state = {
          question: '',
          answer: ''
        }
      
        this.handleClick = this.handleClick.bind(this);
      }


render()
{
    return (
    <React.Fragment>
        <div className="mainCalc">

            <Link to = {'/'}>
            <button className='ProfileButton'>Go to Profile</button>
            </Link>

            <Link to = {'/cartoon'}>
            <button className='apiButton'>Go to Ricky and Morky</button>
            </Link>

            <h1>Calculator</h1>
            

            <div className="screen">
                <div className="screen-row">
                    <input type="text" readOnly value={this.state.answer}/>
                </div>
                <div className="screen-row">
                    <input type="text" readOnly value={this.state.question}/>
                </div>
            </div>

            <div className="button-row">
                <Button label={'X'} handleClick = {this.handleClick}/>
                <Button label={'C'} handleClick = {this.handleClick}/>
                <Button label={'.'} handleClick = {this.handleClick}/>
                <Button label={'/'} handleClick = {this.handleClick}/>
            </div>
            <div className="button-row">
                <Button label={'7'} handleClick = {this.handleClick}/>
                <Button label={'8'} handleClick = {this.handleClick}/>
                <Button label={'9'} handleClick = {this.handleClick}/>
                <Button label={'*'} handleClick = {this.handleClick}/>
            </div>
            <div className="button-row">
                <Button label={'4'} handleClick = {this.handleClick}/>
                <Button label={'5'} handleClick = {this.handleClick}/>
                <Button label={'6'} handleClick = {this.handleClick}/>
                <Button label={'-'} handleClick = {this.handleClick}/>
            </div>
            <div className="button-row">
                <Button label={'1'} handleClick = {this.handleClick}/>
                <Button label={'2'} handleClick = {this.handleClick}/>
                <Button label={'3'} handleClick = {this.handleClick}/>
                <Button label={'+'} handleClick = {this.handleClick}/>
            </div>
            <div className="button-row">
                <Button label={'0'} handleClick = {this.handleClick} />
                <Button label={'='} handleClick = {this.handleClick}/>
            </div>
        </div>
    </React.Fragment>
    );
  }

  
handleClick(event){


    const value = event.target.value;

    switch (value) {
      case '=': 
      {
  		if(this.state.question!=='')
        {
    		var ans='';
    		try
            {
                ans = eval(this.state.question);
            }
            catch(err)
            {
                this.setState({answer: "Math Error"});
            }
            if(ans===undefined)
                this.setState({answer: "Math Error"});
            else
                this.setState({ answer: ans , question: ''});
            break;
    	}
        break;
      }
      
      case 'C': {
        this.setState({ question: '', answer: '' });
        break;
      }

	  case 'X': {
	    var str = this.state.question;
  		str = str.substr(0,str.length-1);
  		this.setState({question: str});
  		break;
	  }

    default: {
        this.setState({ question: this.state.question += value})
        break;
      }
    }
  }

















}

export default Calculator;