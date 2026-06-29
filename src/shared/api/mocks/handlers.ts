import { http, HttpResponse } from 'msw'
import ordersList from './data/orders-list.json'
import dashboardOrders from './data/dashboard-orders.json'

const randomDelay = () =>
  new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 1500)))

export const handlers = [

  http.get('/api/orders', async({ request }) => {
    const url = new URL(request.url)

    const forSearch = url.searchParams.get('forSearch') ?? ''
    const size = Number(url.searchParams.get('size')) || 10
    const page = Number(url.searchParams.get('pageable')) || 0
    const sort = url.searchParams.get('sort') ?? 'desc'

    let data = [...ordersList.data]

    if (forSearch) {
      const query = forSearch.toLowerCase()
      data = data.filter(order => {
        const fullName = `${order.traveler.firstName} ${order.traveler.lastName}`.toLowerCase()
        return fullName.includes(query)
      })
    }

    data.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime()
      const dateB = new Date(b.createdAt).getTime()
      return sort === 'asc' ? dateA - dateB : dateB - dateA
    })

    const start = page * size
    const items = data.slice(start, start + size)

    await randomDelay();

    return HttpResponse.json({
      data: items,
      total: forSearch ? Math.ceil(data.length / size) : Math.ceil(ordersList.data.length / size),
      page,
      limit: size,
    })
  }),

  http.get('/api/dashboard/orders', () => {
    return  HttpResponse.json(dashboardOrders)
  }),

]