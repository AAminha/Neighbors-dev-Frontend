import useAuthStore from '@/stores/authStore'
import { Navigate, Outlet } from 'react-router-dom'

export default function LoggedInRoute() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)

  if (!isLoggedIn) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}