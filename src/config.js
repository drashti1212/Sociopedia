let config = '';

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
    config = {
        SERVER_URL: "https://social-media-app-sepu.onrender.com//"
    }
}

export default config;