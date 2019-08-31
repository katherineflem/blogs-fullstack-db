import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IBlog } from '../../utils/interfaces'
import {json} from '../../utils/api'


const Blogs: React.SFC<IAppProps> = (props) => {


    const [blogs, setBlogs] = useState<IBlog[]>([]);

    const getBlogs = async () => {
       let blogs= await json('/api/blogs');//replaced with json function in utils
        setBlogs(blogs);
    }

    useEffect(() => { getBlogs(); }, [])


    return (
        <section className="row mt-3">
            {blogs.map(blog => {
                return (
                    //add word blog before id so that multiple cols with same ids aren't confused
                    //how would i get a different pic with each blog
                    <article key={`blog-${blog.id}`} className="col-md-4">
                        <div className="card m-1 shadow rounded">
                            <div className="card-body">
                                <img src="https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520956952-chicken-tacos-horizontal.jpg?resize=1200:*" className="card-img-top mw-100 rounded"></img>
                                <h4 className="card-title text-center">{blog.title}</h4>
                                <p className="card-text">{blog.content.substring(0, 100)}...</p>
                                <Link to={`/${blog.id}/details`}>
                                    <button className="btn btn-outline-info">See More</button>
                                </Link>
                            </div>
                        </div>
                    </article>
                )
            })}
        </section>

    );
}


export interface IAppProps { }




export default Blogs