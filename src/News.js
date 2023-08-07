import React, { Component } from 'react'
import Newsitem from './Newsitem'
import { v4 as uuidv4 } from 'uuid';
import Spinner from './Should'; 
import PropTypes from 'prop-types'
export default class News extends Component {
  capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
   }
  static defaultProps = {
    country:"in",
     pagesize: 8,
     category:"general"
  }
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }
   
  constructor(props){
    super(props);
    this.state={
      article: this.article,
      page:1,
      loading: false
    }
     document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsHub`;
  }
  //be83e2c3834e4aa3bf721a420875cd92
  async updatenews(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=be83e2c3834e4aa3bf721a420875cd92&page=${this.state.page}&pagesize=${this.props.pagesize}`
    this.setState({loading:true});
    let data= await fetch(url);
    let parseddata=await data.json();
    this.setState({loading:false});
    console.log(parseddata);
          this.setState({
            page:this.state.page+1,
            article:parseddata.articles,
            loading:false,
          })
  }
  async componentDidMount(){
    this.updatenews();
  }

   handleprevclick= async ()=>{
    this.setState({page:this.state.page-1});
    this.updatenews();
  }
   handlenextclick= async ()=>{
    this.setState({page:this.state.page+1});
    this.updatenews();
  }
  render() {
    return (
      <div>
       <div className="container my-3">
       <h2 className='text-center' >NewsHub - Top  {this.capitalizeFirstLetter(this.props.category)}   HeadLines { this.state.loading && <Spinner/>}
       </h2>
      
       <div className="row">
       { !this.state.loading && this.state.article && this.state.article.map((element)=> 
        <div className="col-md-4" key={uuidv4()}  >
        <Newsitem title={element.title?element.title:""}  dis={element.description?element.description:""} imageurl={element.urlToImage} newsurl={element.url}  author={element.author} time={element.publishedAt} source={element.source.name}/>
        </div>
        )} 
         <div className="container d-flex justify-content-between">
       <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevclick} > &larr; Previous</button>
       <button disabled={this.state.page>4}  type="button" className="btn btn-dark"  onClick={this.handlenextclick} >Next  &rarr; </button>
       </div>
       </div>
        </div>
      </div>
    )
  }
}
