import { faker } from '@faker-js/faker';

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

class ProductsService {
  private products: Product[] = [];

  constructor() {
    this.generate();
  }

  private generate() {
    this.products = Array(100)
      .fill(null)
      .map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl(),
      }));
  }

  create(data: Omit<Product, 'id'>) {
    const newProduct = { id: faker.datatype.uuid(), ...data };
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return this.products;
  }

  findOne(id: string) {
    return this.products.find((p) => p.id === id);
  }

  update(id: string, data: Partial<Omit<Product, 'id'>>) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) throw new Error(`Product with id ${id} not found`);

    const product = this.products[index];
    const updatedProduct = { ...product, ...data };
    this.products[index] = updatedProduct;
    return updatedProduct;
  }

  delete(id: string) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) throw new Error(`Product with id ${id} not found`);

    const [deletedProduct] = this.products.splice(index, 1);
    return deletedProduct;
  }
}

export default ProductsService;
