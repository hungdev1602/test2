/* eslint-disable react/prop-types */
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Result = ({ title }) => {
  return (
    <>
      <a href={`https://en.wikipedia.org/wiki/${title}`} target="_blank" className="cardLink" data-aos="fade-down">
        <div className="">
          <h5 className="heading">{title}</h5>
        </div>
      </a>
    </>
  )
}

export default Result