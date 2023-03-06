import Vector1 from './Vector1.svg';
import Vector2 from './Vector2.svg';
import Vector3 from './Vector3.svg';
import WebsiteVector1 from './WebsiteVector1.svg';
import WebsiteVector2 from './WebsiteVector2.svg';
import WebsiteVector3 from './WebsiteVector3.svg';
import interests from './interests.svg';


function Start() {
    return (

        <div>

            <div className="Circle Circle1"></div>
            <div className="Circle Circle2"></div>
            <img src={require("./Sharat.png")} alt="Sharat" className="StarterImage" />



            <div className="Circle interestcircle"></div>
            <div className="subheadsquare"></div>
            <p className="heading">INTERESTS</p>
            <p className="subheading">what I'm into, lol</p>
            <img src={Vector2} alt="prop" className="Vectors" style={{ top: '476.22px' }} />
            <img src={Vector3} alt="prop" className="Vectors" style={{ top: '456.22px' }} />
            <img src={Vector1} alt="prop" className="Vectors" style={{ top: '436.22px' }} />

            <div className="decor">
                <div className="decorstuff"></div>
            </div>
            <p className="Description">I am a 21-year-old college student pursuing my interests in the fields of UI/UX,
                content writing, software development, and machine learning,
                enthusiastic about building
                products that make a world of difference.</p>

            <p className='hider'>Liquid poetry is seldom appreciated
                in a world of solid paragraphs.</p>
            <div className="pendulum3 pendulums"></div>
            <div className="pendulum2 pendulums"></div>
            <div className="pendulum1 pendulums"></div>


            <img src={interests} alt="prop" className="interests" />

            <img src={WebsiteVector3} alt="prop" className="Vectors" style={{ top: '2062px' }} />
            <img src={WebsiteVector2} alt="prop" className="Vectors" style={{ top: '2042px' }} />
            <img src={WebsiteVector1} alt="prop" className="Vectors" style={{ top: '2012px' }} />

            <div className='websiteholder'></div>
            <div className='websitelinkholder'></div>
            <p className='websiteintro'>For your perusal, my collection of short stories and blog posts over the years</p>
            <a className='websitelink' href="https://sharatjacob2.github.io">sharatjacob2.github.io</a>






            <div className='footer'>
                <div className='Circle finalelp1'></div>
                <div className='Circle finalelp2'></div>
                <div className='Circle finalelp3'></div>
                <p className='footertext'>CIRCA SHARAT 2023</p>
            </div>

        </div>
    )

}

const circle1 = document.querySelector('.pendulum1');
const circle2 = document.querySelector('.pendulum2');
const circle3 = document.querySelector('.pendulum3');
const circle4 = document.querySelector('.decorstuff');
const box = document.querySelector('.interests');
// const teller = document.querySelector('.websiteholder');


let lastScrollY = window.scrollY;

function handleScroll() {
    const scrollY = window.scrollY;
    console.log(box);
    if (box != null && scrollY != null && lastScrollY != null) {

        if (scrollY > lastScrollY) {
            box.style.transform = `translateX(-50px)`;
            circle1.style.transform = 'rotate(-60deg) translateX(10px) translateY(450px) ';
            circle2.style.transform = 'rotate(-60deg) translateX(310px) translateY(500px) ';
            circle3.style.transform = 'rotate(-60deg) translateX(560px) translateY(550px) ';
            circle4.style.offsetDistance = '100%';

        } else if (scrollY < lastScrollY) {
            circle1.style.transform = 'rotate(60deg) translateX(-250px) translateY(-250px) ';
            circle2.style.transform = 'rotate(60deg) translateX(-250px) translateY(-250px) ';
            circle3.style.transform = 'rotate(60deg) translateX(-250px) translateY(-250px) ';
            circle4.style.offsetDistance = '0%';
            box.style.transform = `translateX(50px)`;
        }
        // if ((isElementInViewport(teller))) {
        //     circle1.style.transform = 'rotate(-60deg) translateX(10px) translateY(450px) scale(0.5)';
        // }
        // else {
        //     circle1.style.transform = 'rotate(60deg) translateX(-250px) translateY(-250px) scale(2)';
        // }
        lastScrollY = scrollY;
    }
}



window.addEventListener('scroll', handleScroll);

// function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0
//         // rect.left >= 0 &&
//         // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }


export default Start;