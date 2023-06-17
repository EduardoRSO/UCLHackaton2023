const INTERVAL_KEY = "INTERVAL_KEY";
// default to 1s refresh window
const DEFAULT_INTERVAL = "1000";

const NICS = [
  "https://www.criarmeme.com.br/meme/meme-55404-O-que-vamos-fazer-hoje-Pink-Vamos-dominar-o-mundo.jpg", // 1
  "https://i.pinimg.com/originals/07/c4/88/07c488a29fd4320984bff0e6baf41023.jpg", // 2
  "https://img.elo7.com.br/product/zoom/11172E2/poster-a3-dominar-o-mundo-decoracao.jpg", // 3
  "https://www.senhormercado.com.br/wp-content/uploads/Cerebro-Vamos-dominar-o-mundo.jpg", // 4
  "https://static3.tcdn.com.br/img/img_prod/460977/estatua_cerebro_pink_e_cerebro_pinky_and_the_brain_100757_1_a0e18f530cf71f72ddcba0ade92ac2d4.jpeg", // 5
  "https://www.fatosdesconhecidos.com.br/wp-content/uploads/2016/01/pinky.jpg", // 6
  "https://i.pinimg.com/600x315/5a/02/59/5a02591736dfc39e676d786e1bb43360.jpg", // 7
  "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/09/pink-e-cerebro.jpg", // 8
  "https://4.bp.blogspot.com/-d6BXlE93A5Y/W0axI_4PI9I/AAAAAAAAVzs/ayczogVoubcbjwlK-FIjKTl14FsnueZ5ACLcBGAs/s1600/pink%2Be%2Bcerebro.jpg", // 9
  "https://deusnogibi.com.br/site/wp-content/uploads/2014/05/YADDPINKY1.jpg", // 10
  "https://hqscomcafe.com.br/wp-content/uploads/2018/04/pinky-elmyra-y-cerebro.jpg", // 11
  "https://br.web.img3.acsta.net/pictures/15/09/01/15/54/041344.jpg", // 12
  "https://pbs.twimg.com/profile_images/727798371545665536/MGkkHWRK_400x400.jpg", // 13
  "https://i.pinimg.com/236x/06/d6/26/06d626754afcfc9b366d4eca4ae96ede--the-brain-childhood-memories.jpg", // 14
  "https://img.elo7.com.br/product/main/25BF2D7/caneca-pink-e-o-cerebro-presente-para-namorada.jpg", // 15
  "https://cdn.meadd.net/photos/full/25206000.jpg", // 16
  "https://d17lbu6bbzbdc8.cloudfront.net/wp-content/uploads/2020/09/13071233/pinky-and-the-brain.jpg", // 17
  "https://minilua.net/wp-content/uploads/2016/01/00010ed602eb71469c01916d9f8ca836_343907.jpg", // 18
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9bvUY4cqAYURy6oH9gHRr2Pwxpo8DxveQcg&usqp=CAU", // 19
  "https://pm1.aminoapps.com/7228/73625a140e48fac81c864fcf9aa43c9c63dce026r1-640-320v2_hq.jpg", // 20
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXCg_Z4d-6zqwEiN8mkaUyOXDkz5LzFVvzQ&usqp=CAU", // 21
  "https://i.pinimg.com/originals/d4/20/2e/d4202e6602584b60fafb2accb2cdc480.jpg", // 22
  "https://i.pinimg.com/originals/7e/63/cc/7e63cc6f770138614690381a61c42824.jpg", // 23
  "https://www.criarmeme.com.br/meme/meme-71270-O-que-vamos-fazer-hoje-cerebro-Tentar-dominar-os-elevadores-de-sao-Jose.jpg", // 24
  "https://pbs.twimg.com/media/Ey5h454XMAIvl1x.jpg", // 25
  "https://memesdometal.files.wordpress.com/2012/05/pinkecerebro.png", // 26
  "https://imgbrazil.ifunny.co/images/60cf6f29bc72ca0c2914b6c8c3d8a47743fbc5d75c6bc714c7627093f92a9d57_1.jpg", // 27
  "https://4.bp.blogspot.com/-B2L56ONMO9k/V23dyt1NG5I/AAAAAAAAFt0/JCGWCdarahswqKgQxDjeja2nc_vKNbPUACKgB/s1600/913981.jpg", // 28
  "https://borgesogatodotcom.files.wordpress.com/2012/08/313.jpg", // 29
  "https://pm1.aminoapps.com/6438/66a27bf8aba0ed11fb12a20b9246f7a4b2376a64_hq.jpg", // 30
  "https://mnegreiros.com/wp-content/uploads/2023/04/PC.jpg", // 31
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yu_1C9mnGd3it7EbJJHLLHD1lR9vKalhFg&usqp=CAU", // 32
  "https://3.bp.blogspot.com/-8ZvQdT6A_5g/T67SiGKCUKI/AAAAAAAAAKM/YmzHnFel5e8/s1600/dominar-o-mundo.jpg", // 33
  "https://duasfridas.files.wordpress.com/2014/12/10301495_750049638397592_7730136950752049308_n.png", // 34
  "https://m.extra.globo.com/incoming/24287464-bab-7c3/w533h800/ronaldinho-memes-1.jpg", // 35
  "https://static.wikia.nocookie.net/animaniacs/images/b/bc/PATH_HBO_MAX_CN_Brasil_promo_6.jpeg/revision/latest/scale-to-width-down/250?cb=20220704194627", //36
  // "http://de.web.img3.acsta.net/r_1280_720/medias/nmedia/18/35/51/53/18458294.jpg", // same
  // "https://www.episodi.fi/wp-content/uploads/nicolas-cage-world-trade-center.jpg", // all nics are blessed
  // "http://1.bp.blogspot.com/-WZRyOwsfE-8/U1bVZbeMK9I/AAAAAAAAAMY/JEe1Ie4G5fE/s1600/nicolas-cage-fu-manchu-grindhouse.jpg", // this may be questionable
  // "https://multiglom.files.wordpress.com/2015/01/badlieu02.jpg", // bad cop
  // "https://2.bp.blogspot.com/-1LyVzMxNm7Q/W83_4TYmZKI/AAAAAAAAAIY/sjkzpcFyoFYVJ_ousNs2u5AGETVXhGLdwCLcBGAs/s1600/Nic%252BCage.png", // angerry
  // "https://www.yam-mag.com/wp-content/uploads/2012/05/nicholas-cage-kick-ass.jpg", // makeup is cool
]

function getNic() {
  let nicNum = Math.floor(Math.random() * NICS.length);
  return NICS[nicNum];
}

function replaceImages() {
  for (let i = 0; i < document.images.length; ++i) {
    let img = document.images[i];

    if (img.classList.contains('nicced')) {
      continue;
    }
    img.classList.add('nicced');

    // attempt to retain the original dimensions
    img.style.width = img.width + 'px';
    img.style.height = img.height + 'px';

    // nic-em
    let loc = getNic()
    img.src = loc;
    if (img.srcset) {
      img.srcset = loc;
    }
  };
}

// setup defaults
function get_interval_or_default(item) {
  if (!item || item === {} || !(INTERVAL_KEY in item)) {
    browser.storage.local.set({
      INTERVAL_KEY: DEFAULT_INTERVAL
    });
    return DEFAULT_INTERVAL;
  } else {
    return item[INTERVAL_KEY];
  }
}

// start up the extension
browser.storage.local.get().then(
  (item) => {
    let interval = get_interval_or_default(item);
    window.setInterval(replaceImages, interval);
  },
  (_) => {
    window.setInterval(replaceImages, DEFAULT_INTERVAL);
  }
);
