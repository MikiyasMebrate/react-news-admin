import { useForm } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from "zod"

const schema = z.object({
    Email : z.string().email(),
    password : z.string().min(8)
})


let PageForms = () => {
    const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm({
      resolver :zodResolver(schema)
    });
  
    const onSubmit = async (data)=>{
      console.log(data)
      await new Promise(resolve =>{
          setTimeout(resolve, 3000)
      })
  }
  
    return (
      <>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2>Login Page</h2>
  
  
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="Email"
                    {...register("Email")}
                    className="form-control m-3 p-3"
                    placeholder="Email"
                  />
                  {errors.Email && <p className="text-danger">{errors.Email.message}</p>}
                  <input
                    type="Password"
                    {...register("password")}
                    className="form-control m-3 p-3"
                    placeholder="Password"
                  />
                   {errors.password && <p className="text-danger">{errors.password.message}</p>}
                  <button type="submit" disabled={isSubmitting} className="btn btn-primary m-3">{isSubmitting ? 'Loading' : 'Submit'}</button>
                </form>
  
  
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  

  export default PageForms