import  React, {useState} from "react";



const Contact = () => {


    const [ data, setData ] = useState({
         fullname:"",
         email: "",
         msg:"",
  
    });
    const InputEvent =(event) => {
        const {name, value} = event.target;
        setData((preVal) => {
            return {
                ...preVal, [name]: value,
            };
     });
     };

     const formSubmit = (e) =>{
         e.preventDefault();
         alert(`your name is ${data.fuillname}. your email is ${data.email}. your message ${data.msg} `)
     }



    return (
        <>
        <div className="my-5">
        <h1 style={{color: "blue"}} className="text-center"> Contact Us </h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div class="col-12">
                <button style={{
                  color: "white",
                  backgroundColor: "blue",
                  borderRadius: "20px"
              }}
                 class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
            
        </>
    )
}

export default Contact
