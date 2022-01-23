import { servicesData } from "../../dummyData";
import Heading from "../heading/Heading";
import "./services.scss";
const Services = () => {
  return (
    <section className="services">
      <Heading title="سرویس ها" />
      <div className="services-container">
        {servicesData.map((item) => (
          <div key={item.id} className="service">
            <i className={item.icon}></i>
            <span>{item.title}</span>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
