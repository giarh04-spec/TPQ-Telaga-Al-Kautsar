import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <div className="bg-gray-50 border-b border-gray-100 py-3">
      <div className="container mx-auto px-4">
        <nav className="flex items-center space-x-2 text-xs font-medium">
          <Link to="/" className="text-gray-400 hover:text-primary flex items-center">
            <Home size={14} className="mr-1" />
            <span>Home</span>
          </Link>
          
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');

            return (
              <div key={name} className="flex items-center space-x-2">
                <ChevronRight size={12} className="text-gray-300" />
                {isLast ? (
                  <span className="text-primary font-bold">{displayName}</span>
                ) : (
                  <Link to={routeTo} className="text-gray-400 hover:text-primary">
                    {displayName}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
