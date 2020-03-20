const db = require('../data/dbConfig.js');
const getPosts = () => {
    return db('posts');
}
const getPostById = async (id) => {
    try {
        const post = await db
            .select("*")
            .from("posts")
            .where("id", id)
            .first()
        return post;
    }
    catch(err) {
        console.error(err)
    }
}
module.exports = {
	getPosts,
	getPostById
}