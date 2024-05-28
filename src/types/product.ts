export interface Category {
    id: number;
    name: string;
    image: string;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    images: string[];
}

export interface Order {
    id: string;
    date: string;
    products: Product[];
    totalProducts: number;
    totalPrice: number;
}

export interface ProductCreationRequest {
    title: string;
    price: number;
    description: string;
    categoryId: number;
    images: string[];
}

export interface ProductUpdateRequest {
    title?: string;
    price?: number;
}

export interface PaginationQuery {
    offset: number;
    limit: number;
}