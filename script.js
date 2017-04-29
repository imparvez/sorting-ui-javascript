var imageGallery = {
    image: [{
        "_id": 1,
        "_cta": "https://flipkart.com/apple-iphone-se-space-grey-16-gb/p/itmehgsc5shnyanv?pid=MOBEHGSBRMGJFXFC&srno=b_1_1&otracker=CLP_filters&lid=LSTMOBEHGSBRMGJFXFC3YXSGX",
        "_itemImage": "https://rukminim1.flixcart.com/image/312/312/mobile/x/f/c/apple-iphone-se-mlln2hn-a-original-imaehk8jwyhksfsr.jpeg?q=70",
        "_productName": "Apple iPhone SE (Space Grey, 16 GB)",
        "_productPrice": "Rs: 25000",
        "_productPopularity": "high-to-low"
    },{
        "_id": 2,
        "_cta": "https://flipkart.com/apple-iphone-6-silver-16-gb/p/itme8dvfeuxxbm4r?pid=MOBEYHZ2NUZGCHKN&srno=b_1_2&otracker=CLP_filters&lid=LSTMOBEYHZ2NUZGCHKN7PMDIN",
        "_itemImage": "https://rukminim1.flixcart.com/image/312/312/mobile/h/k/n/apple-iphone-6-original-imaeyny5agaysfqg.jpeg?q=70",
        "_productName": "Apple iPhone SE (Space Grey, 16 GB)",
        "_productPrice": "Rs: 25000",
        "_productPopularity": "low-to-high"
    },{
        "_id": 3,
        "_cta": "https://flipkart.com/apple-iphone-6-space-grey-16-gb/p/itme8dvfeuxxbm4r?pid=MOBEYHZ2YAXZMF2J&srno=b_1_3&otracker=CLP_filters&lid=LSTMOBEYHZ2YAXZMF2JEVWVNC",
        "_itemImage": "https://rukminim1.flixcart.com/image/312/312/mobile/f/2/j/apple-iphone-6-original-imaeymdqs5gm5xkz.jpeg?q=70",
        "_productName": "Apple iPhone SE (Space Grey, 16 GB)",
        "_productPrice": "Rs: 25000",
        "_productPopularity": "new-release"
    },{
        "_id": 4,
        "_cta": "https://flipkart.com/apple-iphone-se-space-grey-16-gb/p/itmehgsc5shnyanv?pid=MOBEHGSBRMGJFXFC&srno=b_1_1&otracker=CLP_filters&lid=LSTMOBEHGSBRMGJFXFC3YXSGX",
        "_itemImage": "https://rukminim1.flixcart.com/image/312/312/mobile/x/f/c/apple-iphone-se-mlln2hn-a-original-imaehk8jwyhksfsr.jpeg?q=70",
        "_productName": "Apple iPhone SE (Space Grey, 16 GB)",
        "_productPrice": "Rs: 25000",
        "_productPopularity": "high-to-low"
    },{
        "_id": 5,
        "_cta": "https://flipkart.com/apple-iphone-6-silver-16-gb/p/itme8dvfeuxxbm4r?pid=MOBEYHZ2NUZGCHKN&srno=b_1_2&otracker=CLP_filters&lid=LSTMOBEYHZ2NUZGCHKN7PMDIN",
        "_itemImage": "https://rukminim1.flixcart.com/image/312/312/mobile/h/k/n/apple-iphone-6-original-imaeyny5agaysfqg.jpeg?q=70",
        "_productName": "Apple iPhone SE (Space Grey, 16 GB)",
        "_productPrice": "Rs: 25000",
        "_productPopularity": "low-to-high"
    },{
        "_id": 6,
        "_cta": "https://flipkart.com/apple-iphone-6-space-grey-16-gb/p/itme8dvfeuxxbm4r?pid=MOBEYHZ2YAXZMF2J&srno=b_1_3&otracker=CLP_filters&lid=LSTMOBEYHZ2YAXZMF2JEVWVNC",
        "_itemImage": "https://rukminim1.flixcart.com/image/312/312/mobile/f/2/j/apple-iphone-6-original-imaeymdqs5gm5xkz.jpeg?q=70",
        "_productName": "Apple iPhone SE (Space Grey, 16 GB)",
        "_productPrice": "Rs: 25000",
        "_productPopularity": "new-release"
    },{
        "_id": 7,
        "_cta": "https://flipkart.com/apple-iphone-se-space-grey-16-gb/p/itmehgsc5shnyanv?pid=MOBEHGSBRMGJFXFC&srno=b_1_1&otracker=CLP_filters&lid=LSTMOBEHGSBRMGJFXFC3YXSGX",
        "_itemImage": "https://rukminim1.flixcart.com/image/312/312/mobile/x/f/c/apple-iphone-se-mlln2hn-a-original-imaehk8jwyhksfsr.jpeg?q=70",
        "_productName": "Apple iPhone SE (Space Grey, 16 GB)",
        "_productPrice": "Rs: 25000",
        "_productPopularity": "high-to-low"
    },{
        "_id": 8,
        "_cta": "https://flipkart.com/apple-iphone-6-silver-16-gb/p/itme8dvfeuxxbm4r?pid=MOBEYHZ2NUZGCHKN&srno=b_1_2&otracker=CLP_filters&lid=LSTMOBEYHZ2NUZGCHKN7PMDIN",
        "_itemImage": "https://rukminim1.flixcart.com/image/312/312/mobile/h/k/n/apple-iphone-6-original-imaeyny5agaysfqg.jpeg?q=70",
        "_productName": "Apple iPhone SE (Space Grey, 16 GB)",
        "_productPrice": "Rs: 25000",
        "_productPopularity": "low-to-high"
    },{
        "_id": 9,
        "_cta": "https://flipkart.com/apple-iphone-6-space-grey-16-gb/p/itme8dvfeuxxbm4r?pid=MOBEYHZ2YAXZMF2J&srno=b_1_3&otracker=CLP_filters&lid=LSTMOBEYHZ2YAXZMF2JEVWVNC",
        "_itemImage": "https://rukminim1.flixcart.com/image/312/312/mobile/f/2/j/apple-iphone-6-original-imaeymdqs5gm5xkz.jpeg?q=70",
        "_productName": "Apple iPhone SE (Space Grey, 16 GB)",
        "_productPrice": "Rs: 25000",
        "_productPopularity": "new-release"
    }],
    renderList: function(){
        var ul = document.getElementById('lists'),
            li = "";
        this.image.map(function(img){
            li += "<li class='item-card' data-select-type='"+img._productPopularity+"'>";
                li += "<a href='"+img._cta+"'>";
                    li += "<div class='poster-container'>";
                        li += "<div class='movies-image'>";
                            li += "<img src='"+img._itemImage+"' alt='"+img._productName+"'/>";
                        li += "</div>";
                    li += "</div>";

                    li += "<div class='product-detail'>";
                        li += "<span class='product-name'>"+img._productName+"</span>";
                    li += "</div>";
                li += "</a>";
            li += "</li>";

        });
        ul.innerHTML = li;
    }
}

imageGallery.renderList();


function selectList(value) {
    var el = document.getElementsByClassName('item-card');
    var elm = document.querySelectorAll('[data-select-type='+value+']');

    for (var i = 0; i < el.length; i++) {
        el[i].style.display="none";
    }

    for (var i = 0; i < elm.length; i++) {
        elm[i].style.display="block";
    }

    if(value === "all") {
        for (var i = 0; i < el.length; i++) {
            el[i].style.display="block";
        }
    }

    // elm[0].style.display="block";
}

document.getElementById("grid").addEventListener("click", function(){
    var el = document.getElementsByClassName('item-card');
    for (var i = 0; i < el.length; i++) {
    	el[i].classList.remove("list-group-item");
        el[i].classList.add("grid");
    }
});

document.getElementById("list").addEventListener("click", function(){
    var el = document.getElementsByClassName('item-card');
    for (var i = 0; i < el.length; i++) {
    	el[i].classList.add("list-group-item");
        el[i].classList.remove("grid");
    }
});
