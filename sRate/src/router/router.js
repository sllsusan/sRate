const rate = () => import('../views/Rate/rate');
export const routers = [
  // path: process.env.NODE_ENV === 'production' ? '/' : '/index.html',
  {
    path: '/',
    name: 'rate',
    component: rate,
  }
  ]
