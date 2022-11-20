import boom from '@hapi/boom';
import { Customer } from '../db/models/customer.model';
import { OrderItem } from '../db/models/order-item.model';
import { Order } from '../db/models/order.model';

type AddOrderItemDTO = {
  orderId: number;
  productId: number;
  quantity: number;
};

class OrdersService {
  async create(userId: number) {
    const customer = await Customer.findOne({ where: { userId } });
    if (!customer) throw boom.notFound(`Customer with user id ${userId} not found`);
    return Order.create({ customerId: customer.id });
  }

  find() {
    return Order.findAll();
  }

  findByUser(userId: number) {
    return Order.findAll({
      include: [{ association: 'customer', include: ['user'] }],
      where: { '$customer.user.id$': userId },
    });
  }

  async findOne(id: number) {
    const order = await Order.findByPk(id, {
      include: [{ association: 'customer', include: ['user'] }, 'products'],
    });
    if (!order) throw boom.notFound(`Order with id ${id} not found`);
    return order;
  }

  addOrderItem(data: AddOrderItemDTO) {
    return OrderItem.create(data);
  }

  async delete(id: number) {
    const order = await Order.findByPk(id);
    if (!order) throw boom.notFound(`Order with id ${id} not found`);
    await order.destroy();
    return id;
  }
}

export default OrdersService;
