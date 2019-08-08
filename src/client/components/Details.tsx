import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { IBlog, ITag } from '../utils/interfaces'
import { Link } from 'react-router-dom'
import moment from 'moment'


const Details: React.SFC<IDetailsProps> = props => {

    const [blog, setBlog] = useState<IBlog>({
        id: 0,
        title: '',
        authorid: 0,
        content: '',
        _created: new Date(),
        name: ''
    });

    // const [blog, setBlog]= useState<IBlog[]>([])

    const [tags, setTags] = useState<ITag>({
        id: 0,
        name: ''
    })

    const getTags = async () => {
        try {
            let r = await fetch(`/api/tags/`)//once I figure out how to get tags attached to new blogs then I will add in params.id endpoint
            let [tag] = await r.json();
            setTags(tag);
            console.log(tag)
        } catch (e) {
            console.log(e);
        }
    }


    const getBlog = async () => {
        try {
            let r = await fetch(`/api/blogs/${props.match.params.id}`)
            let blog = await r.json();
            setBlog(blog);
        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => { getBlog(), getTags() }, [props.match.params.id])

    return (
        <>
            <section className="row mt-3">
                <article key={`blog-${blog.id}`} className="col-md-12">
                    <div className="card m-1 shadow">
                        <div className="card-body">
                            <h4 className="card-title">{blog.title}</h4>
                            <span className="badge badge-info mb-2">{tags.name}</span>
                            <p className="card-text">{blog.content}</p>
                            <div className="card-subtitle text-muted mb-2 ">Date: {moment(blog._created).format("MMM Do YY")}</div>
                            <div className="card-subtitle text-muted mb-2 ">Author: {blog.name}</div>

                            <Link to={`/${blog.id}/editblog`} className='btn border-info text-info'> Edit Blog</Link>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Details

//name the id prop whatever you called the placeholder in your App route
export interface IDetailsProps extends RouteComponentProps<{ id: string }> { }


//get delete to work
//get tags to render in dropdown and on new blog element
//get author and created date to show successfully 