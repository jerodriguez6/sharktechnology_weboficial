import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import uniqid from 'uniqid'

function BlogAdd() {
    /*Hooks */
    const navigate = useNavigate()
    const [titlie, setTilte] = useState('')
    const [plot, setPlot] = useState('')

    function addBlog() {
        const Esquema = {
            idblog: uniqid(),
            titlie,
            plot
        };

        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post("/api/esquema/blogapp", Esquema)
                    .then((res) => {
                        console.log(res.data)
                        Swal.fire({
                            title: "Success",
                            text: "Your file has been added.",
                            icon: "success",
                        }).then((result) => {
                            navigate(0);
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                        Swal.fire({
                            title: "Error",
                            text: "An error occurred while adding your file.",
                            icon: "error",
                        });
                    });
            }
        });
    }
    return (
        <div className="container">
            <div className="row ">
                <h1 className="mt-4 text-center font-weight-bold"> Añadir Blog</h1>
            </div>
            <div className="row">
                <div className="col-sm-4 offset-4 mt-3">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="title">Titulo</label>
                        <input className="form-control" type="text" value={titlie} onChange={(e) => { setTilte(e.target.value) }} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="plot">Descripcion</label>
                        <input className="form-control" type="text" value={plot} onChange={(e) => { setPlot(e.target.value) }} />
                    </div>
                    <button onClick={addBlog} className="btn btn-success offset-4 mb-3">Guardar Blog</button>
                </div>
            </div>
        </div>
    )
}

export default BlogAdd