
   //objects
   let products =[
    {
      "name": "MACEOO SHIRT | GALILEO SQUARE MICRO ORANGE",
      "price": 138,
      "sizes": ["S","M","L","XL", "2XL"],
      "images": ["https://cdn.shopify.com/s/files/1/0115/5332/products/GalileoSquareMicroOrange_202201010063_1_Main_1800x1800.jpg?v=1647746109", "https://cdn.shopify.com/s/files/1/0115/5332/products/GalileoSquareMicroOrange_202201010063_4_1800x1800.jpg?v=1647746108",
      "https://cdn.shopify.com/s/files/1/0115/5332/products/GalileoSquareMicroOrange_202201010063_10_1800x1800.jpg?v=1647746109"],
      "attributes": ["Spring / Summer 2022,", "American Slim Fit", "Italian Fabrics from 100% Cotton", "Imported", "Ship from Las Vegas, USA", "Machine Washable, Dry Cleaned preferred", "Lay Flat to Dry, Don't Tumble Dry"]
    },

    {
      "name": "AU NOIR DRESSY STRETCH PANT - BERETTA CHARCHOAL",
      "price": 127.20,
      "sizes": ["S","M","L","XL", "2XL"],
      "images": ["https://cdn.shopify.com/s/files/1/0115/5332/products/BERETTA_charcoal_1598_120x.jpg?v=1599684105", "https://cdn.shopify.com/s/files/1/0115/5332/products/BERETTA_charcoal_1596_360x.jpg?v=1599684105",
      "https://cdn.shopify.com/s/files/1/0115/5332/products/BERETTA_charcoal_1552_360x.jpg?v=1599684105"],
      "attributes": ["Au Noir 2019 Collection", "Standard length of 34 for all sizes", "Slim Fit cut", "Stretched Material", "Ship from Montreal Canada", "Imported"]
    },

    {
      "name": "PAUL PARKMAN MEN'S SIDE ZIPPER LEATHER BOOTS LIGHT BROWN (12455-CML)",
      "price": 650.00,
      "sizes": ["S","M","L","XL","2XL","3XL"],
      "images": ["https://cdn.shopify.com/s/files/1/0115/5332/products/MUS_1241-copy_360x.jpg?v=1582054733",
      "https://cdn.shopify.com/s/files/1/0115/5332/products/MUS_1243-copy_360x.jpg?v=1582054733", "https://cdn.shopify.com/s/files/1/0115/5332/products/MUS_1237-copy_120x.jpg?v=1582054733", "https://cdn.shopify.com/s/files/1/0115/5332/products/MUS_1251-copy_120x.jpg?v=1582054733"],
      "attributes": ["Light brown hand-painted calfskin upper", "Leather sole with a transparent rubber layer", "Decorative side zippers", "Natural leather lining and inner sole", "The product is a lace-up boot style so the zipper is for decorative purposes only. Laces should be tied/untied to put on and take off"]
    },

    {
      "name": "AU NOIR SHORT-SLEEVE POLO | PRESCOTT BLACK",
      "price": 111.20,
      "sizes": ["S","M","L","XL","2XL","3XL"],
      "images": ["https://cdn.shopify.com/s/files/1/0115/5332/products/PRESCOTT_black_0066_1800x1800.jpg?v=1622085157",
      "https://cdn.shopify.com/s/files/1/0115/5332/products/PRESCOTT_black_00661_360x.jpg?v=1622085157"],
      "attributes": ["All Over Print Italian Fabrics", "Spring / Summer 2021", "Semi Fitted", "Imported", "Ship from Montreal, USA", "Machine Washable, Dry Cleaned preferred", "Lay Flat to Dry, Don't Tumble Dry"]
    },
   
    {
      "name": "AU NOIR DRESSY STRETCH PANT - MAGNUM BEIGE",
      "price": 127.20,
      "sizes": ["S","M","L","XL","2XL","3XL"],
      "images": ["https://cdn.shopify.com/s/files/1/0115/5332/products/MAGNUM_beige_1622_120x.jpg?v=1599684108",
      "https://cdn.shopify.com/s/files/1/0115/5332/products/MAGNUM_beige_1620_360x.jpg?v=1599684108", "https://cdn.shopify.com/s/files/1/0115/5332/products/MAGNUM_beige_1635_360x.jpg?v=1599684108"],
      "attributes": ["Au Noir 2019 Collection", "Standard length of 34 for all sizes", "Slim Fit cut", "Stretched Material", "Ship from Montreal Canada", "Imported"]
    },

    {
      "name": "PAUL PARKMAN MEN'S LOAFERS TURQUOISE (ID#093-TRQ)",
      "price": 450.00,
      "sizes": ["S","M","L","XL","2XL","3XL"],
      "images": ["https://cdn.shopify.com/s/files/1/0115/5332/products/MUS_2520_360x.jpg?v=1582054371",
      "https://cdn.shopify.com/s/files/1/0115/5332/products/MUS_2518_360x.jpg?v=1582054371", "https://cdn.shopify.com/s/files/1/0115/5332/products/MUS_2524_120x.jpg?v=1582054371", "https://cdn.shopify.com/s/files/1/0115/5332/products/MUS_2530_120x.jpg?v=1582054371"],
      "attributes": ["Turquoise hand-painted calfskin upper", "Blue burnished leather sole", "Bordeaux leather lining and inner sole", "Slip-on style men's loafer shoes"]
    }
  ]


 //productname
  document.querySelector("#name1").innerText = products[0].name; 

  document.querySelector("#name2").innerText = `${products[1].name}`; 

  document.querySelector("#name3").innerText = `${products[2].name}`; 

  document.querySelector("#name4").innerText = `${products[3].name}`; 



//productprice

document.querySelector("#price1").innerHTML =   `	<h2 class=" mt-6 text-xl" id="price1">$<span>${products[0].price} </span> </h2>`

document.querySelector("#price2").innerHTML =   `	<h2 class=" mt-6 text-xl" id="price2">$<span>${products[1].price} </span> </h2>`

document.querySelector("#price3").innerHTML =   `	<h2 class=" mt-6 text-xl" id="price3">$<span>${products[2].price} </span> </h2>`

document.querySelector("#price4").innerHTML =   `	<h2 class=" mt-6 text-xl" id="price4">$<span>${products[3].price} </span> </h2>`


 
//productimages
document.querySelector("#image1").src= products[0].images; 
document.querySelector("#image2").src= products[1].images; 
document.querySelector("#image3").src= products[2].images; 
document.querySelector("#image4").src= products[3].images; 



 