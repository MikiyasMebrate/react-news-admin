import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import Loading from "../components/Loading.jsx"
import ViewBlogDetail from "../components/ui/ViewBlogDetail.jsx";

const BlogDetail = () => {
    const {blogId} = useParams()

    const [data, pending, error] = useFetch(`http://127.0.0.1:8000/news-single/${blogId}/`)


    return (
        <>
        {error && <h1 className="text-danger text-center">{error}</h1>}
        {pending && <Loading />}
        {data && <ViewBlogDetail data={data.data} />}
       
        </>
    );
}
 
export default BlogDetail;