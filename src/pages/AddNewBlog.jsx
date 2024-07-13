import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SelectOption from "../components/SelectOption";
import useFetch from "../Hooks/useFetch.jsx"
import axios from "axios";

import { useNavigate } from 'react-router-dom';

const schema = z.object({
  writer: z.string().min(3),
  title: z.string().min(5),
  description: z.string().min(10),
  category : z.string().min(1,  { message: "Please Select Category" }),
  image : z.instanceof(FileList).refine(file => file?.length == 1, "file is required")
});

let AddNewBlog = () => {
    let navigate = useNavigate()
    const [dataCategory, pending, error] = useFetch('http://127.0.0.1:8000/category-list/')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    data.image = data.image[0]
    console.log("original",data);
    let url = 'http://127.0.0.1:8000/new/'
    try{
        const response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        
        console.log("response",response.data)
        if(response.data){
            console.log("congra")
            navigate('/blog');
            
        }
    }
    catch{
        console.log("error")
    }
  };
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" >
              <div className="card-body">
                <h2 className="m-2">Add New Blog</h2>
                <input
                  {...register("writer")}
                  className={
                    errors.writer
                      ? "form-control m-2 is-invalid p-3"
                      : "form-control p-3 m-2 "
                  }
                  type="text"
                  placeholder="Write"
                />
                {errors.writer && (
                  <p className="text-danger">{errors.writer.message}</p>
                )}
                <input
                  {...register("title")}
                  className={
                    errors.title
                      ? "form-control m-2 is-invalid p-3"
                      : "form-control p-3 m-2 "
                  }
                  type="text"
                  placeholder="Title"
                />
                {errors.title && (
                  <p className="text-danger">{errors.title.message}</p>
                )}
                <textarea
                  {...register("description")}
                  className={
                    errors.description
                      ? "form-control m-2 is-invalid p-3"
                      : "form-control p-3 m-2 "
                  }
                  placeholder="Description"
                  cols="30"
                  rows="10"
                ></textarea>
                {errors.description && (
                  <p className="text-danger">{errors.description.message}</p>
                )}
               {dataCategory && 
               <select {...register("category")} class="form-select p-3 m-2" aria-label="Default select example">
               <option value="" selected>Open this select menu</option>
               <option value="1">One</option>
               <option value="2">Two</option>
               <option value="3">Three</option>
             </select>

               }
               {errors.category && (
                  <p className="text-danger">{errors.category.message}</p>
                )}

               <input {...register("image")} accept=".jpg" type="file" className="form-control m-2 p-3" />
               {errors.image && (
                  <p className="text-danger">{errors.image.message}</p>
                )}


<button type="submit" disabled={isSubmitting} className="btn btn-primary m-3">{isSubmitting ? 'Loading' : 'Submit'}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewBlog;
