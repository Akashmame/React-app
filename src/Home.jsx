import './App.css';
import India from './Components/India';
import Article from './Components/Article';
import News from './Components/News';
import Footer from './Components/Footer';
import Slider from './Components/Img_slider'
import World from './Components/World'
import States from './Components/States'
import ScrollableTabsButtonForce from './Tab'


function Content() {


function send(){
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwunSCg4dv6spf-fDmMk4gMjvSDqaVfMsJ2GseAt-bjpD9HTS7ANN71FR-g9vfmUKhQ/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
                alert("Your Data📝 is Sending.... plz Wait💕")
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting📞 me..! I Will Contact You Soon...💖"))
                .catch(error => console.error('Error!', error.message))
            })

          }





          function gotop(){
            document.body.scrollTop = 0;
           
            document.documentElement.scrollTop=0;
        }

  return (
      <>


<Slider />
<div class="head">
                <h2>Covid-19 Outbreak in World / India</h2>
                <img src="img/corona2.png" alt="" />
            </div>
            <hr />

       
            <div class="updates">
               <img id ="notification" src="img/notification.png" alt="" /> 
              <marquee behavior="smooth" direction="left"> <h5> Stay Home🏡 Stay Safe💕</h5></marquee>
            </div>
<ScrollableTabsButtonForce />
 

 <div class="img_slider">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="https://www.cipla.com/sites/default/files/2020-09/covid-19-desktop-banner.jpg" alt="First slide">
                 </img> </div>
                  
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://prod-metropolisindia-bucket.s3.ap-south-1.amazonaws.com/images/compressed/730x399_covid_accurate_reports.jpg" alt="Third slide">
                 </img> </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="https://c5.rgstatic.net/m/44004776572857147/images/communityboard/covid19-social-cover.png" alt="Third slide">
                 </img> </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
        </div>

      <button onClick={gotop}><img src="img/top.png" alt=""  id="top" /></button> */}

        <div class="map">
    <h4>Covid-19 Pandemic in Different Regions in India Are Shown Below in the MAP : </h4>
    <img id="map" src="img/map.png" alt="" />
</div>


    <div class="contact">
        <h5>If you have any Query or any information about it then Feel free to ..</h5>
        <h3>Contact Me 📞💕</h3>
        Name: Mane Akash Ambadas,
        <br />
        G-mail :akash21mane21@gmail.com


        <div class="form">
            <form method="post" autocomplete="off" name="google-sheet">
                <h6>Name</h6>
                <input type="text" name="Name" placeholder="Enter your Name" />
                <h6>Email</h6>
                <input type="email" name="E-mail" placeholder="Enter your E-mail" />
                <h6>Phone</h6>
                <input type="phone" name="Phone" placeholder="Enter your Phone Number" />
                
                <h6>Message</h6>
                <textarea name = "Message" placeholder="Enter msg here !" name="ta" id="ta" cols="25" rows="3"></textarea>
                <button onClick={send} id="send">Send</button>
            </form>
        </div>

  
</div>





   <Footer />

      </>
   
  );
}

export default Content;
