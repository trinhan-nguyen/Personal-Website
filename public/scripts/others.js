//****************
// Initial config
//****************
var timeouts = [],
	intro = $("#intro").get(0),
	detail = $("#detail").get(0);

function displayNone() {
	intro.style.display = "none";
	detail.style.display = "none";
}

function removeAnimationClass() {
	intro.classList.remove("content-in");
	detail.classList.remove("content-in");
}

function clearTimeOut() {
	for (var i = 0; i < timeouts.length; ++i) {
		clearTimeout(timeouts[i]);
	}
	timeouts = [];
	removeAnimationClass();
}

function animate() {
	displayNone();
	clearTimeOut();
	detail.classList.toggle("content-in");
	detail.style.display = "block";
	intro.classList.toggle("content-in");
	intro.style.display = "block";
}

animate();

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 600
      }
    },
    "color": {
      "value": ["#126912", "#3498db", "#e74c3c"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 50,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 5,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#123456",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "top",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
   "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 360,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 360,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

AOS.init({
  duration: 1800,
  easing: 'ease-in-out-back'
});

