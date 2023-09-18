const q = document.querySelector.bind(document)
const qa = document.querySelectorAll.bind(document)
// nav
gsap.registerPlugin(ScrollTrigger);

const nav_gsap = gsap.from('nav', {
    yPercent: -100,
    pause: true,
    duartion: 0.2,
    scrollTrigger:{
    start: 'top top',
    end:"bottom",
    onUpdate: (self) => {
        self.direction === -1 ? nav_gsap.play() : nav_gsap.reverse()
    },
    // markers:true,
    },
}).progress(1)


// 

// const cover_canvas = q('#cover-canvas')
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
// const renderer = new THREE.WebGLRenderer({ alpha: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// // const control = new THREE.OrbitControls(camera,renderer.domElement)
// cover_canvas.appendChild(renderer.domElement);
// let pointLight = new THREE.PointLight(0xffffff)
// pointLight.position.set(10, 10, -10)
// scene.add(pointLight)
// const three_bg = new THREE.TextureLoader()

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ map: three_bg.load('./images/three.png') });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);
// camera.position.z = (0, 0, 5);

// function cover_three_anim() {
//     requestAnimationFrame(cover_three_anim);
//     // cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//     // control.update()
//     renderer.render(scene, camera);
// }
// cover_three_anim();

// window.addEventListener('resize',function(){
//     const window_width = window.innerWidth
//     const window_hight = window.innerHeight
//     camera.projectionMatrix.makePerspective(100, window_width/window_hight,1,1100)
//     // camera.projectionMatrix.makePerspective( 100, window.innerWidth /   window.innerHeight, 1, 1100 ); 
//     // camera.updateProjectionMatrix()
//     renderer.setSize(window_width,window_hight)
// })

// const scroll = -0.01;

// q('.load').addEventListener('wheel', function (event) {
//   const deltaY = event.deltaY;
//   const camera_z = camera.position.z + deltaY * scroll;
//   console.log(camera_z);

//   if (camera_z > 5) {
//     camera_z = 5;
//   } else if (camera_z < -1) {
//     camera_z = -1;
//   }
// const load_img_anim = gsap.timeline({ duration: 1 })
//     .from('.load-img', { xPercent: 100 })
//     .to('.load-img', {
//         bottom: "10%",
//         xPercent: 0,
//         repeat: -1,
//         yoyo: true,
//     })
// gsap.to('.load-img', {
//     xPercent: 100,
//     duration: 1,
//     scrollTrigger: {
//         trigger: ".load",
//         start: "40% 30%",
//         end: "bottom top",
//         pause: true,
//         scrub: true,
//     },
// })
// const load_img2_anim = gsap.timeline({ duration: 1 })
//     .from('.load-img2', { xPercent: -100, })
//     .to('.load-img2', {
//         xPercent: 0,
//         opacity: 0.3,
//         duration: 1.5,
//         repeat: -1,
//         yoyo: true,
//     })
// gsap.to('.load-img2', {
//     xPercent: -100,
//     duration: 1,
//     scrollTrigger: {
//         trigger: ".load",
//         start: "40% 30%",
//         end: "bottom top",
//         pause: true,
//         scrub: true,
//     },
// })
// const load_anim = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".header-box",
//         start: "15% 15%",
//         end: "50% top",
//         pin: true,
//         //   pinSpacing:false,
//         pause: true,
//         scrub: true,
//         //   markers:true,
//     },
//     duration: 0.5,
// })
//     .to(camera.position, {
//         z: 0,
//     })
//     .to('.load', {
//         autoAlpha: 0,
//     }, 0.5)
//     .fromTo('nav , .carousel ', { autoAlpha: 0 }, { autoAlpha: 1 }, 1)
// load_anim.then(()=>{
//     load_anim.kill()
// })



// body1
var body1_swiper_img = new Swiper('.body1-swiper-img', {
    noSwiping: true,
    pagination: {
        el: '.swiper-pagination'
    }
})
var body1_swiper_text = new Swiper('.body1-swiper-text', {
    effect: "fade",
    noSwiping: true,
    fadeEffect: {
        crossFade: true,
    },
    controller: {
        control: body1_swiper_img,
    },
    autoplay: {
        delay: 5000,
        disableOnInteration: false,
    },
})
var body1_btn = qa('.body1-btn-box >button')
q('.body1-btn1').addEventListener('click', function () {
    body1_swiper_text.slideTo(0, 500)
    body1_swiper_text.autoplay.start()
})
q('.body1-btn2').addEventListener('click', function () {
    body1_swiper_text.slideTo(1, 500)
    body1_swiper_text.autoplay.start()
})
q('.body1-btn3').addEventListener('click', function () {
    body1_swiper_text.slideTo(2, 500)
    body1_swiper_text.autoplay.start()
})
body1_swiper_text.on('slideChange', function () {
    var body1_index = body1_swiper_text.realIndex
    body1_btn.forEach(function (item, index) {
        item.classList.remove('active')
    })
    if (body1_index === 0) {
        q('.body1-btn1').classList.add('active')
    } else if (body1_index === 1) {
        q('.body1-btn2').classList.add('active')
    } else if (body1_index === 2) {
        q('.body1-btn3').classList.add('active')
    }
})

// const body1_pin = gsap.timeline({
//     duartion:1,
//     scrollTrigger:{
//         trigger:"#body1",
//         start:"top top",
//         end:"bottom top",
//         pin:true,
//         pinSpacing:true,
//         scrub:1,
//         markers:true,
//     }
// })
// .to('.body-row',{autoAlpha:0})
// .fromTo('.row2',{autoAlpha:0},{yPercent:-150,autoAlpha:1})

const body1_anim = gsap.timeline({
    duration: 3,
    scrollTrigger: {
        trigger: '#body1',
        start: "top center",
        end: "center center",
        scrub: true,
        // markers:true,
    },
    ease: Power4.easeOut,
})
    .from('.title', {
        y: -100,
        opacity: 0,
    }, 0.1)
    .from('.body1-swiper-img', {
        x: -100,
        opacity: 0,
    }, 0.5)
    .from('.body1-right', {
        x: 100,
        opacity: 0,
    }, 0.5)

// body2
const body2_cards = qa('.body2-card')
body2_cards.forEach(function (body2_card) {
    body2_card.addEventListener('click', function (event) {
        const body2_index = parseInt(body2_card.getAttribute('data-index'), 10)
        q('.body2-right-img').src = body2_data[body2_index].img
        q('.body2-right-title').innerText = body2_data[body2_index].title
        q('.body2-right-text').innerText = body2_data[body2_index].text
    })
})

// body3 shop
var body3_swiper = new Swiper('.body3-shop-box', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: '.body3-next',
        prevEl: '.body3-prev',
    },
    breakpoints: {
        1: {
            slidesPerView: 1,
        },
        1080: {
            slidesPerView: 4,
        },
    },
})
body3_data.forEach(function (item) {
    body3_swiper.appendSlide(`
    <div class="swiper-slide body3-3d-box px-lg-0 px-3">
        <div class="body3-3d-box2">
            <div class="card body3-card">
                <img src="${item.img}" alt="" class="card-img-top body3-img">
                <div class="card-body df fdc">
                    <h1 class="card-title fw-bold text-center f-3">${item.title}</h1>
                    <div class="df justify-content-between m-2">
                        <p class="f-6">1/包</p>
                        <p class="f-6">NT$${item.price}元</p>
                    </div>
                    <button class="btn f-7"  onclick="add(1,'${item.title}')">添加到購物車</button>
                </div>
            </div>
            <div class="card body3-card2">
                <img src="${item.img2}" alt="" class="card-img-top body3-img2">
                <div class="card-body">
                    <p class="card-text f-6 lep">${item.text}</p>
                </div>
            </div>  
        </div>
    </div>
`)
})
var shop_modal_body = q('#shop-modal .modal-body')
var shop_modal = new bootstrap.Modal(q('#shop-modal'))
var aa = 0
function add(n, title, mode = 0) {
    var shop_price = 60
    shop_modal.show()
    body3_data.forEach(element => {
        if (element.title == title) {
            element.amount = Number(mode ? (!n ? 1 : n) : Math.max(0, element.amount + n))
        }
    });
    shop_modal_body.innerHTML = ''
    body3_data.forEach(function (item) {
        if (item.amount != 0) {
            shop_price += item.price * item.amount
            shop_modal_body.innerHTML += `
            <div class="card mb-3">
                <div class="row">
                    <div class="col-3">
                        <img src="${item.img}" alt="" class="shop-modal-img">
                    </div>
                    <div class="col-9 df jcc fdc">
                        <div class="df justify-content-between aic mb-3 pe-3">
                            <h1 class="f-5 fw-bold m-0">${item.title}</h1>
                            <p class="f-6 m-0 shop-del color1" type="button" data-del="${item.title}">取消</p>
                        </div>
                        <div class="df justify-content-between pe-3">
                            <div class="df aic">
                                <button class="shop-modal-reduce btn me-2" onclick="add(-1,'${item.title}')">-</button>
                                <input type="text" value="${item.amount}" data-id="${item.title}" class="text-center shop-modal-input">
                                <button class="shop-modal-add btn mx-2" onclick="add(1,'${item.title}')">+</button>
                            </div>
                            <p class="f-6 m-0">1包${item.price}元</p>
                        </div>
                    </div>
                </div>
            </div>
            `
            aa = 1
        }
        q('.total-price').innerText = shop_price
    })
    if(shop_modal_body.innerHTML.trim() === ''){
        setTimeout(() => {
            shop_modal_body.innerHTML = `<h1 class="f-3 my-5 text-center">您尚未訂購商品</h1>`
        }, 200);
        aa = 0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    }
    render_shop_modal_input();
}
function render_shop_modal_input() {
    qa(".shop-modal-input").forEach(function (item,) {
        item.addEventListener("blur", function () {
            add(item.value, this.dataset.id, 'input')
        })
    })
    qa('.shop-del').forEach(function(item){
        item.addEventListener('click',function(){
            const shop_card = item.closest('.card')
            shop_card.remove()
            const shop_del_data = this.dataset.del
            const shop_index = body3_data.findIndex(function(e){
                return e.title == shop_del_data
            })
            body3_data[shop_index].amount = 0
            if(shop_modal_body.innerHTML.trim() === ''){
                setTimeout(() => {
                    shop_modal_body.innerHTML = `<h1 class="f-3 my-5 text-center">您尚未訂購商品</h1>`
                }, 200);
                aa = 0
            }
            add()
        })
    })
}
var shop_submit = new bootstrap.Modal(q('#shop-submit'))
q('.shop-submit').addEventListener('click',function(){
    if(aa != 0){
        shop_submit.show()
        shop_modal_body.innerHTML = ''
        body3_data.map(x => x.amount = 0)
    }
    add()
})
const body3_value = q('.a1')
const body3_value2 = q('.a2')
const body3_value3 = q('.a3')
const a1 = { value: 0 }
const a2 = { value: 0 }
const a3 = { value: 0 }
const body3_anim_value = gsap.timeline({
    duration: 2.5,
    scrollTrigger: {
        trigger: "#body3",
        start: "400 center",
        end: "center center",
        // markers:true,
    },
})
    .to(a1, {
        value: 200,
        roundProps: {
            value: 1,
        },
        onUpdate: function () {
            body3_value.innerHTML = a1.value
        },
    }, 0)
    .to(a2, {
        value: 180,
        roundProps: {
            value: 1,
        },
        onUpdate: function () {
            body3_value2.innerHTML = a2.value
        },
    }, 0)
    .to(a3, {
        value: 100,
        roundProps: {
            value: 1,
        },
        onUpdate: function () {
            body3_value3.innerHTML = a3.value
        },
    }, 0)
    .fromTo('.a-h1', { scale: 1.4, ease: Power3.out }, { scale: 1, duration: 0.8, }, 0.5)

// body4 chart

var ctx =q('#chart')
Chart.defaults.font.size = 18
Chart.defaults.color = '#000'
var body4_chart = new Chart(ctx,{
    type:"bar",
    data:{
        labels:[
            '經典黑糖口味',
            '馬告胡椒口味',
            '四川麻辣口味',
            '木瓜牛奶口味',
        ],
        datasets:[{
            label:'購買數',
            data:[150,100,120,130],
            backgroundColor:[
                '#8c5819',
                '#a36f4c',
                '#a72222',
                '#fbad79',
            ],
        }]
    },
})

// body5

var body5_swiper = new Swiper('.body5-swiper',{
    loop:true,
    navigation:{
        nextEl:".body5-swiper-next",
        prevEl:".body5-swiper-prev",
    },
})
body5_data.forEach(function(item,index){
    body5_swiper.appendSlide(`
    <div class="swiper-slide df jcc">
        <div class="card body5-card p-3">
            <div class="p-3 df justify-content-between aic">
                <img src="${item.img}" alt="" class="body5-img me-3">
                <h1 class="f-4 m-0 fw-bold">${item.name}</h1>
            </div>
            <div class="card-body df aic">
                <p class="f-7 lep lh">${item.text}</p>
            </div>
        </div>
    </div>
    `)
})

// robot
q('.robot-btn').addEventListener('click',function(){
    q('.robot-box').classList.toggle('active')
}) 
q('.robot-x').addEventListener('click',function(){
    q('.robot-box').classList.remove('active')
})
q('.robot-submit').addEventListener('click',function(){
    if(q('.robot-input').value != ''){
        q('.robot-body').innerHTML +=`
        <p class="mb-3 df justify-content-end aic">
            <span class="robot-mess2 text-light lep lh">${q('.robot-input').value}</span>
        </p>
        `
        var ans = '感謝您的提問，我們將告知網頁人員為您盡速回復'
        x = Object.keys(robot_data).filter(k => q('.robot-input').value.includes(k))
        if(x.length){
            ans = robot_data[x]
        }
        url = Object.keys(robot_url_data).filter(k =>q('.robot-input').value.includes(k))
        const robot_url = `#${robot_url_data[url]}`
        setTimeout(() => {
            q('.robot-body').innerHTML +=`
            <p class="mb-3">
                <span class="robot-mess text-light lep lh">${ans}</span>
            </p>
            `
            q('.robot-body').scrollTo({
                top:q('.robot-body').scrollHeight,
                behavior: 'smooth' 
            })
            window.location.href = robot_url
        }, 1000);
    }
    q('.robot-input').value = ''
})
q('.robot-input').addEventListener('keypress',function(e){
    if(e.keyCode === 13){
        q('.robot-submit').click()
    }
})