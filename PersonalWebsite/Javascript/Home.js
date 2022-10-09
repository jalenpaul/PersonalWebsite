var bNavDrawer = document.getElementById("b_nav_drawer");
var bResume = document.getElementById("b_home_resume");
var bTwitter = document.getElementById("b_home_twitter");
var bInstagram = document.getElementById("b_home_instagram");
var bImgSliderBack = document.getElementById("b_home_imgSliderBack");
var bImgSliderForward = document.getElementById("b_home_imgSliderForward");

var imgSliderCerts = document.getElementById("img_home_imgSlider");
/*imgSliderCerts.src = './Res/PNGs/CSS_certificate.png';

var arrImgCerts = [
    './Res/PNGs/CSS_certificate.png',
    './Res/PNGs/HTML_certificate.png'
]; */
var imgPos = 0;



bNavDrawer.onclick = function() {
    alert("hello");
}

bResume.onclick = function() {
        //downloadFile("url", 'JalenPaul\'s Resume');
    }
    /*
    bImgSliderBack.onclick = function() {
        if (imgPos != 0) {
            imgPos--;
        }
        imgSliderCerts.src = arrImgCerts[imgPos];
    }

    imgSliderCerts.src = arrImgCerts[imgPos];

    bImgSliderForward.onclick = function() {
        if (imgPos < arrImgCerts.length) {
            imgPos++;
        }
        imgSliderCerts.src = arrImgCerts[imgPos];
    }
    window.onload = function() {
        //TODO when the user leaves the page
    }


    function validate() {
        var inputEmail = document.getElementById("input_home_email");
        var inputHead = document.getElementById("input_home_emailHead");
        if (inputEmail != "" && inputHead != "") {
            return true;
        } else {
            alert("Please fill out every box before submission.")
        }
    } */

/*
function downloadFile(url, fileName) {
    fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
        .then(res => res.blob())
        .then(res => {
            URL.revokeObjectURL(href);
        });
}; */