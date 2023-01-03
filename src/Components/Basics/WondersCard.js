import "./style.css";

function wondersCard({ data }) {
   // console.log("check", data);
    return (
        <>

            <div className="container">
                <div className="row" style={{marginBottom : "20px"}}>

                    {
                        data.map((item) => {

                           const {id, image, name, category, description} = item

                            return (
                                <>
                                    <div className="col-md-4">
                                        <div className="card" style={{ width: "18rem" }}>
                                            <div className="card-header"> <h3 className="card-title"> {name} <span id="badge"> {id} </span> </h3> </div>
                                            <img className="card-img-top" src={image} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5> Category - {category} </h5>
                                                <p className="card-text"> {description} </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </>
                            )
                        })

                    }





                </div>
            </div>

        </>
    )
}

export default wondersCard;