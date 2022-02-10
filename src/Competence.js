import React from "react";
import "./Competence.css";
import Blog1 from './img/react.png';
import Blog2 from './img/uml.png';
import Blog3 from './img/c.png';

function Competence() {
  return (
    <div className="blog component__space" id="Competence">
      <div className="heading">
        <h1 className="heading">Compétences</h1>
        <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
      </div>
      <div className="container">
          <div className="row">
              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box" >
                             <img src={Blog1} alt=""  className="project__img" />
                         </div>
                         {/* <div className="mask__effect"></div> */}
                     {/* </div>
                      <div className="Blog__meta absolute"> */}
                         <h5 className="project__text">REACT JS</h5>
                         <h4 className="project__text"> bibliothèque JavaScript libre </h4>
                         {/* <a href="#" className="blog project__btn btn">Read More</a> */}
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog2} alt="" className="project__img" />
                         </div>
                         {/* <div className="mask__effect"></div> */}
                     {/* </div>
                      <div className="Blog__meta absolute"> */}
                         <h5 className="project__text">UML</h5>
                         <h4 className="project__text">Langage de Modélisation Unifié</h4>
                         {/* <a href="#" className="blog project__btn btn">Read More</a> */}
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog3} alt="" className="project__img" />
                         </div>
                         {/* <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute"> */}
                         <h5 className="project__text">C#</h5>
                         <h4 className="project__text">angage de programmation orientée objet</h4>
                         {/* <a href="#" className="blog project__btn btn">Read More</a> */}
                       </div>
                 </div>
              </div>

          </div>
      </div>
    </div>
  );
}

export default Competence;
