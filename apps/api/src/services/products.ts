import { faker } from '@faker-js/faker';
import boom from '@hapi/boom';

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  isBlocked: boolean;
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
        isBlocked: faker.datatype.boolean(),
      }));
  }

  async create(data: Omit<Product, 'id'>) {
    const newProduct = { id: faker.datatype.uuid(), ...data };
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    });
  }

  async findOne(id: string) {
    const product = this.products.find((p) => p.id === id);
    if (!product) throw boom.notFound(`Product with id ${id} not found`);
    if (product.isBlocked) throw boom.conflict(`Product with id ${id} is blocked`);
    return product;
  }

  async update(id: string, data: Partial<Omit<Product, 'id'>>) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) throw boom.notFound(`Product with id ${id} not found`);

    const product = this.products[index];
    const updatedProduct = { ...product, ...data };
    this.products[index] = updatedProduct;
    return updatedProduct;
  }

  async delete(id: string) {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) throw boom.notFound(`Product with id ${id} not found`);

    const [deletedProduct] = this.products.splice(index, 1);
    return deletedProduct;
  }
}

export default ProductsService;
