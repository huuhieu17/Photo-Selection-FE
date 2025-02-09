import React from 'react';

const Terms = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-4">Điều Khoản Dịch Vụ</h1>
      <p className="mb-4">
        Chào mừng bạn đến với Ứng Dụng Chọn Ảnh. Khi sử dụng dịch vụ của chúng
        tôi, bạn đồng ý với các điều khoản sau đây.
      </p>

      <h2 className="text-2xl font-semibold mt-6">1. Chấp Nhận Điều Khoản</h2>
      <p className="mt-2">
        Bằng cách truy cập và sử dụng dịch vụ, bạn đồng ý tuân theo các điều
        khoản và chính sách của chúng tôi.
      </p>

      <h2 className="text-2xl font-semibold mt-6">2. Quyền Và Trách Nhiệm</h2>
      <ul className="list-disc list-inside mt-2">
        <li>
          Bạn chịu trách nhiệm về nội dung bạn tải lên và các hành vi của mình
          trên nền tảng.
        </li>
        <li>
          Không sử dụng dịch vụ cho các mục đích bất hợp pháp hoặc gây hại cho
          người khác.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">3. Bảo Vệ Dữ Liệu</h2>
      <p className="mt-2">
        Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn theo Chính Sách Bảo
        Mật.
      </p>

      <h2 className="text-2xl font-semibold mt-6">4. Tài Khoản Và Bảo Mật</h2>
      <ul className="list-disc list-inside mt-2">
        <li>
          Bạn phải bảo mật thông tin đăng nhập và không chia sẻ với người khác.
        </li>
        <li>
          Chúng tôi có quyền tạm ngưng hoặc hủy tài khoản vi phạm chính sách.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">5. Giới Hạn Trách Nhiệm</h2>
      <p className="mt-2">
        Chúng tôi không chịu trách nhiệm về bất kỳ tổn thất nào phát sinh từ
        việc sử dụng dịch vụ của bạn.
      </p>

      <h2 className="text-2xl font-semibold mt-6">6. Thay Đổi Điều Khoản</h2>
      <p className="mt-2">
        Chúng tôi có thể cập nhật điều khoản này. Bất kỳ thay đổi nào sẽ được
        thông báo trước.
      </p>

      <h2 className="text-2xl font-semibold mt-6">7. Liên Hệ</h2>
      <p className="mt-2">
        Nếu bạn có câu hỏi, vui lòng liên hệ qua email:{' '}
        <a href="mailto:huuhieu1711@gmail.com" className="text-blue-500">
          huuhieu1711@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Terms;
