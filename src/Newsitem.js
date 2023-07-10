import React, { Component } from 'react'

export default class Newsitem extends Component {
  
  render() {
    let {title,dis,imageurl,newsurl,author,time,source}= this.props;
    return (
      <div className="my-3" >
        <div className="card" style={{width: "18rem"}}>
          <img src={imageurl?imageurl:"https://static.timesofisrael.com/www/uploads/2023/06/Jenin5-1024x640.jpg"} className="card-img-top" alt="..."/>
          <div className="card-body">  
            <h5 className="card-title">{title?title:"Not Found"}  
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
           {source}
          <span class="visually-hidden">unread messages</span>
        </span>
            </h5>
            <p className="card-text">{dis?dis:"Not Found" }</p>
            <footer class="blockquote-footer">By {author?author:"unKnown"}<cite title="Source Title">  on { new Date(time).toGMTString()}</cite></footer>
            <a href={newsurl?newsurl:"https://www.timesofisrael.com/palestinian-killed-as-heavy-clashes-erupt-during-idf-raid-in-jenin/</div>"} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div> 
          </div>
      </div>
    )
  }
}
