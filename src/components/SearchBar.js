import React,{Component} from 'react'

class SearchBar extends Component{
  state={term:''}
  onFormChange=(e)=>{
    e.preventDefault()

    this.props.onSubmit(this.state.term)
  }
  
  render(){
    return<div className="ui segment">
      <form className="ui form" onSubmit={this.onFormChange}>
        <div className="ui item">
          <label>Search for a movie</label>
        <input type="text" value={this.state.term} onChange={(e)=>this.setState({term:e.target.value})} />
        </div>
      </form>
    </div>
  }
}

export default SearchBar;