import { Link } from "react-router-dom";
import formattedDate from "../utility/formattedDate";
import Button from "./Button";
import AddNewNewsModal from "./ui/AddNewNewsModal";


let Table = ({data}) => {
    let tableRow = data.news.map((news, index) => (
        <tr key={news.id}>
             <th scope="row">{index + 1}</th>
              <td>{news.title}</td>
              <td > <button className="btn btn-sm btn-primary">{news.category__title}</button></td>
              <td style={{width : '10%'}}> <img className="img-fluid m-0 p-0" style={{width:'40%'}} src={`http://127.0.0.1:8000/media/${news.image}`} alt="" /></td>
              <td>{formattedDate(news.created)}</td>
              <td > 
                <button className="btn btn-sm btn-primary">Edit</button>
                <button className="btn btn-sm btn-danger ms-2">Delete</button>
                <Link to={`/blog/${news.id}`} className="btn btn-sm btn-success ms-2">View</Link>
             </td>
              
        </tr>
    ))
  return (
    <>
       
      <div className="table-responsive">
        <table className="table table-hover table-bordered caption-top ">
          <caption>List of Blogs</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Category</th>
              <th scope="col">Image</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableRow}
          </tbody>
        </table>
      </div>

    
    </>
  );
};

export default Table;
