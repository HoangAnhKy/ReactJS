- Muốn dùng `ts` thì phải conver về `js` bằng cách dùng lệnh `tsc file.ts` hoặc `ts-node file.ts` để chạy ngay lập tức.
- `TS` cú pháp khá là giống `js` chỉ có khác một số thành phần như sau

- Muốn tạo project `TS` thì dùng lệnh sau, tham khảo tại [link](https://create-react-app.dev/docs/adding-typescript)

```sh
npx create-react-app my-app --template typescript
```

# Khác về khai báo biến

## TS khai báo thêm cả kiểu dữ liệu, mặc định nó sẽ tự lấy theo kiểu giữ liệu nhập vào

```ts
let Name: string = "John"; // c1
let Name2 = "John"; // c2
```

## TS có thể khai báo `type` hoặc `interface` cho đối tượng

```ts
type dev = {
  name: string;
  age: number;
};
// or
interface dev {
  name: string;
  age: number;
}

let user: dev = {
  // chỉ có thể sử dụng đúng đối tượng trong khai báo.
};
```

## Khai báo mảng

```ts
type dev = {
  name: string;
  age: number;
};
// or
interface dev {
  name: string;
  age: number;
}

let arr: Array<dev> = [];

let user: dev = {
  // chỉ có thể sử dụng đúng đối tượng trong khai báo.
};
arr.push(user);
```

## gán nhiều giá trị

```ts
type dev = {
  name: string;
  age: number | string;
};
```

# Enum

- Khai báo như bình thường số thứ tự mặc định là 0 và tăng dần lên, cứ `set số đằng trước là số sau +1`

```ts
enum Status {
  open,
  closed = 2, // +1
}

console.log(Status.open); // 0
console.log(Status.closed); // 2
```
