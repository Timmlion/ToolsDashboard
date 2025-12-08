import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { useEffect, useState } from 'react';

type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
    message: string;
    type: ToastType;
    onClose: () => void;
}

export const Toast = ({ message, type, onClose }: ToastProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Small delay to allow entering animation
        const timer = setTimeout(() => setIsVisible(true), 10);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for exit animation
    };

    const icons = {
        success: <CheckCircle className="text-green-500" size={20} />,
        error: <AlertCircle className="text-red-500" size={20} />,
        info: <Info className="text-blue-500" size={20} />,
    };

    const borders = {
        success: 'border-green-500/20',
        error: 'border-red-500/20',
        info: 'border-blue-500/20',
    };

    return (
        <div
            className={`
        flex items-center gap-3 px-4 py-3 rounded-lg border bg-zinc-900/95 backdrop-blur-md shadow-xl min-w-[300px] max-w-sm
        transition-all duration-300 ease-in-out transform
        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        ${borders[type]}
      `}
        >
            {icons[type]}
            <p className="flex-1 text-sm text-zinc-100 font-medium">{message}</p>
            <button
                onClick={handleClose}
                className="p-1 hover:bg-zinc-800 rounded-md transition-colors text-zinc-400 hover:text-white"
            >
                <X size={16} />
            </button>
        </div>
    );
};
