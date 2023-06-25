export function getProductCatalog() {
  const products = [
    {
      "Origin URL":
        "https://shop.lululemon.com/p/women-maintops/Swiftly-Tech-LS-2-Race/_/prod9820596?color=62255",
      "Product Features Limit": 4,
      "Product Feature Sub Categories Limit": 4,
      "Reviews of Product Limit": 5,
      "Gender Cloths": "Women's Clothes",
      "Type of Clothes": "Shirts",
      "Product Title": "Swiftly Tech Long-Sleeve Shirt 2.0",
      "Extra Product Title Description": "Race Length",
      "New or Used": "NEW",
      price: "$78 CAD",
      "Review Score": 4.4,
    },
    {
      "Origin URL":
        "https://shop.lululemon.com/p/women-tanks/Align-Ribbed-Tank/_/prod11250297?color=60714",
      "Product Features Limit": 4,
      "Product Feature Sub Categories Limit": 4,
      "Reviews of Product Limit": 5,
      "Gender Cloths": "Women's Clothes",
      "Type of Clothes": "Shirts",
      "Product Title": "lululemon Align™ Ribbed Tank Top",
      "Extra Product Title Description": "",
      "New or Used": "",
      price: "$68 CAD",
      "Review Score": 4.5,
    },
    {
      "Origin URL":
        "https://shop.lululemon.com/p/women-tanks/Sculpt-Tank-Cropped/_/prod9961111?color=28936",
      "Product Features Limit": 4,
      "Product Feature Sub Categories Limit": 4,
      "Reviews of Product Limit": 5,
      "Gender Cloths": "Women's Clothes",
      "Type of Clothes": "Shirts",
      "Product Title": "Sculpt Cropped Tank Top",
      "Extra Product Title Description": "",
      "New or Used": "",
      price: "$58 CAD",
      "Review Score": 4.4,
    },
    {
      "Origin URL":
        "https://shop.lululemon.com/p/women-sports-bras/Align-V-Neck-Bra-CD-Cup/_/prod11440041?color=28936",
      "Product Features Limit": 4,
      "Product Feature Sub Categories Limit": 4,
      "Reviews of Product Limit": 5,
      "Gender Cloths": "Women's Clothes",
      "Type of Clothes": "Sports Bras",
      "Product Title": "lululemon Align™ V-Neck Bra",
      "Extra Product Title Description": "Light Support, C/D Cup",
      "New or Used": "NEW",
      price: "$64 CAD",
      "Review Score": 4,
    },
    {
      "Origin URL":
        "https://shop.lululemon.com/p/women-pants/Nulux-5-Pocket-HR-Run-Tight-25-Ref/_/prod11380248?color=60997",
      "Product Features Limit": 4,
      "Product Feature Sub Categories Limit": 4,
      "Reviews of Product Limit": 5,
      "Gender Cloths": "Women's Clothes",
      "Type of Clothes": "Pants",
      "Product Title": "Fast and Free High-Rise Tight 25” Pockets",
      "Extra Product Title Description": "Updated",
      "New or Used": "",
      price: "$138 CAD",
      "Review Score": 2.9,
    },
    {
      "Origin URL":
        "https://shop.lululemon.com/p/women-shorts/Align-Short-6-Pocket/_/prod10520166?color=28936",
      "Product Features Limit": 4,
      "Product Feature Sub Categories Limit": 4,
      "Reviews of Product Limit": 5,
      "Gender Cloths": "Women's Clothes",
      "Type of Clothes": "Shorts",
      "Product Title": "lululemon Align™ High-Rise Short with Pockets 6",
      "Extra Product Title Description": "Online Only",
      "New or Used": "",
      price: "$74 CAD",
      "Review Score": 4.5,
    },
    {
      "Origin URL":
        "https://shop.lululemon.com/p/women-sports-bras/Like-a-Cloud-LL-Ribbed-D/_/prod11021146?color=60997",
      "Product Features Limit": 4,
      "Product Feature Sub Categories Limit": 4,
      "Reviews of Product Limit": 5,
      "Gender Cloths": "Women's Clothes",
      "Type of Clothes": "Sports Bras",
      "Product Title": "Like a Cloud Longline Ribbed Bra",
      "Extra Product Title Description": "Light Support, D/DD Cups",
      "New or Used": "",
      price: "$74 CAD",
      "Review Score": 4.6,
    },
    {
      "Origin URL":
        "https://shop.lululemon.com/p/skirts-and-dresses-skirts/Pace-Rival-Skirt-Tall/_/prod3770001?color=60997",
      "Product Features Limit": 4,
      "Product Feature Sub Categories Limit": 4,
      "Reviews of Product Limit": 5,
      "Gender Cloths": "Women's Clothes",
      "Type of Clothes": "Skirts",
      "Product Title": "Pace Rival Mid-Rise Skirt",
      "Extra Product Title Description": "Long",
      "New or Used": "NEW",
      price: "$78 CAD",
      "Review Score": 4.4,
    },
    {
      "Origin URL":
        "https://shop.lululemon.com/p/women-tanks/Sleeveless-Polo-Shirt/_/prod10930138?color=60997",
      "Product Features Limit": 4,
      "Product Feature Sub Categories Limit": 4,
      "Reviews of Product Limit": 5,
      "Gender Cloths": "Women's Clothes",
      "Type of Clothes": "Shirts",
      "Product Title": "Quick-Dry Sleeveless Polo Shirt",
      "Extra Product Title Description": "",
      "New or Used": "",
      price: "$68 CAD",
      "Review Score": 4,
    },
    {
      "Origin URL":
        "https://shop.lululemon.com/p/jackets-and-hoodies-jackets/Hooded-Define-Jacket-Nulu-2/_/prod11500123?color=61860",
      "Product Features Limit": 4,
      "Product Feature Sub Categories Limit": 4,
      "Reviews of Product Limit": 5,
      "Gender Cloths": "Women's Clothes",
      "Type of Clothes": "Coats & Jackets",
      "Product Title": "Hooded Define Jacket",
      "Extra Product Title Description": "Nulu",
      "New or Used": "NEW",
      price: "$138 CAD",
      "Review Score": 4.8,
    },
    {
      "Origin URL":
        "https://shop.lululemon.com/p/women-sports-bras/Flow-Y-Bra-Nulu-Long-Line/_/prod9270365?color=56852",
      "Product Features Limit": 4,
      "Product Feature Sub Categories Limit": 4,
      "Reviews of Product Limit": 5,
      "Gender Cloths": "Women's Clothes",
      "Type of Clothes": "Sports Bras",
      "Product Title": "Flow Y Nulu Longline Bra",
      "Extra Product Title Description": "Light Support, A–C Cups",
      "New or Used": "",
      price: "$64 CAD",
      "Review Score": 3.7,
    },
    {
      "Origin URL":
        "https://shop.lululemon.com/p/womens-sweatpants/Studio-Crop-III-Unlined/_/prod2040016?color=56496",
      "Product Features Limit": 4,
      "Product Feature Sub Categories Limit": 4,
      "Reviews of Product Limit": 5,
      "Gender Cloths": "Women's Clothes",
      "Type of Clothes": "Pants",
      "Product Title": "Dance Studio Mid-Rise Cropped Pant",
      "Extra Product Title Description": "",
      "New or Used": "",
      price: "$88 CAD",
      "Review Score": 4.3,
    },
  ];

  return products
    .map((p: any) =>
      Object.keys(p)
        .map((k) => `${k}: ${p[k]}`)
        .join("\n")
    )
    .join("\n---\n");

  // const data = csvParse(productCatalog);
  // const result = data.map(
  //   (d) =>
  //     `name: ${d["Product Title"]}\nurl: ${d["Origin URL"]}\ngender: ${d["Gender Cloths"]}\nprice: ${d["price"]}\nimage: ${d["Image URL"]}]}`
  // );
  // console.log(data.columns);
  // console.log(result);
  // return result;
}
