const category=document.getElementsByClassName('sections')

function select(){
    category.style.backgroundColor="orange"
}

const data_cat=[
    {
        profilepic:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        name:"Men",
        link:"https://www.tatacliq.com/menswear-clp-new?&icid2=quic:wqul:main:hmp:m11:mulb:best:04:R1:clp:Bx:010"
    },
    {
        profilepic:"https://images.unsplash.com/photo-1624309845812-a7c7e12259f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        name:"Women",
        link:"https://www.tatacliq.com/womenswear-clp?&icid2=quic:wqul:main:hmp:m10:mulb:best:03:R1:clp:Bx:010"
    },
    {
        profilepic:"https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGtpZHMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60ecommerce-10.jpg",
        name:"Kids",
        link:"https://www.tatacliq.com/kids-clp?&icid2=quic:wqul:main:hmp:m21:mulb:best:06:R1:clp:Bx:010"
    },
    {
        profilepic:"https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FkZ2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        name:"Gadgets",
        link:"https://www.tatacliq.com/the-beauty-store?&icid2=quic:wqul:main:hmp:m25:mulb:best:05:R1:clp:Bx:010"
    },
    {
        profilepic:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYXV0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        name:"Beauty",
        link:"https://www.tatacliq.com/the-beauty-store?&icid2=quic:wqul:main:hmp:m25:mulb:best:05:R1:clp:Bx:010"
    },
    {
        profilepic:"https://images.unsplash.com/photo-1617355186185-389cbb4e3416?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWUlMjBhcHBsaWFuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        name:"Home Appliances",
        link:"https://www.tatacliq.com/home-fest?&icid2=quic:wqul:main:hmp:m22:mulb:best:07:R1:clp:Bx:010"
    }
]

const categories=document.querySelector('.categories')

data_cat.forEach((item)=>{
    categories.innerHTML +=
    `<div class="cat-img">
    <a href="${item.link}" target="_parent" ><img src="${item.profilepic}" alt="Categories"></a>
        <h3>${item.name}</h3>
    </div>
    `
})
/* Men brands */
const men_brands=[
    {
        image:"Images/vanheusen.png",
        name:"Van Heusen",
        link:"https://www.tatacliq.com/mens-clothing/c-msh11?q=%3Arelevance%3Acategory%3AMSH11%3AinStockFlag%3Atrue%3AisLuxuryProduct%3Afalse%3Abrand%3AMBH11A00024&icid2=regu:shpb:main:mnav:m11:a00024:best:05:R3"
    },
    {
        image:"Images/allensolly.png",
        name:"Allen solly",
        link:"https://www.tatacliq.com/mens-clothing/c-msh11?q=%3Arelevance%3Acategory%3AMSH11%3AinStockFlag%3Atrue%3AisLuxuryProduct%3Afalse%3Abrand%3AMBH11A00023&icid2=regu:shpb:main:mnav:m11:a00023:best:06:R3"
    },
    {
        image:"Images/uspolo.png",
        name:"U.S. Polo Assn",
        link:"https://www.tatacliq.com/search/?searchCategory=all&text=U.S.%20Polo%20Assn"
    },
    {
        image:"Images/levis.png",
        name:"Levis",
        link:"https://www.tatacliq.com/search/?searchCategory=all&text=Levi%27s"
    }
]
const menbrand=document.querySelector(".menbrand")
men_brands.forEach((item)=>{
    menbrand.innerHTML += `<a href="${item.link}" target="_parent"><img src="${item.image}" alt="Brands"></a>`
    /* <p>${item.name}</p> */
})
/* Women brands */
const women_brands=[
    {
        image:"Images/utsa.jfif",
        name:"",
        link:"https://www.tatacliq.com/womens-clothing/c-msh10?q=%3Arelevance%3Acategory%3AMSH10%3AinStockFlag%3Atrue%3Abrand%3AMBH11A00191&icid2=regu:shpb:main:wnav:m10:a00175:best:01:R1"
    },
    {
        image:"Images/globaldesi.jfif",
        name:"",
        link:"https://www.tatacliq.com/global-desi/c-mbh11a00001"
    },
    {
        image:"Images/okhai.jfif",
        name:"",
        link:"https://www.tatacliq.com/womens-clothing/c-msh10?q=%3Arelevance%3Acategory%3AMSH10%3AinStockFlag%3Atrue%3Abrand%3AMBH11A00313"
    },
    {
        image:"Images/westside.png",
        name:"",
        link:"https://www.tatacliq.com/westside/c-mbh11a00004?&icid2=regu:shpb:main:wnav:m10:a00004:best:01:R2"
    }
]
const womenbrand=document.querySelector(".womenbrand")
women_brands.forEach((item)=>{
    womenbrand.innerHTML += `<a href="${item.link}" target="_parent"><img src="${item.image}" alt="Brands"></a>
    <p>${item.name}</p>`
})
/* Kids brands */
const kid_brands=[
    {
        image:"Images/ginijony.png",
        name:"",
        link:"https://www.tatacliq.com/gini-jony/c-mbh11a00144"
    },
    {
        image:"Images/kiddies.jpg",
        name:"",
        link:"https://www.tatacliq.com/kids/c-msh21?q=%3Arelevance%3Acategory%3AMSH21%3AinStockFlag%3Atrue%3AisLuxuryProduct%3Afalse%3Abrand%3AMBH11A00020"
    },
    
    {
        image:"Images/biba.jpg",
        name:"",
        link:"https://www.tatacliq.com/kids/c-msh21/page-1?q=%3Arelevance%3Acategory%3AMSH21%3Acategory%3AMSH21%3Acategory%3AMSH21%3Acategory%3AMSH21%3Acategory%3AMSH21%3Acategory%3AMSH21%3Acategory%3AMSH21%3Acategory%3AMSH21%3Acategory%3AMSH21%3AinStockFlag%3Atrue%3AisLuxuryProduct%3Afalse%3Abrand%3AMBH11B10587"
    }
]
const kidsbrand=document.querySelector(".kidsbrand")
kid_brands.forEach((item)=>{
    kidsbrand.innerHTML += `<a href="${item.link}" target="_parent"><img src="${item.image}" alt="Brands"></a>
    <p>${item.name}</p>`
})

/* Gadgets brands */
const gadget_brands=[
    {
        image:"Images/apple.jfif",
        name:"",
        link:"https://www.tatacliq.com/electronics-head-phones/c-msh1234?q=%3Arelevance%3Acategory%3AMSH1234%3AinStockFlag%3Atrue%3Abrand%3AMBH12E00008"
    },
    {
        image:"Images/titan.png",
        name:"",
        link:"https://www.tatacliq.com/titan/c-mbh15e01399"
    },
    {
        image:"Images/redmi.png",
        name:"",
        link:"https://www.tatacliq.com/search/?searchCategory=all&text=redmi"
    },
    {
        image:"Images/boat.jfif",
        name:"",
        link:"https://www.tatacliq.com/search/?searchCategory=all&text=boat"
    }
]
const gadgetbrand=document.querySelector(".gadgetbrand")
gadget_brands.forEach((item)=>{
    gadgetbrand.innerHTML += `<a href="${item.link}" target="_parent"><img src="${item.image}" alt="Brands"></a>
    <p>${item.name}</p>`
})
/* Beauty brands */
const beauty_brands=[
    {
        image:"Images/lakme.jpg",
        name:"",
        link:"https://www.tatacliq.com/beauty-&-grooming/c-msh25/page-1?q=%3Arelevance%3Acategory%3AMSH25%3AinStockFlag%3Atrue%3AisLuxuryProduct%3Afalse%3Abrand%3AMBH22B12699&icid2=catd:tsb:clp:bea:m25:b12699:best:05:R36:clp:bx:010"
    },
    {
        image:"Images/skinn.png",
        name:"",
        link:"https://www.tatacliq.com/beauty-&-grooming/c-msh25/?q=%3Arelevance%3Acategory%3AMSH25%3AinStockFlag%3Atrue%3AisLuxuryProduct%3Afalse%3Abrand%3AMBH22B12078&icid2=catd:tsb:clp:bea:m25:b12078:best:02:R36:clp:bx:010"
    },
    {
        image:"Images/plum.jfif",
        name:"",
        link:"https://www.tatacliq.com/plum-green-tea-alcohol-free-toner-green-tea-toner--200-ml/p-mp000000009083926"
    },
    {
        image:"Images/mamaearth.png",
        name:"",
        link:"https://www.tatacliq.com/mamaearth-onion-shampoo--1000-ml/p-mp000000012214246"
    }
]
const beautybrand=document.querySelector(".beautybrand")
beauty_brands.forEach((item)=>{
    beautybrand.innerHTML += `<a href="${item.link}" target="_parent"><img src="${item.image}" alt="Brands"></a>
    <p>${item.name}</p>`
})

