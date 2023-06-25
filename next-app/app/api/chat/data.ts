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

export function getCustomerStatus(loggedIn: boolean) {
  if (!loggedIn) return "NotLoggedIn";
  else
    return `name: Catherine
Order history:

Order number: c30454141378
Order date
Jan 31, 2023
Total # of items
1
INELIGIBLE FOR RETURN
Shipped
TRACK PACKAGE
FedEx: 394071992916
Hold Tight Long-Sleeve ShirtBlack
Size6Quantity 0
$68.00
Estimated delivery date
Feb 2, 2023
Delivery method
FedExGround
Payment details
Billed to
Catherine S.
910 Address St.
Charlotte NC 28206 US
Shipped to
Catherine S.
910 Address St.
Charlotte NC 28206 US
Subtotal$68.00
Merchandise tax$4.93
ShippingFREE
Order total$72.93 USD
Paid with
Visa x8888$72.93

Order number: c31866124729
Order date
Jan 27, 2023
Total # of items
1
INELIGIBLE FOR RETURN
Shipped
TRACK PACKAGE
USPS: 9200190301798057005011
lululemon Align™ Ribbed High-Rise Pant 25"Black
Size6Quantity 1
$118.00
Delivery method
FedExGround
Payment details
Billed to
Catherine S.
910 Address St.
Charlotte NC 28206-3336 US
Shipped to
Catherine S.
910 Address St.
Charlotte NC 28206-3336 US
Subtotal$118.00
Merchandise tax$8.56
ShippingFREE
Order total$126.56 USD
Paid with
Visa x8888$126.56

Order number: c29767103738
Order date
Oct 22, 2022
Total # of items
1
INELIGIBLE FOR RETURN
Shipped
TRACK PACKAGE
FedEx: 604483082320
Everywhere Belt Bag 1LBlack
SizeONE SIZEQuantity 1
$38.00
Estimated delivery date
Oct 25, 2022
Delivery method
FedExGround
Payment details
Billed to
Gaby S.
6404 Westview Loop
West Richland WA 99353 US
Shipped to
Gaby S.
6404 Westview Loop
West Richland WA 99353 US
Subtotal$38.00
Merchandise tax$3.31
ShippingFREE
Order total$41.31 USD
Paid with
Visa x7151$41.31

Order date
Mar 17, 2022
Total # of items
1
INELIGIBLE FOR RETURN
Shipped
TRACK PACKAGE
FedEx: 565479694164
Scuba Oversized Funnel Neck Half ZipRover
SizeM/LQuantity 0
$118.00
Delivery method
FedExGround
Payment details
Billed to
Catherine S.
205
910 Address St.
Charlotte NC 28206 US
Shipped to
Catherine S.
205
910 Address St.
Charlotte NC 28206 US
Subtotal$118.00
Merchandise tax$8.56
ShippingFREE
Order total$126.56 USD
Paid with
Visa x6989$126.56

Order number: c21534733226
Order date
Dec 21, 2020
Total # of items
3
INELIGIBLE FOR RETURN
Picked up
Always In Motion Boxer 5"Geo Camo Micro Coal Obsidian
SizeMQuantity 1
$28.00
The Reversible Mat 5mmMidnight Navy/White/True Navy
SizeONE SIZEQuantity 1
$78.00
Arise Mat 5mm *Made with FSC-Certified RubberBlack
SizeONE SIZEQuantity 1
$78.00
Picked up at
Atherton Mill, 2040 Address Boulevard
Payment details
Billed to
Catherine S.
205
910 Address St.
Charlotte NC 28206 US
Shipped to
Catherine S.
2040 Address Boulevard
Charlotte NC 28203 US
Subtotal$184.00
Merchandise tax$13.34
ShippingFREE
Order total$197.34 USD
Paid with
Visa x2187$197.34

Order number: c17533079944
Order date
May 17, 2020
Total # of items
1
INELIGIBLE FOR RETURN
Shipped
TRACK PACKAGE
FedEx: 180729358002
Commission Classic-Fit Short 9" *WarpstremeBlue Cast
Size32Quantity 0
$88.00
Delivery method
FedExGround
Payment details
Billed to
Catherine S.
910 Address St.
Charlotte NC 28206 US
Shipped to
Catherine S.
910 Address St.
Charlotte NC 28206 US
Subtotal$88.00
Merchandise tax$6.38
ShippingFREE
Order total$94.38 USD
Paid with
Gift Card x9027$50.00
Visa x0318$44.38

Order number: c17533079944
Order date
May 17, 2020
Total # of items
1
INELIGIBLE FOR RETURN
Shipped
TRACK PACKAGE
FedEx: 180729358002
Commission Classic-Fit Short 9" *WarpstremeBlue Cast
Size32Quantity 0
$88.00
Delivery method
FedExGround
Payment details
Billed to
Catherine S.
910 Address St.
Charlotte NC 28206 US
Shipped to
Catherine S.
910 Address St.
Charlotte NC 28206 US
Subtotal$88.00
Merchandise tax$6.38
ShippingFREE
Order total$94.38 USD
Paid with
Gift Card x9027$50.00
Visa x0318$44.38`;
}
