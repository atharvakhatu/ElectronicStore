import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import '../css/common.css'

export default function App() {
  return (
    <MDBFooter className='margintop' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
       

        
        <section className='mb-4'>
          <p>
            <h1>About Us</h1>
            The objective is to maintain dominant position and further capture market share from the large unorganized refurbished segment of the IT Industry

Procure quality used-PCs from corporates and make them as good as new by refurbishing in order to re-sell the same with a unique warranty policy to SMBs (Small & Medium Businesses) as well as retail end users at substantially discounted prices compared to brand new PCs providing amazing value proposition to the consumers

Also build nationwide omni-channel presence in retail distribution, online & exclusive brick-and-mortar stores

Recycle
Aim to be the most trusted brand to provide the device buyback program.

EB provides clean, safe and secure removal of redundant IT assets. We help organizations reclaim the value, back from retired equipment and safely dispose off any regulated electronics waste.

Refurbish
Set up the best in class device refurbishment facility with international standard grading.

State-of-the-art manufacturing facilities in India & Dubai spread across 30K+ sq. ft area, equipped to provide manufacturing of critical components, assembly, testing and refurbishing services.

Reuse
Be the largest electronics player to drive the distribution of refurbished products.

EB holds Certifications necessary for Refurbishers
Extended Producer's Responsibility (EPR)
Issued by Central Pollution Control Board (CPCB)
Proper channelization of e-waste to ensure environmentally sound management of such waste

          </p>

          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h3 className='text-uppercase'>Links</h3>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/home' className='text-Purple'>
                    Home
                  </a>
                </li>
                
                 
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h3 className='text-uppercase'>Links</h3>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/categories' className='text-Purple'>
                    Categories
                  </a>
                </li>
               
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
             <h3 className='text-uppercase'>Links</h3>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/service' className='text-Purple'>
                    Service
                  </a>
                </li>
                
              </ul>
            </MDBCol>

            <MDBCol lg='3'>
              <h3 className='text-uppercase'>Links</h3>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/login' className='text-Purple'>
                    Sign_in
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
            
      
        </section>

      

        
      </MDBContainer>
        <div className='text-center p-3 margintop' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='http://localhost:3000/Home'>
          GadaElectronics.com
        </a>
      </div>
    </MDBFooter>
    
    
  );
}