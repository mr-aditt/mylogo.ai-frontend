import React from 'react'
import NavLeft from '../component/nav-left';
import smart_img from '../assets/smart.png'
import hero_img from '../assets/hero-illustration.png'
// import fast_img from '../assets/smart.jpg'
// import free_img from '../assets/smart.jpg'
// import fun_img from '../assets/smart.jpg'
import fast_img from '../assets/fast.png'
import free_img from '../assets/free.png'
import fun_img from '../assets/fun.png'
import { Link } from "react-router-dom";
import Footer from '../component/footer';

export default function Home() {
  return (
    <div className="App">
      <nav className="flex-r">
        <NavLeft />
        <div className="flex-r">
          <Link to='/users/signin'><button className="btn-primary">Sign in</button></Link>
        </div>
      </nav>
      <div className="hero">
        <div className="hero-content">
          <span className="serif  primary">Create logo with A.I. in 2mins</span>
          <span>
            <span className="gradient">mylogo.ai</span><span> helps you save time, cut costs and simplify your workflow.</span>
            <div><Link to='/users/signup'><button className="btn-secondary">Get Started</button></Link></div>
          </span>
        </div>
        <div className="hero-illustration">
          <img src={hero_img} alt="" />
        </div>
      </div>

      <div className="pros">
        <span>mylogo.ai is smart, fast, free and fun!</span>
        <div>
          <img src={smart_img} alt="SMART" className="float-r" />
          <h4>1. It's Smart</h4>
          <p>
            By leaving research and design decisions to machine learning, mylogo.ai is able to create beautiful
            brand ideas and logo mockups that will appeal to both you and your target audience.
          </p>
        </div>
        <div>
          <img src={fast_img} alt="" className="float-l" />
          <h4>2. It's Fast</h4>
          <p>
            Don’t want to spend weeks going back and forth on logo drafts with a designer? Too busy to spend
            hours trying to figure out how to use design software like Illustrator or Photoshop? mylogo.ai can
            have a designer-quality image ready for you in minutes, with no design experience needed on your end.
          </p>
        </div>
        <div>
          <img src={free_img} alt="" className="float-r" />
          <h4>3. It's Free</h4>
          <p>
            It’s okay if you don’t have hundreds or thousands of dollars to spend on a graphic designer. Using
            our AI-powered logo maker will give you a high-quality logo for a fraction of the cost. Isn’t that great ?
          </p>
        </div>
        <div>
          <img src={fun_img} alt="" className="float-l" />
          <h4>4. It's Fun</h4>
          <p>
            With a human designer, you often have to negotiate what you want or get on the same page with what
            they want to do. It can also be difficult to explain what you’re looking for. An AI-powered logo maker is
            different because you can make logo revisions on your own and see how your ideas look.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
