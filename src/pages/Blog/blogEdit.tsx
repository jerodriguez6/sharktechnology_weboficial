import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import Swal from 'sweetalert2'
import jwt_decode from "jwt-decode";

interface DecodedToken {
    _id: string;
    role: string;
    iat: number;
    exp: number;
}

function BlogEdit() {

    const navigate = useNavigate();
    //Hooks
    const [titlie, setTilte] = useState('')
    const [plot, setPlot] = useState('')
    const [isAdmin, setIsAdmin] = useState(false);

    const params = useParams();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decoded = jwt_decode(token) as DecodedToken;
            if (decoded.role === "admin") {
                setIsAdmin(true);
            } else {
                navigate("/");
            }
        } else {
            navigate("/");
        }
    }, [navigate]);

    useEffect(() => {
        axios.post('/api/esquema/obtenerdatablog', { idblog: params.idblog }).then(res => {
            const dataBlog = res.data[0]
            setTilte(dataBlog.titlie)
            setPlot(dataBlog.plot)
        })
    }, [params.idblog])

    //Actualizar blog
    function editBlog() {
        const updateBlog = {
            titlie,
            plot,
            idblog: params.idblog
        }

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post('/api/esquema/updateBlog', updateBlog)
                    .then(res => {
                        Swal.fire({
                            title: '¡Updated blog!',
                            icon: 'success',
                            text: 'The blog has been successfully updated'
                        }).then((result) => {
                            navigate("/blog");
                        });
                    }).catch((err) => {
                        Swal.fire({
                            title: "Error",
                            text: "An error occurred while adding your file.",
                            icon: "error",
                        });
                    });
            }
        });
    }

    if (isAdmin) {
        return (
            <div className="container">
                <div className="row ">
                    <h1 className="mt-4 text-center"> Añadir Blog</h1>
                </div>
                <div className="row">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="title">Titulo</label>
                        <input className="form-control" type="text" value={titlie} onChange={(e) => { setTilte(e.target.value) }} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="plot">Descripcion</label>
                        <input className="form-control" type="text" value={plot} onChange={(e) => { setPlot(e.target.value) }} />
                    </div>
                    <button onClick={editBlog} className="btn btn-success">Editar Blog</button>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default BlogEdit;
