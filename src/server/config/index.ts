//hub for the config directory
//toggle what file to use based on dev or production(deplyment)
export default require(`./${process.env.NODE_ENV}`).default




