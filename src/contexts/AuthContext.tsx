
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

type User = {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Check for user in localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('expedia_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API call with setTimeout
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Simple validation - in a real app, this would be more secure
        if (email && password.length >= 6) {
          const userData: User = {
            id: Math.random().toString(36).substring(2, 15),
            email,
          };
          
          // Save to localStorage
          localStorage.setItem('expedia_user', JSON.stringify(userData));
          setUser(userData);
          
          toast({
            title: "Logged in successfully!",
            description: "Welcome to Expedia.",
          });
          
          navigate('/');
          resolve();
        } else {
          toast({
            title: "Login failed",
            description: "Invalid email or password",
            variant: "destructive",
          });
          reject(new Error("Invalid credentials"));
        }
        setIsLoading(false);
      }, 1000);
    });
  };

  const signup = async (email: string, password: string, firstName: string, lastName: string) => {
    setIsLoading(true);
    
    // Simulate API call with setTimeout
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Simple validation
        if (email && password.length >= 6 && firstName && lastName) {
          const userData: User = {
            id: Math.random().toString(36).substring(2, 15),
            email,
            firstName,
            lastName,
          };
          
          // Save to localStorage
          localStorage.setItem('expedia_user', JSON.stringify(userData));
          setUser(userData);
          
          toast({
            title: "Account created successfully!",
            description: "Welcome to Expedia.",
          });
          
          navigate('/');
          resolve();
        } else {
          toast({
            title: "Signup failed",
            description: "Please fill in all required fields correctly",
            variant: "destructive",
          });
          reject(new Error("Invalid information"));
        }
        setIsLoading(false);
      }, 1000);
    });
  };

  const logout = () => {
    localStorage.removeItem('expedia_user');
    setUser(null);
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
