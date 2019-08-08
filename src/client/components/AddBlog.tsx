import * as React from 'react'
import { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { ITag } from '../utils/interfaces'

const AddBlog: React.SFC<IAddBlogProps> = props => {

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [selectedtag, setSelectedTag] = useState<string>('');
    const [tags, setTags] = useState<ITag[]>([])


    const getTags = async () => {
        try {
            let r = await fetch('/api/tags');
            let tags = await r.json();
            setTags(tags);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => { getTags(); }, [])


    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            await fetch('/api/blogs', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ title, content, authorid: 2 })//hard coded authorid for now
            })
            props.history.push('/')//use props interface to access history props
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <div className="container">
            <section className="row justify-content-center mt-5">
                <form className="col-md-12 form-group shadow p-4">

                    <label>Blog Title:</label>
                    <input
                        value={title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                        type="text"
                        className="form-control" />

                    <label>Blog Content:</label>
                    <textarea
                        value={content}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
                        className="form-control" />

                    <select
                        className="form-control mt-2"
                        value={selectedtag}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedTag(e.target.value)}>
                        <option>Choose Tag</option>
                        {tags.map(tag => {
                            <option key={tag.id} value={tag.id}>{tag.name}</option>
                            console.log(tag.name)
                        })}
                    </select>

                    <button
                        onClick={handleSubmit}
                        className="btn border-info btn-block mt-3 shadow-lg text-info">Submit Blog</button>


                </form>
            </section>
        </div>
    )
}


export default AddBlog

export interface IAddBlogProps extends RouteComponentProps {

}

 //dropdown for tags in add chirp


