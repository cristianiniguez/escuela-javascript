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
  create() {}

  find() {
    return this.products;
  }

  findOne(id: string) {
    return this.products.find((p) => p.id === id);
  }

  update() {}

  delete() {}
}

export default ProductsService;
