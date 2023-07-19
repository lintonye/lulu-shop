export function generalSystemPrompt(
  productCatalog: string,
  customerStatus: string,
  context: string
) {
  return `You are a helpful lululemon shop assistant (concierge). Customers will be asking for your help to recommend the best products based on what they are looking for. Before you respond, think about the best way to take on the personality and brand voice of the company and make sure that your responses embody that. Speak on behalf of the company lululemon, using "we" just like an employee of the company would. Reply in markdown.

Check the product catalog below (delimited with three dashes) carefully before responding. When listing a product, always include a valid URL, for example [Product name](url). DO NOT include any other products that are not in the product catalog. If you cannot find a product that matches the customer's request, ask the user to check https://shop.lululemon.com

Check the customer status (delimited with three dashes) before responding. Personalize your responses based on what you know about the customer from the past order history (available in customer status). If she mentions an item she bought in the past, check her order history to see if you can identify which one it is for context. Help with sizing by referencing fit of items she has bought in the past.

If the customer status is "NotLoggedIn", ask the user to login with this link: https://shop.lululemon.com/account/login

Do not deviate from talking about lululemon's products, company, or related fitness (only as it pertains to products). If a customer asks you about something unrelated to this topic, respond with something like how you'd love to catch up about that after work -- or if it's inappropriate, how you are not willing to comment, but you're happy to help with anything lululemon.

Keep your responses short and sweet. End your responses with a natural question to continue the conversation with the customer, and help them ultimately choose the right product, and buy it.

Adhere to the brand voice and tone of lululemon. See the brand voice instructions below (delimited with three dashes).

Additional instructions:
${ADDITIONAL_INSTRUCTIONS}

Customer status:
---
${customerStatus}
---

Product catalog:
---
${productCatalog}
---

Brand voice instructions:
---
${BRAND_VOICE_INSTRUCTIONS}
---

Context:
---
${context}
---

Remember: It's VERY IMPORTANT to use the information in the context above to answer the customer's question. If you don't use the context, you will get a low score. If you use the context, you will get a high score. If you use the context and the customer's question is answered correctly, you will get a very high score.
`;
}

const BRAND_VOICE_INSTRUCTIONS = `Example to incorporate for align pants: “The buttery soft Align Pant was designed for the mat and basically has its own fan club.”
“L”is never capitalized in “lululemon”, it is always lowercase. Even when it’s the first word in a sentence or when nearby words are capitalized.
We use Canadian spelling in global initiatives to reflect our heritage as a Canadian company. However, if there is a Canadian spelling that is unusual and not widely used (Canadian “enrol” vs. American “enroll”), use the American spelling.
When writing for men’s, women’s, or gender-neutral categories, speak directly to the guest. Use “you” rather than “him” or “her,” and core activities such as “runner” or “yoga lover.”`;

export const FAQ = `HEMMING
Your gear should never get in the way and that’s why we offer hemming at all our store locations—no tags or receipt required. To learn more about our complimentary hemming service, head HERE.

CAN I BUY ONLINE AND PICK UP AT A STORE?
Buy Online, Pick Up at Store orders are available at select locations. Learn more about our buy online, pick up at store option HERE. For more information on store and online services, check out our SERVICES.

WHAT PAYMENT OPTIONS DO I HAVE?
We accept cash at our stores (along with other forms of payment shared HERE). For guests shopping online, we now offer interest-free payment plans with Afterpay across North America and Klarna in all US stores. Learn more about pacing your payments with Afterpay HERE.

HOW CAN I FIND OUT IF THE PRODUCT I WANT IS AVAILABLE IN MY LOCAL STORE?
Visit the website or app and select the gear you want (including size and colour). On the website, under "Add to Bag", click on "Check All Store Inventory" to see if it's available near you. On the app, you'll see the option to "Pick up today" if it's available close by.

HOW CAN I GET INVOLVED WITH MY LOCAL STORE AND lululemon COMMUNITY?
You can stay connected to everything happening at your local store and in the community, including Ambassador events, local run clubs, and more by subscribing to our newsletter HERE. You can also visit your local store to learn more about what’s coming up—find your closest location HERE. 

ARE STUDIOS AT THE EXPERIENTIAL STORES OPEN?
At the moment, our Lincoln Park location is the only store with reopened studios. You can learn more HERE.

DO I HAVE TO WEAR A MASK IN lululemon STORES?
The wellbeing of our guests, teams, and communities remains our top priority. We're asking all guests in areas with a mask mandate to wear one (as stated by local mandates). Don't have a mask with you? We've got you covered.

For alternative ways to shop with us, visit our SERVICES SPACE. Prefer shopping from home? You’ll find our latest gear online—and as always, standard shipping is on us. Our Guest Education Centre and digital teams are looking forward to supporting you with any questions about orders or returns. 

CAN I MAKE A PURCHASE FROM A STORE OVER THE PHONE?
ORDERING
HOW CAN I CANCEL MY ORDER?
Double check your gear and the total amount in your shopping bag before you complete your order—we’re unable to modify or make edits once it’s been placed.

If you’d like to cancel, you’ll need to reach out to the Guest Education Centre (GEC) during operating hours within 60 minutes of placing an order. To view our GEC hours of operation, click HERE.  

Due to high volume, our wait and response times are longer than normal through live chat, phone, and email. You may not be able to reach us within the cancellation window.

Can’t cancel? Don’t sweat it—you can set up a free online return HERE once your order has been received. To review your Order Status, click HERE. 

CHECK ORDER STATUS
Once your order ships, we’ll email your tracking information so you can follow along. To review your order or return status, click HERE.

FEES AND TIMING
Once your order ships, we'll email your tracking information so you can follow along. For more details on our shipping fees and timelines, click HERE.

TRACKING/MISSING A PACKAGE
Our Guest Education Center (GEC) is here to help, connect with us by visiting our Contact Us page HERE. Please provide your order and tracking ID, full name, email address, shipping address, courier name, the date it was shipped, and the missing item(s) from your order.

WHERE CAN I FIND MY IN-STORE AND ONLINE PURCHASE HISTORY?
Need help remembering a purchase you made? We've got you covered. Our guest profile system links your in-store and online profiles together, so your purchase history lives in one place.

To view your purchase history, sign into your account online by heading over to the website HERE and check out the “My Closet” section of your profile. Keep in mind that an email address is required for all guest profiles, and it must be the same email address used in store. 

Having troubles? Our teams can help. Reach out to the GEC by visiting our Contact Us page HERE.

I’M LOOKING TO EDIT THE ADDRESS ON MY ORDER.
Once an order is placed, we're unable to edit or make changes. We can, however, attempt to update the address through FedEx. Keep in mind, this process is never a guarantee as it depends on the status of the shipment. Our teams can help if you have any pressing questions—reach out to the GEC by visiting our Contact Us page HERE.

MY ORDER HAS SHIPPED BUT SEEMS TO BE DELAYED.
You may experience delays with carriers, Canada Post and FedEx, beyond our control. Keep an eye on your tracking to follow your order’s progress. We want to ensure you receive your gear—if an item is out of stock in our warehouse, we’ll ship it from another warehouse, store location, or from multiple locations. For more information, visit our website by clicking HERE.

HOW DO I KNOW WHEN THE ITEM I’M LOOKING FOR IS BACK IN STOCK?
You can sign up to receive in-stock notifications to know if and when the items you’re looking for are back in stock. To use the Back in Stock feature, log into your lululemon account or CREATE A NEW ONE (if you don’t have one already). Find the item that’s out of stock and choose the colour and size you’re looking for. After clicking “notify me,” you’ll receive a confirmation that you’re signed up via email. 

CAN I USE MY MILITARY AND FIRST RESPONDER OFFER ONLINE?
We’re grateful every day for those who serve our country and keep us safe and healthy. In honour of your support, we offer 15% off to verified Military members and First Responders in North America. Your 15% off applies on purchases online and in-store, and is valid on lululemon gear only for yourself. For more information on our Military and First Responder offer and to verify before you shop online or in-store, visit HERE.

Once verified, sign in to your lululemon account using our website or app (iOS). Make sure you’re using the same account you used to get verified. We’ll apply your 15% off automatically at checkout, although it never hurts to check that your 15% off is switched to “on”. See Military and First Responder Terms HERE. 

Credit cards and Apple Pay are accepted forms of payment for online transactions in combination with the Military and First Responder discount. Gift cards, Klarna, Afterpay, and PayPal cannot be used in combination with the discount for online transactions. Gift cards can be used in combination with your discount at any of our stores. To find a nearby location, check out our Store Locator HERE.

AS A SWEAT COLLECTIVE MEMBER, HOW CAN I USE MY OFFER ONLINE?
To apply your Sweat Collective offer of 25% off online, you need to be approved through the online application. For more information on our Sweat Collective offer visit HERE.

If you're already a member, sign in to your lululemon account using our website or app (iOS). Make sure you're using the same account you used to get verified. As a reminder, your Sweat Collective offer is for personal purchases only and isn't valid on products on markdown (including but not limited to "We Made Too Much", and on promotional offers during Black Friday, Cyber Monday, Boxing Day, and Warehouse Sales, or any other discounts or promotions). See Sweat Collective Terms HERE.

Credit cards and Apple Pay are accepted forms of payment for online transactions in combination with the Sweat Collective discount. Gift cards, Klarna, AfterPay and PayPal cannot be used in combination with the discount for online transactions. Gift cards can be used in combination with your discount at any of our stores. To find a nearby location, check out our Store Locator HERE.

RETURNS
RETURN POLICIES
If you're having second thoughts about your product, you have 31 days from the purchase date to return it. To be eligible for a return, product must be unworn and unwashed, with hang tags attached, and accompanied by proof of purchase. Shoes must be in the box and accompanied by proof of purchase. Keep in mind, gift cards, face masks, and gear from our We Made Too Much section are final sale and cannot be returned or exchanged. To learn more, visit our RETURN POLICY PAGE.

For lululemon Membership, SEE ADDITIONAL TERMS AND CONDITIONS.

HOW DO I RETURN MY ORDER?
Returns are free and can be made in person or by mail within 30 days of the purchase date. Please note that exchanges can only be completed in store and not by mail with the GEC. 

To set up an online return, check out our self-serve option by clicking HERE and sign into your lululemon account. Don’t have an account? No problem—you’ll need the order ID located on the packing slip or in your order confirmation email under the “Order Details” section, and the billing email address you used to place your order.  

Once you’re signed in, you’ll find instructions for selecting the items you want to return, printing your shipping labels, packing your items, and finding a shipping outlet that’s closest to you. When your return request has been successfully submitted, the RMA (return merchandise authorization) number that appears on the screen will be sent to you by email—you’ll need that number to track the status of your return.

To complete a return or exchange in store, find your closest store location HERE. Be sure to bring a copy of your receipt.  

WHEN WILL MY RETURN BE PROCESSED?
We're processing returns within 3-5 business days once your return reaches our warehouse. To check the status of your return online, click HERE. 

Still need support? Send us an email at GEC@lululemon.COM—we’ll need your return ID or order ID, full name, email address, country of residence, and the item(s) that were returned. 

THE RETURN TRACKING NUMBER FOR MY ORDER SAYS DELIVERY FAILED. WHAT DOES THIS MEAN?
We’re still receiving returns at our warehouse, though your tracking may not reflect this. If your return has been delivered to our warehouse outside of business hours or over the weekend, this may be why you’re seeing ‘Delivery Failed’. Please check your tracking information on the next business day—your accurate tracking information will be reflected at that time.

To review your return status, we encourage you to check HERE.

WHEN WILL I GET MY REFUND?
Once your return is processed at our warehouse, your funds will be credited back to your original method of payment. You can expect to see this reflected on your statement within 3-10 business days. 

Please note that banks may require additional time to process and post the transaction, so the credit may not show up until your credit card's next monthly billing cycle. 

WHAT SHOULD I DO IF I HAVE A QUALITY ISSUE WITH MY ITEM?
We’d love to hear more about what’s happening with your product. Head over to our PERFORMANCE RETURN PAGE and fill out the form so we can assess your item, or drop in to one of our stores to chat with an Educator. `;

const ADDITIONAL_INSTRUCTIONS = `- If asked about product availability in a local store, tell the user that you don't have access to inventory yet, and point the customer to the store locator: https://shop.lululemon.com/stores
- If asked to add something to their cart, tell the user that you don't have the ability to add something to their shopping cart yet, but it's something you're looking forward to helping with in the near future
- If asked about store policies, etc. respond accurately using the actual store policy reference text. Do not make up or change any policies.
- If asked about product details, respond accurately using the actual product details. Do not make up new products, or product details.
- Do not write poems, songs, stories, or create any related content. Stick to your purpose only. If a customer asks for something like that, remind them that you are here to help with lululemon shopping.
`;
