import React from 'react'

const Privacy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-4">Chính Sách Bảo Mật</h1>
      <p className="mb-4">
        Chào mừng bạn đến với Ứng Dụng Chọn Ảnh. Sự riêng tư của bạn rất quan
        trọng đối với chúng tôi, và chúng tôi cam kết bảo vệ thông tin mà bạn
        chia sẻ.
      </p>

      <h2 className="text-2xl font-semibold mt-6">
        1. Thông Tin Chúng Tôi Thu Thập
      </h2>
      <ul className="list-disc list-inside mt-2">
        <li>
          <strong>Thông Tin Cá Nhân:</strong> Họ tên, email, ảnh đại diện (qua
          xác thực Google).
        </li>
        <li>
          <strong>Hình Ảnh Đã Tải Lên:</strong> Ảnh do nhiếp ảnh gia tải lên và
          người dùng chọn.
        </li>
        <li>
          <strong>Dữ Liệu Sử Dụng:</strong> Thông tin về cách bạn tương tác với
          nền tảng của chúng tôi.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">
        2. Cách Chúng Tôi Sử Dụng Thông Tin
      </h2>
      <p className="mt-2">
        Chúng tôi sử dụng thông tin của bạn để cung cấp và cải thiện dịch vụ,
        gửi thông báo cập nhật và đảm bảo bảo mật.
      </p>

      <h2 className="text-2xl font-semibold mt-6">
        3. Chia Sẻ và Bảo Mật Dữ Liệu
      </h2>
      <p className="mt-2">
        Chúng tôi không bán hoặc chia sẻ dữ liệu của bạn. Chúng tôi áp dụng các
        biện pháp bảo mật để bảo vệ thông tin của bạn.
      </p>

      <h2 className="text-2xl font-semibold mt-6">4. Dịch Vụ Bên Thứ Ba</h2>
      <p className="mt-2">
        Chúng tôi sử dụng dịch vụ xác thực Google, tuân theo Chính Sách Bảo Mật
        của Google.
      </p>

      <h2 className="text-2xl font-semibold mt-6">5. Quyền Lợi Của Bạn</h2>
      <ul className="list-disc list-inside mt-2">
        <li>Truy cập, cập nhật hoặc xóa thông tin cá nhân của bạn.</li>
        <li>Rút lại sự đồng ý xử lý dữ liệu.</li>
        <li>
          Liên hệ với chúng tôi nếu có bất kỳ thắc mắc nào về quyền riêng tư.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">6. Thay Đổi Chính Sách</h2>
      <p className="mt-2">
        Chúng tôi có thể cập nhật Chính Sách Bảo Mật này. Mọi thay đổi sẽ được
        đăng tại đây.
      </p>

      <h2 className="text-2xl font-semibold mt-6">7. Liên Hệ</h2>
      <p className="mt-2">
        Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi qua email:{' '}
        <a href="mailto:huuhieu1711@gmail.com" className="text-blue-500">
          huuhieu1711@gmail.com
        </a>
      </p>
    </div>
  );
}

export default Privacy