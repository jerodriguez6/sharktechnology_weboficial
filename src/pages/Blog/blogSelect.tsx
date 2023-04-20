import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function BlogSelect({ esquema }) {

    const navigate = useNavigate();

    function deleteBlog(idblog) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post('/api/esquema/deleteBlog', { idblog: idblog })
                    .then(res => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        ).then(() => {
                            navigate(0);
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

    return (
        <div className="container">

            <div className='row justify-content-center align-items-center'>

                <div className='bg-light'>
                    <ul className='list-group'>
                        <li className='list-group-item'>{esquema.idblog}</li>
                        <li className='list-group-item'>{esquema.titlie}</li>
                        <li className='list-group-item'>{esquema.plot}</li>
                    </ul>
                    <div className='text-center justify-content-center align-items-center'>
                        <Link to={`/editarblog/${esquema.idblog}`}><button className='btn btn-success mt-3 mb-3'>Editar</button></Link>
                        &nbsp;
                        <button className='btn btn-danger mt-3 mb-3' onClick={() => { deleteBlog(esquema.idblog) }}>Borrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSelect