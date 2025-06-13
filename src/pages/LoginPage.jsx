
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '@/components/auth/LoginForm';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const LoginPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      switch (user.role) {
        case 'customer':
          navigate('/customer');
          break;
        case 'provider':
          navigate('/provider');
          break;
        case 'admin':
          navigate('/admin');
          break;
        default:
          navigate('/');
      }
    }
  }, [user, navigate]);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 py-12 px-4">
      <div className="container mx-auto mb-8">
        <Button 
          variant="ghost" 
          className="flex items-center text-homeigo-600" 
          onClick={() => navigate('/')}
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Button>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-homeigo-600">
              Home<span className="text-homeigo-500">igo</span>
            </h1>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-sm text-gray-600">
              Access all your home services in one place
            </p>
            <p className="mt-2 text-sm">
              Don't have an account? <a href="/register" className="text-homeigo-600 hover:text-homeigo-500">Register here</a>
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
