// Invoking strict mode
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

console.log('🚀 This is it.');

const MY_FAVORITE_BRANDS = [
  {
    'name': 'Faguo',
    'url': 'https://www.faguo-store.com'
  },
  {
    'name': 'Loom',
    'url': 'https://www.loom.fr'
  },
  {
    'name': 'Ecclo',
    'url': 'https://ecclo.fr/'
  }
];

console.table(MY_FAVORITE_BRANDS);
console.log(MY_FAVORITE_BRANDS[0]);

/**
 * 🌱
 * Let's go with a very very simple first todo
 * Keep pushing
 * 🌱
 */

// 🎯 TODO 1: The cheapest t-shirt
// 0. I have 3 favorite brands stored in MY_FAVORITE_BRANDS variable
// 1. Create a new variable and assign it the link of the cheapest t-shirt
// I can find on these e-shops
// 2. Log the variable

console.log("TODO 1 :");
const cheapest_tshirt = "https://www.faguo-store.com/fr/vetements/7606-arcy-t-shirt-en-coton-recycle-kaki.html";
console.log("cheapest t-shirt (hors réduction éphémère) :");
console.log(cheapest_tshirt);

/**
 * 👕
 * Easy 😁?
 * Now we manipulate the variable `marketplace`
 * `marketplace` is a list of products from several brands e-shops
 * The variable is loaded by the file `data.js`
 * 👕
 */

// 🎯 TODO 2: Number of products
// 1. Create a variable and assign it the number of products
// 2. Log the variable

console.log("TODO 2 :");
console.log("Number of products:");
const NbProducts = marketplace.length;
console.log(NbProducts);

// 🎯 TODO 3: Brands name
// 1. Create a variable and assign it the list of brands name only
// 2. Log the variable
// 3. Log how many brands we have

console.log("TODO 3 :");
const BrandList = [];
for (const product of marketplace) {
    BrandList.push(product.brand);
}

console.log(BrandList);
console.log('Now, uniques brand names :');
let uniqBrandList = [...new Set(BrandList)];

console.log(uniqBrandList);
console.log(uniqBrandList.length);



// 🎯 TODO 4: Sort by price
// 1. Create a function to sort the marketplace products by price
// 2. Create a variable and assign it the list of products by price from lowest to highest
// 3. Log the variable

console.log("TODO 4:");
function SortByPrice(marketplace) {
    return marketplace.sort((a, b) => a.price - b.price);
}

const ProductsSortedByPrice = SortByPrice(marketplace);
console.log(ProductsSortedByPrice);

// 🎯 TODO 5: Sort by date
// 1. Create a function to sort the marketplace objects by products date
// 2. Create a variable and assign it the list of products by date from recent to old
// 3. Log the variable

console.log("TODO 5 :");
function SortByDate(marketplace) {
    return marketplace.sort((a, b) => new Date(b.released) - new Date(a.released));
}

const ProductsSortedByDate = SortByDate(marketplace);
console.log(ProductsSortedByDate);




// 🎯 TODO 6: Filter a specific price range
// 1. Filter the list of products between 50€ and 100€
// 2. Log the list

console.log("TODO 6 :");
const ProductsFilteredByPrice = marketplace.filter(marketplace => marketplace.price >= 50 && marketplace.price <= 100);
console.log(ProductsFilteredByPrice);



// 🎯 TODO 7: Average price
// 1. Determine the average price of the marketplace
// 2. Log the average

console.log("TODO 7 :");
const sum = marketplace.reduce((a, b) => a + b.price, 0);
const avgPrice = (sum / marketplace.length) || 0;

console.log(avgPrice);



/**
 * 🏎
 * We are almost done with the `marketplace` variable
 * Keep pushing
 * 🏎
 */

// 🎯 TODO 8: Products by brands
// 1. Create an object called `brands` to manipulate products by brand name
// The key is the brand name
// The value is the array of products
//
// Example:
// const brands = {
//   'brand-name-1': [{...}, {...}, ..., {...}],
//   'brand-name-2': [{...}, {...}, ..., {...}],
//   ....
//   'brand-name-n': [{...}, {...}, ..., {...}],
// };
//
// 2. Log the variable
// 3. Log the number of products by brands

console.log("TODO 8 :");
const brands = {};
marketplace.forEach(product => {
    if (brands[product.brand]) {
        brands[product.brand].push(product);
    } else {
        brands[product.brand] = [product];
    }
});

console.log(brands);
Object.keys(brands).forEach(brandName => {
    console.log(`${brandName}: ${brands[brandName].length}`);
});

// 🎯 TODO 9: Sort by price for each brand
// 1. For each brand, sort the products by price, from highest to lowest
// 2. Log the sort

console.log("TODO 9 :");
Object.keys(brands).forEach(brand => {
    brands[brand].sort((a, b) => b.price - a.price);
});

console.log(brands);


// 🎯 TODO 10: Sort by date for each brand
// 1. For each brand, sort the products by date, from old to recent
// 2. Log the sort

console.log("TODO 10 :");
Object.keys(brands).forEach(brand => {
    brands[brand].sort((a, b) => new Date(a.released) - new Date(b.released));
});

console.log(brands);



/**
 * 💶
 * Let's talk about money now
 * Do some Maths
 * 💶
 */

// 🎯 TODO 11: Compute the p90 price value
// 1. Compute the p90 price value of each brand
// The p90 value (90th percentile) is the lower value expected to be exceeded in 90% of the products

console.log("TODO 11");
Object.keys(brands).forEach(brand => {
    const prices = brands[brand].map((product) => product.price);
    prices.sort((a, b) => a - b);
    const p90Ind = Math.ceil(prices.length * 0.9);
    const p90Val = prices[p90Ind - 1];
    console.log(`${brand}: ${p90Val}`);
});

/**
 * 🧥
 * Cool for your effort.
 * It's almost done
 * Now we manipulate the variable `COTELE_PARIS`
 * `COTELE_PARIS` is a list of products from https://coteleparis.com/collections/homme?filter.v.availability=1&filter.p.m.gender.type=Homme&sort_by=manual
 * 🧥
 */

const COTELE_PARIS = [
  {
    'link':
      'https://coteleparis.com/collections/homme/products/casquette-cotele-vert-olive?_pos=7&_fid=2fee5844b&_ss=c?variant=43527862485222&tag=homme',
    'brand': 'coteleparis',
    'price': 30,
    'name': 'CASQUETTE CÔTELÉ VERT OLIVE',
    'photo':
      'https://cdn.shopify.com/s/files/1/0479/7798/8261/products/CCC.jpg?crop=center&height=1545&v=1672998800&width=1200',
    'uuid': 'f0742b42-dc8c-54ae-99a8-ebb7d6f8f44e',
    'released': '2022-12-26'
  },
  {
    'link':
      'https://coteleparis.com/collections/homme/products/pantalon-cargo-vert-olive?_pos=13&_fid=2fee5844b&_ss=c&variant=43470511767782?variant=43470511767782&tag=homme',
    'brand': 'coteleparis',
    'price': 120,
    'name': 'PANTALON CARGO VERT OLIVE',
    'photo':
      'https://cdn.shopify.com/s/files/1/0479/7798/8261/products/ZOOM4.png?crop=center&height=1545&v=1666946168&width=1200',
    'uuid': '2b9a47e3-ed73-52f6-8b91-379e9c8e526c',
    'released': '2022-12-03'
  },
  {
    'link':
      'https://coteleparis.com/collections/homme/products/doudoune-puffer-navy?_pos=1&_fid=2fee5844b&_ss=c?variant=43581300506854&tag=homme',
    'brand': 'coteleparis',
    'price': 225,
    'name': 'DOUDOUNE PUFFER NAVY',
    'photo':
      'https://cdn.shopify.com/s/files/1/0479/7798/8261/files/N6.png?crop=center&height=1545&v=1668444595&width=1200',
    'uuid': '65162222-255a-5ea7-81c7-fb1225193773',
    'released': '2022-11-15'
  },
  {
    'link':
      'https://coteleparis.com/collections/homme/products/doudoune-puffer-azur?_pos=12&_fid=2fee5844b&_ss=c?variant=43608484610278&tag=homme',
    'brand': 'coteleparis',
    'price': 225,
    'name': 'DOUDOUNE PUFFER AZUR',
    'photo':
      'https://cdn.shopify.com/s/files/1/0479/7798/8261/files/AZ3.png?crop=center&height=1545&v=1668444227&width=1200',
    'uuid': 'e206681e-41d7-565e-91b3-b18d99fe80c3',
    'released': '2022-10-25'
  },
  {
    'link':
      'https://coteleparis.com/collections/homme/products/pantalon-cargo-camel?_pos=10&_fid=2fee5844b&_ss=c&variant=43470435221734?variant=43470435221734&tag=homme',
    'brand': 'coteleparis',
    'price': 120,
    'name': 'PANTALON CARGO CAMEL',
    'photo':
      'https://cdn.shopify.com/s/files/1/0479/7798/8261/products/CAMEL2.png?crop=center&height=1545&v=1666264660&width=1200',
    'uuid': 'b3a171aa-7c56-51f4-b7fd-7d2cd1a87968',
    'released': '2022-08-26'
  },
  {
    'link':
      'https://coteleparis.com/collections/homme/products/casquette-cotele-noire?_pos=16&_fid=2fee5844b&_ss=c?variant=43527862288614&tag=homme',
    'brand': 'coteleparis',
    'price': 30,
    'name': 'CASQUETTE CÔTELÉ NOIRE',
    'photo':
      'https://cdn.shopify.com/s/files/1/0479/7798/8261/products/PORTEES10.jpg?crop=center&height=1545&v=1668765538&width=1200',
    'uuid': '0a228763-e73b-590b-b638-f7001b19b300',
    'released': '2022-11-20'
  },
  {
    'link':
      'https://coteleparis.com/collections/homme/products/pantalon-cargo-gris?_pos=2&_fid=2fee5844b&_ss=c&variant=43470494695654?variant=43470494695654&tag=homme',
    'brand': 'coteleparis',
    'price': 96,
    'name': 'PANTALON CARGO GRIS',
    'photo':
      'https://cdn.shopify.com/s/files/1/0479/7798/8261/products/GRISs3.png?crop=center&height=1545&v=1666946159&width=1200',
    'uuid': '8e39794a-f91a-5fa7-b38b-3d0b176d0ea7',
    'released': '2022-08-11'
  },
  {
    'link':
      'https://coteleparis.com/collections/homme/products/doudoune-puffer-camel?_pos=5&_fid=2fee5844b&_ss=c?variant=43608484577510&tag=homme',
    'brand': 'coteleparis',
    'price': 225,
    'name': 'DOUDOUNE PUFFER CAMEL',
    'photo':
      'https://cdn.shopify.com/s/files/1/0479/7798/8261/files/CoteleDoudouneRouille_5.jpg?crop=center&height=1545&v=1668444404&width=1200',
    'uuid': '60046927-2ef2-589d-823d-73224d6786c6',
    'released': '2023-01-21'
  },
  {
    'link':
      'https://coteleparis.com/collections/homme/products/casquette-cotele-camel?_pos=3&_fid=2fee5844b&_ss=c?variant=43527861928166&tag=homme',
    'brand': 'coteleparis',
    'price': 30,
    'name': 'CASQUETTE CÔTELÉ CAMEL',
    'photo':
      'https://cdn.shopify.com/s/files/1/0479/7798/8261/products/PORTEES7.jpg?crop=center&height=1545&v=1668765573&width=1200',
    'uuid': '94e80e8f-34e2-546a-95ac-11cd0aa3ba08',
    'released': '2022-09-06'
  },
  {
    'link':
      'https://coteleparis.com/collections/homme/products/casquette-cotele-denim?_pos=11&_fid=2fee5844b&_ss=c?variant=43527845937382&tag=homme',
    'brand': 'coteleparis',
    'price': 30,
    'name': 'CASQUETTE CÔTELÉ DENIM',
    'photo':
      'https://cdn.shopify.com/s/files/1/0479/7798/8261/products/Denim2.png?crop=center&height=1545&v=1668079318&width=1200',
    'uuid': '6f83f0f6-9343-5f8b-8822-bc347097ee49',
    'released': '2022-08-30'
  },
  {
    'link':
      'https://coteleparis.com/collections/homme/products/casquette-cotele-sable?_pos=14&_fid=2fee5844b&_ss=c?variant=43527862386918&tag=homme',
    'brand': 'coteleparis',
    'price': 30,
    'name': 'CASQUETTE CÔTELÉ SABLE',
    'photo':
      'https://cdn.shopify.com/s/files/1/0479/7798/8261/products/PORTEES2.jpg?crop=center&height=1545&v=1668765512&width=1200',
    'uuid': '29fede06-1f38-55d4-b970-0bbf0a668e68',
    'released': '2022-11-14'
  },
  {
    'link':
      'https://coteleparis.com/collections/homme/products/doudoune-puffer-rouille?_pos=9&_fid=2fee5844b&_ss=c?variant=43608490049766&tag=homme',
    'brand': 'coteleparis',
    'price': 225,
    'name': 'DOUDOUNE PUFFER ROUILLE',
    'photo':
      'https://cdn.shopify.com/s/files/1/0479/7798/8261/files/R3.png?crop=center&height=1545&v=1668444742&width=1200',
    'uuid': '0a8cf869-853b-5d78-ae72-298588b03f82',
    'released': '2022-08-24'
  },
  {
    'link':
      'https://coteleparis.com/collections/homme/products/chemise-milleraie-vert-olive?_pos=4&_fid=2fee5844b&_ss=c?variant=43565200572646&tag=homme',
    'brand': 'coteleparis',
    'price': 72,
    'name': 'CHEMISE MILLERAIE VERT OLIVE',
    'photo':
      'https://cdn.shopify.com/s/files/1/0479/7798/8261/products/Sanstitre-32.jpg?crop=center&height=1545&v=1670187986&width=1200',
    'uuid': 'af213407-d75c-5f40-9d52-14fb414224af',
    'released': '2022-10-03'
  },
  {
    'link':
      'https://coteleparis.com/collections/homme/products/chemise-milleraie-navy?_pos=15&_fid=2fee5844b&_ss=c?variant=43565199229158&tag=homme',
    'brand': 'coteleparis',
    'price': 90,
    'name': 'CHEMISE MILLERAIE NAVY',
    'photo':
      'https://cdn.shopify.com/s/files/1/0479/7798/8261/products/C8.jpg?crop=center&height=1545&v=1670187595&width=1200',
    'uuid': '1e40612e-fe04-5a70-be75-79ea5fa6fbbe',
    'released': '2023-01-18'
  },
  {
    'link':
      'https://coteleparis.com/collections/homme/products/veste-cotele-navy?_pos=8&_fid=2fee5844b&_ss=c&variant=42801558585574?variant=42801558585574&tag=homme',
    'brand': 'coteleparis',
    'price': 126,
    'name': 'VESTE CÔTELÉ NAVY',
    'photo':
      'https://cdn.shopify.com/s/files/1/0479/7798/8261/files/NAVY_PHOTO_SITE.png?crop=center&height=1545&v=1657553445&width=1200',
    'uuid': '49c4e2d8-0cb4-5867-a5b9-23bd7168149f',
    'released': '2022-08-15'
  },
  {
    'link':
      'https://coteleparis.com/collections/homme/products/pantalon-cargo-denim?_pos=6&_fid=2fee5844b&_ss=c&variant=43470484373734?variant=43470484373734&tag=homme',
    'brand': 'coteleparis',
    'price': 96,
    'name': 'PANTALON CARGO DENIM',
    'photo':
      'https://cdn.shopify.com/s/files/1/0479/7798/8261/products/ZOOM_3a7331f6-03ee-4a01-ba18-2e56eaa5d9e2.png?crop=center&height=1545&v=1666290425&width=1200',
    'uuid': 'c4714dca-29c3-5603-818a-75c9668d53ab',
    'released': '2022-10-17'
  }
];

// 🎯 TODO 1: New released products
// // 1. Log if we have new products only (true or false)
// // A new product is a product `released` less than 2 weeks.

var NewProducts = [];
for (var i = 0; i < COTELE_PARIS.length; ++i) {
    var date = new Date(COTELE_PARIS[i].released);
    var today = new Date();
    var diff = today - date;
    var days = (diff / (1000 * 3600 * 24));

    if (days < 50) {
        NewProducts.push(COTELE_PARIS[i])
    }
}
console.log(NewProducts);

// 🎯 TODO 2: Reasonable price
// // 1. Log if coteleparis is a reasonable price shop (true or false)
// // A reasonable price if all the products are less than 100€

const isReasonablePrice = COTELE_PARIS.every(product => product.price < 100);
console.log(`Coteleparis is a reasonable price shop ?  ${isReasonablePrice}:`);

// 🎯 TODO 3: Find a specific product
// 1. Find the product with the uuid `2b9a47e3-ed73-52f6-8b91-379e9c8e526c`
// 2. Log the product

const findProduct = COTELE_PARIS.find(product => product.uuid === '2b9a47e3-ed73-52f6-8b91-379e9c8e526c');
console.log(findProduct);

// 🎯 TODO 4: Delete a specific product
// 1. Delete the product with the uuid `2b9a47e3-ed73-52f6-8b91-379e9c8e526c`
// 2. Log the new list of product

const newlist = COTELE_PARIS.filter(product => product.uuid !== '2b9a47e3-ed73-52f6-8b91-379e9c8e526c');
console.log(newlist);

// 🎯 TODO 5: Save the favorite product
// We declare and assign a variable called `blueJacket`
let blueJacket = {
  'link':
    'https://coteleparis.com/collections/homme/products/veste-cotele-navy?_pos=8&_fid=2fee5844b&_ss=c&variant=42801558585574?variant=42801558585574&tag=homme',
  'brand': 'coteleparis',
  'price': 126,
  'name': 'VESTE CÔTELÉ NAVY',
  'photo':
    'https://cdn.shopify.com/s/files/1/0479/7798/8261/files/NAVY_PHOTO_SITE.png?crop=center&height=1545&v=1657553445&width=1200',
  'uuid': '49c4e2d8-0cb4-5867-a5b9-23bd7168149f',
  'released': '2022-08-15'
};

// we make a copy of `blueJacket` to `jacket` variable
// and set a new property `favorite` to true
let jacket = blueJacket;

jacket.favorite = true;

// 1. Log `blueJacket` and `jacket` variables

console.log(blueJacket);
console.log(jacket);

// 2. What do you notice?

// No difference between blueJacket and jacket, but the "favorite" property is present in both since 'let' is dynamic, it means that jacket is a référence of `blueJacket`, and not a copy.

// we make a new assignment again
blueJacket = {
  'link':
    'https://coteleparis.com/collections/homme/products/veste-cotele-navy?_pos=8&_fid=2fee5844b&_ss=c&variant=42801558585574?variant=42801558585574&tag=homme',
  'brand': 'coteleparis',
  'price': 126,
  'name': 'VESTE CÔTELÉ NAVY',
  'photo':
    'https://cdn.shopify.com/s/files/1/0479/7798/8261/files/NAVY_PHOTO_SITE.png?crop=center&height=1545&v=1657553445&width=1200',
  'uuid': '49c4e2d8-0cb4-5867-a5b9-23bd7168149f',
  'released': '2022-08-15'
};

// 3. Update `jacket` property with `favorite` to true WITHOUT changing blueJacket properties

jacket.favorite = true;

console.log(blueJacket);
console.log(jacket);

/**
 * 🎬
 * The End: last thing to do
 * 🎬
 */

// 🎯 LAST TODO: Save in localStorage
// 1. Save MY_FAVORITE_BRANDS in the localStorage
// 2. log the localStorage

localStorage.setItem('MY_FAVORITE_BRANDS', JSON.stringify(MY_FAVORITE_BRANDS));
console.log(localStorage);