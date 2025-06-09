import { useSelector } from "react-redux";
import CategoryComponent from "../../components/CategoryComponent/CategoryComponent";

const HomePage = () => {
    const categories = useSelector(s => s.reducer.categories);
    return (
        <div>
            {
                categories.map(item=>{
                    return <CategoryComponent category={item} limit={4} key={item} />
                })
            }
            
        </div>
    );
}

export default HomePage;
