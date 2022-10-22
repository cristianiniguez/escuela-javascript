import boom from '@hapi/boom';
import { Category } from '../db/models/category.model';

type CreateCategoryDTO = {
  name: string;
  image: string;
};

type UpdateCategoryDTO = Partial<CreateCategoryDTO>;

class CategoriesService {
  create(data: CreateCategoryDTO) {
    return Category.create(data);
  }

  find() {
    return Category.findAll();
  }

  async findOne(id: number) {
    const category = await Category.findByPk(id, { include: ['products'] });
    if (!category) throw boom.notFound(`Category with id ${id} not found`);
    return category;
  }

  async update(id: number, data: UpdateCategoryDTO) {
    const category = await Category.findByPk(id);
    if (!category) throw boom.notFound(`Category with id ${id} not found`);
    return category.update(data);
  }

  async delete(id: number) {
    const category = await Category.findByPk(id);
    if (!category) throw boom.notFound(`Category with id ${id} not found`);
    await category.destroy();
    return id;
  }
}

export default CategoriesService;