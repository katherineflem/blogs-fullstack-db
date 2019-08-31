import {Query} from '../index'

export const getalltags = async () =>Query("SELECT * from tags")

export const insertblogtags = async (blogid: number, tagid: number) =>Query("INSERT INTO blogtags (blogid, tagid) VALUES(?)", [blogid, tagid])

export const getblogtag = async (blogid:number) =>Query('CALL spBlogTags(?)', [blogid])

export const deleteblogtags = async (id: number) =>Query("DELETE from blogtags WHERE blogid=?", [id])

export const posttag = async(name:string)=>Query("INSERT INTO tags VALUES(?)",[name])

export default {
    insertblogtags,
    deleteblogtags,
    getblogtag,
    getalltags,
    posttag
}