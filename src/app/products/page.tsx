// src/app/products/page.tsx

import { getProducts } from "../libs/data";
import ProductGallery from "@/app/components/product-gallery";

export default function ProductsPage() {
    const allProducts = getProducts();

    return (
        <div className="container mx-auto px-4 py-20 md:py-24">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tighter">Our Collection</h1>
                <p className="mt-2 text-gray-600">
                    Browse through our curated selection of handmade accessories.
                </p>
            </div>
            <ProductGallery products={allProducts} />
        </div>
    );
}
