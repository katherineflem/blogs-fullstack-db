import { Connection } from '../index'

//logic to get all blog tags for dropdown purposes

export const getalltags = async () => {
    return new Promise((resolve, reject) => {
        Connection.query(`SELECT * from tags`, (err, results) => {
            if (err) {
                return reject(err)
            } else {
                return resolve(results)
            }
        })
    })
}

//logic to get one blog tag for details display

export const getblogtag = async (blogid: number) => {
    return new Promise((resolve, reject) => {
        Connection.query(`CALL spBlogTags(${blogid})`, (err, results) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(results)
            }
        })
    })
}

export const deleteblogtags = async (id: number) => {
    return new Promise((resolve, reject) => {
        Connection.query(`DELETE FROM blogtags WHERE blogid=${id}`, (err, results) => {
            if (err) {
                return reject(err)
            } else {
                return resolve(results)
            }
        })
    })
}

export default {
    getblogtag,
    getalltags,
    deleteblogtags
}
