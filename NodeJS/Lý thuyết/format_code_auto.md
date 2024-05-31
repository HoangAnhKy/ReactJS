[Prettier](#prettier)

[Lint-staged](#lint-staged)

[Husky](#husky)

# Prettier

- Dùng để format code

- Lệnh cài đặt

```sh
    npm install prettier
```

- Cách dùng tham khảo các [options](https://prettier.io/docs/en/options)

- dùng trong package
```sh
    // ...
            "format_code": "prettier --print-width 100 --tab-width 4 --trailing-comma --single-quote --bracket-same-line all --write 'src/**/*.{js,json,scss}'",
            // 'src/**/*.{js,json,scss}' trong mục src/lấy toàn bộ trong folder/*.{các file này}
    // ...
```
# Lint-staged

- Dùng để chạy dòng lệnh khi được add vào git, khi mà nó được đưa vào stage (git add .)

- Tham khảo [repo](https://github.com/lint-staged/lint-staged)

- Lệnh cài đặt

```sh
    npm install lint-staged
```


- dùng trong package
```sh
    #...
        {
        "lint-staged": {
                "*": "your-cmd"
                # example "src/**/*.{js,json,scss}" : "prettier --print-width 100 --tab-width 4 --trailing-comma --single-quote --bracket-same-line all --write"
            }
        }
    #...
```

# Husky

- Thêm hành động vô các evens commit, pull, push, ... của Git

- Tham khảo [web](https://typicode.github.io/husky/migrate-from-v4.html)

- Lệnh cài đặt

```sh
    npm install husky
```
