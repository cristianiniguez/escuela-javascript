import boom from '@hapi/boom';
import { Product } from '../db/models/product.model';

type CreateProductDTO = {
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: number;
};

type UpdateProductDTO = Partial<CreateProductDTO>;

class ProductsService {
  create(data: CreateProductDTO) {
    return Product.create(data);
  }

  find() {
    return Product.findAll({ include: ['category'] });
  }

  async findOne(id: string) {
    const product = await Product.findByPk(id);
    if (!product) throw boom.notFound(`Product with id ${id} not found`);
    return product;
  }

  async update(id: string, data: UpdateProductDTO) {
    const product = await Product.findByPk(id);
    if (!product) throw boom.notFound(`Product with id ${id} not found`);
    return product.update(data);
  }

  async delete(id: string) {
    const product = await Product.findByPk(id);
    if (!product) throw boom.notFound(`Product with id ${id} not found`);
    await product.destroy();
    return id;
  }
}

export default ProductsService;
