import React, { Component } from 'react';
import moment from 'moment'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from './logo1.svg';
import './App.css';
import Axios from 'axios';
import {PostContainer} from './components/PostContainer/PostContainer'
import uuid from 'uuid'
import { CanvasComponent } from './layouts/Canvas';
import PostFull from './components/Post/PostFull';
import CreatePost from './CreatePost/CreatePost';

class App extends Component {
  state = {
    quickLinks: [],
    location: ''
}
/**
 * 
 * @param {string} slug 
 */

componentDidMount() {
  
  
 Axios.get('/links.json').then(v=>{
  
  this.setState({quickLinks:v.data})

 
})



}
goToPost =(slug) => {
 
 
  this.setState({location:slug})
 
}
  render() {
  
    return(
      <Router>
        <div>
       
            
        <Route exact path="/" render={props =>(
              <React.Fragment>
                
        
     
               <CanvasComponent/>
     
               <header className="header" >
                <div className= 'logo'><img style={{width:'100px'}} alt="logo" src={logo}/>
                <h2 id="siteHead">ColourfulLanguage</h2></div>

                <nav className="nav">
                    <li className="nav-item">
                    <Link to="/" className="nav-link" href="lion">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/postlist" className="nav-link" href="lion" >About</Link>
                    </li>
                </nav>
            </header>

  <div className="hero fh">
          <div className="intro"  style={{display:'inline-block'}}>
          <div className = 'logo' ><img style={{width:'300px'}} alt="logo" src={logo}/>
          <h1 className="white">COLORFUL LANGUAGE</h1></div>
            <div id="text-intro"><p className="story" style={{color:'white'}}>{"Lorem ipsum, dolor sit amet consectetur adipisicing elit.".toUpperCase()}</p></div>
            <div className="btndiv">
              <a href="/someplace" className="btn btn-primary">Login</a><Link to="/create-post"  className='btn btn-dark' style={{color:'white'}}>Add Post</Link>
            </div>
          </div>
  </div>


  <div className="next ">
    <div className="container" style={{border:".5px solid rgba(0,0,0,.125)", borderTop:"none",borderBottom:"none"}}>
    <div className="row">
        <div className="card-div">
          <PostContainer compFun={this.goToPost}/>
     
  
        </div>
        <div className="adDiv">
          <ul className="list-group">
            {this.state.quickLinks.map(i=> (<li className="list-group-item" key={uuid()}>{i}</li>))}
          </ul>
        </div>
        </div>

        </div>
  </div>
  </React.Fragment>
        )}/>
    <Route path="/posts" render={props=>(<PostFull pageLink={this.state.location}/>)}/>
   
    <Route path="/postlist" render={props=> ( 
    
      <div className="next">
    
    <div className="container" style={{backgroundColor:"inherit",  border:" .05px solid rgba(0,0,0,.125)", borderTop:"none",borderBottom:"none"}}>
    <div className="row">
        <div className="card-div" >
          <PostContainer compFun={this.goToPost}/>
     
  
        </div>
        <div className="adDiv">
          <ul className="list-group">
            {this.state.quickLinks.map(i=> (<li className="list-group-item" key={uuid()}>{i}</li>))}
          </ul>
        </div>
        </div>

        </div>
       
  </div>)}/>

  <Route path="/create-post" render={props=> (
    <React.Fragment>
      <CanvasComponent/>
      <CreatePost/>
    </React.Fragment>

  )} />
  {/* <!-- Site footer --> */}
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          
          <img style={{width:'200px'}} alt="logo" src={logo}/>
          <p>
            Some content like pictures on this blog are obtained from third parties like &nbsp;
             <a className="underline" href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1851071">Pixabay</a></p>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>&amp;</h6>
          <ul className="footer-links">
          
          </ul>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li><a href="http://scanfcode.com/about/">About Us</a></li>
            <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
            <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
            <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
            <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
          </ul>
        </div>
      </div>
      <hr/>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">Copyright &copy; {moment().format('YYYY')} All Rights Reserved by &nbsp;
       <Link to="/">KRC Media</Link>.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li><a target="blank" className="facebook" href="https://facebook.com"><i className="fa fa-facebook"></i></a></li>
            <li><a target="blank" className="twitter" href="https://twitter.com"><i className="fa fa-twitter"></i></a></li>
            <li><a target="blank" className="dribbble" href="https://dribble.com"><i className="fa fa-dribbble"></i></a></li>
            <li><a target="blank" className="linkedin" href="https://linkedinS.com"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
</footer>

  </div>
</Router>


    )
  }
}

export default App;
