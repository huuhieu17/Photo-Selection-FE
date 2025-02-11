import { useState } from "react";
import { toast } from "react-toastify";

export default function CopyURLButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success('Sao chép đường dẫn thành công')
      setTimeout(() => setCopied(false), 2000); // Reset thông báo sau 2 giây
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
    >
      {copied ? "Đã sao chép!" : "Sao chép đường dẫn"}
    </button>
  );
}
