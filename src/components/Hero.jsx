
import AussieMate from "../assets/yardspecial.png";
import milkshake from "../assets/milkShake.png"


export const Hero = () => {

  return (
  <div className="car">
      <div className="car-img">
        <img src={AussieMate} alt="" className="slide-img"/>
        <img src={AussieMate} alt="" className="slide-img"/>
        <img src={AussieMate} alt="" className="slide-img"/>
        <img src={AussieMate} alt="" className="slide-img"/>
        <img src={milkshake} alt="" className="slide-img"/>
      </div>
  </div>
  );
}

export default Hero;
