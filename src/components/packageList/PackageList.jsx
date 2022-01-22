import { packagesData } from "../../dummyData";
import Heading from "../heading/Heading";
import "./package-list.scss";
import PackageItem from "./PackageItem";

const PackageList = () => {
  return (
    <div className="package-list">
      <Heading title="پکیج ها" />
      <div className="packages-container">
        {packagesData.map((item) => (
            <PackageItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PackageList;
