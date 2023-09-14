import ArmChair from "@/assets/images/armchair.jpg";
import ArmChair2 from "@/assets/images/armchair2.jpg";
import Chair from "@/assets/images/chair.jpg";
import Chair2 from "@/assets/images/chair2.jpg";
import Chair3 from "@/assets/images/chair3.jpg";
import Chair4 from "@/assets/images/chair4.jpg";
import Chair5 from "@/assets/images/chair5.jpg";
import Couch from "@/assets/images/couch.jpg";
import Couch2 from "@/assets/images/couch2.jpg";
import Couch3 from "@/assets/images/couch3.jpg";
import Couch4 from "@/assets/images/couch4.jpg";
import Table from "@/assets/images/table.jpg";
import Convenient from "@/assets/images/convenient.jpg";

export type CategoriesType =
    | "Chairs"
    | "Leather"
    | "Plastic"
    | "Wood"
    | "Metal"
    | "Cloth"
    | "Marble"
    | "Storage"
    | "Couch"
    | "Tables";

export type ProductType = {
    category: Array<CategoriesType>;
    dimensions: string;
    id: number;
    image: string;
    longDescription: string;
    name: string;
    price: number;
    rating: number;
    shortDescription: string;
    stock: number;
};

export const products: Array<ProductType> = [
    {
        id: 1,
        name: "Armchair",
        image: ArmChair, 
        price: 199.99,
        rating: 4.2,
        stock: 20,
        shortDescription: "Comfortable armchair for relaxation.",
        longDescription: "This comfortable armchair is designed for ultimate relaxation. It features plush cushioning and a sturdy wooden frame. The upholstery is made from high-quality fabric for durability and style.",
        dimensions: "32\"H x 28\"W x 30\"D",
        category: [ "Chairs", "Leather" ]
    },
    {
        id: 2,
        name: "Armchair 2",
        image: ArmChair2, 
        price: 219.99,
        rating: 4.5,
        stock: 15,
        shortDescription: "Modern armchair with a sleek design.",
        longDescription: "Upgrade your living space with this modern armchair. Its sleek design and sturdy metal frame make it a stylish addition to any room. The upholstery is made from premium leather for a luxurious touch.",
        dimensions: "34\"H x 29\"W x 32\"D",
        category: [ "Chairs", "Leather" ]
    },
    {
        id: 3,
        name: "Chair",
        image: Chair, 
        price: 79.99,
        rating: 3.8,
        stock: 30,
        shortDescription: "Classic wooden chair for various settings.",
        longDescription: "A versatile wooden chair that fits well in dining rooms, kitchens, or as an accent chair in the living room. The chair is constructed from solid oak wood for lasting durability.",
        dimensions: "36\"H x 18\"W x 20\"D",
        category: [ "Chairs", "Leather", "Plastic", "Wood" ]
    },
    {
        id: 4,
        name: "Chair 2",
        image: Chair2, 
        price: 99.99,
        rating: 4.0,
        stock: 25,
        shortDescription: "Ergonomic chair for comfortable work sessions.",
        longDescription: "A comfortable and ergonomic chair designed for long hours of work. Features adjustable settings for a personalized fit. The chair is upholstered in high-quality fabric.",
        dimensions: "40\"H x 25\"W x 24\"D",
        category: [ "Chairs", "Metal", "Wood" ]
    },
    {
        id: 5,
        name: "Chair 3",
        image: Chair3, 
        price: 69.99,
        rating: 4.1,
        stock: 18,
        shortDescription: "Compact and stylish chair for small spaces.",
        longDescription: "This compact chair is perfect for apartments or small rooms. Its stylish design adds a touch of elegance to any space. The chair is constructed from sustainable wood.",
        dimensions: "32\"H x 22\"W x 20\"D",
        category: [ "Chairs", "Wood" ]
    },
    {
        id: 6,
        name: "Chair 4",
        image: Chair4, 
        price: 109.99,
        rating: 4.3,
        stock: 12,
        shortDescription: "Modern dining chair with cushioned seats.",
        longDescription: "Upgrade your dining area with these modern dining chairs. The cushioned seats provide extra comfort during meals. The chairs are made from metal and faux leather.",
        dimensions: "36\"H x 20\"W x 23\"D",
        category: [ "Chairs", "Cloth" ]
    },
    {
        id: 7,
        name: "Chair 5",
        image: Chair5, 
        price: 89.99,
        rating: 4.0,
        stock: 22,
        shortDescription: "Classic wooden chair with a timeless design.",
        longDescription: "A classic wooden chair that never goes out of style. Sturdy construction and a timeless design make it a reliable choice. The chair is crafted from sustainable hardwood.",
        dimensions: "34\"H x 19\"W x 21\"D",
        category: [ "Chairs", "Metal" ]
    },
    {
        id: 8,
        name: "Convenient",
        image: Convenient,
        price: 129.99,
        rating: 4.4,
        stock: 8,
        shortDescription: "Convenient storage solution for your home.",
        longDescription: "This convenient storage unit helps you keep your home organized. It's perfect for storing books, toys, or other items. The unit is made from engineered wood.",
        dimensions: "48\"H x 24\"W x 12\"D",
        category: [ "Marble", "Storage", "Wood" ]
    },
    {
        id: 9,
        name: "Couch",
        image: Couch,
        price: 499.99,
        rating: 4.6,
        stock: 10,
        shortDescription: "Spacious and comfortable couch for your living room.",
        longDescription: "Upgrade your living room with this spacious and comfortable couch. It's perfect for lounging, entertaining, or watching your favorite movies. The couch features a hardwood frame and plush fabric upholstery.",
        dimensions: "86\"L x 36\"H x 38\"D",
        category: [ "Cloth", "Couch", "Wood" ]
    },
    {
        id: 10,
        name: "Couch 2",
        image: Couch2,
        price: 549.99,
        rating: 4.7,
        stock: 7,
        shortDescription: "Modern sectional couch with adjustable features.",
        longDescription: "This modern sectional couch allows you to customize your seating arrangement. It's perfect for creating a contemporary and flexible living space. The couch is upholstered in high-quality fabric.",
        dimensions: "112\"L x 34\"H x 82\"D",
        category: [ "Cloth", "Couch", "Wood" ]
    },
    {
        id: 11,
        name: "Couch 3",
        image: Couch3,
        price: 459.99,
        rating: 4.5,
        stock: 9,
        shortDescription: "Compact couch for small apartments.",
        longDescription: "A compact couch designed for small apartments or cozy living spaces. Its stylish design adds a touch of elegance to any room. The couch features a durable wooden frame and soft fabric upholstery.",
        dimensions: "72\"L x 32\"H x 32\"D",
        category: [ "Couch", "Leather", "Wood" ]
    },
    {
        id: 12,
        name: "Couch 4",
        image: Couch4,
        price: 599.99,
        rating: 4.8,
        stock: 6,
        shortDescription: "Luxurious leather couch for ultimate comfort.",
        longDescription: "Indulge in luxury with this leather couch. It offers ultimate comfort and style for your living room. Perfect for relaxation and entertainment. The couch is upholstered in genuine leather.",
        dimensions: "88\"L x 38\"H x 40\"D",
        category: [ "Couch", "Leather", "Wood" ]
    },
    {
        id: 13,
        name: "Table",
        image: Table,
        price: 149.99,
        rating: 4.2,
        stock: 20,
        shortDescription: "Stylish wooden table for your dining area.",
        longDescription: "Add a touch of elegance to your dining area with this stylish wooden table. It's perfect for family dinners and gatherings. The table is crafted from solid wood.",
        dimensions: "72\"L x 30\"H x 36\"W",
        category: [ "Tables", "Wood"]
    }
];