import "./sidebar.scss"

const Sidebar = () => {
    return ( <aside className="sidebar">
        <h3>دسته بندی مقالات</h3>
        <ul className="categories">
            <li className="category">
                کویرنوردی
            </li>
            <li className="category">
                آفرود در کویر
            </li>
            <li className="category">
                گیاهان کویر
            </li>
            <li className="category">
                کویر مرنجاب
            </li>
            <li className="category">
                دریاچه نمک
            </li>
            <li className="category">
                حیات وحش
            </li>
            <li className="category">
                 طبیعت گردی
            </li>
            <li className="category">
                جاذبه ها
            </li>
        </ul>
    </aside> );
}
 
export default Sidebar;