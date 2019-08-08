import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Editblog: React.SFC<IEditProps> = props => {


    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');


    const getBlog = async () => {
        try {
            let r = await fetch(`/api/blogs/${props.match.params.id}`)
            let blog = await r.json();
            setTitle(blog.title)
            setContent(blog.content)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => { getBlog(); }, [props.match.params.id])

    const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            await fetch(`/api/blogs/${props.match.params.id}`, {
                method: 'PUT',
                body: JSON.stringify({ title, content, authorid: 1 }),
                headers: {
                    "content-type": "application/json"
                }
            }).then(() => props.history.push('/'))
        } catch (e) {
            console.log(e)
        }
    }
    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            await fetch(`/api/blogs/${props.match.params.id}`, {
                method: 'DELETE',
            })
        props.history.push('/')
        } catch (e) {
            console.log(e)
        }
    }





    return (
        <>
            <section className="row justify-content-center mt-5">
                <form className="col-md-12 form-group shadow p-4">
                    <label>Blog Title:</label>
                    <input
                        value={title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setTitle(e.target.value) }}
                        type="text"
                        className="form-control" />
                    <label>Blog Content:</label>
                    <textarea
                        value={content}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => { setContent(e.target.value) }}
                        className="form-control" />
                </form>
                <button className="btn btn-outline-info"
                    onClick={handleEdit}
                >Submit Changes</button>
                <button 
                onClick={handleDelete}
                className="btn btn-outline-info ml-2">Delete Blog</button>
            </section>
        </>
    )
}





export interface IEditProps extends RouteComponentProps<{ id: string }> { }

export default Editblog