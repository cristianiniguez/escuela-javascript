import boom from '@hapi/boom';
import { Attributes, FindOptions } from 'sequelize';
import { Product } from '../db/models/product.model';

type CreateProductDTO = {
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: number;
};

type UpdateProductDTO = Partial<CreateProductDTO>;

export type QueryProductsDTO = {
  limit?: number;
  offset?: number;
};

class ProductsService {
  create(data: CreateProductDTO) {
    return Product.create(data);
  }

  find(query: QueryProductsDTO) {
    const findOptions: FindOptions<Attributes<Product>> = { include: ['category'] };
    const { limit, offset } = query;
    if (limit) findOptions.limit = limit;
    if (offset) findOptions.offset = offset;
    return Product.findAll(findOptions);
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
