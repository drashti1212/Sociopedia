let config = '';

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
    config = {
        SERVER_URL: "https://social-media-hiix669o4-drashti1212.vercel.app//"
    }
}

export default config;