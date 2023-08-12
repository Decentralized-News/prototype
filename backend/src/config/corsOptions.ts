const allowedOrigins: string[] = [
    "https://fedecentnews-git-main-decentnews.vercel.app/",
];

const corsOptions = {
    origin: (origin: any, callback: any) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true, // set accessControlAllowCredentials header
    optionsSuccessStatus: 200, // default is 204
};

module.exports = corsOptions;
