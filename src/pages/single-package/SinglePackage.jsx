import { useParams } from "react-router-dom";
import { packagesData, tourDetailsData } from "../../dummyData";
import "./single-package.scss";
import AddressIcon from "../../icons/address.png";
import PhoneIcon from "../../icons/phone.png";

import Slider from "./Slider";
import { useEffect } from "react";

const SinglePackage = () => {
  const { id } = useParams();
  const tour = packagesData.find((item) => item.id === +id);
  const { title, duration } = tour;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="single-package">
      <Slider />
      <div className="tour-info-wrapper">
        <div className="tour-intro">
          <div className="tour-title">
            <h3>{title}</h3>
            <span>{duration}</span>
          </div>
          <div className="tour-item">
            <img width={30} src={AddressIcon} alt="" />
            <span>شروع تور از کاشان به سمت کویر</span>
          </div>
          <div className="tour-item">
            <img width={30} src={PhoneIcon} alt="" />
            <span>091333333333</span>
          </div>
        </div>
        <div className="details-wrapper">
          {tourDetailsData.map((item) => (
            <div className="details-item" key={item.id}>
              <span>{item.title}</span>
              <div className="icon">
                <i className={item.icon}></i>
              </div>
              <p>{item.info}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="more-info">
        <h3 className="title">اطلاعات بیشتر</h3>
        <div className="info">
          <span>اقامت</span>
          <p>یک شب در اقامتگاه بوم گردی</p>
        </div>
        <div className="info">
          <span>پذیرایی</span>
          <p>یک وعده شام و صبحانه به همراه دو میان وعده</p>
        </div>
        <div className="info">
          <span>لوازم ضروری</span>
          <div className="necessary-tools">
            <div>
              <i className="fas fa-check-circle"></i>
              کرم ضد آفتاب
            </div>
            <div>
              <i className="fas fa-check-circle"></i>
              عینک آفتابی
            </div>
            <div>
              <i className="fas fa-check-circle"></i>
              کفش پیاده روی
            </div>
            <div>
              <i className="fas fa-check-circle"></i>
              لباس گرم
            </div>
            <div>
              <i className="fas fa-check-circle"></i>
              کارت شناسایی
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePackage;
