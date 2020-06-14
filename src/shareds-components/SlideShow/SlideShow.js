import React from 'react'
// import PropTypes from 'prop-types'
import './slider.css';
import $ from 'jquery'
const SlideShow = ({arrImage, slideIndex, ...props}) => {

    if (!slideIndex) {
        return null;
    }
    // Next/previous controls
    const plusSlides = (n)=> {
        showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    const currentSlide = (n)=> {
        showSlides(slideIndex = n);
    }
    
    const showSlides = (n)=> {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        let captionText = document.getElementById("caption");
        
        if (n > slides.length) {slideIndex = 1}
        
        if (n < 1) {slideIndex = slides.length}
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
    }
    
    $(document).ready(()=>{
        if (slideIndex < 1) { 
            slideIndex = 1;
        }
       
        showSlides(slideIndex);
    })
    
    return (
        <div className="mycontainer container-slide-55">
            {/* Full-width images with number text */}

            {arrImage.map(img=>{
                return img.hasImage === true ? (
                    <div className="mySlides" key={img._id}>
                        <div className="numbertext">1 / 6</div>
                        <img src={img.base64} style={{width: '100%'}} alt=""/>
                    </div>
                ) : null
            })

            }

            {/* Next and previous buttons */}
            <a href="#/" className="prev" onClick={(e)=>{
                e.preventDefault()
                plusSlides(-1)
            }}>❮</a>
            <a href="#/" className="next" onClick={(e)=>{
                e.preventDefault()
                plusSlides(1)
            }}>❯</a>

            {/* Image text */}
            <div  className="caption-container">
                <p id="caption" />
            </div>

            {/* Thumbnail images */}
            <div className="myrow">

            {arrImage.map((img, i)=>{
                return img.hasImage === true ? (
                    <div className="mycolumn" key={img._id}>
                        <img className="demo cursor responsive center" src={img.base64} style={{width: '100%'}} onClick={()=>{
                            currentSlide(i+1)
                        }} alt="The Woods" />
                    </div>
                ) : null
                })
            }
            </div>
        </div>
    )
}

// SlideShow.propTypes = {

// }

export default SlideShow;

/* <div className="mySlides">
    <div className="numbertext">1 / 6</div>
    <img src="/assets/dist/img/prod-1.jpg" style={{width: '100%'}} />
</div>

<div className="mySlides">
    <div className="numbertext">2 / 6</div>
    <img src="/assets/dist/img/prod-2.jpg" style={{width: '100%'}} />
</div>
<div className="mySlides">
    <div className="numbertext">3 / 6</div>
    <img src="/assets/dist/img/prod-3.jpg" style={{width: '100%'}} />
</div>
<div className="mySlides">
    <div className="numbertext">4 / 6</div>
    <img src="/assets/dist/img/prod-4.jpg" style={{width: '100%'}} />
</div>
<div className="mySlides">
    <div className="numbertext">5 / 6</div>
    <img src="/assets/dist/img/prod-5.jpg" style={{width: '100%'}} />
</div>
<div className="mySlides">
    <div className="numbertext">6 / 9</div>
    <img src="/assets/images/iphone_11.png" style={{width: '100%'}} />
</div>

<div className="mySlides">
    <div className="numbertext">7 / 9</div>
    <img src="/assets/dist/img/prod-1.jpg" style={{width: '100%'}} />
</div>
<div className="mySlides">
    <div className="numbertext">8 / 9</div>
    <img src="/assets/dist/img/prod-2.jpg" style={{width: '100%'}} />
</div>
<div className="mySlides">
    <div className="numbertext">9 / 9</div>
    <img src="/assets/dist/img/prod-3.jpg" style={{width: '100%'}} />
</div> */








/* <div className="mycolumn">
    <img className="demo cursor responsive center" src="/assets/dist/img/prod-1.jpg" style={{width: '100%'}} onClick={()=>{
        currentSlide(1)
    }} alt="The Woods" />
</div>
<div className="mycolumn">
    <img className="demo cursor responsive" src="/assets/dist/img/prod-2.jpg" style={{width: '100%'}} onClick={()=>{
        currentSlide(2)
    }} alt="Cinque Terre" />
</div>
<div className="mycolumn">
    <img className="demo cursor responsive" src="/assets/dist/img/prod-3.jpg" style={{width: '100%'}} onClick={()=>{
        currentSlide(3)
    }} alt="Mountains and fjords" />
</div>
<div className="mycolumn">
    <img className="demo cursor responsive" src="/assets/dist/img/prod-4.jpg" style={{width: '100%'}} onClick={()=>{
        currentSlide(4)
    }} alt="Northern Lights" />
</div>
<div className="mycolumn">
    <img className="demo cursor responsive" src="/assets/dist/img/prod-5.jpg" style={{width: '100%'}} onClick={()=>{
        currentSlide(5)
    }} alt="Nature and sunrise" />
</div>
<div className="mycolumn">
    <img className="demo cursor responsive" src="/assets/images/iphone_11.png" style={{width: '100%'}} onClick={()=>{
        currentSlide(6)
    }} alt="Snowy Mountains" />
</div>


<div className="mycolumn">
    <img className="demo cursor responsive center" src="/assets/dist/img/prod-1.jpg" style={{width: '100%'}} onClick={()=>{
        currentSlide(7)
    }} alt="The Woods" />
</div>

<div className="mycolumn">
    <img className="demo cursor responsive center" src="/assets/dist/img/prod-2.jpg" style={{width: '100%'}} onClick={()=>{
        currentSlide(8)
    }} alt="The Woods" />
</div>

<div className="mycolumn">
    <img className="demo cursor responsive center" src="/assets/dist/img/prod-3.jpg" style={{width: '100%'}} onClick={()=>{
        currentSlide(9)
    }} alt="The Woods" />
</div> */

