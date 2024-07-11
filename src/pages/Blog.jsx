import useFetch from "../Hooks/useFetch"
import Loading from "../components/Loading"
import Table from "../components/Table"


let Blog = ()=>{
    const [data, pending, error] = useFetch('http://127.0.0.1:8000/news-list-json/')



    return(
        <>
        {error && <h1 className="text-danger text-center">{error}</h1>}
        {pending && <Loading />}
        {data && <Table data={data.data} />}
        </>
    )

}

export default Blog