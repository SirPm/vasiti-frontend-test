import React , { useState }  from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FooterBody from './components/footer-body/FooterBody'
import FooterHeader from './components/footer-header/FooterHeader'
import Header from './components/header/Header'
import SubHeader from './components/subheader/SubHeader'
import Success from './components/success/Success'
import TestimonialHeader1 from './components/testimonial-header-1/TestimonialHeader1'
import TestimonialHeader2 from './components/testimonial-header-2/TestimonialHeader2'
import TestimonialsBody1 from './components/testimonials-body-1/TestimonialsBody1'
import TestimonialsBody2 from './components/testimonials-body-2/TestimonialsBody2'
import UserTestimonial from './components/user-testimonial/UserTestimonial'
import VendorExperience from './components/vendor-experience/VendorExperience'

const App = () => {
  const [ testimonial, setTestimonial ] = useState({
    image: '',
    firstName: '',
    lastName: '',
    story: '',
    status: '',
    city: ''
  });

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>            
            <Header />
            <div id="subHeaderOuterDiv">
              <SubHeader />
            </div>
            <TestimonialHeader1 />
            <div id="testimonialHeader2OuterDiv">
              <TestimonialHeader2 />
            </div>
            <TestimonialsBody1 />
            <div id="vendorExperienceOuterDiv">
              <VendorExperience />
            </div>
            <TestimonialsBody2 />
            <footer id="footer">
              <FooterHeader />
              <FooterBody />
            </footer>
          </Route>
          <Route path="/testimonial" exact>
            <UserTestimonial testimonial={testimonial} setTestimonial={setTestimonial} />
          </Route>
          <Route path="/success" exact>
            <Success />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
