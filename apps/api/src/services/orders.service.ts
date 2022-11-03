import boom from '@hapi/boom';
import { OrderItem } from '../db/models/order-item.model';
import { Order } from '../db/models/order.model';

type CreateOrderDTO = {
  customerId: number;
};

type UpdateOrderDTO = Partial<CreateOrderDTO>;

type AddOrderItemDTO = {
  orderId: number;
  productId: number;
  quantity: number;
};

class OrdersService {
  create(data: CreateOrderDTO) {
    return Order.create(data);
  }

  find() {
    return Order.findAll();
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

  async update(id: number, data: UpdateOrderDTO) {
    const order = await Order.findByPk(id);
    if (!order) throw boom.notFound(`Order with id ${id} not found`);
    return order.update(data);
  }

  async delete(id: number) {
    const order = await Order.findByPk(id);
    if (!order) throw boom.notFound(`Order with id ${id} not found`);
    await order.destroy();
    return id;
  }
}

export default OrdersService;
