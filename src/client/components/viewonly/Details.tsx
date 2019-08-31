import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { IBlog, ITag } from '../../utils/interfaces'
import { Link } from 'react-router-dom'
import moment from 'moment';
import { json, User } from '../../utils/api'
import { userInfo } from 'os';


const Details: React.SFC<IDetailsProps> = props => {

    const [blog, setBlog] = useState<IBlog>({
        id: 0,
        title: '',
        authorid: 0,
        content: '',
        _created: new Date(),
        name: ''
    });


    const [tags, setTags] = useState<ITag[]>([])

    const getTags = async () => {
        try {
            let tag = await json(`/api/tags/${props.match.params.id}`)
            setTags(tag);
        } catch (e) {
            console.log(e);
        }
    }
    const getBlog = async () => {
        try {
            let blog = await json(`/api/blogs/${props.match.params.id}`)
            setBlog(blog);
        } catch (e) {
            console.log(e)
        }

    }

    const handleButtonClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
        if(!User || User.userid !== blog.authorid){
            props.history.push('/login');
            alert("You must be the author of this blog to edit")
        }else{
            console.log(`/${blog.id}/editblog`)
            props.history.push(`/${blog.id}/editblog`)//this isnt working not sure why
        }
    }


    useEffect(() => { getBlog(), getTags() }, [props.match.params.id])

    return (
        <>
            <section className="row mt-3 justify-content-center">
                <article key={`blog-${blog.id}`} className="col-md-6">
                    <div className="card m-1 shadow">
                        <div className="card-body">
                            <h4 className="card-title">{blog.title}</h4>
                            {tags.map(tag => {
                                return <span className="badge badge-info mb-2">{tag.name}</span>
                            })}
                            <p className="card-text">{blog.content}</p>
                            <div className="card-subtitle text-muted text-italics mb-2 ">Date: {moment(blog._created).format("MMM DD, YYYY")}</div>
                            <div className="card-subtitle text-muted mb-2 ">Author: {blog.name}</div>
                            <button 
                            onClick={handleButtonClick}
                            className="btn btn-outline-info">Edit Blog</button>
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