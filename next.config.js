module.exports = {
    basePath: process.env.NODE_ENV === "production" ? "/beex-website" : "",
    images: {
        loader: "imgix",
        path: "https://noop/",
    },    
}