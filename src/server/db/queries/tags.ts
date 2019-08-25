import { Query } from '../index'

//logic to get all blog tags for dropdown purposes

// create a function that returns a promise to retrieve the info from the database
//call the connection.query function which takes in a mysql query string with options and then a callback function that says
//if theres an issue, reject with an error message, if theres not an issue, resolve the promise with the results
//you'll have one of these for each request you need to make to get, post, delete and then call them within your routes
export const getalltags = async () =>Query("SELECT * from tags")



//logic to get one blog tag for details display

export const getblogtag = async (blogid:number) =>Query('CALL spBlogTags(?)', [blogid])


export const deleteblogtags = async (id: number) =>Query("DELETE from blogtags WHERE blogid=?", [id])



export default {
    getblogtag,
    getalltags,
    deleteblogtags
}
