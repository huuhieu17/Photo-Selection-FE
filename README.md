# Photo Selection App

## Giới Thiệu
Ứng dụng **Photo Selection App** giúp khách hàng lựa chọn ảnh sau khi thợ chụp ảnh đã tải lên. Khi khách hàng đặt lịch chụp ảnh, nhiếp ảnh gia sẽ upload toàn bộ ảnh lên một thư mục, và khách hàng có thể chọn những bức ảnh họ muốn chỉnh sửa.

## Tính Năng Chính
- **Tải ảnh lên**: Thợ chụp ảnh có thể tải lên tất cả ảnh của khách hàng vào một thư mục riêng.
- **Xem ảnh**: Khách hàng có thể xem toàn bộ ảnh từ album của mình.
- **Chọn ảnh để chỉnh sửa**: Khách hàng có thể chọn một hoặc nhiều ảnh để gửi yêu cầu chỉnh sửa.
- **Xem thông tin album**: Hiển thị thông tin như tên album, ngày tạo.
- **Hỗ trợ xem ảnh toàn màn hình**: Sử dụng thư viện `react-photo-view` để khách hàng có thể xem ảnh chi tiết.

## Công Nghệ Sử Dụng
- **Frontend**: React, TailwindCSS
- **Thư viện hỗ trợ**: `react-photo-view`, `react-router-dom`
- **Backend API**: Kết nối API để lấy danh sách ảnh từ thư mục của album.
- **Database**: Lưu thông tin album và ảnh trên hệ thống.

## Cách Cài Đặt và Chạy Dự Án
### 1. Cài đặt dependencies
```sh
npm install
```

### 2. Chạy ứng dụng
```sh
npm start
```
Ứng dụng sẽ chạy tại `http://localhost:3000`

## Hướng Dẫn Sử Dụng
### 1. Thợ Chụp Ảnh
- Đăng nhập vào hệ thống.
- Tải toàn bộ ảnh lên thư mục album va chia se.

### 2. Khách Hàng
- Truy cập được dẫn thợ share
- Xem ảnh đã được tải lên.
- Chọn những ảnh mong muốn chỉnh sửa.

## Đóng Góp
Nếu bạn muốn đóng góp cho dự án, vui lòng fork repo và tạo pull request.

## Liên Hệ
Nếu bạn có bất kỳ câu hỏi hoặc góp ý nào, vui lòng liên hệ qua email: **huuhieu1711@gmail.com**.

