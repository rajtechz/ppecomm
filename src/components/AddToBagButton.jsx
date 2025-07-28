import React from 'react';

const AddToBagButton = ({
    onClick,
    disabled = false,
    loading = false,
    className = "",
    children = "Add to Bag",
    fullWidth = true
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={`
        ${fullWidth ? 'w-full' : ''} 
        py-3 px-4 
        rounded-md 
        font-semibold 
        text-white 
        transition-all 
        duration-200 
        ${disabled || loading
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-black hover:bg-gray-900 active:bg-gray-800 cursor-pointer"
                }
        ${className}
      `}
        >
            {loading ? (
                <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Adding...</span>
                </div>
            ) : (
                children
            )}
        </button>
    );
};

export default AddToBagButton; 