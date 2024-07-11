let ViewBlogDetail = ({ data }) => {
  return (
    <div className="row justify-content-center">
        <div className="col-md-9">
        <div className="card">
        <h3 className="card-header">{data.news[0].title}</h3>
        <div className="card-body">
            <div className="text-center">
            <img className="img-fluid" src={`http://127.0.0.1:8000/media/${data.news[0].image}`} alt="" />
            </div>
          <p className="card-text p-2 mt-4">
           {data.news[0].description}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
        </div>
    </div>
  );
};

export default ViewBlogDetail;
