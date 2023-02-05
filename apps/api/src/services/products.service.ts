import boom from '@hapi/boom';
import { FindOptions, InferAttributes, Op, WhereAttributeHashValue } from 'sequelize';
import { Product } from '../db/models/product.model';

export type CreateProductDTO = {
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: number;
};

export type UpdateProductDTO = Partial<CreateProductDTO>;

export type QueryProductsDTO = {
  limit?: number;
  offset?: number;
  price?: number;
  minPrice?: number;
  maxPrice?: number;
};

class ProductsService {
  create(data: CreateProductDTO) {
    return Product.create(data);
  }

  find(query: QueryProductsDTO) {
    const { limit, offset, price, minPrice, maxPrice } = query;

    const findOptions: FindOptions<InferAttributes<Product, { omit: never }>> = {
      include: ['category'],
    };

    if (limit) findOptions.limit = limit;
    if (offset) findOptions.offset = offset;

    if (price || minPrice || maxPrice) {
      const priceFilter: WhereAttributeHashValue<number> = {
        ...(price ? { [Op.eq]: price } : {}),
        ...(minPrice ? { [Op.gte]: minPrice } : {}),
        ...(maxPrice ? { [Op.lte]: maxPrice } : {}),
      };
      findOptions.where = {};
      findOptions.where.price = priceFilter;
    }

    return Product.findAll(findOptions);
  }

  findByCategory(categoryId: number) {
    return Product.findAll({ where: { categoryId } });
  }

  async findOne(id: number) {
    const product = await Product.findByPk(id);
    if (!product) throw boom.notFound(`Product with id ${id} not found`);
    return product;
  }

  async update(id: number, data: UpdateProductDTO) {
    const product = await Product.findByPk(id);
    if (!product) throw boom.notFound(`Product with id ${id} not found`);
    return product.update(data);
  }

  async delete(id: number) {
    const product = await Product.findByPk(id);
    if (!product) throw boom.notFound(`Product with id ${id} not found`);
    await product.destroy();
    return id;
  }
}

export default ProductsService;
