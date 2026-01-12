import AdminBottomNav from "./AdminBottomNav";

export default function AdminLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-gray-50 pb-24 md:pb-0">
      
      {/* Header */}
      <div className="bg-white px-4 py-6 shadow-sm border-b">
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-bold text-green-800">
            {title}
          </h1>

          {subtitle && (
            <p className="text-sm text-gray-600 mt-1">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        {children}
      </div>

      {/* Mobile Nav */}
      <AdminBottomNav />
    </div>
  );
}
