import * as React from 'react'
import { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { ITag } from '../../utils/interfaces'
import { json, User } from '../../utils/api'

const AddBlog: React.SFC<IAddBlogProps> = props => {


    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [selectedtag, setSelectedTag] = useState<string>('');
    const [tags, setTags] = useState<ITag[]>([])


    const getTags = async () => {
        try {
            let tags = await json('/api/tags')
            setTags(tags);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        //if means they are not logged in
        if (!User || User.userid === null || User.role !== 'guest') {
            props.history.replace('/login');
        //else means they are logged in
        }else{
            getTags();
        }
    }, []);
    //if there is no user obj or have no values or userid is null or role is not = admin
   


    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let blog: { authorid: string, title: string, content: string, selectedtag: string} = {
            authorid: User.userid,
            title,
            content,
            selectedtag
        };
        try {
            let result = await json('/api/blogs', "POST", blog);
            props.history.push('/')
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
                            return (
                                <option key={tag.id} value={tag.id}>{tag.name}</option>
                            )
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


