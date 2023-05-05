import { BsFillHandbagFill,BsLightbulbFill,BsFillPersonFill,BsPinterest,BsGlobeAsiaAustralia,BsBrowserChrome } from "react-icons/bs";
import { FiInstagram,FiTwitter } from "react-icons/fi";
import '../Shella/Shella.css'

function Shella(){

    return(
         
        <>
           <section className="bgblack" >
              <div className='dflex'> 
                  <div> 
                     <h2 style={{marginLeft:'85px0', marginTop:"8px",marginLeft:"100px"}}> Shella</h2>
                  </div>
                  <div style={{display:"flex"}}>
                     <h3 className='icon'><BsFillHandbagFill/></h3>&nbsp;&nbsp;
                     <h3 className='icon'><BsFillPersonFill/></h3>&nbsp;&nbsp;
                     <h3 className='icon'><BsLightbulbFill/></h3>&nbsp;&nbsp;
                     <h5 className='bag'>bag (0)</h5> &nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
              </div> 
          </section>

          {/* Watches For Men */}

          <section className='container'>
           
            <div style={{marginTop:"100px"}}>
                <button className='btn1'>PreOrder</button>
                <h3 style={{fontWeight:"normal"}}>Hurry up! Sales Ends In</h3>
                <span>
                  <button>1</button>
                  <button>0</button>:
                  <button>1</button>
                  <button>1</button>:
                  <button>1</button>
                  <button>0</button>
                </span>
                <br></br>
                <h2 style={{fontSize:"40px",fontWeight:"normal"}}>WATCHES FOR MEN</h2>
                <div style={{display:'flex'}}> 
                  <p><del>78.00$</del></p>&nbsp;
                  <font style={{fontSize:"40px",fontWeight:"600",color:'maroon'}}>$45.00</font> 
                </div>
                <p style={{color:"maroon",marginTop:"o"}}>You Save: $33.00 (43%)</p>
                      <ul>
                        <li><p>12 months official warranty</p></li>
                        <li><p>Delivery in 1-2 days</p></li>
                        <li><p>Payment after receiving</p></li>
                        <li><p>Return or exchange within 30 days</p></li>
                      </ul>
                <h4>QUANTITY</h4>
                      <div>
                        <input className='whiteplace' type='placeholder' placeholder='1' ></input>&nbsp;
                         <button className='blackbtn'>Add To Cart</button>
                      </div>
                      <img className='setimg'  src={require('../image/watch4.webp')}></img>
            </div>
          </section>
          <section>
              <span className="center" >VIDEO REVIEV</span>
                <p className="para"> 
                   A great about us block helps builds trust between you and your customers. The more content you provide about you <br></br>&nbsp;&nbsp;&nbsp;and your business, the more confident people will be when purchasing from your store.
                </p>
               <video className="vid" width="750" height="430" controls="controls">https://youtu.be/LbGgAxY1lRY</video>
           </section>

           <section className="secmargin " >
            <span className="center"> WHY CHOOSE</span>
               <p className="para">
                  A great about us block helps builds trust between you and your customers. The more content you provide about you <br></br>&nbsp;&nbsp;&nbsp;and your business, the more confident people will be when purchasing from your store.
              </p>
              <div  className="secimg">
              <img src={require('../image/watch1.webp')}></img>
                <img  src={require('../image/watch2.webp')}></img>
                <img  src={require('../image/watch3.webp')}></img>
              </div>
              <div className="spacearound">
                <span>WATCH QUALITY GUARANTEE</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WATCHES ARE THOROUGHLY TESTED<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BEFORE SHIPPING</span>
                <span>PAYMENT FOR THE ORDER UPON RECEIPT</span>
              </div>
             <div className="spacearound spacewala">
               <p>An excellent for describing the main advantages of <br></br> the product.</p>
               <p>An excellent for describing the main advantages of <br></br> the product.</p>
               <p>An excellent for describing the main advantages of <br></br> the product.</p>
             </div>
           </section>
           <section className="sectionsticky">
             <div>
              
              <font className="center" style={{color:"white"}}>THE CHOICE OF REAL MAN</font>
              <br></br>
                 <p className="para" style={{color:"white"}}>
                   A great about us block helps builds trust between you and your customers. The more content you provide about you <br></br>&nbsp;&nbsp;&nbsp;and your business, the more confident people will be when purchasing from your store.
                 </p>
             </div>
           </section>
           <section className="secmargin container">
                 <div>
                   <img className="imgscale"  src={require('../image/watch4.webp')}></img>
                     <button className="btn">Pre-Order</button><br></br><br></br>
                      <font  style={{marginLeft:"600px"}}>Hurry up! Sales Ends In</font><br></br><br></br>
                 </div>
                  <div style={{marginLeft:"600px"}}>
                      <button>0</button>
                      <button>1</button>:
                      <button>1</button>
                      <button>1</button>:
                      <button>0</button>
                      <button>1</button>
                  </div>
                  <h2 style={{fontSize:"40px",fontWeight:"normal",marginLeft:"600px"}}>WATCHES FOR MEN</h2>
                <div style={{display:'flex',marginLeft:"600px"}}> 
                  <p><del>78.00$</del></p>&nbsp;
                  <font style={{fontSize:"40px",fontWeight:"600",color:'maroon',}}>$45.00</font> 
                </div>
                <p style={{color:"maroon",marginLeft:"600px"}}>You Save: $33.00 (43%)</p>
                      <ul style={{marginLeft:"600px"}}>
                        <li><p>12 months official warranty</p></li>
                        <li><p>Delivery in 1-2 days</p></li>
                        <li><p>Payment after receiving</p></li>
                        <li><p>Return or exchange within 30 days</p></li>
                      </ul>
                <h4 style={{marginLeft:"600px"}}>QUANTITY</h4>
                      <div style={{marginLeft:"600px"}}>
                        <input className='whiteplace' type='placeholder' placeholder='1' ></input>&nbsp;
                         <button className='blackbtn'>Add To Cart</button>
                      </div>
           </section>

           <section className="secmargin"> 

                <p className="center">WHY CHOOSE</p> 
                <p className="para" style={{color:"black"}}>
                   A great about us block helps builds trust between you and your customers. The more content you provide about you <br></br>&nbsp;&nbsp;&nbsp;and your business, the more confident people will be when purchasing from your store.
                 </p> 
                       {/* 1st img */}
                  <div style={{display:"flex", justifyContent:"space-around  "}}>
                      <img style={{height:"300px", borderRadius:"10px",marginTop:"10px"}} src={require('../image/sec1.webp')}></img>
                      <p style={{marginRight:"-450px",marginTop:"70px",fontSize:"25px"}}>WATCH QUALITY GUARANTEE</p>
                      <p style={{marginTop:"140px"}}>A great about us block helps builds trust between you and your customers.<br></br> The more content you provide about you and your business, the more<br></br> confident people will be when purchasing from your store.</p>
                  </div>
                   
                       {/* 2nd img */}

                  <div style={{display:"flex",justifyContent:"space-around",marginTop:"30px"}}>
                      <p style={{marginTop:"80px",fontSize:"25px",marginLeft:"80px"}}>MEN’S</p>
                      <p style={{marginTop:"140px",marginLeft:"-138px"}}>A great about us block helps builds trust between you and your customers.<br></br> The more content you provide about you and your business, the more<br></br> confident people will be when purchasing from your store.</p>
                      <img style={{height:"300px", borderRadius:"10px",marginTop:"10px",marginRight:"40px"}} src={require('../image/sec2.webp')}></img>
                  </div>
                  
           </section>
            
           <footer>
            <div style={{display:"flex",justifyContent:"space-around"}}>
              <p >© 2022 Shella Fashion Store Shopify. All Rights Reserved. Ecommerce Software by Shopify. Shopify Theme by Savan.</p>
              <p>
                <FiInstagram/>&nbsp;&nbsp;&nbsp;
                <FiTwitter/>&nbsp;&nbsp;&nbsp;
                <BsPinterest/>&nbsp;&nbsp;&nbsp;
                <BsGlobeAsiaAustralia/>&nbsp;&nbsp;&nbsp;
                <BsBrowserChrome/>
              </p>
            </div>
            
            </footer> 

        </>
    );   }
export default Shella;