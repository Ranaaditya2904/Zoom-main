let IS_PROD = true;
const server = IS_PROD ?
 "https://zoom-main-1fronend.onrender.com" :
    "http://localhost:8000"

export default server;