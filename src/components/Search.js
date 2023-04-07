import React, { Component } from 'react'

export class Search extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         keyword: ''
      }
    }
    
    onChangeInput = (e) => {
        this.setState({
            keyword:e.target.value
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        
        if(this.state.keyword === ''){
            this.props.displayAlert('Anahat kelime giriniz' , 'danger');
        }else{
            this.props.searchUsers(this.state.keyword);
            this.setState({keyword:''});
        }
    }

    render() {
        return (
            <div className='container mt-3'>
                <form onSubmit={this.onSubmitForm} class="d-flex" role="search">
                    <input value={this.state.keyword} onChange={this.onChangeInput} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-primary" type="submit">Search</button>
                </form>

                {
                    this.props.showClearButton && <button onClick={this.props.clearResults} className='btn btn-danger mt-3 btn-block'>Sonuçları Temizle</button>
                }
            </div>
        )
    }
}

export default Search
