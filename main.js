function openCvReady() {
    cv["onRuntimeInitialized"] = () => {

        console.log("Opencv Ready")
        // read an image from the image source and convert to opencv format
        let imgMain = cv.imread("img-main"); //image in opencv mat format
        cv.imshow("main-canvas", imgMain);
        imgMain.delete();

        /************ RGB BUTTON ***************/
        document.getElementById("button-rgb").onclick = function () {
            let imgMain = cv.imread("img-main");
            cv.imshow("main-canvas", imgMain);
            imgMain.delete();
        };
        /************ GRAY BUTTON ***************/

        document.getElementById("button-gray").onclick = function () {
            let imgMain = cv.imread("img-main");
            let imgGray = imgMain.clone();
            cv.cvtColor(imgMain, imgGray, cv.COLOR_RGBA2GRAY, 0);
            cv.imshow("main-canvas", imgGray);
            imgMain.delete();
            imgGray.delete();  
        };
        /************ BLUR BUTTON ***************/

        document.getElementById("button-blur").onclick = function () {
            let imgMain = cv.imread("img-main");
            let imgBlur = imgMain.clone();
            let ksize = new cv.Size(49, 49);
            cv.GaussianBlur(imgMain, imgBlur, ksize, 0);
            cv.imshow("main-canvas", imgBlur);
            imgMain.delete();
            imgBlur.delete();  
        };
        /************ EDGE BUTTON ***************/

        document.getElementById("button-edge").onclick = function () {
            let imgMain = cv.imread("img-main");
            let imgCanny = imgMain.clone();
            cv.Canny(imgMain, imgCanny, 50, 100);
            cv.imshow("main-canvas", imgCanny);
            imgMain.delete();
            imgCanny.delete();  
        };
    };
}