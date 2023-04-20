import axios from 'axios';
import { useEffect, useState } from 'react';
import BlogSelect from './blogSelect';

function BlogList() {
    const [dataBlog, setDataBlog] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        axios.get(`/api/esquema/listadoblog?page=${page}`).then(res => {
            setDataBlog(res.data.docs);
            setTotalPages(res.data.totalPages);
        }).catch(err => {
        })
    }, [page])

    const handlePrevClick = () => {
        setPage(page - 1);
    }

    const handleNextClick = () => {
        setPage(page + 1);
    }

    const blogItems = dataBlog.map(esquema => {
        return (
            <div key={esquema.idblog}>
                <BlogSelect esquema={esquema} />
            </div>
        )
    })

    return (
        <div>
            {blogItems}
            <div className='text-center  pb-3'>
                <hr className='mt-4'></hr>
                <button className="btn btn-primary mt-3" onClick={handlePrevClick} disabled={page <= 1}>Anterior</button>
                &nbsp;
                <button className="btn btn-primary mt-3" onClick={handleNextClick} disabled={page >= totalPages}>Siguiente</button>
            </div>
        </div>
    )
}

export default BlogList;