// src/components/ui/FileUpload.jsx
export default function FileUpload({ label, error, ...props }) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      <input
        {...props}
        type="file"
        className="
          w-full text-gray-700 dark:text-gray-200
          file:bg-blue-600 file:text-white file:px-4 file:py-2
          file:rounded-md file:border-none file:cursor-pointer
          mt-1
        "
      />

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
