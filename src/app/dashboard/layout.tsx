'use client'

import { AuthProvider } from '@/components/auth/AuthProvider'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { DashboardNav } from '@/components/dashboard/DashboardNav'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50">
          <DashboardNav />
          <main className="p-6">
            {children}
          </main>
        </div>
      </ProtectedRoute>
    </AuthProvider>
  )
} 