import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './skills.css';
import SkillMeter from './skill-meter';

export const Skills= () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items:5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items:3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items:2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items:1
        }
      };
return (
        <section className='skill' id='skills'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='skill-bx wow ZoomIn'>
                            <h2>Skills</h2>
                            <p>Here are some of my skills that I have acquired through my experience and education in the field of software development.</p>
                            <Carousel responsive={responsive} infinite={true} className='owl-carousel owl-theme skill-slider'>
                                <SkillMeter title="Web Development" percentage={90} />
                                <SkillMeter title="Brand Identity" percentage={80} />
                                <SkillMeter title="Logo Design" percentage={85} />
                                <SkillMeter title="Cybersecurity" percentage={100} />
                            </Carousel> 

                        </div>
                    </div>
                </div>
            </div>
          
        </section>
    ); 
}