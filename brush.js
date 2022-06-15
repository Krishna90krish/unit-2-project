let productData=[
    {
    pname:"SUGAR BLEND FACE BRUSH 003 CONTOUR",
    pimg:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-003Contour.jpg?v=1627659996",
    ptag:"BLEND FACE BRUSH 003 CONTOUR",
    rice:"Rs.399",
    pcateg:"Eyesshadow brush",
    prate:"⭐ 4.5(13)"
    },
    {
        pname:"SUGAR BLEND FACE BRUSH 043 CONTOUR ROUND XL",
        pimg:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-14_1.jpg?v=1627659982",
        ptag:"BLEND FACE BRUSH 043 CONTOUR ROUND XL",
        rice:"Rs.399",
        pcateg:"Eyesshadow brush",
        prate:"⭐ 4.8(6)"

    },
    {
        pname:"SUGAR BLEND FACE BRUSH 042 CONTOUR ROUND",
        pimg:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-3-min.jpg?v=1627573657",
        ptag:"BLEND FACE BRUSH 042 CONTOUR ROUND",
        rice:"Rs.399",
        pcateg:"Eyesshadow brush",
        prate:"⭐ 4.4(5)"

    },
    {
        pname:"EYE & FACE COMBO",
        pimg:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_1.jpg?v=1630683833",
        ptag:"EYES & FACE COMBO",
        rice:"Rs.649",
        pcateg:"Eyesshadow brush",
        prate:"⭐ 4.5(6)"

    },
    {
        pname:"SUGAR BLEND TREND FACE BRUSH 006 HIGHLIGHTER",
        pimg:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-006Highlighter.jpg?v=1627660002",
        ptag:"BLEND TREND FACE BRUSH -006 HIGHLIGHTER",
        rice:"Rs.399",
        pcateg:"Eyesshadow brush",
        prate:"⭐ 4.7(23)"

    },
    {
        pname:"SUGAR BLEND TREND DUAL EYESHADOW BRUSH-413 FLAT+ROUND XL",
        pimg:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-13.jpg?v=1627659977",
        ptag:"BLEND TREND DUAL EYESHADOW BRUSH-413 FLAT+ROUND XL",
        rice:"Rs.599",
        pcateg:"Eyesshadow brush",
        prate:"⭐ 5(2)"

    },
    {
        pname:" Blend Trend Eyeshadow Brush - 041 Flat",
        pimg:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-2-min.jpg?v=1627573652",
        ptag:"Blend Trend Eyeshadow Brush - 041 Flat",
        rice:"Rs.399",
        pcateg:"Eyesshadow brush",
        prate:"⭐ 5(3)"

    },
    {
        pname:"Blend Trend Dual Eyeshadow Brush - 412 Flat + Round",
        pimg:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-5-min.jpg?v=1627573639",
        ptag:"Blend Trend Dual Eyeshadow Brush - 412 Flat + Round",
        rice:"Rs.599",
        pcateg:"Eyesshadow brush",
        prate:"⭐ 5(2)"

    },
    
    {
        pname:" Blend Trend Foundation Brush - 052 Kabuki",
        pimg:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFoundationBrush-052Kabuki.jpg?v=1627573664",
        ptag:"Blend Trend Foundation Brush - 052 Kabuki",
        rice:"Rs.399",
        pcateg:"Eyesshadow brush",
        prate:"⭐ 4.8(26)"

    },
    {
        pname:" Blend Trend Face Brush - 001 Blush",
        pimg:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-001Blush.jpg?v=1627659984",
        ptag:"Blend Trend Face Brush - 001 Blush",
        rice:"Rs.399",
        pcateg:"Eyesshadow brush",
        prate:"⭐ 4.9(15)"

    },
    {
        pname:"Blend Trend Face Brush - 007 Powder",
        pimg:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-007Powder.jpg?v=1627660008",
        ptag:"Blend Trend Face Brush - 007 Powder",
        rice:"Rs.399",
        pcateg:"Eyesshadow brush",
        prate:"⭐ 4.9(24)"

    },
    {
        pname:" Face Essentials Combo",
        pimg:"https://cdn.shopify.com/s/files/1/0906/2558/products/BeginnersEssentialsCombo3-WBGimages.jpg?v=1630683820",
        ptag:"Face Essentials Combo",
        rice:"Rs.1499",
        pcateg:"Eyesshadow brush",
        prate:"⭐ 5(1)"

    },
    

]
let pdata=document.querySelector("#Product");
function displayProducts(productData){
    productData.foreach(function(elem){
        
     
        let prds=document.createElement("div");
        let brand=document.createElement("p");
        brand.innerText=elem.pname;
        let img=document.createElement("img");
        img.src=elem.pimg;
        let tag=document.createElement("h2");
        tag.innerText=elem.ptag;
        let rate=document.createElement("p");
        rate.innerText=elem.rice;
        let categ=document.createElement("p");
        categ.innerText=elem.pcateg;
        let rateing=document.createElement("p");
        rateing.innerText=elem.prate;
        let addtocar=document.createElement("button");
        addtocar.innerText="Add To Cart";

        prds.append(brand,img,tag,rate,categ,rateing,addtocar);
        pdata.append(prds);
    })
        
    }
    displayProducts(productData);
 