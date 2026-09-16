/**
 * ==========================================================================
 * AUTHENTIC COSMO STOREFRONT JAVASCRIPT ENGINE
 * Multi-Category Support for LADIES, MEN, KIDS, and HOME
 * Complete Interactive E-Commerce Experience
 * ==========================================================================
 */

// ==========================================================================
// 1. COMPREHENSIVE PRODUCT CATALOG DATA
// ==========================================================================
const productsData = [
    // --------------------------------------------------------------------------
    // LADIES (1-12) - All Images Loaded from images/ Folder
    // --------------------------------------------------------------------------
    {
        id: 1,
        name: "Polka Dot Dress",
        category: "ladies",
        subCategory: "dresses",
        price: 4499,
        originalPrice: null,
        colors: ["White", "Off-White", "Black"],
        sizes: ["XS", "S", "M", "L", "XL"],
        imageFront: "images/23.jpg",
        imageBack: "images/23.jpg",
        rating: 4.8,
        reviewCount: 142,
        isNew: true,
        description: "Fitted mini dress in crisp organic cotton-linen blend with delicate polka dot pattern, structured seams, and a flattering square neckline with shoulder straps."
    },
    {
        id: 2,
        name: "Floral Flared Dress",
        category: "ladies",
        subCategory: "dresses",
        price: 5999,
        originalPrice: 7999,
        colors: ["Floral Cream", "Garden Sage", "Blush"],
        sizes: ["34", "36", "38", "40", "42"],
        imageFront: "images/23234.jpg",
        imageBack: "images/23234.jpg",
        rating: 4.9,
        reviewCount: 98,
        isNew: true,
        description: "Flared mini dress with sweetheart neckline, delicate shoulder straps, and vibrant botanical garden floral print with contrast border hem."
    },
    {
        id: 3,
        name: "Wide Leg Trousers",
        category: "ladies",
        subCategory: "bottoms",
        price: 3499,
        originalPrice: null,
        colors: ["Black", "Cobalt Blue", "Sand"],
        sizes: ["XS", "S", "M", "L"],
        imageFront: "images/ads.jpg",
        imageBack: "images/ads.jpg",
        rating: 4.6,
        reviewCount: 76,
        isNew: false,
        description: "Fluid wide-leg trousers in a textured lightweight weave featuring an elasticated drawstring waistband, side slip pockets, and relaxed silhouette."
    },
    {
        id: 4,
        name: "Embroidered Cropped Jacket",
        category: "ladies",
        subCategory: "outerwear",
        price: 6999,
        originalPrice: null,
        colors: ["Pure Black", "Midnight Blue"],
        sizes: ["XS", "S", "M", "L", "XL"],
        imageFront: "images/dfagh.jpg",
        imageBack: "images/dfagh.jpg",
        rating: 4.9,
        reviewCount: 210,
        isNew: true,
        description: "Structured cropped jacket in crisp black weave featuring intricate tonal embroidery, high mandarin collar, long sleeves, and concealed front closure."
    },
    {
        id: 5,
        name: "Fine Knit Cardigan",
        category: "ladies",
        subCategory: "tops",
        price: 4999,
        originalPrice: null,
        colors: ["Ice Blue", "Soft Mint", "Pastel Lilac"],
        sizes: ["34", "36", "38", "40", "42"],
        imageFront: "images/ed.jpg",
        imageBack: "images/ed.jpg",
        rating: 4.7,
        reviewCount: 64,
        isNew: false,
        description: "Soft fine-knit short-sleeve cardigan top in ice blue with delicate front button placket, ribbed collar, and fitted ribbed hem."
    },
    {
        id: 6,
        name: "Draped Satin Blouse",
        category: "ladies",
        subCategory: "tops",
        price: 3999,
        originalPrice: null,
        colors: ["Jet Black", "Champagne", "Espresso"],
        sizes: ["XS", "S", "M", "L"],
        imageFront: "images/erw2.jpg",
        imageBack: "images/erw2.jpg",
        rating: 4.8,
        reviewCount: 115,
        isNew: true,
        description: "Elegant black blouse in lustrous satin featuring a high gathered stand collar, cascading draped tie ribbon, and fluid balloon sleeves."
    },
    {
        id: 7,
        name: "Straight High Jeans",
        category: "ladies",
        subCategory: "bottoms",
        price: 4299,
        originalPrice: null,
        colors: ["Vintage Blue", "Mid Indigo", "Light Wash"],
        sizes: ["26", "28", "30", "32", "34"],
        imageFront: "images/ew.jpg",
        imageBack: "images/ew.jpg",
        rating: 4.8,
        reviewCount: 88,
        isNew: false,
        description: "High-waist 5-pocket jeans in rigid authentic cotton denim with a straight relaxed leg, copper rivets, and clean finished hem."
    },
    {
        id: 8,
        name: "Leather Trapeze Tote",
        category: "ladies",
        subCategory: "accessories",
        price: 7499,
        originalPrice: 9999,
        colors: ["Classic Black", "Cognac Brown", "Dark Chocolate"],
        sizes: ["One Size"],
        imageFront: "images/rew.jpg",
        imageBack: "images/rew.jpg",
        rating: 4.7,
        reviewCount: 52,
        isNew: false,
        description: "Spacious shoulder tote bag crafted in smooth black faux leather with flared trapeze silhouette, sturdy dual carry handles, and magnetic snap closure."
    },
    {
        id: 9,
        name: "Relaxed Linen Shirt",
        category: "ladies",
        subCategory: "tops",
        price: 3499,
        originalPrice: null,
        colors: ["Oatmeal Beige", "Chalk White", "Natural Sand"],
        sizes: ["XS", "S", "M", "L"],
        imageFront: "images/rituju.jpg",
        imageBack: "images/rituju.jpg",
        rating: 4.6,
        reviewCount: 67,
        isNew: false,
        description: "Airy relaxed button-up shirt in woven linen and cotton blend with mandarin collar, casual dropped shoulders, and curved hem."
    },
    {
        id: 10,
        name: "Tailored Midi Skirt",
        category: "ladies",
        subCategory: "bottoms",
        price: 5499,
        originalPrice: null,
        colors: ["Heather Grey", "Charcoal", "Black"],
        sizes: ["34", "36", "38", "40", "42"],
        imageFront: "images/slk.jpg",
        imageBack: "images/slk.jpg",
        rating: 5.0,
        reviewCount: 340,
        isNew: true,
        description: "Sophisticated grey tailored midi skirt in lightweight suiting fabric with a clean waistband, tie detail, front pleats, and sleek back vent."
    },
    {
        id: 11,
        name: "Draped Knot Top",
        category: "ladies",
        subCategory: "tops",
        price: 3299,
        originalPrice: null,
        colors: ["Crimson Red", "Burgundy", "Black"],
        sizes: ["XS", "S", "M", "L", "XL"],
        imageFront: "images/vvb.jpg",
        imageBack: "images/vvb.jpg",
        rating: 4.8,
        reviewCount: 189,
        isNew: false,
        description: "Soft stretch jersey top in rich crimson red with asymmetrical side gathering, knot detail, round neckline, and fitted long sleeves."
    },
    {
        id: 12,
        name: "Wide Leg Denim",
        category: "ladies",
        subCategory: "bottoms",
        price: 4799,
        originalPrice: null,
        colors: ["Natural Ecru", "Washed Stone", "Ivory"],
        sizes: ["26", "28", "30", "32", "34"],
        imageFront: "images/werk.jpg",
        imageBack: "images/werk.jpg",
        rating: 4.9,
        reviewCount: 128,
        isNew: true,
        description: "High-waist wide-leg jeans in heavyweight unbleached ecru denim with classic 5-pocket styling, contrast stitch detailing, and relaxed drape."
    },

    // --------------------------------------------------------------------------
    // MEN (201-212) - All Images Loaded from images/ Folder
    // --------------------------------------------------------------------------
    {
        id: 201,
        name: "Relaxed Zip Hoodie",
        category: "men",
        subCategory: "tops",
        price: 4499,
        originalPrice: null,
        colors: ["Taupe", "Heather Grey", "Black"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        imageFront: "images/rew-copy.jpg",
        imageBack: "images/rew-copy.jpg",
        rating: 4.9,
        reviewCount: 230,
        isNew: true,
        description: "Heavyweight French terry cotton-blend hoodie with full metal zip, double-layer drawstring hood, and deep kangaroo pockets."
    },
    {
        id: 202,
        name: "Canvas Utility Jacket",
        category: "men",
        subCategory: "outerwear",
        price: 7999,
        originalPrice: 9999,
        colors: ["Tobacco Brown", "Washed Black", "Olive"],
        sizes: ["S", "M", "L", "XL"],
        imageFront: "images/et3453t.jpg",
        imageBack: "images/et3453t.jpg",
        rating: 4.8,
        reviewCount: 94,
        isNew: true,
        description: "Durable cotton canvas jacket featuring a contrasting corduroy collar, heavy brass zip front, and multi-pocket utilitarian styling."
    },
    {
        id: 203,
        name: "Curved Seam Jeans",
        category: "men",
        subCategory: "bottoms",
        price: 4999,
        originalPrice: null,
        colors: ["Washed Grey", "Faded Denim", "Black"],
        sizes: ["30", "32", "34", "36"],
        imageFront: "images/ett.jpg",
        imageBack: "images/ett.jpg",
        rating: 4.7,
        reviewCount: 112,
        isNew: false,
        description: "Wide-leg jeans in heavyweight washed denim with ergonomic curved side seams, distressed wash, and relaxed slouchy fit."
    },
    {
        id: 204,
        name: "Straight Wash Jeans",
        category: "men",
        subCategory: "bottoms",
        price: 4499,
        originalPrice: null,
        colors: ["Light Indigo", "Dark Blue", "Charcoal"],
        sizes: ["30", "32", "34", "36"],
        imageFront: "images/ette.jpg",
        imageBack: "images/ette.jpg",
        rating: 4.8,
        reviewCount: 165,
        isNew: false,
        description: "Classic straight-leg jeans in authentic rigid denim with mid-rise waist, branded rivets, and traditional 5-pocket construction."
    },
    {
        id: 205,
        name: "Athletic Track Pants",
        category: "men",
        subCategory: "bottoms",
        price: 3499,
        originalPrice: null,
        colors: ["Black / White", "Grey Marl", "Navy"],
        sizes: ["S", "M", "L", "XL"],
        imageFront: "images/ewr.jpg",
        imageBack: "images/ewr.jpg",
        rating: 4.6,
        reviewCount: 88,
        isNew: false,
        description: "Sport-luxe track trousers with elasticated toggle waistband, contrast vertical side piping, and zipped ankle cuffs."
    },
    {
        id: 206,
        name: "Leather Bomber Jacket",
        category: "men",
        subCategory: "outerwear",
        price: 8999,
        originalPrice: 11999,
        colors: ["Jet Black", "Dark Espresso"],
        sizes: ["S", "M", "L", "XL"],
        imageFront: "images/ewtewrtg.jpg",
        imageBack: "images/ewtewrtg.jpg",
        rating: 5.0,
        reviewCount: 140,
        isNew: true,
        description: "Supple faux leather bomber jacket with silver-tone zip closure, turn-down collar, quilted satin lining, and side welt pockets."
    },
    {
        id: 207,
        name: "Utility Pocket Overshirt",
        category: "men",
        subCategory: "tops",
        price: 4999,
        originalPrice: null,
        colors: ["Deep Brown", "Sage Olive", "Beige"],
        sizes: ["S", "M", "L", "XL"],
        imageFront: "images/rewvtrt.jpg",
        imageBack: "images/rewvtrt.jpg",
        rating: 4.8,
        reviewCount: 73,
        isNew: false,
        description: "Heavy cotton twill overshirt with twin chest button flaps, straight hem, and relaxed layering cut for trans-seasonal wear."
    },
    {
        id: 208,
        name: "Classic Harrington Jacket",
        category: "men",
        subCategory: "outerwear",
        price: 6999,
        originalPrice: null,
        colors: ["Sand Beige", "Navy Blue", "Khaki"],
        sizes: ["S", "M", "L", "XL"],
        imageFront: "images/t43tergt.jpg",
        imageBack: "images/t43tergt.jpg",
        rating: 4.9,
        reviewCount: 195,
        isNew: true,
        description: "Timeless woven Harrington jacket with two-button stand collar, zip closure, tartan lining, and elasticated ribbed waistband."
    },
    {
        id: 209,
        name: "Embroidered Oxford Shirt",
        category: "men",
        subCategory: "tops",
        price: 3999,
        originalPrice: null,
        colors: ["Espresso Brown", "Sky Blue", "White"],
        sizes: ["S", "M", "L", "XL"],
        imageFront: "images/tert.jpg",
        imageBack: "images/tert.jpg",
        rating: 4.7,
        reviewCount: 82,
        isNew: false,
        description: "Button-down collar Oxford shirt in breathable pure cotton with cursive chest signature embroidery and curved hem."
    },
    {
        id: 210,
        name: "Smart Pleated Trousers",
        category: "men",
        subCategory: "bottoms",
        price: 5299,
        originalPrice: null,
        colors: ["Rich Mocha", "Classic Black", "Charcoal"],
        sizes: ["30", "32", "34", "36"],
        imageFront: "images/ttete.jpg",
        imageBack: "images/ttete.jpg",
        rating: 4.9,
        reviewCount: 154,
        isNew: true,
        description: "Smart tailored trousers in crisp twill fabric featuring double front pleats, pressed creases, side pockets, and belt loops."
    },
    {
        id: 211,
        name: "Textured Silk Tie",
        category: "men",
        subCategory: "accessories",
        price: 3299,
        originalPrice: null,
        colors: ["Black", "Burgundy", "Navy"],
        sizes: ["One Size"],
        imageFront: "images/ad.jpg",
        imageBack: "images/ad.jpg",
        rating: 4.6,
        reviewCount: 45,
        isNew: false,
        description: "Luxury woven silk necktie with a subtle diagonal micro-texture, handcrafted tipping, and classic 7cm blade width."
    },
    {
        id: 212,
        name: "Leather Buckle Belt",
        category: "men",
        subCategory: "accessories",
        price: 3499,
        originalPrice: null,
        colors: ["Black Leather", "Dark Brown"],
        sizes: ["85", "90", "95", "100"],
        imageFront: "images/rtertr.jpg",
        imageBack: "images/rtertr.jpg",
        rating: 4.8,
        reviewCount: 96,
        isNew: false,
        description: "Genuine full-grain leather belt finished with beveled edges, single leather keeper, and a polished silver rectangular prong buckle."
    },

    // --------------------------------------------------------------------------
    // KIDS (301-312) - All Images Loaded from images/ Folder
    // --------------------------------------------------------------------------
    {
        id: 301,
        name: "Bear Fleece Sweatshirt",
        category: "kids",
        subCategory: "tops",
        price: 3299,
        originalPrice: null,
        colors: ["Cream / Oatmeal", "Navy Blue", "Melange Grey"],
        sizes: ["92/98", "104/110", "116/122", "128/134"],
        imageFront: "images/asgf.jpg",
        imageBack: "images/asgf.jpg",
        rating: 4.9,
        reviewCount: 88,
        isNew: true,
        description: "Super soft teddy fleece sweatshirt featuring vintage Bear Academy collegiate embroidery, ribbed crew neckline, and elasticated cuffs."
    },
    {
        id: 302,
        name: "Heart Pocket Jeans",
        category: "kids",
        subCategory: "bottoms",
        price: 3499,
        originalPrice: null,
        colors: ["Vintage Wash Denim", "Light Indigo", "Soft Ecru"],
        sizes: ["92/98", "104/110", "116/122", "128/134", "140"],
        imageFront: "images/fgdsagfdsag.jpg",
        imageBack: "images/fgdsagfdsag.jpg",
        rating: 4.8,
        reviewCount: 112,
        isNew: true,
        description: "Trendy wide-leg kids jeans crafted in 100% durable cotton denim with adorable heart-shaped pockets and adjustable inner elastic waist."
    },
    {
        id: 303,
        name: "Quilted Floral Jacket",
        category: "kids",
        subCategory: "outerwear",
        price: 4999,
        originalPrice: 6499,
        colors: ["Pastel Lilac", "Sage Floral", "Dusty Pink"],
        sizes: ["86/92", "98/104", "110/116", "122/128"],
        imageFront: "images/gerteryt.jpg",
        imageBack: "images/gerteryt.jpg",
        rating: 5.0,
        reviewCount: 146,
        isNew: true,
        description: "Charming lightweight quilted jacket in soft pastel lilac with all-over botanical floral print, turn-down collar, and tortoiseshell front buttons."
    },
    {
        id: 304,
        name: "Scalloped Collar Dress",
        category: "kids",
        subCategory: "dresses",
        price: 3699,
        originalPrice: null,
        colors: ["Lilac Blossom", "Butter Cream", "Soft Rose"],
        sizes: ["92/98", "104/110", "116/122", "128/134"],
        imageFront: "images/fgdsagfdsagfdds.jpg",
        imageBack: "images/fgdsagfdsagfdds.jpg",
        rating: 4.9,
        reviewCount: 94,
        isNew: true,
        description: "Heirloom-inspired woven cotton dress featuring delicate floral embroidery across an oversized scalloped Peter Pan collar and ruffled cuffs."
    },
    {
        id: 305,
        name: "Cable Vest Set",
        category: "kids",
        subCategory: "tops",
        price: 4299,
        originalPrice: null,
        colors: ["Navy / Sky Blue", "Camel / White"],
        sizes: ["92/98", "104/110", "116/122", "128/134"],
        imageFront: "images/fgs.jpg",
        imageBack: "images/fgs.jpg",
        rating: 4.8,
        reviewCount: 78,
        isNew: true,
        description: "Smart 2-piece layering duo featuring a classic sky blue Oxford button-down shirt paired with a rich navy cable-knit sweater vest."
    },
    {
        id: 306,
        name: "Bowtie Chino Set",
        category: "kids",
        subCategory: "bottoms",
        price: 4499,
        originalPrice: null,
        colors: ["Beige & Sky Blue", "Navy & Ivory"],
        sizes: ["86", "92", "98", "104", "110"],
        imageFront: "images/hgcnc.jpg",
        imageBack: "images/hgcnc.jpg",
        rating: 4.9,
        reviewCount: 104,
        isNew: true,
        description: "Celebration outfit set with soft cotton Oxford shirt, pre-tied polka dot bowtie, and stretch chino trousers with adjustable Y-back suspenders."
    },
    {
        id: 307,
        name: "Cotton Bodysuits Set",
        category: "kids",
        subCategory: "tops",
        price: 3199,
        originalPrice: null,
        colors: ["Earthy Neutrals", "Pastel Rainbow", "Monochrome"],
        sizes: ["0-3M", "3-6M", "6-9M", "9-12M", "12-18M"],
        imageFront: "images/rtertger.jpg",
        imageBack: "images/rtertger.jpg",
        rating: 5.0,
        reviewCount: 220,
        isNew: true,
        description: "Value bundle of 5 long-sleeved bodysuits in certified organic cotton jersey with wrap-over envelope neckline and nickel-free crotch snaps."
    },
    {
        id: 308,
        name: "Embroidered Hair Clips",
        category: "kids",
        subCategory: "accessories",
        price: 3099,
        originalPrice: null,
        colors: ["Denim Cherry & Heart", "Floral Mix"],
        sizes: ["One Size"],
        imageFront: "images/asgfhgjk.jpg",
        imageBack: "images/asgfhgjk.jpg",
        rating: 4.7,
        reviewCount: 65,
        isNew: false,
        description: "Set of 4 salon-grade snap hair clips covered in soft fabrics featuring embroidered red cherries, denim hearts, and playful leopard print."
    },
    {
        id: 309,
        name: "Linen Waistcoat Set",
        category: "kids",
        subCategory: "sets",
        price: 5499,
        originalPrice: null,
        colors: ["Natural Linen Beige", "Chalk White & Sky Blue"],
        sizes: ["92/98", "104/110", "116/122", "128/134"],
        imageFront: "images/sagfsdg.jpg",
        imageBack: "images/sagfsdg.jpg",
        rating: 4.9,
        reviewCount: 78,
        isNew: true,
        description: "Charming 3-piece formal occasion set featuring a woven linen-blend waistcoat with mock horn buttons, soft short-sleeve poplin shirt with sky blue bow tie, and matching pull-on trousers."
    },
    {
        id: 310,
        name: "Waxed Utility Jacket",
        category: "kids",
        subCategory: "outerwear",
        price: 5999,
        originalPrice: null,
        colors: ["Deep Forest Olive", "Chocolate Brown"],
        sizes: ["92/98", "104/110", "116/122", "128/134"],
        imageFront: "images/te4rtrett.jpg",
        imageBack: "images/te4rtrett.jpg",
        rating: 5.0,
        reviewCount: 94,
        isNew: true,
        description: "Classic heritage barn jacket crafted in durable water-repellent waxed cotton with a contrast corduroy collar, engraved metallic snap buttons, storm placket, and deep flap pockets."
    },
    {
        id: 311,
        name: "Patent Mary Janes",
        category: "kids",
        subCategory: "accessories",
        price: 3499,
        originalPrice: null,
        colors: ["Cherry Red Patent", "Classic Black", "Glitter Gold"],
        sizes: ["20", "21", "22", "23", "24", "25"],
        imageFront: "images/kids-mary-jane.png",
        imageBack: "images/kids-mary-jane.png",
        rating: 4.9,
        reviewCount: 124,
        isNew: true,
        description: "Glossy red patent faux-leather Mary Jane shoes featuring T-strap silhouette, delicate front bow, soft cushioned insole, and adjustable hook-and-loop strap."
    },
    {
        id: 312,
        name: "Tulle Party Dress",
        category: "kids",
        subCategory: "dresses",
        price: 3999,
        originalPrice: null,
        colors: ["Festive Ruby Red", "Dusty Rose", "Emerald Green"],
        sizes: ["74/80", "86/92", "98/104", "110/116"],
        imageFront: "images/kids-tulle-dress.png",
        imageBack: "images/kids-tulle-dress.png",
        rating: 5.0,
        reviewCount: 168,
        isNew: true,
        description: "Festive ribbed knit party dress with a sweet ruffled neckline, flared multi-layered tulle skirt sprinkled with subtle glitter hearts, and back button closure."
    },

    // --------------------------------------------------------------------------
    // HOME (401-412) - All Images Loaded from images/ Folder
    // --------------------------------------------------------------------------
    {
        id: 401,
        name: "Pinstripe Duvet Set",
        category: "home",
        subCategory: "bedding",
        price: 6999,
        originalPrice: 8999,
        colors: ["Warm Taupe Stripe", "Charcoal Stripe", "Sage Stripe"],
        sizes: ["Single", "Double", "King"],
        imageFront: "images/dfsf.jpg",
        imageBack: "images/dfsf.jpg",
        rating: 4.9,
        reviewCount: 210,
        isNew: true,
        description: "Classic pinstriped duvet cover and pillowcase set in premium breathable washed cotton with subtle mother-of-pearl button closure."
    },
    {
        id: 402,
        name: "Fluted Ceramic Vase",
        category: "home",
        subCategory: "decor",
        price: 4299,
        originalPrice: null,
        colors: ["Chalk White", "Matte Sand", "Earthy Taupe"],
        sizes: ["H 28cm"],
        imageFront: "images/dgdfdf.jpg",
        imageBack: "images/dgdfdf.jpg",
        rating: 5.0,
        reviewCount: 135,
        isNew: true,
        description: "Statement organic ceramic vase with dramatic wavy fluted rim and velvety satin glaze finish for contemporary floral arrangements."
    },
    {
        id: 403,
        name: "Embroidered Bolster Cushion",
        category: "home",
        subCategory: "cushions",
        price: 3499,
        originalPrice: null,
        colors: ["Ivory / Black Piping", "Linen Beige"],
        sizes: ["18x55 cm"],
        imageFront: "images/dfsfdfs.jpg",
        imageBack: "images/dfsfdfs.jpg",
        rating: 4.8,
        reviewCount: 84,
        isNew: true,
        description: "Cylindrical bolster pillow crafted from heavy woven cotton with delicate floral vine embroidery and elegant black contrast piping."
    },
    {
        id: 404,
        name: "Botanical Hand Towel",
        category: "home",
        subCategory: "bath",
        price: 3299,
        originalPrice: null,
        colors: ["Natural Ivory", "Soft Stone"],
        sizes: ["50x70 cm (2-Pack)"],
        imageFront: "images/dsfge.jpg",
        imageBack: "images/dsfge.jpg",
        rating: 4.9,
        reviewCount: 112,
        isNew: true,
        description: "Pair of plush absorbent terry cotton hand towels adorned with fine floral meadow embroidery and sturdy hanging loops."
    },
    {
        id: 405,
        name: "Perpetual Wall Calendar",
        category: "home",
        subCategory: "decor",
        price: 3799,
        originalPrice: null,
        colors: ["Emerald / Blush / Blue", "Monochrome"],
        sizes: ["25x30 cm"],
        imageFront: "images/fdsfsff.jpg",
        imageBack: "images/fdsfsff.jpg",
        rating: 4.8,
        reviewCount: 96,
        isNew: true,
        description: "Playful wall-hanging perpetual calendar featuring coated flip cards with bold mid-century numbers and month typography."
    },
    {
        id: 406,
        name: "Stoneware Bowl Set",
        category: "home",
        subCategory: "dining",
        price: 4499,
        originalPrice: null,
        colors: ["Earth Tone Gradient", "Warm Terracotta", "Smoked Grey"],
        sizes: ["Dia 15cm (Set of 4)"],
        imageFront: "images/fgdgb.jpg",
        imageBack: "images/fgdgb.jpg",
        rating: 4.9,
        reviewCount: 148,
        isNew: true,
        description: "Set of 4 versatile nesting ceramic bowls finished in artisanal matte reactive glazes spanning rich mocha, beige, and sand tones."
    },
    {
        id: 407,
        name: "Washed Duvet Set",
        category: "home",
        subCategory: "bedding",
        price: 7499,
        originalPrice: 9499,
        colors: ["Earthy Sage", "Washed Olive", "Forest Moss"],
        sizes: ["Single", "Double", "King"],
        imageFront: "images/fgdgdgdfgdfvgfd.jpg",
        imageBack: "images/fgdgdgdfgdfvgfd.jpg",
        rating: 5.0,
        reviewCount: 240,
        isNew: true,
        description: "Garment-washed organic cotton duvet set with an ultra-soft lived-in texture, natural breathability, and tailored envelope pillowcases."
    },
    {
        id: 408,
        name: "Holiday Stoneware Mug",
        category: "home",
        subCategory: "dining",
        price: 3199,
        originalPrice: null,
        colors: ["Speckled Sand", "Warm Cream"],
        sizes: ["380 ml"],
        imageFront: "images/gtrd.jpg",
        imageBack: "images/gtrd.jpg",
        rating: 4.9,
        reviewCount: 180,
        isNew: true,
        description: "Whimsical ceramic coffee mug featuring an embossed holiday bear holding a red gift box on durable speckled stoneware."
    },
    {
        id: 409,
        name: "Pedestal Flower Vase",
        category: "home",
        subCategory: "decor",
        price: 4999,
        originalPrice: null,
        colors: ["Matte Charcoal Black", "Cast Bronze"],
        sizes: ["H 30cm x Dia 18cm"],
        imageFront: "images/hgfd.jpg",
        imageBack: "images/hgfd.jpg",
        rating: 5.0,
        reviewCount: 108,
        isNew: true,
        description: "COSMO Home Editorial Campaign Centerpiece. Neoclassical pedestal urn flower vase with fluted flared scalloped neck and architectural silhouette in a textured cast matte black finish, styled for branches and florals."
    },
    {
        id: 410,
        name: "Burgundy Ceramic Vase",
        category: "home",
        subCategory: "decor",
        price: 3899,
        originalPrice: null,
        colors: ["Deep Oxblood Burgundy", "Gloss Espresso"],
        sizes: ["Dia 22cm, H 24cm"],
        imageFront: "images/redfv.jpg",
        imageBack: "images/redfv.jpg",
        rating: 4.8,
        reviewCount: 79,
        isNew: false,
        description: "Bulbous spherical display vase with a high-gloss mirror glaze in rich burgundy wine tones and narrow tapered opening."
    },
    {
        id: 411,
        name: "Slub Linen Curtains",
        category: "home",
        subCategory: "decor",
        price: 5999,
        originalPrice: null,
        colors: ["Warm Oatmeal", "Chalk White", "Soft Ash"],
        sizes: ["140x280 cm (2 Panels)"],
        imageFront: "images/sfrefredfe.jpg",
        imageBack: "images/sfrefredfe.jpg",
        rating: 4.9,
        reviewCount: 165,
        isNew: true,
        description: "Light-filtering sheer curtain pair in natural slub-textured linen blend with hidden header tape for effortless rod or track hanging."
    },
    {
        id: 412,
        name: "Ceramic Dinosaur Planter",
        category: "home",
        subCategory: "decor",
        price: 3299,
        originalPrice: null,
        colors: ["Sage Glaze", "Pastel Mint"],
        sizes: ["L 20cm x H 16cm"],
        imageFront: "images/wrwer.jpg",
        imageBack: "images/wrwer.jpg",
        rating: 4.9,
        reviewCount: 120,
        isNew: true,
        description: "Charming ceramic dinosaur-shaped pot designed for succulents and house plants with glossy sage reactive glaze and drainage hole."
    },

    // --------------------------------------------------------------------------
    // HERO BANNER EXCLUSIVE PRODUCTS (Only accessed when clicking Banner / Hotspot Pins)
    // Hidden from New Arrivals Grid!
    // --------------------------------------------------------------------------
    {
        id: 101,
        name: "Plaid Blouse Set",
        category: "ladies",
        subCategory: "tops",
        price: 6499,
        originalPrice: 8499,
        colors: ["Sage / Grey Check", "Brown Tartan Plaid", "Monochrome"],
        sizes: ["XS", "S", "M", "L", "XL"],
        imageFront: "images/s.png",
        imageBack: "images/s.png",
        rating: 4.9,
        reviewCount: 285,
        isNew: true,
        isBannerOnly: true,
        description: "COSMO Editorial Campaign Look. Fluid checked shirt blouse featuring an integrated draped tie-front waist knot, classic point collar, dropped shoulders, and buttoned cuffs, styled in a coordinated ensemble with an asymmetric handkerchief-hem tartan midi skirt."
    },
    {
        id: 299,
        name: "Minimalist Bomber Set",
        category: "men",
        subCategory: "outerwear",
        price: 7499,
        originalPrice: 9499,
        colors: ["Matte Black", "Slate Charcoal"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        imageFront: "images/h.png",
        imageBack: "images/h.png",
        rating: 4.9,
        reviewCount: 230,
        isNew: true,
        isBannerOnly: true,
        description: "COSMO Men Hero Editorial Campaign. Technical stand-collar zip-up bomber jacket in structured matte black weave with two-way silver zipper, zippered side pockets, and elasticated hem, coordinated with relaxed wide-leg front-pleated suiting trousers."
    },
    {
        id: 399,
        name: "Varsity Baseball Jacket",
        category: "kids",
        subCategory: "outerwear",
        price: 5999,
        originalPrice: 7999,
        colors: ["Chocolate Brown / Cream", "Midnight Navy / White"],
        sizes: ["92/98", "104/110", "116/122", "128/134", "140"],
        imageFront: "images/m.jpg",
        imageBack: "images/m.jpg",
        rating: 5.0,
        reviewCount: 198,
        isNew: true,
        isBannerOnly: true,
        description: "COSMO Kids Hero Campaign Jacket. Premium collegiate varsity bomber jacket in chocolate brown wool-blend with contrast cream faux-leather sleeves, textured 'NEW YORK EST. 1997' chest appliqué, sleeve basketball patch, striped rib-knit trims, and snap-stud closure."
    }
];

// ==========================================================================
// 2. STATE MANAGEMENT & LOCAL STORAGE SYNC
// ==========================================================================
function getCurrentPageCategory() {
    const pageAttr = document.body.getAttribute('data-page');
    if (pageAttr && pageAttr !== 'cart' && pageAttr !== 'search') return pageAttr.toLowerCase();
    const path = window.location.pathname.toLowerCase();
    if (path.includes('men')) return 'men';
    if (path.includes('kids')) return 'kids';
    if (path.includes('home')) return 'home';
    if (path.includes('cart')) return 'cart';
    if (path.includes('search')) return 'search';
    return 'ladies';
}

let state = {
    cart: JSON.parse(localStorage.getItem('cosmo_cart')) || [
        { id: 1, size: "M", color: "White", quantity: 1, product: productsData[0] }
    ],
    wishlist: JSON.parse(localStorage.getItem('cosmo_wishlist')) || [2, 10],
    user: JSON.parse(localStorage.getItem('cosmo_user')) || null,
    appliedPromo: localStorage.getItem('cosmo_applied_promo') || null,
    selectedCategory: getCurrentPageCategory(),
    selectedSubCategory: 'all',
    selectedColors: [],
    selectedSizes: [],
    sortBy: 'recommended',
    searchQuery: '',
    gridLayout: 'grid-6'
};

// ==========================================================================
// 3. MEGA MENU DATA (With Local Images from images/ Folder)
// ==========================================================================
const megaMenuData = {
    ladies: {
        targetPage: "index.html",
        topLinks: [
            { name: "NEW ARRIVALS", link: "index.html#new", highlight: false },
            { name: "SPRING EDIT 2026", link: "index.html#spring", highlight: false },
            { name: "TIMELESS ESSENTIALS", link: "index.html#essentials", highlight: false },
            { name: "DENIM FIT GUIDE", link: "index.html#denim", highlight: false }
        ],
        mainLinks: [
            { name: "VIEW ALL LADIES", filter: "all" },
            { name: "TOPS & BLOUSES", filter: "tops" },
            { name: "JACKETS & COATS", filter: "outerwear" },
            { name: "DRESSES", filter: "dresses" },
            { name: "TROUSERS & JEANS", filter: "bottoms" },
            { name: "SHOES & ACCESSORIES", filter: "accessories" }
        ],
        secondary: [
            "SUSTAINABILITY", "CUSTOMER SERVICE", "NEWSLETTER SIGNUP", "FIND A STORE"
        ],
        cards: [
            {
                title: "NEW SEASON TAILORING",
                image: "images/23234.jpg",
                link: "search.html?q=tailoring,dress&cat=ladies&title=NEW+SEASON+TAILORING"
            },
            {
                title: "DRESSES",
                image: "images/dfgdhg.jpg",
                link: "search.html?q=dress,dresses&cat=ladies&title=WOMEN%27S+DRESSES"
            },
            {
                title: "TOPS & SHIRTS",
                image: "images/shirts.jpg",
                link: "search.html?q=tops,shirt&cat=ladies&title=WOMEN%27S+TOPS+%26+SHIRTS"
            },
            {
                title: "JEANS & SKIRTS",
                image: "images/pants.jpg",
                link: "search.html?q=bottoms,jeans,skirt&cat=ladies&title=WOMEN%27S+JEANS+%26+SKIRTS"
            },
            {
                title: "ACCESSORIES",
                image: "images/bag.jpg",
                link: "search.html?q=accessories,bag&cat=ladies&title=WOMEN%27S+ACCESSORIES"
            }
        ]
    },
    men: {
        targetPage: "men.html",
        topLinks: [
            { name: "NEW ARRIVALS", link: "men.html#new", highlight: false },
            { name: "STREETWEAR CAPSULE", link: "men.html#streetwear", highlight: false },
            { name: "WORKWEAR UTILITY", link: "men.html#utility", highlight: false },
            { name: "SMART TAILORING", link: "men.html#tailoring", highlight: false }
        ],
        mainLinks: [
            { name: "VIEW ALL MEN", filter: "all" },
            { name: "SHIRTS & HOODIES", filter: "tops" },
            { name: "JEANS & TROUSERS", filter: "bottoms" },
            { name: "JACKETS & COATS", filter: "outerwear" },
            { name: "BELTS & ACCESSORIES", filter: "accessories" }
        ],
        secondary: ["SUSTAINABILITY", "SIZE GUIDE", "CARE INSTRUCTIONS", "CUSTOMER SUPPORT"],
        cards: [
            {
                title: "CANVAS WORKWEAR",
                image: "images/et3453t.jpg",
                link: "search.html?q=workwear,utility,jacket&cat=men&title=CANVAS+WORKWEAR"
            },
            {
                title: "SHIRTS & T-SHIRTS",
                image: "images/shirts men.jpg",
                link: "search.html?q=tops,shirt,tee&cat=men&title=MEN%27S+SHIRTS+%26+T-SHIRTS"
            },
            {
                title: "TROUSERS & TRACKPANTS",
                image: "images/pants men.jpg",
                link: "search.html?q=bottoms,trousers,jeans,sweatpants&cat=men&title=MEN%27S+TROUSERS+%26+TRACKPANTS"
            },
            {
                title: "JACKETS",
                image: "images/jackets men.jpg",
                link: "search.html?q=outerwear,jacket,overcoat,bomber&cat=men&title=MEN%27S+JACKETS"
            },
            {
                title: "SHOES & ACCESSORIES",
                image: "images/shoes.jpg",
                link: "search.html?q=accessories,boots,shoes,belt&cat=men&title=MEN%27S+SHOES+%26+ACCESSORIES"
            }
        ]
    },
    kids: {
        targetPage: "kids.html",
        topLinks: [
            { name: "NEW ARRIVALS", link: "kids.html#new", highlight: false },
            { name: "ORGANIC COTTON BASICS", link: "kids.html#organic", highlight: false },
            { name: "DENIM PLAYSHOP", link: "kids.html#denim", highlight: false }
        ],
        mainLinks: [
            { name: "VIEW ALL KIDS", filter: "all" },
            { name: "TOPS & SWEATSHIRTS", filter: "tops" },
            { name: "PANTS & DUNGAREES", filter: "bottoms" },
            { name: "DRESSES & SETS", filter: "dresses" },
            { name: "JACKETS & SHOES", filter: "outerwear" }
        ],
        secondary: ["SUSTAINABILITY", "SIZE CHART (0-14Y)", "SAFETY STANDARDS"],
        cards: [
            {
                title: "BEAR ACADEMY FLEECE",
                image: "images/asgf.jpg",
                link: "search.html?q=fleece,hoodie,sweatshirt&cat=kids&title=BEAR+ACADEMY+FLEECE"
            },
            {
                title: "GIRLS' COLLECTION",
                image: "images/cute.jpg",
                link: "search.html?q=dresses,dress,skirt,girls&cat=kids&title=GIRLS%27+COLLECTION"
            },
            {
                title: "BOYS' COLLECTION",
                image: "images/kids-duo-2.jpg",
                link: "search.html?q=tops,bottoms,vest,boys&cat=kids&title=BOYS%27+COLLECTION"
            },
            {
                title: "NEWBORN COLLECTION",
                image: "images/new born.jpg",
                link: "search.html?q=bodysuit,sets,chino,newborn&cat=kids&title=NEWBORN+COLLECTION"
            },
            {
                title: "BABY CARE & ACCS",
                image: "images/baby care.jpg",
                link: "search.html?q=outerwear,accessories,jacket,shoes,clips&cat=kids&title=BABY+CARE+%26+ACCESSORIES"
            }
        ]
    },
    home: {
        targetPage: "home.html",
        topLinks: [
            { name: "NEW ARRIVALS", link: "home.html#new", highlight: false },
            { name: "FRENCH LINEN COLLECTION", link: "home.html#linen", highlight: false },
            { name: "CERAMICS & VASES", link: "home.html#decor", highlight: false }
        ],
        mainLinks: [
            { name: "VIEW ALL HOME", filter: "all" },
            { name: "BED LINEN", filter: "bedding" },
            { name: "VASES & SCULPTURAL DECOR", filter: "decor" },
            { name: "CUSHION COVERS", filter: "cushions" },
            { name: "BATH & TOWELS", filter: "bath" },
            { name: "TABLEWARE & DINING", filter: "dining" }
        ],
        secondary: ["SUSTAINABILITY", "INTERIOR INSPIRATION", "CARE GUIDE"],
        cards: [
            {
                title: "SCULPTURAL CERAMICS",
                image: "images/dgdfdf.jpg",
                link: "search.html?q=decor,vase,sculpture&cat=home&title=SCULPTURAL+CERAMICS"
            },
            {
                title: "BEDDING SETS",
                image: "images/home-duo-1.jpg",
                link: "search.html?q=bedding,linen,set&cat=home&title=BEDDING+SETS"
            },
            {
                title: "HOME DECOR",
                image: "images/decore.jpg",
                link: "search.html?q=decor,vase,sculpture,candlestick&cat=home&title=HOME+DECOR"
            },
            {
                title: "CUSHIONS & THROWS",
                image: "images/cushion.jpg",
                link: "search.html?q=cushions,bath,towel&cat=home&title=CUSHIONS+%26+THROWS"
            },
            {
                title: "DINING & TABLEWARE",
                image: "images/dine.jpg",
                link: "search.html?q=dining,plate,glasses,carafe&cat=home&title=DINING+%26+TABLEWARE"
            }
        ]
    }
};

// ==========================================================================
// 3.5. AUTOMATIC SYSTEM THEME SYNC (MOBILE & PC)
// Automatically switches between dark and light themes based on the device's
// OS preference (prefers-color-scheme) without displaying any button.
// ==========================================================================
function initAutoThemeSync() {
    if (!window.matchMedia) return;

    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function applyThemeFromPreference(e) {
        const isDark = (e && typeof e.matches === 'boolean') ? e.matches : colorSchemeQuery.matches;
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }

    // Apply immediately upon execution
    applyThemeFromPreference(colorSchemeQuery);

    // Live listener for real-time mobile/desktop theme changes
    try {
        colorSchemeQuery.addEventListener('change', applyThemeFromPreference);
    } catch (err) {
        try {
            colorSchemeQuery.addListener(applyThemeFromPreference);
        } catch (e2) {
            // Older browser fallback
        }
    }
}

// Run immediately upon script load
initAutoThemeSync();

// ==========================================================================
// 4. APPLICATION INITIALIZATION & MODULAR FOOTER
// ==========================================================================
async function loadModularFooter() {
    if (document.getElementById('hmFooter')) {
        initFooterAccordion();
        initNewsletterForms();
        return;
    }

    const footerContainer = document.getElementById('footerPlaceholder') || document.getElementById('modularFooterPlaceholder');
    if (!footerContainer) return;

    try {
        const response = await fetch('footer.html');
        if (response.ok) {
            const html = await response.text();
            footerContainer.innerHTML = html;
            initFooterAccordion();
            initNewsletterForms();
            return;
        }
    } catch (err) {
        console.warn('Modular footer fetch failed, applying fallback footer:', err);
    }

    // Reliable fallback for offline or file:// origin
    footerContainer.innerHTML = `
    <footer class="hm-footer" id="hmFooter">
        <div class="footer-newsletter-wrap">
            <div class="newsletter-info">
                <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
                <p>Be the first to know about new arrivals, editorial drops and exclusive promotions.</p>
            </div>
            <form class="newsletter-form" id="footerNewsletterForm">
                <input type="email" required placeholder="Enter your email address" class="newsletter-input"
                    id="newsletterEmailInput" aria-label="Email address for newsletter">
                <button type="submit" class="newsletter-btn">SUBSCRIBE</button>
            </form>
        </div>

        <div class="footer-links-grid" id="footerLinksGrid">
            <div class="footer-col" data-col="shop">
                <h4 class="footer-accordion-header">
                    <span>SHOP</span>
                    <span class="footer-accordion-icon">+</span>
                </h4>
                <ul class="footer-links-list">
                    <li><a href="index.html" class="footer-cat-link" data-cat="ladies">LADIES</a></li>
                    <li><a href="men.html" class="footer-cat-link" data-cat="men">MEN</a></li>
                    <li><a href="kids.html">DIVIDED</a></li>
                    <li><a href="kids.html">BABY</a></li>
                    <li><a href="kids.html" class="footer-cat-link" data-cat="kids">KIDS</a></li>
                    <li><a href="home.html" class="footer-cat-link" data-cat="home">HOME</a></li>
                </ul>
            </div>

            <div class="footer-col" data-col="corporate">
                <h4 class="footer-accordion-header">
                    <span>CORPORATE INFO</span>
                    <span class="footer-accordion-icon">+</span>
                </h4>
                <ul class="footer-links-list">
                    <li><a href="#">CAREER AT COSMO</a></li>
                    <li><a href="#">ABOUT COSMO GROUP</a></li>
                    <li><a href="#">SUSTAINABILITY</a></li>
                    <li><a href="#">PRESS</a></li>
                    <li><a href="#">INVESTOR RELATIONS</a></li>
                    <li><a href="#">CORPORATE GOVERNANCE</a></li>
                </ul>
            </div>

            <div class="footer-col" data-col="help">
                <h4 class="footer-accordion-header">
                    <span>HELP</span>
                    <span class="footer-accordion-icon">+</span>
                </h4>
                <ul class="footer-links-list">
                    <li><a href="#">CUSTOMER SERVICE</a></li>
                    <li><a href="#">MY COSMO</a></li>
                    <li><a href="#">FIND A STORE</a></li>
                    <li><a href="#">LEGAL & PRIVACY</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">COOKIE NOTICE</a></li>
                    <li><a href="#">COOKIE SETTINGS</a></li>
                </ul>
            </div>

            <div class="footer-col member-perks-col" data-col="member">
                <h4 class="footer-accordion-header">
                    <span>BECOME A MEMBER</span>
                    <span class="footer-accordion-icon">+</span>
                </h4>
                <div class="member-col-content">
                    <p class="member-signup-sub">Join now and enjoy exclusive member privileges & 10% off your first order.</p>
                    <a href="#signin" class="footer-signup-link" id="footerSignupBtn">SIGN UP NOW</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom-bar">
            <div class="footer-brand-row">
                <div class="footer-logo">
                    <span class="cosmo-footer-logo">COSMO</span>
                </div>
            </div>

            <div class="footer-social-row">
                <div class="social-icons-row">
                    <a href="#" aria-label="Instagram" class="social-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.8">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>
                    <a href="#" aria-label="YouTube" class="social-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.8">
                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                        </svg>
                    </a>
                    <a href="#" aria-label="Pinterest" class="social-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.8">
                            <line x1="12" y1="4" x2="12" y2="20"></line>
                            <circle cx="12" cy="12" r="8"></circle>
                        </svg>
                    </a>
                    <a href="#" aria-label="Twitter" class="social-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.8">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                    </a>
                    <a href="#" aria-label="Facebook" class="social-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.8">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                    </a>
                </div>
            </div>

            <div class="footer-copyright-row">
                <p class="copyright-text">The content of this site is copyright-protected and is the property of COSMO E-Commerce AB.</p>
            </div>

            <div class="footer-payments-row">
                <div class="footer-payment-badges">
                    <span class="payment-badge-pill">VISA</span>
                    <span class="payment-badge-pill">Mastercard</span>
                    <span class="payment-badge-pill">UPI</span>
                    <span class="payment-badge-pill">COD</span>
                </div>
            </div>
        </div>
    </footer>`;
    initFooterAccordion();
    initNewsletterForms();
}

function initFooterAccordion() {
    document.querySelectorAll('.footer-accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                const col = header.closest('.footer-col');
                if (col) {
                    const isOpen = col.classList.contains('open');
                    // Optional: close other open accordion columns for sleek mobile accordion
                    document.querySelectorAll('.footer-col.open').forEach(c => {
                        if (c !== col) c.classList.remove('open');
                    });
                    col.classList.toggle('open', !isOpen);
                }
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    initAutoThemeSync();
    state.selectedCategory = getCurrentPageCategory();

    // Check URL parameters for search query
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    if (searchParam) {
        state.searchQuery = searchParam;
        const mainInput = document.getElementById('mainSearchInput');
        if (mainInput) mainInput.value = searchParam;
        const inputBox = document.getElementById('searchInputBox');
        if (inputBox) inputBox.classList.add('active');
    }

    // Dynamically include modular footer
    await loadModularFooter();

    initMegaMenu();
    initCatalog();
    initFilters();
    initSearch();
    initModals();
    initCartPage();
    if (document.body.getAttribute('data-page') === 'search') {
        initSearchPage();
    }
    if (document.body.getAttribute('data-page') === 'product') {
        initProductPage();
    }

    // Auto-attach hero banner click and price tags navigation
    const heroBannerImg = document.getElementById('heroEditorialImg');
    if (heroBannerImg) {
        heroBannerImg.style.cursor = 'pointer';
        heroBannerImg.addEventListener('click', () => {
            const cat = getCurrentPageCategory();
            const featuredId = cat === 'men' ? 299 : (cat === 'kids' ? 399 : (cat === 'home' ? 409 : 101));
            window.location.href = `product.html?id=${featuredId}`;
        });
    }

    document.querySelectorAll('.hotspot-tag-card').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const match = btn.getAttribute('onclick') ? btn.getAttribute('onclick').match(/\d+/) : null;
            const targetId = match ? match[0] : (getCurrentPageCategory() === 'men' ? 299 : (getCurrentPageCategory() === 'kids' ? 399 : (getCurrentPageCategory() === 'home' ? 409 : 101)));
            window.location.href = `product.html?id=${targetId}`;
        });
    });

    initNewsletterForms();
    updateBadges();
    updateUserHeaderState();
});

// ==========================================================================
// 5. MEGA MENU INTERACTION
// ==========================================================================
function initMegaMenu() {
    const navItems = document.querySelectorAll('.nav-item-wrapper');
    const megaMenu = document.getElementById('hmMegaMenu');
    const megaContent = document.getElementById('megaMenuContent');
    const header = document.getElementById('hmHeader');

    let menuTimeout = null;

    navItems.forEach(item => {
        const menuKey = item.getAttribute('data-menu');

        function openMenu() {
            clearTimeout(menuTimeout);
            const data = megaMenuData[menuKey];
            if (!data) {
                if (megaMenu) megaMenu.classList.remove('open');
                return;
            }

            renderMegaMenuHtml(data, menuKey);
            if (megaMenu) megaMenu.classList.add('open');
        }

        item.addEventListener('mouseenter', openMenu);
    });

    if (header) {
        header.addEventListener('mouseleave', () => {
            menuTimeout = setTimeout(() => {
                if (megaMenu) megaMenu.classList.remove('open');
            }, 250);
        });
    }

    if (megaMenu) {
        megaMenu.addEventListener('mouseenter', () => {
            clearTimeout(menuTimeout);
        });

        megaMenu.addEventListener('mouseleave', () => {
            menuTimeout = setTimeout(() => {
                megaMenu.classList.remove('open');
            }, 200);
        });
    }

    function renderMegaMenuHtml(data, menuKey) {
        if (!megaContent) return;

        const currentCat = getCurrentPageCategory();

        const topHtml = data.topLinks.map(c => `
            <a href="${c.link}" class="mega-link ${c.highlight ? 'red-highlight' : ''}">${c.name}</a>
        `).join('');

        const mainHtml = data.mainLinks.map(m => `
            <a href="${data.targetPage}#${m.filter}" class="mega-link ${m.highlight ? 'red-highlight' : ''}" data-filter="${m.filter}" data-category="${menuKey}">${m.name}</a>
        `).join('');

        const secondaryHtml = data.secondary.map(s => `
            <a href="${data.targetPage}" class="mega-sub-link">${s}</a>
        `).join('');

        const cardsHtml = data.cards.map(card => `
            <a href="${card.link || data.targetPage}" class="mega-card">
                <img src="${card.image}" alt="${card.title}" loading="lazy">
                <div class="mega-card-label">${card.title}</div>
            </a>
        `).join('');

        megaContent.innerHTML = `
            <div class="mega-left-col">
                <div class="mega-primary-links">
                    ${topHtml}
                </div>
                <div class="mega-main-categories">
                    ${mainHtml}
                </div>
                <div class="mega-secondary-links">
                    ${secondaryHtml}
                </div>
            </div>
            <div class="mega-cards-grid">
                ${cardsHtml}
            </div>
        `;

        megaContent.querySelectorAll('.mega-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const filter = link.getAttribute('data-filter');
                const cat = link.getAttribute('data-category');

                if (cat === currentCat && filter) {
                    e.preventDefault();
                    state.selectedSubCategory = filter;
                    if (megaMenu) megaMenu.classList.remove('open');
                    renderCatalog();
                    const el = document.getElementById('catalogMain');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
}

// ==========================================================================
// 6. PRODUCT CATALOG RENDERING & LUXURY CARDS
// ==========================================================================
function initCatalog() {
    renderCatalog();
}

function renderCatalog() {
    const gridContainer = document.getElementById('productsGridContainer');
    const noProductsBox = document.getElementById('noProductsFound');
    const currentCat = getCurrentPageCategory();

    if (!gridContainer) return;

    let filtered = productsData.filter(item => {
        // Banner exclusive products are NEVER shown in the New Arrivals catalog grid
        if (item.isBannerOnly) return false;
        // Search filter
        if (state.searchQuery.trim() !== '') {
            const q = state.searchQuery.toLowerCase();
            const matches = item.name.toLowerCase().includes(q) ||
                item.description.toLowerCase().includes(q) ||
                item.category.toLowerCase().includes(q) ||
                (item.subCategory && item.subCategory.toLowerCase().includes(q)) ||
                (item.isNew && (q.includes('new') || q.includes('arrival')));
            if (!matches) return false;
        } else {
            // Category page matching
            if (item.category !== currentCat) {
                return false;
            }
        }

        // Subcategory filter
        if (state.selectedSubCategory !== 'all' && item.subCategory !== state.selectedSubCategory) {
            return false;
        }

        // Color filter
        if (state.selectedColors.length > 0) {
            const hasColor = item.colors && item.colors.some(c =>
                state.selectedColors.some(sc => c.toLowerCase().includes(sc.toLowerCase()))
            );
            if (!hasColor) return false;
        }

        // Size filter
        if (state.selectedSizes.length > 0) {
            const hasSize = item.sizes && item.sizes.some(s => state.selectedSizes.includes(s));
            if (!hasSize) return false;
        }

        return true;
    });

    // Sort logic
    if (state.sortBy === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (state.sortBy === 'newest') {
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (state.sortBy === 'discount') {
        filtered.sort((a, b) => {
            const discA = a.originalPrice ? (a.originalPrice - a.price) : 0;
            const discB = b.originalPrice ? (b.originalPrice - b.price) : 0;
            return discB - discA;
        });
    }

    if (filtered.length === 0) {
        gridContainer.innerHTML = '';
        if (noProductsBox) noProductsBox.style.display = 'block';
        return;
    } else {
        if (noProductsBox) noProductsBox.style.display = 'none';
    }

    gridContainer.className = `products-grid ${state.gridLayout || 'grid-6'}`;
    gridContainer.innerHTML = filtered.slice(0, 12).map(item => {
        return `
            <div class="hm-product-card" data-id="${item.id}" onclick="window.location.href='product.html?id=${item.id}'">
                <div class="product-image-container">
                    <img src="${item.imageFront}" alt="${item.name}" class="product-img" loading="eager" onerror="this.src='images/middle-banner.jpg'">
                </div>
            </div>
        `;
    }).join('');
}

// ==========================================================================
// 7. FILTERS & SORTING CONTROLS
// ==========================================================================
function initFilters() {
    document.querySelectorAll('.cat-filter-input').forEach(input => {
        input.addEventListener('change', () => {
            const checked = Array.from(document.querySelectorAll('.cat-filter-input:checked')).map(i => i.value);
            state.selectedSubCategory = checked.length > 0 ? checked[0] : 'all';
            renderCatalog();
        });
    });

    document.querySelectorAll('.color-filter-input').forEach(input => {
        input.addEventListener('change', () => {
            state.selectedColors = Array.from(document.querySelectorAll('.color-filter-input:checked')).map(i => i.value);
            renderCatalog();
        });
    });

    document.querySelectorAll('.size-filter-input').forEach(input => {
        input.addEventListener('change', () => {
            state.selectedSizes = Array.from(document.querySelectorAll('.size-filter-input:checked')).map(i => i.value);
            renderCatalog();
        });
    });

    const sortSelect = document.getElementById('hmSortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            state.sortBy = e.target.value;
            renderCatalog();
        });
    }

    const clearBtn = document.getElementById('clearAllFiltersBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            state.selectedSubCategory = 'all';
            state.selectedColors = [];
            state.selectedSizes = [];
            state.searchQuery = '';
            document.querySelectorAll('.cat-filter-input, .color-filter-input, .size-filter-input').forEach(i => i.checked = false);
            renderCatalog();
            showToast('Filters cleared');
        });
    }
}

// ==========================================================================
// 8. WORKING SEARCH ENGINE (Live Autocomplete & Direct Jump)
// ==========================================================================
function initSearch() {
    let searchOverlay = document.getElementById('appleSearchOverlay');
    if (!searchOverlay) {
        searchOverlay = document.createElement('div');
        searchOverlay.className = 'apple-search-overlay';
        searchOverlay.id = 'appleSearchOverlay';
        searchOverlay.setAttribute('aria-hidden', 'true');
        searchOverlay.innerHTML = `
            <div class="apple-search-backdrop" id="appleSearchBackdrop"></div>
            <div class="apple-search-modal" id="appleSearchModal">
                <div class="apple-search-container">
                    <div class="apple-search-bar">
                        <span class="apple-search-icon">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </span>
                        <input type="text" id="appleSearchInput" class="apple-search-input" placeholder="Search products, categories, styles..." autocomplete="off" spellcheck="false" />
                        <button type="button" class="apple-search-clear-btn" id="appleSearchClearBtn" aria-label="Clear input">✕</button>
                        <button type="button" class="apple-search-cancel-btn" id="appleSearchCancelBtn">Cancel</button>
                    </div>
                    <div class="apple-search-content" id="appleSearchContent"></div>
                </div>
            </div>
        `;
        document.body.appendChild(searchOverlay);
    }

    const input = document.getElementById('appleSearchInput');
    const clearBtn = document.getElementById('appleSearchClearBtn');
    const cancelBtn = document.getElementById('appleSearchCancelBtn');
    const backdrop = document.getElementById('appleSearchBackdrop');
    const content = document.getElementById('appleSearchContent');

    function openSearchOverlay() {
        if (!searchOverlay) return;
        searchOverlay.classList.add('active');
        searchOverlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        renderSearchContent(input ? input.value : '');
        setTimeout(() => {
            if (input) input.focus();
        }, 80);
    }

    function closeSearchOverlay() {
        if (!searchOverlay) return;
        searchOverlay.classList.remove('active');
        searchOverlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (input) input.blur();
    }

    // Attach listener to all search triggers (both desktop and mobile icons)
    const triggerButtons = document.querySelectorAll('#searchTriggerBtn, .search-trigger-btn');
    triggerButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openSearchOverlay();
        });
    });

    if (cancelBtn) cancelBtn.addEventListener('click', closeSearchOverlay);
    if (backdrop) backdrop.addEventListener('click', closeSearchOverlay);

    // Escape key closes search
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            closeSearchOverlay();
        }
    });

    // Clear button
    if (clearBtn && input) {
        clearBtn.addEventListener('click', () => {
            input.value = '';
            clearBtn.classList.remove('visible');
            input.focus();
            renderSearchContent('');
        });
    }

    // Input typing listener
    if (input) {
        input.addEventListener('input', (e) => {
            const val = e.target.value;
            if (clearBtn) {
                if (val.trim().length > 0) {
                    clearBtn.classList.add('visible');
                } else {
                    clearBtn.classList.remove('visible');
                }
            }
            renderSearchContent(val);
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const q = input.value.trim();
                if (q.length > 0) {
                    closeSearchOverlay();
                    handleSearchSubmit(q);
                }
            }
        });
    }

    // Attach to header search input (visible on search.html and header)
    const headerMainInput = document.getElementById('mainSearchInput');
    const headerClearBtn = document.getElementById('clearSearchBtn');
    if (headerMainInput) {
        headerMainInput.addEventListener('input', (e) => {
            const val = e.target.value;
            if (headerClearBtn) {
                if (val.trim().length > 0) headerClearBtn.classList.add('visible');
                else headerClearBtn.classList.remove('visible');
            }
        });
        headerMainInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const q = headerMainInput.value.trim();
                if (q.length > 0) {
                    handleSearchSubmit(q, 'all');
                }
            }
        });
    }
    if (headerClearBtn && headerMainInput) {
        headerClearBtn.addEventListener('click', () => {
            headerMainInput.value = '';
            headerClearBtn.classList.remove('visible');
            headerMainInput.focus();
            if (document.body.getAttribute('data-page') === 'search') {
                handleSearchSubmit('', 'all');
            }
        });
    }

    function highlightMatch(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        return text.replace(regex, '<strong>$1</strong>');
    }

    function renderSearchContent(rawQuery) {
        if (!content) return;
        const query = (rawQuery || '').trim().toLowerCase();

        if (query.length === 0) {
            // Initial State: Suggested Links & Suggested Searches (Navigates to search page with matching products)
            content.innerHTML = `
                <div class="apple-search-sections">
                    <div class="apple-search-section">
                        <div class="apple-search-section-title">Suggested Links</div>
                        <div class="apple-suggested-links">
                            <a href="search.html?q=new&cat=ladies&title=Ladies%20New%20Arrivals" class="apple-link-item" onclick="event.preventDefault(); window.runQuickSearch('new', 'ladies', 'Ladies New Arrivals')">
                                <span class="apple-link-arrow">&rarr;</span>
                                <span class="apple-link-text">Ladies New Arrivals</span>
                            </a>
                            <a href="search.html?q=men&cat=men&title=Men%27s%20Casual%20%26%20Formalwear" class="apple-link-item" onclick="event.preventDefault(); window.runQuickSearch('men', 'men', 'Men\\'s Casual & Formalwear')">
                                <span class="apple-link-arrow">&rarr;</span>
                                <span class="apple-link-text">Men's Casual & Formalwear</span>
                            </a>
                            <a href="search.html?q=cotton&cat=kids&title=Kids%27%20Organic%20Cotton%20Essentials" class="apple-link-item" onclick="event.preventDefault(); window.runQuickSearch('cotton', 'kids', 'Kids\\' Organic Cotton Essentials')">
                                <span class="apple-link-arrow">&rarr;</span>
                                <span class="apple-link-text">Kids' Organic Cotton Essentials</span>
                            </a>
                            <a href="search.html?q=home&cat=home&title=Home%20Interior%20%26%20Modern%20Decor" class="apple-link-item" onclick="event.preventDefault(); window.runQuickSearch('home', 'home', 'Home Interior & Modern Decor')">
                                <span class="apple-link-arrow">&rarr;</span>
                                <span class="apple-link-text">Home Interior & Modern Decor</span>
                            </a>
                            <a href="search.html?q=dress&cat=ladies&title=Trending%20Linen%20Summer%20Dresses" class="apple-link-item" onclick="event.preventDefault(); window.runQuickSearch('dress', 'ladies', 'Trending Linen Summer Dresses')">
                                <span class="apple-link-arrow">&rarr;</span>
                                <span class="apple-link-text">Trending Linen Summer Dresses</span>
                            </a>
                        </div>
                    </div>

                    <div class="apple-search-section">
                        <div class="apple-search-section-title">Suggested Searches</div>
                        <div class="apple-suggested-searches">
                            <button type="button" class="apple-search-pill" onclick="window.runQuickSearch('Linen Dress', 'all')">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                <span><strong>Linen</strong> Dress</span>
                            </button>
                            <button type="button" class="apple-search-pill" onclick="window.runQuickSearch('Oversized Shirt', 'all')">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                <span><strong>Oversized</strong> Shirt</span>
                            </button>
                            <button type="button" class="apple-search-pill" onclick="window.runQuickSearch('Regular Jeans', 'all')">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                <span><strong>Regular</strong> Jeans</span>
                            </button>
                            <button type="button" class="apple-search-pill" onclick="window.runQuickSearch('Ceramic Vase', 'all')">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                <span><strong>Ceramic</strong> Vase</span>
                            </button>
                            <button type="button" class="apple-search-pill" onclick="window.runQuickSearch('Cotton Hoodie', 'all')">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                <span><strong>Cotton</strong> Hoodie</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            return;
        }

        // Active Typing: Filter using ranked multi-word catalog search
        const matches = searchCatalog(query);

        if (matches.length > 0) {
            const previewItems = matches.slice(0, 8);
            content.innerHTML = `
                <div class="apple-search-sections">
                    <div class="apple-search-section">
                        <div class="apple-search-section-title">Suggested Searches</div>
                        <div class="apple-suggested-searches">
                            <button type="button" class="apple-search-pill" onclick="window.runQuickSearch('${query}', 'all')">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                <span>Search for <strong>&ldquo;${query}&rdquo;</strong></span>
                            </button>
                            ${matches.slice(0, 2).map(m => `
                                <button type="button" class="apple-search-pill" onclick="window.runQuickSearch('${m.name.replace(/'/g, "\\'")}', 'all')">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    <span>${highlightMatch(m.name, query)}</span>
                                </button>
                            `).join('')}
                        </div>
                    </div>

                    <div class="apple-search-section">
                        <div class="apple-search-section-title">Products (${matches.length})</div>
                        <div class="apple-search-results-grid">
                            ${previewItems.map(m => `
                                <div class="apple-result-card" onclick="window.handleSearchProductSelect(${m.id})">
                                    <img src="${m.imageFront}" alt="${m.name}" class="apple-result-thumb" onerror="this.src='images/middle-banner.jpg'">
                                    <div class="apple-result-info">
                                        <div class="apple-result-title" title="${m.name}">${highlightMatch(m.name, query)}</div>
                                        <div class="apple-result-cat">${m.category.toUpperCase()}</div>
                                        <div class="apple-result-price">Rs. ${m.price.toLocaleString('en-IN')}.00</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <button type="button" class="apple-view-all-btn" onclick="window.runQuickSearch('${query}', 'all')">
                        View All ${matches.length} Results for &ldquo;${query.toUpperCase()}&rdquo; &rarr;
                    </button>
                </div>
            `;
        } else {
            content.innerHTML = `
                <div style="text-align: center; padding: 40px 20px;">
                    <div style="font-size: 2.2rem; margin-bottom: 12px; opacity: 0.6;">🔍</div>
                    <div style="font-size: 1.15rem; font-weight: 600; color: #111; margin-bottom: 8px;">No results found for &ldquo;${query}&rdquo;</div>
                    <p style="font-size: 0.88rem; color: #777; max-width: 440px; margin: 0 auto 24px;">Check your spelling or try searching for popular terms like dresses, shirts, trousers, or vases.</p>
                    <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
                        <button type="button" class="apple-search-pill" style="width: auto; padding: 6px 14px; background: #f0f0f2; border-radius: 20px;" onclick="window.runQuickSearch('dress', 'all')">Dresses</button>
                        <button type="button" class="apple-search-pill" style="width: auto; padding: 6px 14px; background: #f0f0f2; border-radius: 20px;" onclick="window.runQuickSearch('shirt', 'all')">Shirts</button>
                        <button type="button" class="apple-search-pill" style="width: auto; padding: 6px 14px; background: #f0f0f2; border-radius: 20px;" onclick="window.runQuickSearch('jeans', 'all')">Jeans</button>
                        <button type="button" class="apple-search-pill" style="width: auto; padding: 6px 14px; background: #f0f0f2; border-radius: 20px;" onclick="window.runQuickSearch('home', 'all')">Home</button>
                    </div>
                </div>
            `;
        }
    }

    window.runQuickSearch = function (q, cat = 'all', title = '') {
        closeSearchOverlay();
        handleSearchSubmit(q, cat, title);
    };

    window.handleSearchProductSelect = function (id) {
        closeSearchOverlay();
        window.location.href = `product.html?id=${id}`;
    };

    window.closeSearchOverlay = closeSearchOverlay;
    window.openSearchOverlay = openSearchOverlay;
}

window.handleSearchResultClick = function (productId) {
    if (window.closeSearchOverlay) window.closeSearchOverlay();
    window.location.href = `product.html?id=${productId}`;
};

// ==========================================================================
// 8. GLOBAL INTELLIGENT SEARCH CATALOG ENGINE
// ==========================================================================
function getWordStem(w) {
    if (!w) return '';
    if (w.endsWith('sses')) return w.slice(0, -2);
    if (w.endsWith('ies') && w.length > 4) return w.slice(0, -3) + 'y';
    if (w.endsWith('s') && w.length > 3 && !w.endsWith('ss')) return w.slice(0, -1);
    return w;
}

// Synonyms dictionary for category semantics, apparel keywords, and collections
const SEARCH_SYNONYMS = {
    'women': ['ladies', 'women', 'womens', 'woman', 'female', 'lady'],
    'womens': ['ladies', 'women', 'womens', 'woman', 'female', 'lady'],
    'woman': ['ladies', 'women', 'womens', 'woman', 'female', 'lady'],
    'ladies': ['ladies', 'women', 'womens', 'woman', 'female', 'lady'],
    'lady': ['ladies', 'women', 'womens', 'woman', 'female', 'lady'],

    'men': ['men', 'mens', 'man', 'male', 'gents'],
    'mens': ['men', 'mens', 'man', 'male', 'gents'],
    'man': ['men', 'mens', 'man', 'male', 'gents'],

    'kids': ['kids', 'kid', 'children', 'child', 'baby', 'toddler', 'newborn', 'infant', 'boys', 'girls'],
    'kid': ['kids', 'kid', 'children', 'child', 'baby', 'toddler', 'newborn', 'infant', 'boys', 'girls'],
    'children': ['kids', 'kid', 'children', 'child', 'baby', 'toddler', 'newborn', 'infant'],
    'child': ['kids', 'kid', 'children', 'child', 'baby', 'toddler', 'newborn', 'infant'],
    'baby': ['kids', 'kid', 'baby', 'newborn', 'infant', 'toddler'],
    'newborn': ['kids', 'kid', 'baby', 'newborn', 'infant'],
    'boys': ['kids', 'boys', 'boy'],
    'boy': ['kids', 'boys', 'boy'],
    'girls': ['kids', 'girls', 'girl'],
    'girl': ['kids', 'girls', 'girl'],

    'home': ['home', 'decor', 'house', 'living', 'interior', 'tableware', 'bedding'],

    'new': ['new', 'arrival', 'arrivals', 'latest', 'fresh', 'drop', 'new arrival', 'new arrivals'],
    'arrival': ['new', 'arrival', 'arrivals', 'latest'],
    'arrivals': ['new', 'arrival', 'arrivals', 'latest'],
    'latest': ['new', 'arrival', 'arrivals', 'latest'],

    'pants': ['bottoms', 'trousers', 'jeans', 'sweatpants', 'chinos', 'trackpants', 'pants'],
    'pant': ['bottoms', 'trousers', 'jeans', 'sweatpants', 'chinos', 'trackpants', 'pants'],
    'trousers': ['bottoms', 'trousers', 'pants', 'chinos'],
    'jeans': ['bottoms', 'jeans', 'denim', 'pants'],
    'denim': ['jeans', 'denim', 'bottoms'],

    'shirt': ['tops', 'shirt', 'shirts', 'blouse', 'tee', 't-shirt', 'top'],
    'shirts': ['tops', 'shirt', 'shirts', 'blouse', 'tee', 't-shirt', 'top'],
    'tee': ['tops', 'tee', 't-shirt', 'shirt'],
    't-shirt': ['tops', 'tee', 't-shirt', 'shirt', 'shirts'],

    'dress': ['dress', 'dresses', 'gown'],
    'dresses': ['dress', 'dresses', 'gown'],

    'shoes': ['shoes', 'boots', 'footwear', 'loafers', 'sneakers'],
    'boots': ['boots', 'shoes', 'footwear', 'chelsea'],
    'boot': ['boots', 'shoes', 'footwear', 'chelsea'],

    'jacket': ['outerwear', 'jacket', 'jackets', 'coat', 'overcoat', 'bomber', 'blazer'],
    'jackets': ['outerwear', 'jacket', 'jackets', 'coat', 'overcoat', 'bomber', 'blazer'],
    'coat': ['outerwear', 'coat', 'overcoat', 'jacket'],
    'blazer': ['outerwear', 'blazer', 'jacket', 'tailoring', 'suit'],

    'mug': ['mug', 'mugs', 'cup', 'dinnerware', 'dining'],
    'bowl': ['bowl', 'bowls', 'dinnerware', 'dining'],
    'vase': ['vase', 'vases', 'ceramic', 'decor', 'sculpture'],
    'bedding': ['bedding', 'duvet', 'linen', 'sheets'],
    'cushion': ['cushion', 'cushions', 'pillow', 'throws', 'textiles']
};

function searchCatalog(rawQuery) {
    const q = (rawQuery || '').trim().toLowerCase();
    const catalog = (typeof productsData !== 'undefined' ? productsData : []);
    if (!q || q === 'all' || q === '*') return catalog;

    // Clean query: strip punctuation and split into clean terms
    const clean = q.replace(/['’]/g, '').replace(/[^a-z0-9\s]/g, ' ');
    const rawWords = clean.split(/\s+/).filter(w => w.length > 0);
    const stopWords = new Set(['and', 'the', 'for', 'with', 'in', 'of', 'to', 'a', 'an', 'or', 'on', 'at']);
    const words = rawWords.filter(w => !stopWords.has(w) && w.length > 1);
    if (words.length === 0) return catalog;

    const stems = words.map(getWordStem);

    // Expand search query with semantic synonyms
    const queryConcepts = new Set();
    words.forEach(w => {
        queryConcepts.add(w);
        const stem = getWordStem(w);
        queryConcepts.add(stem);
        if (SEARCH_SYNONYMS[w]) SEARCH_SYNONYMS[w].forEach(s => queryConcepts.add(s));
        if (SEARCH_SYNONYMS[stem]) SEARCH_SYNONYMS[stem].forEach(s => queryConcepts.add(s));
    });

    // Check if query explicitly targets specific category
    const targetedCategories = new Set();
    if (words.some(w => ['ladies', 'lady', 'women', 'womens', 'woman', 'female'].includes(w) || ['ladies', 'lady', 'women', 'womens', 'woman'].includes(getWordStem(w)))) {
        targetedCategories.add('ladies');
    }
    if (words.some(w => ['men', 'mens', 'man', 'male', 'gents'].includes(w) || ['men', 'mens', 'man'].includes(getWordStem(w)))) {
        targetedCategories.add('men');
    }
    if (words.some(w => ['kids', 'kid', 'children', 'child', 'baby', 'toddler', 'boys', 'boy', 'girls', 'girl', 'newborn', 'infant'].includes(w) || ['kid', 'boy', 'girl', 'babi'].includes(getWordStem(w)))) {
        targetedCategories.add('kids');
    }
    if (words.some(w => ['home', 'decor', 'interior', 'living', 'tableware', 'bedding'].includes(w))) {
        targetedCategories.add('home');
    }

    const isNewQuery = queryConcepts.has('new') || queryConcepts.has('arrival') || queryConcepts.has('arrivals') || queryConcepts.has('latest');

    const scored = catalog.map(p => {
        // If user query explicitly targets a category (e.g. "ladies new arrivals"), only return matching category
        if (targetedCategories.size > 0 && !targetedCategories.has(p.category)) {
            return { product: p, score: 0, matchedTokens: 0 };
        }

        const name = (p.name || '').toLowerCase();
        const cat = (p.category || '').toLowerCase();
        const sub = (p.subCategory || '').toLowerCase();
        const desc = (p.description || '').toLowerCase();
        const colors = (p.colors || []).join(' ').toLowerCase();

        // Construct rich searchable tokens set
        let productTokens = new Set([
            ...name.replace(/[^a-z0-9]/g, ' ').split(/\s+/),
            cat,
            sub,
            ...colors.replace(/[^a-z0-9]/g, ' ').split(/\s+/),
            ...desc.replace(/[^a-z0-9]/g, ' ').split(/\s+/)
        ]);

        // Category synonyms
        if (cat === 'ladies') {
            ['women', 'womens', 'woman', 'ladies', 'lady', 'female'].forEach(t => productTokens.add(t));
        } else if (cat === 'men') {
            ['men', 'mens', 'man', 'male', 'gents'].forEach(t => productTokens.add(t));
        } else if (cat === 'kids') {
            ['kids', 'kid', 'children', 'child', 'baby', 'toddler', 'boys', 'girls', 'infant', 'newborn'].forEach(t => productTokens.add(t));
        } else if (cat === 'home') {
            ['home', 'decor', 'interior', 'living', 'house'].forEach(t => productTokens.add(t));
        }

        // Subcategory semantics
        if (sub === 'dresses') productTokens.add('dress');
        if (sub === 'bottoms') { productTokens.add('pants'); productTokens.add('trousers'); }
        if (sub === 'outerwear') { productTokens.add('jacket'); productTokens.add('coat'); }
        if (sub === 'tops') { productTokens.add('shirt'); productTokens.add('top'); }
        if (sub === 'dining') { productTokens.add('tableware'); productTokens.add('kitchen'); }

        // New Arrival tagging: products with isNew: true get tagged with arrival terms
        if (p.isNew) {
            productTokens.add('new');
            productTokens.add('arrival');
            productTokens.add('arrivals');
            productTokens.add('latest');
            productTokens.add('fresh');
        }

        let score = 0;
        let matchedTokens = 0;

        // Exact full query match in title
        if (name.includes(q)) {
            score += 150;
        }

        // Exact match in full product text
        const fullText = (name + ' ' + cat + ' ' + sub + ' ' + colors + ' ' + (p.isNew ? 'new arrival arrivals latest' : '') + ' ' + desc).toLowerCase();
        if (fullText.includes(q)) {
            score += 60;
        }

        // If searching for "new" / "new arrival", boost products where isNew === true
        if (isNewQuery && p.isNew) {
            score += 120;
            // Banner exclusive products shouldn't outrank catalog new arrivals
            if (p.isBannerOnly) score -= 30;
        }

        // Token by token matching
        words.forEach((w, idx) => {
            const stem = stems[idx];
            let tokenHit = false;

            // Direct token hit in productTokens
            if (productTokens.has(w) || productTokens.has(stem)) {
                tokenHit = true;
                score += 35;
                if (name.includes(w) || name.includes(stem)) score += 25;
                if (cat === w || cat === stem) score += 30;
            } else {
                // Check if any synonym of query word matches product tokens
                const syns = SEARCH_SYNONYMS[w] || SEARCH_SYNONYMS[stem] || [];
                for (const s of syns) {
                    if (productTokens.has(s)) {
                        tokenHit = true;
                        score += 25;
                        if (cat === s) score += 25;
                        break;
                    }
                }
            }

            // Word-boundary or prefix match
            const wordRegex = new RegExp('\\b' + w, 'i');
            if (wordRegex.test(name)) {
                score += 20;
                tokenHit = true;
            } else if (wordRegex.test(colors)) {
                score += 15;
                tokenHit = true;
            } else if (wordRegex.test(desc)) {
                score += 8;
                tokenHit = true;
            }

            if (tokenHit) matchedTokens++;
        });

        // Multi-word query bonus: if ALL tokens matched, give large boost
        if (words.length > 1 && matchedTokens === words.length) {
            score += 80;
        }

        // If searching for "new" but product is NOT isNew, penalize incidental "new" in text
        if (isNewQuery && !p.isNew) {
            score = Math.max(0, score - 50);
        }

        return { product: p, score, matchedTokens };
    });

    return scored
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(item => item.product);
}

window.handleSearchSubmit = function (query, cat = 'all', title = '') {
    if (window.closeSearchOverlay) window.closeSearchOverlay();

    if (!query || query.trim() === '') return;
    const cleanQuery = query.trim();

    const page = document.body.getAttribute('data-page');
    if (page === 'search') {
        searchPageState.query = cleanQuery;
        searchPageState.category = cat || 'all';
        searchPageState.customTitle = title || '';
        searchPageState.currentPage = 1;
        const mainInput = document.getElementById('mainSearchInput');
        if (mainInput) mainInput.value = title || cleanQuery;
        const appleInput = document.getElementById('appleSearchInput');
        if (appleInput) appleInput.value = cleanQuery;
        const url = `search.html?q=${encodeURIComponent(cleanQuery)}&cat=${encodeURIComponent(searchPageState.category || 'all')}${title ? '&title=' + encodeURIComponent(title) : ''}`;
        history.pushState(null, '', url);
        renderSearchPage();
        showToast(`Showing results for "${title || cleanQuery}"`);
        return;
    }

    // Navigate to search.html with query parameter
    let targetUrl = `search.html?q=${encodeURIComponent(cleanQuery)}&cat=${encodeURIComponent(cat || 'all')}`;
    if (title) targetUrl += `&title=${encodeURIComponent(title)}`;
    window.location.href = targetUrl;
};

// ==========================================================================
// 8.1 DEDICATED SEARCH RESULTS PAGE ENGINE (Matching Screenshot 1 & 2)
// ==========================================================================
let searchPageState = {
    query: '',
    category: 'all',
    customTitle: '',
    selectedColors: [],
    selectedSizes: [],
    sortBy: 'recommended',
    currentPage: 1
};

function initSearchPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const qParam = urlParams.get('q') || urlParams.get('search') || '';
    const catParam = (urlParams.get('cat') || 'all').toLowerCase();

    searchPageState.query = qParam;
    searchPageState.customTitle = urlParams.get('title') || '';
    searchPageState.category = ['all', 'ladies', 'men', 'kids', 'home'].includes(catParam) ? catParam : 'all';
    searchPageState.currentPage = 1;

    const mainInput = document.getElementById('mainSearchInput');
    if (mainInput && qParam) {
        mainInput.value = searchPageState.customTitle || qParam;
        const box = document.getElementById('searchInputBox');
        if (box) box.classList.add('active');
    }

    renderSearchPage();
    setupSearchFilterEvents();
}

function renderSearchPage() {
    const heading = document.getElementById('searchQueryHeading');
    const tabsContainer = document.getElementById('searchCategoryTabs');
    const gridContainer = document.getElementById('searchProductsGrid');
    const countEl = document.getElementById('searchProductCount');
    const noResults = document.getElementById('searchNoResults');
    const bottomControls = document.getElementById('searchBottomControls');

    const q = (searchPageState.query || '').trim();

    // 1. Dynamic Heading in uppercase
    if (heading) {
        if (searchPageState.customTitle) {
            heading.textContent = searchPageState.customTitle.toUpperCase();
        } else {
            heading.textContent = q ? q.toUpperCase() : 'ALL PRODUCTS';
        }
    }

    // 2. Global matching products across all categories using smart ranked search
    let matching = searchCatalog(q);

    // 3. Category count badges
    const allCount = matching.length;
    const ladiesCount = matching.filter(p => p.category === 'ladies').length;
    const menCount = matching.filter(p => p.category === 'men').length;
    const kidsCount = matching.filter(p => p.category === 'kids').length;
    const homeCount = matching.filter(p => p.category === 'home').length;

    // Fallback: only reset to 'all' if no specific category was explicitly requested by user
    if (searchPageState.category !== 'all') {
        const currentCatCount = matching.filter(p => p.category === searchPageState.category).length;
        const urlParams = new URLSearchParams(window.location.search);
        const requestedCat = urlParams.get('cat');
        if (currentCatCount === 0 && allCount > 0 && !requestedCat && !searchPageState.customTitle) {
            searchPageState.category = 'all';
        }
    }

    // 4. Render category tabs (ALL, LADIES, MEN, KIDS, HOME)
    if (tabsContainer) {
        const tabs = [
            { key: 'all', label: 'ALL', count: allCount },
            { key: 'ladies', label: 'LADIES', count: ladiesCount },
            { key: 'men', label: 'MEN', count: menCount },
            { key: 'kids', label: 'KIDS', count: kidsCount },
            { key: 'home', label: 'HOME', count: homeCount }
        ];

        tabsContainer.innerHTML = tabs.map(t => `
            <button type="button" class="search-cat-tab ${searchPageState.category === t.key ? 'active' : ''}" 
                    onclick="switchSearchCategory('${t.key}')">
                ${t.label}
                <span class="search-tab-count">(${t.count})</span>
            </button>
        `).join('');
    }

    // 5. Filter displayed items by category tab
    let displayed = matching;
    if (searchPageState.category !== 'all') {
        displayed = displayed.filter(p => p.category === searchPageState.category);
    }

    // Color filter
    if (searchPageState.selectedColors.length > 0) {
        displayed = displayed.filter(item =>
            item.colors && item.colors.some(c =>
                searchPageState.selectedColors.some(sc => c.toLowerCase().includes(sc.toLowerCase()))
            )
        );
    }

    // Size filter
    if (searchPageState.selectedSizes.length > 0) {
        displayed = displayed.filter(item =>
            item.sizes && item.sizes.some(s => searchPageState.selectedSizes.includes(s))
        );
    }

    // Sort order
    if (searchPageState.sortBy === 'price-low') {
        displayed.sort((a, b) => a.price - b.price);
    } else if (searchPageState.sortBy === 'price-high') {
        displayed.sort((a, b) => b.price - a.price);
    } else if (searchPageState.sortBy === 'newest') {
        displayed.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    // 6. Product count text
    if (countEl) {
        countEl.textContent = `${displayed.length} products`;
    }

    // 7. Render 4-Column Product Grid (Screenshot 1)
    if (gridContainer) {
        if (displayed.length === 0) {
            gridContainer.innerHTML = '';
            if (noResults) noResults.style.display = 'block';
            if (bottomControls) bottomControls.style.display = 'none';
        } else {
            if (noResults) noResults.style.display = 'none';
            if (bottomControls) bottomControls.style.display = 'flex';

            gridContainer.innerHTML = displayed.map(item => {
                const isWishlisted = state.wishlist.includes(item.id);

                return `
                    <div class="search-product-card" data-id="${item.id}" onclick="window.location.href='product.html?id=${item.id}'">
                        <div class="search-card-img-wrap">
                            <img src="${item.imageFront}" alt="${item.name}" class="search-primary-img" loading="lazy" onerror="this.src='images/middle-banner.jpg'">
                            ${item.imageBack && item.imageBack !== item.imageFront ? `
                                <img src="${item.imageBack}" alt="${item.name}" class="search-secondary-img" loading="lazy">
                            ` : ''}

                            <!-- Subtle Wishlist Heart on Hover -->
                            <button type="button" class="search-card-wishlist-btn ${isWishlisted ? 'active' : ''}" 
                                    onclick="event.stopPropagation(); toggleWishlist(${item.id}); this.classList.toggle('active');" 
                                    aria-label="Save to favorites">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="${isWishlisted ? '#000' : 'none'}" stroke="#000" stroke-width="1.8">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                            </button>
                        </div>

                        <!-- Minimalist Info Bar: Name on Left, Price on Right -->
                        <div class="search-card-info">
                            <h3 class="search-card-title">${item.name}</h3>
                            <div class="search-card-pricing">
                                <span class="search-current-price ${Boolean(item.originalPrice && item.originalPrice > item.price) ? 'is-discounted' : ''}">Rs. ${item.price.toLocaleString('en-IN')}.00</span>
                                ${Boolean(item.originalPrice && item.originalPrice > item.price) ? `<span class="search-orig-price">Rs. ${item.originalPrice.toLocaleString('en-IN')}.00</span>` : ''}
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }
}

window.switchSearchCategory = function (catKey) {
    searchPageState.category = catKey;
    searchPageState.currentPage = 1;
    if (searchPageState.customTitle) {
        const titleLower = searchPageState.customTitle.toLowerCase();
        if (titleLower.includes('new arrival') || titleLower.includes('new arrivals')) {
            if (catKey === 'all') searchPageState.customTitle = 'NEW ARRIVALS';
            else searchPageState.customTitle = `${catKey.toUpperCase()} NEW ARRIVALS`;
        } else if (['ladies', 'men', 'kids', 'home'].some(c => titleLower.includes(c))) {
            if (catKey === 'all') searchPageState.customTitle = searchPageState.query ? searchPageState.query.toUpperCase() : 'ALL PRODUCTS';
            else searchPageState.customTitle = `${catKey.toUpperCase()} COLLECTION`;
        }
    }
    const url = `search.html?q=${encodeURIComponent(searchPageState.query)}&cat=${encodeURIComponent(catKey)}${searchPageState.customTitle ? '&title=' + encodeURIComponent(searchPageState.customTitle) : ''}`;
    history.pushState(null, '', url);
    renderSearchPage();
    window.scrollTo({ top: 120, behavior: 'smooth' });
};

function setupSearchFilterEvents() {
    const filterBtn = document.getElementById('searchFilterTriggerBtn');
    const filterPanel = document.getElementById('searchFilterPanel');
    if (filterBtn && filterPanel) {
        filterBtn.addEventListener('click', () => {
            filterPanel.classList.toggle('open');
        });
    }

    const sortSelect = document.getElementById('searchSortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            searchPageState.sortBy = e.target.value;
            renderSearchPage();
        });
    }

    const applyBtn = document.getElementById('searchApplyFiltersBtn');
    if (applyBtn) {
        applyBtn.addEventListener('click', () => {
            const colors = Array.from(document.querySelectorAll('.search-color-chk:checked')).map(c => c.value);
            const sizes = Array.from(document.querySelectorAll('.search-size-chk:checked')).map(s => s.value);
            searchPageState.selectedColors = colors;
            searchPageState.selectedSizes = sizes;
            if (filterPanel) filterPanel.classList.remove('open');
            renderSearchPage();
            showToast('Filters applied');
        });
    }

    const clearBtn = document.getElementById('searchClearFiltersBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            document.querySelectorAll('.search-color-chk, .search-size-chk').forEach(c => c.checked = false);
            searchPageState.selectedColors = [];
            searchPageState.selectedSizes = [];
            searchPageState.sortBy = 'recommended';
            if (sortSelect) sortSelect.value = 'recommended';
            renderSearchPage();
            showToast('Filters cleared');
        });
    }

    const loadMoreBtn = document.getElementById('searchLoadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            loadMoreBtn.textContent = 'ALL PRODUCTS LOADED';
            loadMoreBtn.disabled = true;
            showToast('Loaded all available products');
        });
    }
}

window.setSearchPage = function (pageNumber) {
    document.querySelectorAll('.search-page-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.trim() === String(pageNumber));
    });
    window.scrollTo({ top: 140, behavior: 'smooth' });
    showToast(`Navigated to page ${pageNumber}`);
};

window.submitSearchRating = function (score, btn) {
    document.querySelectorAll('.search-face-btn').forEach(b => b.classList.remove('selected'));
    if (btn) btn.classList.add('selected');
    const msg = document.getElementById('searchFeedbackThankyou');
    if (msg) msg.style.display = 'block';
    localStorage.setItem('cosmo_search_rating', score);
    showToast(`Thank you for rating: ${score}/5 stars!`);
};

// ==========================================================================
// 8.2 DEDICATED PRODUCT DETAIL PAGE (PDP) ENGINE (Matching Reference Screenshots)
// ==========================================================================
function getSupplementaryImage(product, slot) {
    const ladiesSlot2 = ['images/23234.jpg', 'images/dfagh.jpg', 'images/ed.jpg', 'images/erw2.jpg', 'images/ew.jpg', 'images/slk.jpg'];
    const menSlot2 = ['images/et3453t.jpg', 'images/rew-copy.jpg', 'images/shirts men.jpg', 'images/jackets men.jpg', 'images/pants men.jpg'];
    const kidsSlot2 = ['images/kids-tulle-dress.png', 'images/cute.jpg', 'images/new born.jpg', 'images/baby care.jpg'];
    const homeSlot2 = ['images/decore.jpg', 'images/cushion.jpg', 'images/dine.jpg', 'images/home-duo-1.jpg'];

    const ladiesSlot3 = ['images/redfv.jpg', 'images/dsfge.jpg', 'images/dfsf.jpg', 'images/fgs.jpg', 'images/wrrw.jpg', 'images/sfrefredfe.jpg'];
    const menSlot3 = ['images/asgf.jpg', 'images/rtertr.jpg', 'images/werk.jpg', 'images/wertw.jpg', 'images/ette.jpg'];
    const kidsSlot3 = ['images/cute copy.jpg', 'images/fgs.jpg', 'images/redfv.jpg', 'images/kids-duo-1.jpg'];
    const homeSlot3 = ['images/home-duo-2.png', 'images/decore.jpg', 'images/fgs.jpg', 'images/home-banner.png'];

    const cat = product.category || 'ladies';
    const id = product.id || 1;

    if (slot === 2) {
        if (cat === 'men') return menSlot2[id % menSlot2.length];
        if (cat === 'kids') return kidsSlot2[id % kidsSlot2.length];
        if (cat === 'home') return homeSlot2[id % homeSlot2.length];
        return ladiesSlot2[id % ladiesSlot2.length];
    } else {
        if (cat === 'men') return menSlot3[id % menSlot3.length];
        if (cat === 'kids') return kidsSlot3[id % kidsSlot3.length];
        if (cat === 'home') return homeSlot3[id % homeSlot3.length];
        return ladiesSlot3[id % ladiesSlot3.length];
    }
}

// Global Add to Cart Function
function addToCart(productId, size = 'M', color = 'Standard', qty = 1) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const chosenSize = size || (product.sizes ? product.sizes[0] : 'M');
    const chosenColor = color || (product.colors ? product.colors[0] : 'Standard');

    const existing = state.cart.find(item => item.id === productId && item.size === chosenSize && item.color === chosenColor);
    if (existing) {
        existing.quantity += qty;
    } else {
        state.cart.push({
            id: product.id,
            size: chosenSize,
            color: chosenColor,
            quantity: qty,
            product: product
        });
    }

    localStorage.setItem('cosmo_cart', JSON.stringify(state.cart));
    updateBadges();
    showToast(`Added ${product.name} (${chosenSize}) to your bag.`);
}
window.addToCart = addToCart;

function initProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = parseInt(urlParams.get('id') || '1', 10);
    const product = productsData.find(p => p.id === idParam) || productsData[0];

    renderProductPage(product);
}

function renderProductPage(product) {
    const container = document.getElementById('pdpContainer');
    if (!container || !product) return;

    // Update document title & breadcrumb
    document.title = `${product.name} | COSMO`;
    const bcCat = document.getElementById('bcCategoryLink');
    if (bcCat) {
        bcCat.textContent = (product.category || 'ladies').toUpperCase();
        const catTarget = product.category === 'men' ? 'men.html' : (product.category === 'kids' ? 'kids.html' : (product.category === 'home' ? 'home.html' : 'index.html'));
        bcCat.href = catTarget;
    }
    const bcTitle = document.getElementById('bcProductTitle');
    if (bcTitle) bcTitle.textContent = (product.name || '').toUpperCase();

    // Single High-Res Editorial Image (Exactly One Image)
    const img1 = product.imageFront || 'images/ladies bannerhj.jpg';

    // Discounts & pricing
    const hasDiscount = Boolean(product.originalPrice && product.originalPrice > product.price);
    const origPrice = hasDiscount ? product.originalPrice : null;
    const discountPct = hasDiscount ? Math.round(((origPrice - product.price) / origPrice) * 100) : 0;
    const isWishlisted = state.wishlist.includes(product.id);

    // Selected color & sizes
    const colors = (product.colors && product.colors.length > 0) ? product.colors : ["Dark brown", "Black"];
    let currentColor = colors[0];
    const sizes = (product.sizes && product.sizes.length > 0) ? product.sizes : ["XS", "S", "M", "L", "XL"];
    let currentSize = sizes[0] || "M";

    container.innerHTML = `
        <div class="pdp-main-grid">
            <!-- Left Column: Exactly One High-Res Product Image (Matching User Request) -->
            <div class="pdp-gallery">
                <div class="pdp-gallery-img-wrap">
                    <img src="${img1}" alt="${product.name}" class="pdp-gallery-img" id="pdpMainImg1" loading="eager" onerror="this.src='images/middle-banner.jpg'">
                </div>
            </div>

            <!-- Right Column: Sticky Product Info (Screenshot 1 & 2) -->
            <div class="pdp-details">
                <!-- Badges & Wishlist -->
                <div class="pdp-badge-row">
                    ${hasDiscount ? `
                        <div class="pdp-badges-group">
                            <span class="pdp-deal-pill">-${discountPct}%</span>
                            <span class="pdp-weekend-pill">Special Deal</span>
                        </div>
                    ` : '<div></div>'}
                    <button type="button" class="pdp-wishlist-btn ${isWishlisted ? 'active' : ''}" id="pdpWishlistToggleBtn" title="Save to Favorites" aria-label="Save to favorites">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="${isWishlisted ? '#E50010' : 'none'}" stroke="${isWishlisted ? '#E50010' : 'currentColor'}" stroke-width="1.8">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                </div>

                <!-- Title & Pricing -->
                <h1 class="pdp-title">${product.name.toUpperCase()}</h1>
                <div class="pdp-pricing">
                    <span class="pdp-sale-price ${hasDiscount ? 'is-discounted' : ''}">Rs. ${product.price.toLocaleString('en-IN')}.00</span>
                    ${hasDiscount ? `<span class="pdp-orig-price">Rs. ${origPrice.toLocaleString('en-IN')}.00</span>` : ''}
                </div>
                <div class="pdp-tax-note">MRP inclusive of all taxes</div>

                <!-- Color Selection -->
                <div class="pdp-color-section">
                    <div class="pdp-color-label" id="pdpColorLabel">COLOUR: ${currentColor}</div>
                    <div class="pdp-swatches-row">
                        ${colors.map((c, i) => `
                            <div class="pdp-swatch-card ${i === 0 ? 'active' : ''}" data-color="${c}" title="${c}">
                                <img src="${img1}" alt="${c}" class="pdp-swatch-thumb" onerror="this.src='images/middle-banner.jpg'">
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Size Selection -->
                <div class="pdp-sizes-section">
                    <div class="pdp-sizes-grid" id="pdpSizesGrid">
                        ${sizes.map((s, idx) => `
                            <button type="button" class="pdp-size-btn ${idx === 0 ? 'active' : ''}" data-size="${s}">
                                ${s}
                            </button>
                        `).join('')}
                    </div>
                    <div class="pdp-size-guide-wrap">
                        <button type="button" class="pdp-size-guide-link" onclick="document.getElementById('sizeGuideModal').style.display='flex'">SIZE GUIDE</button>
                    </div>
                </div>

                <!-- Add to Bag Button -->
                <button type="button" class="pdp-add-to-bag-btn" id="pdpAddToBagBtn">
                    ADD TO BAG
                </button>

                <!-- Collapsible Accordions (Screenshot 2) -->
                <div class="pdp-accordions">
                    <div class="pdp-accordion-item open">
                        <button type="button" class="pdp-accordion-header" onclick="this.parentElement.classList.toggle('open')">
                            <span>DESCRIPTION</span>
                            <span class="pdp-accordion-icon">+</span>
                        </button>
                        <div class="pdp-accordion-body">
                            <p>${product.description || 'Premium quality tailored silhouette engineered for modern everyday elegance. Crafted from sustainably sourced fibers with precise attention to structural fit and comfort.'}</p>
                            <ul style="margin: 10px 0 0 16px; padding: 0; list-style: disc;">
                                <li><strong>Fit:</strong> Regular contemporary fit</li>
                                <li><strong>Length:</strong> Standard finished length</li>
                                <li><strong>Styling:</strong> Versatile day-to-night design</li>
                                <li><strong>Craftsmanship:</strong> Reinforced seam stitching with high tensile thread</li>
                            </ul>
                        </div>
                    </div>

                    <div class="pdp-accordion-item">
                        <button type="button" class="pdp-accordion-header" onclick="this.parentElement.classList.toggle('open')">
                            <span>MATERIAL & CARE</span>
                            <span class="pdp-accordion-icon">+</span>
                        </button>
                        <div class="pdp-accordion-body">
                            <p><strong>Composition:</strong> Shell: 72% Organic Cotton, 24% Recycled Viscose, 4% Elastane.</p>
                            <p><strong>Care Instructions:</strong></p>
                            <ul style="margin: 6px 0 0 16px; padding: 0; list-style: disc;">
                                <li>Machine wash at 30°C delicate cycle</li>
                                <li>Do not bleach or tumble dry</li>
                                <li>Iron at maximum 110°C / 230°F</li>
                                <li>Dry clean permissible with mild solvents</li>
                            </ul>
                        </div>
                    </div>

                    <div class="pdp-accordion-item">
                        <button type="button" class="pdp-accordion-header" onclick="this.parentElement.classList.toggle('open')">
                            <span>DELIVERY AND PAYMENT</span>
                            <span class="pdp-accordion-icon">+</span>
                        </button>
                        <div class="pdp-accordion-body">
                            <p><strong>Standard Delivery:</strong> 2-4 business days across India.</p>
                            <p><strong>Free Shipping:</strong> On all orders above Rs. 1,999.00.</p>
                            <p><strong>Returns:</strong> 30-day effortless return policy with door-step pickup.</p>
                            <p><strong>Payment Methods:</strong> UPI (GPay, PhonePe, Paytm), All Credit & Debit Cards, Net Banking, and Cash on Delivery (COD).</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Size button selection handlers
    const sizeBtns = container.querySelectorAll('.pdp-size-btn');
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSize = btn.getAttribute('data-size');
        });
    });

    // Color Swatch selection handlers
    const swatchCards = container.querySelectorAll('.pdp-swatch-card');
    swatchCards.forEach(card => {
        card.addEventListener('click', () => {
            swatchCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            currentColor = card.getAttribute('data-color') || currentColor;
            const lbl = document.getElementById('pdpColorLabel');
            if (lbl) lbl.textContent = `COLOUR: ${currentColor}`;
        });
    });

    // Wishlist Toggle
    const wishBtn = document.getElementById('pdpWishlistToggleBtn');
    if (wishBtn) {
        wishBtn.addEventListener('click', () => {
            toggleWishlist(product.id);
            const nowFav = state.wishlist.includes(product.id);
            wishBtn.classList.toggle('active', nowFav);
            const svg = wishBtn.querySelector('svg');
            if (svg) {
                svg.setAttribute('fill', nowFav ? '#E50010' : 'none');
                svg.setAttribute('stroke', nowFav ? '#E50010' : 'currentColor');
            }
        });
    }

    // Add To Bag Handler
    const addBtn = document.getElementById('pdpAddToBagBtn');
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            addToCart(product.id, currentSize, currentColor);
            addBtn.textContent = 'ADDED TO BAG ✓';
            addBtn.style.backgroundColor = '#22c55e';
            addBtn.style.color = '#ffffff';
            setTimeout(() => {
                addBtn.textContent = 'ADD TO BAG';
                addBtn.style.backgroundColor = '';
                addBtn.style.color = '';
            }, 1800);
        });
    }

    // Render SIMILAR ITEMS & OTHERS ALSO BOUGHT
    renderPdpCarousels(product);
}

function renderPdpCarousels(product) {
    const similarTrack = document.getElementById('similarItemsTrack');
    const othersTrack = document.getElementById('othersAlsoBoughtTrack');

    // Strict category filtering: In ladies section, ONLY ladies products appear (no men, kids, or home)
    const categoryProducts = productsData.filter(p => p.id !== product.id && p.category === product.category);

    // 1. Similar items from the exact same category
    const similarProducts = categoryProducts.slice(0, 8);

    if (similarTrack) {
        similarTrack.innerHTML = similarProducts.map(item => {
            const isFav = state.wishlist.includes(item.id);

            const hasDisc = Boolean(item.originalPrice && item.originalPrice > item.price);
            return `
                <div class="pdp-card" onclick="window.location.href='product.html?id=${item.id}'">
                    <div class="pdp-card-img-wrap">
                        <img src="${item.imageFront}" alt="${item.name}" class="pdp-card-img pdp-primary-img" loading="lazy" onerror="this.src='images/middle-banner.jpg'">
                        ${item.imageBack && item.imageBack !== item.imageFront ? `
                            <img src="${item.imageBack}" alt="${item.name}" class="pdp-card-img pdp-secondary-img" loading="lazy">
                        ` : ''}
                        <button type="button" class="pdp-card-wishlist ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${item.id}); this.classList.toggle('active');" aria-label="Save to favorites">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isFav ? '#000' : 'none'}" stroke="#000" stroke-width="1.8">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="pdp-card-info">
                        <h3 class="pdp-card-title">${item.name}</h3>
                        <div class="pdp-card-pricing">
                            <span class="pdp-card-price ${hasDisc ? 'is-discounted' : ''}">Rs. ${item.price.toLocaleString('en-IN')}.00</span>
                            ${hasDisc ? `<span class="pdp-card-orig-price">Rs. ${item.originalPrice.toLocaleString('en-IN')}.00</span>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // 2. Others also bought (distinct items also strictly from the exact same category)
    let othersProducts = categoryProducts.slice(8);
    if (othersProducts.length < 8) {
        othersProducts = othersProducts.concat(categoryProducts.slice(0, 8 - othersProducts.length));
    }

    if (othersTrack) {
        othersTrack.innerHTML = othersProducts.map(item => {
            const isFav = state.wishlist.includes(item.id);

            const hasDisc = Boolean(item.originalPrice && item.originalPrice > item.price);
            return `
                <div class="pdp-card" onclick="window.location.href='product.html?id=${item.id}'">
                    <div class="pdp-card-img-wrap">
                        <img src="${item.imageFront}" alt="${item.name}" class="pdp-card-img pdp-primary-img" loading="lazy" onerror="this.src='images/middle-banner.jpg'">
                        ${item.imageBack && item.imageBack !== item.imageFront ? `
                            <img src="${item.imageBack}" alt="${item.name}" class="pdp-card-img pdp-secondary-img" loading="lazy">
                        ` : ''}
                        <button type="button" class="pdp-card-wishlist ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${item.id}); this.classList.toggle('active');" aria-label="Save to favorites">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isFav ? '#000' : 'none'}" stroke="#000" stroke-width="1.8">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="pdp-card-info">
                        <h3 class="pdp-card-title">${item.name}</h3>
                        <div class="pdp-card-pricing">
                            <span class="pdp-card-price ${hasDisc ? 'is-discounted' : ''}">Rs. ${item.price.toLocaleString('en-IN')}.00</span>
                            ${hasDisc ? `<span class="pdp-card-orig-price">Rs. ${item.originalPrice.toLocaleString('en-IN')}.00</span>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Wire up carousel buttons
    const simPrev = document.getElementById('similarPrevBtn');
    const simNext = document.getElementById('similarNextBtn');
    if (simPrev && similarTrack) {
        simPrev.onclick = () => similarTrack.scrollBy({ left: -280, behavior: 'smooth' });
    }
    if (simNext && similarTrack) {
        simNext.onclick = () => similarTrack.scrollBy({ left: 280, behavior: 'smooth' });
    }

    const othPrev = document.getElementById('othersPrevBtn');
    const othNext = document.getElementById('othersNextBtn');
    if (othPrev && othersTrack) {
        othPrev.onclick = () => othersTrack.scrollBy({ left: -280, behavior: 'smooth' });
    }
    if (othNext && othersTrack) {
        othNext.onclick = () => othersTrack.scrollBy({ left: 280, behavior: 'smooth' });
    }
}

// ==========================================================================
// 9. MODALS & DRAWERS (Wishlist, Sign In, Mobile Menu Drawer)
// ==========================================================================
function initModals() {
    const wishlistBtn = document.getElementById('wishlistTriggerBtn');
    const wishlistDrawer = document.getElementById('hmWishlistDrawer');
    const closeWishlistBtn = document.getElementById('closeWishlistDrawerBtn');

    const accountBtn = document.getElementById('accountModalBtn');
    const signInModal = document.getElementById('signInModalOverlay');
    const closeSignInBtn = document.getElementById('closeSignInModalBtn');
    const backdrop = document.getElementById('globalBackdrop');

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');

    function openDrawer(drawer) {
        if (drawer) drawer.classList.add('open');
        if (backdrop) backdrop.classList.add('active');
    }

    function closeAll() {
        if (wishlistDrawer) wishlistDrawer.classList.remove('open');
        if (signInModal) signInModal.classList.remove('active');
        const mobileDrawer = document.getElementById('hmMobileDrawer');
        if (mobileDrawer) mobileDrawer.classList.remove('open');
        const qvModal = document.getElementById('quickViewModalOverlay');
        if (qvModal) qvModal.classList.remove('active');
        if (backdrop) backdrop.classList.remove('active');
    }

    if (wishlistBtn) wishlistBtn.addEventListener('click', () => { renderWishlistDrawer(); openDrawer(wishlistDrawer); });
    if (closeWishlistBtn) closeWishlistBtn.addEventListener('click', closeAll);

    if (accountBtn) {
        accountBtn.addEventListener('click', () => {
            if (state.user) {
                if (confirm(`Logged in as ${state.user.email}. Do you want to sign out?`)) {
                    state.user = null;
                    localStorage.removeItem('cosmo_user');
                    updateUserHeaderState();
                    showToast('Signed out successfully');
                }
            } else {
                if (signInModal) signInModal.classList.add('active');
                if (backdrop) backdrop.classList.add('active');
            }
        });
    }

    if (closeSignInBtn) closeSignInBtn.addEventListener('click', closeAll);
    if (backdrop) backdrop.addEventListener('click', closeAll);

    // Escape key closes modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAll();
    });

    // Mobile Navigation Drawer
    initMobileDrawer(mobileMenuBtn, backdrop, closeAll);

    const signInForm = document.getElementById('signInForm');
    if (signInForm) {
        signInForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('signinEmail');
            const email = emailInput ? emailInput.value : 'member@cosmo.com';
            state.user = { email, name: email.split('@')[0] };
            localStorage.setItem('cosmo_user', JSON.stringify(state.user));
            closeAll();
            updateUserHeaderState();
            showToast(`Welcome to COSMO, ${state.user.name}!`);
        });
    }

    const cartSignInBtn = document.getElementById('cartSignInBtn');
    if (cartSignInBtn) {
        cartSignInBtn.addEventListener('click', () => {
            if (signInModal) signInModal.classList.add('active');
            if (backdrop) backdrop.classList.add('active');
        });
    }

    document.addEventListener('click', (e) => {
        const footerSignupBtn = e.target.closest('#footerSignupBtn');
        if (footerSignupBtn) {
            e.preventDefault();
            if (signInModal) signInModal.classList.add('active');
            if (backdrop) backdrop.classList.add('active');
        }
    });
}

function updateUserHeaderState() {
    const accountBtn = document.getElementById('accountModalBtn');
    if (!accountBtn) return;
    if (state.user) {
        accountBtn.title = `Signed In: ${state.user.email} (Click to Sign Out)`;
        accountBtn.style.color = '#E50010';
    } else {
        accountBtn.title = 'Sign In / Account';
        accountBtn.style.color = '';
    }
}

function initMobileDrawer(triggerBtn, backdrop, closeAllFn) {
    let mobileDrawer = document.getElementById('hmMobileDrawer');
    if (!mobileDrawer) {
        mobileDrawer = document.createElement('div');
        mobileDrawer.className = 'hm-mobile-drawer';
        mobileDrawer.id = 'hmMobileDrawer';
        const currentCat = getCurrentPageCategory();
        const totalQty = state.cart.reduce((sum, item) => sum + item.quantity, 0);
        const favQty = state.wishlist.length;
        mobileDrawer.innerHTML = `
            <div>
                <div class="mobile-drawer-header">
                    <span class="cosmo-brand-logo">COSMO</span>
                    <button class="drawer-close-btn" id="closeMobileDrawerBtn" aria-label="Close menu">✕</button>
                </div>
                <div class="mobile-drawer-body">
                    <div class="drawer-section-label">SHOP</div>
                    <div class="mobile-drawer-nav-list">
                        <a href="index.html" class="mobile-drawer-nav-link ${currentCat === 'ladies' ? 'active' : ''}">LADIES</a>
                        <a href="men.html" class="mobile-drawer-nav-link ${currentCat === 'men' ? 'active' : ''}">MEN</a>
                        <a href="kids.html" class="mobile-drawer-nav-link ${currentCat === 'kids' ? 'active' : ''}">KIDS</a>
                        <a href="home.html" class="mobile-drawer-nav-link ${currentCat === 'home' ? 'active' : ''}">HOME</a>
                    </div>

                    <div class="drawer-section-label" style="margin-top: 24px;">ACCOUNT & UTILITIES</div>
                    <div class="mobile-drawer-nav-list">
                        <a href="#" class="mobile-drawer-nav-link" id="mobileAccountBtn"><span>ACCOUNT</span></a>
                        <a href="#" class="mobile-drawer-nav-link" id="mobileSearchBtn"><span>SEARCH</span></a>
                        <a href="cart.html" class="mobile-drawer-nav-link" id="mobileCartBtn"><span>CART [<span id="mobileBagBadge">${totalQty}</span>]</span></a>
                        <a href="#" class="mobile-drawer-nav-link" id="mobileFavBtn"><span>FAV. [<span id="mobileFavBadge">${favQty}</span>]</span></a>
                    </div>

                    <div class="mobile-sublinks-group">
                        <a href="#" class="mobile-sublink" id="mobileSignInLink">Sign In / Join COSMO</a>
                        <a href="#" class="mobile-sublink">Find a Store</a>
                        <a href="#" class="mobile-sublink">Customer Service</a>
                    </div>
                </div>
            </div>
            <div class="mobile-drawer-footer">
                <div style="font-size: 0.78rem; color: #666; display: flex; justify-content: center; align-items: center;">
                    <span style="font-weight: 600; color: #222; letter-spacing: 0.05em;">COSMO ONLINE</span>
                </div>
            </div>
        `;
        document.body.appendChild(mobileDrawer);

        const closeBtn = document.getElementById('closeMobileDrawerBtn');
        if (closeBtn) closeBtn.addEventListener('click', closeAllFn);

        const mobileAccount = document.getElementById('mobileAccountBtn');
        if (mobileAccount) {
            mobileAccount.addEventListener('click', (e) => {
                e.preventDefault();
                closeAllFn();
                const sm = document.getElementById('signInModalOverlay');
                if (sm) sm.classList.add('active');
                if (backdrop) backdrop.classList.add('active');
            });
        }

        const mobileSearch = document.getElementById('mobileSearchBtn');
        if (mobileSearch) {
            mobileSearch.addEventListener('click', (e) => {
                e.preventDefault();
                closeAllFn();
                openAppleSearch();
            });
        }

        const mobileFav = document.getElementById('mobileFavBtn');
        if (mobileFav) {
            mobileFav.addEventListener('click', (e) => {
                e.preventDefault();
                closeAllFn();
                const wd = document.getElementById('hmWishlistDrawer');
                renderWishlistDrawer();
                if (wd) wd.classList.add('open');
                if (backdrop) backdrop.classList.add('active');
            });
        }

        const mobileSignIn = document.getElementById('mobileSignInLink');
        if (mobileSignIn) {
            mobileSignIn.addEventListener('click', (e) => {
                e.preventDefault();
                closeAllFn();
                const sm = document.getElementById('signInModalOverlay');
                if (sm) sm.classList.add('active');
                if (backdrop) backdrop.classList.add('active');
            });
        }
    }

    if (triggerBtn) {
        triggerBtn.addEventListener('click', () => {
            mobileDrawer.classList.add('open');
            if (backdrop) backdrop.classList.add('active');
        });
    }
}

// ==========================================================================
// 10. DEDICATED SHOPPING BAG & CHECKOUT SYSTEM (cart.html)
// ==========================================================================
function initCartPage() {
    if (document.body.getAttribute('data-page') !== 'cart') return;

    renderCartPage();

    // Promo code handlers
    const promoToggleBtn = document.getElementById('promoToggleBtn');
    const promoInputGroup = document.getElementById('promoInputGroup');
    const promoToggleIcon = document.getElementById('promoToggleIcon');
    const applyPromoBtn = document.getElementById('applyPromoBtn');
    const promoCodeInput = document.getElementById('promoCodeInput');
    const removePromoBtn = document.getElementById('removePromoBtn');

    if (promoToggleBtn && promoInputGroup) {
        promoToggleBtn.addEventListener('click', () => {
            const isHidden = promoInputGroup.style.display === 'none' || promoInputGroup.style.display === '';
            promoInputGroup.style.display = isHidden ? 'flex' : 'none';
            if (promoToggleIcon) promoToggleIcon.textContent = isHidden ? '−' : '+';
        });
    }

    if (applyPromoBtn && promoCodeInput) {
        applyPromoBtn.addEventListener('click', () => {
            const code = promoCodeInput.value.trim().toUpperCase();
            if (code === 'COSMO10' || code === 'WELCOME20' || code === 'SAVE15' || code === 'FREESHIP') {
                state.appliedPromo = code;
                localStorage.setItem('cosmo_applied_promo', code);
                renderCartPage();
                showToast(`Promo code "${code}" applied successfully!`);
            } else if (code) {
                showToast(`Invalid code. Try "COSMO10" for 10% off or "WELCOME20"!`);
            }
        });
    }

    if (removePromoBtn) {
        removePromoBtn.addEventListener('click', () => {
            state.appliedPromo = null;
            localStorage.removeItem('cosmo_applied_promo');
            renderCartPage();
            showToast('Promo code removed');
        });
    }

    // Checkout modal handlers
    const openCheckoutBtn = document.getElementById('openCheckoutModalBtn');
    const checkoutOverlay = document.getElementById('checkoutModalOverlay');
    const closeCheckoutBtn = document.getElementById('closeCheckoutModalBtn');
    const checkoutForm = document.getElementById('completeCheckoutForm');

    if (openCheckoutBtn && checkoutOverlay) {
        openCheckoutBtn.addEventListener('click', () => {
            if (state.cart.length === 0) {
                showToast('Your shopping bag is empty. Add products to continue.');
                return;
            }
            checkoutOverlay.classList.add('active');
            const cartTotal = document.getElementById('cartTotalText');
            const modalTotal = document.getElementById('modalPayableTotal');
            if (modalTotal && cartTotal) {
                modalTotal.textContent = cartTotal.textContent;
            }
        });
    }

    if (closeCheckoutBtn && checkoutOverlay) {
        closeCheckoutBtn.addEventListener('click', () => {
            checkoutOverlay.classList.remove('active');
        });
    }

    if (checkoutOverlay) {
        checkoutOverlay.addEventListener('click', (e) => {
            if (e.target === checkoutOverlay) {
                checkoutOverlay.classList.remove('active');
            }
        });
    }

    // Payment method card selection
    document.querySelectorAll('.payment-method-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.payment-method-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            const radio = card.querySelector('input[type="radio"]');
            if (radio) radio.checked = true;
        });
    });

    // Complete Checkout Form Submit
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = checkoutForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'AUTHORIZING & PLACING ORDER...';
            }

            setTimeout(() => {
                const randomId = 'CSM-' + Math.floor(100000 + Math.random() * 900000);
                const formStep = document.getElementById('checkoutFormStep');
                const successStep = document.getElementById('checkoutSuccessStep');
                const orderIdEl = document.getElementById('confirmedOrderId');

                if (orderIdEl) orderIdEl.textContent = `ORDER ID: #${randomId}`;
                if (formStep) formStep.style.display = 'none';
                if (successStep) successStep.style.display = 'block';

                // Empty cart after successful placement
                state.cart = [];
                state.appliedPromo = null;
                localStorage.setItem('cosmo_cart', JSON.stringify(state.cart));
                localStorage.removeItem('cosmo_applied_promo');
                updateBadges();
                renderCartPage();

                showToast('Order placed successfully!');
            }, 800);
        });
    }
}

function renderCartPage() {
    const listContainer = document.getElementById('cartItemsList');
    const emptyState = document.getElementById('cartEmptyState');
    const countTitle = document.getElementById('cartCountTitleSpan');
    const subtotalEl = document.getElementById('cartSubtotalText');
    const discountRow = document.getElementById('cartDiscountRow');
    const discountEl = document.getElementById('cartDiscountText');
    const deliveryEl = document.getElementById('cartDeliveryText');
    const totalEl = document.getElementById('cartTotalText');
    const promoBadge = document.getElementById('promoAppliedBadge');
    const promoBadgeText = document.getElementById('promoBadgeText');

    if (!listContainer) return;

    const totalQty = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    if (countTitle) countTitle.textContent = `(${totalQty})`;

    if (state.cart.length === 0) {
        listContainer.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        if (subtotalEl) subtotalEl.textContent = 'Rs. 0.00';
        if (totalEl) totalEl.textContent = 'Rs. 0.00';
        if (discountRow) discountRow.style.display = 'none';
        if (deliveryEl) deliveryEl.textContent = 'FREE';
        if (promoBadge) promoBadge.style.display = 'none';
        return;
    } else {
        if (emptyState) emptyState.style.display = 'none';
    }

    let subtotal = 0;

    listContainer.innerHTML = state.cart.map((item) => {
        const itemLineTotal = item.product.price * item.quantity;
        subtotal += itemLineTotal;
        const artNo = '1347' + (100000 + item.product.id);
        const colorName = item.color || item.product.colors[0] || 'Black';
        const sizesOptions = (item.product.sizes || ["S", "M", "L", "XL"]).map(s => `
            <option value="${s}" ${s === item.size ? 'selected' : ''}>${s}</option>
        `).join('');

        return `
            <div class="cart-item-card-row">
                <div class="cart-item-media" onclick="openQuickViewModal(${item.product.id})" style="cursor: pointer;">
                    <img src="${item.product.imageFront}" alt="${item.product.name}" onerror="this.src='images/middle-banner.jpg'">
                </div>
                <div class="cart-item-details">
                    <div>
                        <div class="cart-item-top-row">
                            <div>
                                <span class="cart-brand-tag">COSMO &bull; ${item.product.category.toUpperCase()}</span>
                                <h3 class="cart-item-name" onclick="openQuickViewModal(${item.product.id})" style="cursor: pointer;">${item.product.name}</h3>
                            </div>
                            <div class="cart-item-price-val">Rs. ${itemLineTotal.toLocaleString('en-IN')}.00</div>
                        </div>
                        <div class="cart-item-meta-list">
                            <div class="cart-item-meta-row">
                                <span class="cart-item-meta-label">Art. no.:</span>
                                <span>${artNo}</span>
                            </div>
                            <div class="cart-item-meta-row">
                                <span class="cart-item-meta-label">Colour:</span>
                                <span style="text-transform: capitalize;">${colorName}</span>
                            </div>
                            <div class="cart-item-meta-row" style="align-items: center;">
                                <span class="cart-item-meta-label">Size:</span>
                                <select class="cart-size-select" onchange="updateCartItemSize(${item.id}, this.value)">
                                    ${sizesOptions}
                                </select>
                            </div>
                            <div class="cart-item-meta-row">
                                <span class="cart-item-meta-label">Unit price:</span>
                                <span>Rs. ${item.product.price.toLocaleString('en-IN')}.00</span>
                            </div>
                        </div>
                    </div>

                    <div class="cart-controls-row">
                        <!-- Quantity Controller -->
                        <div class="qty-control-box">
                            <button type="button" class="qty-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})" aria-label="Decrease quantity">&minus;</button>
                            <span class="qty-display">${item.quantity}</span>
                            <button type="button" class="qty-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})" aria-label="Increase quantity">&#43;</button>
                        </div>

                        <!-- Actions -->
                        <div class="cart-action-links">
                            <button type="button" class="cart-wishlist-btn" onclick="saveCartItemForLater(${item.id})">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                Save for later
                            </button>
                            <button type="button" class="cart-remove-btn" onclick="removeFromBag(${item.id})">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Discounts & Calculation
    let discountAmount = 0;
    if (state.appliedPromo === 'COSMO10') {
        discountAmount = Math.round(subtotal * 0.10);
        if (promoBadge) promoBadge.style.display = 'flex';
        if (promoBadgeText) promoBadgeText.textContent = `Code COSMO10 Applied (-10%)`;
    } else if (state.appliedPromo === 'WELCOME20') {
        discountAmount = Math.round(subtotal * 0.20);
        if (promoBadge) promoBadge.style.display = 'flex';
        if (promoBadgeText) promoBadgeText.textContent = `Code WELCOME20 Applied (-20%)`;
    } else if (state.appliedPromo === 'SAVE15') {
        discountAmount = Math.round(subtotal * 0.15);
        if (promoBadge) promoBadge.style.display = 'flex';
        if (promoBadgeText) promoBadgeText.textContent = `Code SAVE15 Applied (-15%)`;
    } else if (state.appliedPromo === 'FREESHIP') {
        if (promoBadge) promoBadge.style.display = 'flex';
        if (promoBadgeText) promoBadgeText.textContent = `Code FREESHIP Applied (Free Delivery)`;
    } else {
        if (promoBadge) promoBadge.style.display = 'none';
    }

    let deliveryFee = subtotal >= 1999 || subtotal === 0 || state.appliedPromo === 'FREESHIP' ? 0 : 149;
    const finalTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

    if (subtotalEl) subtotalEl.textContent = `Rs. ${subtotal.toLocaleString('en-IN')}.00`;

    if (discountAmount > 0 && discountRow && discountEl) {
        discountRow.style.display = 'flex';
        discountEl.textContent = `- Rs. ${discountAmount.toLocaleString('en-IN')}.00`;
    } else if (discountRow) {
        discountRow.style.display = 'none';
    }

    if (deliveryEl) {
        deliveryEl.textContent = deliveryFee === 0 ? 'FREE' : `Rs. ${deliveryFee}.00`;
        deliveryEl.className = deliveryFee === 0 ? 'free-tag' : '';
    }

    if (totalEl) totalEl.textContent = `Rs. ${finalTotal.toLocaleString('en-IN')}.00`;
}

window.updateCartQuantity = function (productId, newQty) {
    if (newQty <= 0) {
        removeFromBag(productId);
        return;
    }
    const item = state.cart.find(i => i.id === productId);
    if (item) {
        item.quantity = newQty;
        localStorage.setItem('cosmo_cart', JSON.stringify(state.cart));
        updateBadges();
        renderCartPage();
    }
};

window.updateCartItemSize = function (productId, newSize) {
    const item = state.cart.find(i => i.id === productId);
    if (item) {
        item.size = newSize;
        localStorage.setItem('cosmo_cart', JSON.stringify(state.cart));
        showToast(`Size updated to ${newSize}`);
    }
};

window.saveCartItemForLater = function (productId) {
    if (!state.wishlist.includes(productId)) {
        state.wishlist.push(productId);
        localStorage.setItem('cosmo_wishlist', JSON.stringify(state.wishlist));
    }
    removeFromBag(productId);
    showToast('Saved to your favorites');
};

// ==========================================================================
// 11. QUICK VIEW & DETAILED PRODUCT MODAL
// ==========================================================================
let currentQvSelectedSize = null;
let currentQvSelectedColor = null;
let currentQvQty = 1;

window.openQuickViewModal = function (productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    currentQvSelectedSize = product.sizes ? product.sizes[0] : 'M';
    currentQvSelectedColor = product.colors ? product.colors[0] : 'Standard';
    currentQvQty = 1;

    let overlay = document.getElementById('quickViewModalOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'hm-quickview-overlay';
        overlay.id = 'quickViewModalOverlay';
        document.body.appendChild(overlay);
    }

    const discountPct = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    const isWishlisted = state.wishlist.includes(product.id);

    const sizePillsHtml = (product.sizes || ["S", "M", "L", "XL"]).map((s, idx) => `
        <button type="button" class="size-pill-btn ${idx === 0 ? 'selected' : ''}" onclick="selectQvSize(this, '${s}')">${s}</button>
    `).join('');

    const colorSwatchesHtml = (product.colors || ["Standard"]).map((c, idx) => `
        <button type="button" class="swatch-btn ${idx === 0 ? 'selected' : ''}" onclick="selectQvColor(this, '${c}')">${c}</button>
    `).join('');

    overlay.innerHTML = `
        <div class="hm-quickview-card" role="dialog" aria-modal="true" aria-labelledby="qvProductTitle">
            <button class="quickview-close-btn" onclick="closeQuickViewModal()" aria-label="Close product view">✕</button>
            <div class="quickview-layout-grid">
                <!-- Left: Big Media Image -->
                <div class="quickview-media-col">
                    <img src="${product.imageFront}" alt="${product.name}" id="qvMainImage" onerror="this.src='images/middle-banner.jpg'">
                </div>

                <!-- Right: Product Information & Controls -->
                <div class="quickview-details-col">
                    <div>
                        <div class="quickview-header-meta">
                            <span class="quickview-brand-pill">COSMO &bull; ${product.category.toUpperCase()} &bull; ${product.subCategory ? product.subCategory.toUpperCase() : 'COLLECTION'}</span>
                            <h2 class="quickview-title" id="qvProductTitle">${product.name}</h2>
                            <div class="quickview-price-row">
                                <span class="quickview-current-price ${discountPct > 0 ? 'is-discounted' : ''}">Rs. ${product.price.toLocaleString('en-IN')}.00</span>
                                ${product.originalPrice ? `<span class="quickview-original-price">Rs. ${product.originalPrice.toLocaleString('en-IN')}.00</span>` : ''}
                                ${discountPct > 0 ? `<span class="quickview-discount-badge">-${discountPct}% OFF</span>` : ''}
                            </div>
                        </div>

                        <p class="quickview-desc">${product.description}</p>

                        <!-- Color Selection -->
                        <div class="quickview-option-group">
                            <div class="quickview-option-label">
                                <span>COLOUR: <strong id="qvColorLabel" style="font-weight: 800; text-transform: capitalize;">${currentQvSelectedColor}</strong></span>
                            </div>
                            <div class="quickview-swatches">
                                ${colorSwatchesHtml}
                            </div>
                        </div>

                        <!-- Size Selection -->
                        <div class="quickview-option-group">
                            <div class="quickview-option-label">
                                <span>SELECT SIZE: <strong id="qvSizeLabel" style="font-weight: 800;">${currentQvSelectedSize}</strong></span>
                                <span style="color: #666; font-size: 0.72rem; cursor: pointer; text-decoration: underline;">Size Guide</span>
                            </div>
                            <div class="quickview-size-pills">
                                ${sizePillsHtml}
                            </div>
                        </div>

                        <!-- Quantity Selector -->
                        <div class="quickview-qty-row">
                            <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">QUANTITY:</span>
                            <div class="qty-control-box">
                                <button type="button" class="qty-btn" onclick="stepQvQty(-1)">&minus;</button>
                                <span class="qty-display" id="qvQtyDisplay">1</span>
                                <button type="button" class="qty-btn" onclick="stepQvQty(1)">&#43;</button>
                            </div>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div>
                        <div class="quickview-actions-grid">
                            <button type="button" class="qv-add-to-bag-btn" id="qvAddBagBtn" onclick="submitQvAddToBag(${product.id})">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                    <line x1="3" y1="6" x2="21" y2="6"></line>
                                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                                </svg>
                                ADD TO SHOPPING BAG
                            </button>
                            <button type="button" class="qv-buy-now-btn" onclick="submitQvBuyNow(${product.id})">
                                BUY NOW &bull; FAST CHECKOUT &rarr;
                            </button>
                            <button type="button" class="qv-fav-btn" id="qvFavBtn" onclick="toggleQvWishlist(${product.id})">
                                <svg id="qvFavHeartSvg" width="16" height="16" viewBox="0 0 24 24" fill="${isWishlisted ? '#E50010' : 'none'}" stroke="${isWishlisted ? '#E50010' : '#111'}" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                <span id="qvFavText">${isWishlisted ? 'SAVED IN FAVORITES' : 'ADD TO FAVORITES'}</span>
                            </button>
                        </div>

                        <div class="qv-perks-list">
                            <span>Free standard delivery on orders above Rs. 1,999</span>
                            <span>30-day effortless returns policy</span>
                            <span>100% Genuine COSMO Quality Guaranteed</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    overlay.classList.add('active');

    // Click outside to close
    overlay.onclick = (e) => {
        if (e.target === overlay) closeQuickViewModal();
    };
};

window.closeQuickViewModal = function () {
    const overlay = document.getElementById('quickViewModalOverlay');
    if (overlay) overlay.classList.remove('active');
};

window.selectQvSize = function (btn, size) {
    document.querySelectorAll('.size-pill-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    currentQvSelectedSize = size;
    const label = document.getElementById('qvSizeLabel');
    if (label) label.textContent = size;
};

window.selectQvColor = function (btn, color) {
    document.querySelectorAll('.swatch-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    currentQvSelectedColor = color;
    const label = document.getElementById('qvColorLabel');
    if (label) label.textContent = color;
};

window.stepQvQty = function (delta) {
    currentQvQty = Math.max(1, currentQvQty + delta);
    const el = document.getElementById('qvQtyDisplay');
    if (el) el.textContent = currentQvQty;
};

window.submitQvAddToBag = function (productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const chosenSize = currentQvSelectedSize || (product.sizes ? product.sizes[0] : 'M');
    const chosenColor = currentQvSelectedColor || (product.colors ? product.colors[0] : 'Standard');

    const existing = state.cart.find(item => item.id === productId && item.size === chosenSize && item.color === chosenColor);
    if (existing) {
        existing.quantity += currentQvQty;
    } else {
        state.cart.push({
            id: product.id,
            size: chosenSize,
            color: chosenColor,
            quantity: currentQvQty,
            product
        });
    }

    localStorage.setItem('cosmo_cart', JSON.stringify(state.cart));
    updateBadges();
    renderCartPage();

    const addBtn = document.getElementById('qvAddBagBtn');
    if (addBtn) {
        addBtn.innerHTML = `✓ ADDED TO BAG (${currentQvQty})`;
        addBtn.style.background = '#2e7d32';
        setTimeout(() => {
            if (addBtn) {
                addBtn.innerHTML = `
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    ADD TO SHOPPING BAG
                `;
                addBtn.style.background = '#111111';
            }
        }, 1200);
    }

    showToast(`Added ${product.name} (Size: ${chosenSize}) to shopping bag`);
};

window.submitQvBuyNow = function (productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const chosenSize = currentQvSelectedSize || (product.sizes ? product.sizes[0] : 'M');
    const chosenColor = currentQvSelectedColor || (product.colors ? product.colors[0] : 'Standard');

    const existing = state.cart.find(item => item.id === productId && item.size === chosenSize);
    if (existing) {
        existing.quantity += currentQvQty;
    } else {
        state.cart.push({
            id: product.id,
            size: chosenSize,
            color: chosenColor,
            quantity: currentQvQty,
            product
        });
    }

    localStorage.setItem('cosmo_cart', JSON.stringify(state.cart));
    updateBadges();
    closeQuickViewModal();
    window.location.href = 'cart.html';
};

window.toggleQvWishlist = function (productId) {
    toggleWishlist(productId);
    const isWishlisted = state.wishlist.includes(productId);
    const heartSvg = document.getElementById('qvFavHeartSvg');
    const text = document.getElementById('qvFavText');
    if (heartSvg) {
        heartSvg.setAttribute('fill', isWishlisted ? '#E50010' : 'none');
        heartSvg.setAttribute('stroke', isWishlisted ? '#E50010' : '#111');
    }
    if (text) text.textContent = isWishlisted ? 'SAVED IN FAVORITES' : 'ADD TO FAVORITES';
};

// ==========================================================================
// 12. GLOBAL ACTIONS & HELPERS
// ==========================================================================
window.addToBagDirect = function (productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const existing = state.cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        state.cart.push({
            id: product.id,
            size: product.sizes ? product.sizes[0] : 'M',
            color: product.colors ? product.colors[0] : 'Standard',
            quantity: 1,
            product
        });
    }

    localStorage.setItem('cosmo_cart', JSON.stringify(state.cart));
    updateBadges();
    renderCartPage();
    showToast(`Added ${product.name} to shopping bag`);
};

window.toggleWishlist = function (productId) {
    const idx = state.wishlist.indexOf(productId);
    if (idx > -1) {
        state.wishlist.splice(idx, 1);
        showToast('Removed from favorites');
    } else {
        state.wishlist.push(productId);
        showToast('Saved to your favorites');
    }

    localStorage.setItem('cosmo_wishlist', JSON.stringify(state.wishlist));
    updateBadges();
    renderCatalog();
    renderWishlistDrawer();
};

window.removeFromBag = function (productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    localStorage.setItem('cosmo_cart', JSON.stringify(state.cart));
    updateBadges();
    renderCartPage();
    showToast('Item removed from shopping bag');
};

function renderWishlistDrawer() {
    const container = document.getElementById('wishlistItemsList');
    if (!container) return;

    const favs = productsData.filter(p => state.wishlist.includes(p.id));
    if (favs.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding: 40px; color: #767676; font-size: 0.85rem;">No favorites saved yet. Browse items and click the heart icon!</div>`;
        return;
    }

    container.innerHTML = favs.map(prod => `
        <div class="bag-item-card">
            <img src="${prod.imageFront}" alt="${prod.name}" class="bag-item-img" onclick="openQuickViewModal(${prod.id})" style="cursor:pointer;" onerror="this.src='images/middle-banner.jpg'">
            <div class="bag-item-info">
                <div>
                    <div class="bag-item-title" onclick="openQuickViewModal(${prod.id})" style="cursor:pointer;">${prod.name}</div>
                    <div class="bag-item-price">Rs. ${prod.price.toLocaleString('en-IN')}.00</div>
                </div>
                <div style="display: flex; gap: 8px; margin-top: 8px;">
                    <button class="quick-action-btn" onclick="addToBagDirect(${prod.id}); toggleWishlist(${prod.id});" style="font-size:0.75rem; padding: 6px 12px; background:#222; color:#fff; cursor:pointer;">MOVE TO BAG</button>
                    <button class="quick-action-btn" onclick="toggleWishlist(${prod.id});" style="font-size:0.75rem; padding: 6px 10px; background:#f0f0f0; color:#333; cursor:pointer;">✕</button>
                </div>
            </div>
        </div>
    `).join('');
}

function updateBadges() {
    const bagBadge = document.getElementById('bagBadge');
    const wishlistBadge = document.getElementById('wishlistBadge');
    const mobileBagBadge = document.getElementById('mobileBagBadge');
    const mobileFavBadge = document.getElementById('mobileFavBadge');
    const mobileFavCount = document.getElementById('mobileFavCount');

    const totalQty = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    if (bagBadge) bagBadge.textContent = totalQty;
    if (mobileBagBadge) mobileBagBadge.textContent = totalQty;
    if (wishlistBadge) wishlistBadge.textContent = state.wishlist.length;
    if (mobileFavBadge) mobileFavBadge.textContent = state.wishlist.length;
    if (mobileFavCount) mobileFavCount.textContent = state.wishlist.length;
}

function showToast(message) {
    const toast = document.getElementById('hmToast');
    const msgEl = document.getElementById('toastMsg');
    if (toast && msgEl) {
        msgEl.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2800);
    }
}

function initNewsletterForms() {
    // Delegated submission for modular/dynamically loaded footer newsletter form
    document.addEventListener('submit', (e) => {
        const form = e.target.closest('#footerNewsletterForm');
        if (form) {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput && emailInput.value.trim()) {
                showToast('Thank you for subscribing to the COSMO newsletter!');
                emailInput.value = '';
            }
        }
    });
}
