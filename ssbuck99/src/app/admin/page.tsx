import { auth } from '@/auth'
import AdminContent from '@/components/admin/admin-content'
import { redirect } from 'next/navigation'

export default async function AdminPage() {
  const session = await auth()

  if (!session?.user || session.user.role !== 'admin') {
    redirect('/')
  }

  return <AdminContent />
}
