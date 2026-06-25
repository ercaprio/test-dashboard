import { http, HttpResponse } from 'msw'
import ordersList from './data/orders-list.json'
import dashboardOrders from './data/dashboard-orders.json'

export const handlers = [

  http.get('/api/orders', ({ request }) => {
    const url = new URL(request.url)

    const forSearch = url.searchParams.get('forSearch') ?? ''
    const size = Number(url.searchParams.get('size')) || 10
    const page = Number(url.searchParams.get('pageable')) || 0

    let data = [...ordersList.data]

    if (forSearch) {
      const query = forSearch.toLowerCase()
      data = data.filter(order => {
        const fullName = `${order.traveler.firstName} ${order.traveler.lastName}`.toLowerCase()
        return fullName.includes(query)
      })
    }

    const start = page * size
    const items = data.slice(start, start + size)


    return HttpResponse.json({
      data: items,
      total: forSearch ? Math.ceil(data.length / size) : Math.ceil(ordersList.data.length / size),
      page,
      limit: size,
    })
  }),

  http.get('/api/dashboard/orders', () => {
    return HttpResponse.json(dashboardOrders)
  }),

]