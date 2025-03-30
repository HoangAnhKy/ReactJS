Tool quản lý [nvm](https://github.com/coreybutler/nvm-windows/releases);

# Lệnh cơ bản

- Đổi thư mục root

  ```sh
  nvm root C:\laragon\bin\nodejs
  ```

- Xem danh sách các phiên bản đã cài

  ```sh
  nvm list
  ```

- Xem các phiên bản Node.js có thể cài đặt

  ```sh
  nvm list available
  ```

- Cài đặt một phiên bản Node.js, nếu down bị lỗi thì tải thằng zip về để vô `nvm`

  ```sh
  nvm install 18  # Cài Node.js v18
  nvm install 20  # Cài Node.js v20
  ```

- Xóa một phiên bản Node.js

  ```sh
  nvm uninstall 16
  ```

- Chuyển đổi giữa các phiên bản Node.js

  ```sh
  nvm use 18  # Chuyển sang Node.js v18
  nvm use 20  # Chuyển sang Node.js v20
  ```

- Đặt mặc đinh

  ```sh
  nvm alias default 18
  ```
