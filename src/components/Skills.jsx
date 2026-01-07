import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import leftArrow from '../assets/img/arrow1.svg';
import rightArrow from '../assets/img/arrow2.svg';
import powerbiLogo from '../assets/img/powerbi-logo.svg';
import programmingLogo from '../assets/img/programming-logo.svg';
import sqlLogo from '../assets/img/sql-logo.svg';
import webDevLogo from '../assets/img/web-dev-logo.svg';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Paragraph</p>

                            <Carousel responsive={responsive} infinite={true} clasName="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={webDevLogo} alt="image" className="skill-logo" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={programmingLogo} alt="image" className="skill-logo" />
                                    <h5>Programming (Python, Java, C++)</h5>
                                </div>
                                <div className="item">
                                    <img src={powerbiLogo} alt="image" className="skill-logo" />
                                    <h5>PowerBI</h5>
                                </div>
                                <div className="item">
                                    <img src={sqlLogo} alt="image" className="skill-logo"/>
                                    <h5>SQL and PL/SQL</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}