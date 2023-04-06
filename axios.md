# Cài đặt và sử dụng axios

```sh
 npm install axios
```

## Cách sử dụng axios

-   Khai báo thư viện xử dụng

```js
import axios from 'axios';
```

-   sau khi khai báo chúng ta có thể sự dụng thư viện cú pháp giống như fetch thậm chí dễ hiểu hơn fetch

vd: lấy dữ liệu

```js
import axios from 'axios';

axios
    .get('/user?ID=12345')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
```

=> với cú pháp trên chúng ta có thể lấy được data giống hệt fetch. Nhưng cú pháp sau còn dễ hiểu hơn đó là sử dụng params như sau:

```js
axios
    .get('/user', {
        params: {
            ID: 12345,
        },
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
```

hoặc có thể sử dụng bất đồng bộ như sau

```js
async function getUser() {
    try {
        const response = await axios.get('/user?ID=12345');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
```

nên gọi theo kiểu api

```js
// get
axios({
    method: 'get',
    url: 'https://bit.ly/2mTM3nY',
    responseType: 'js',
}).then(function (response) {
    console.log(response.data);
});

// post

axios({
  method: 'post',
  url: '/user/12345',
  data: {
    lastName: 'Lý'
    firstName: 'Thường Kiệt',
  }
});
```

# sử dụng API endpoint (điểm cuối truy cập)

-   Tạo 1 thư mục ở src vd như `utils/http.js` sau đó khai báo như sau. Sử dụng axios.create để khởi tạo sau đó muốn sử dụng thì chúng ta chỉ việc import file này thay vì import axios.

```js
// https.js
import axios from 'axios';

const request = axios.create({
    baseUrl: 'http://localhost:3001/',
});

/*
 * khởi tạo method get data bằng ansyc await
 * @path chính là đường dẫn api
 * @options chính là parameter
 * @return data của api
 */
export const get = async (path, options = {}) => {
    const resp = await request.get(path, options);
    return resp.data;
};

// khai báo nó ra để tái sử dụng cho dễ
export default request;
```
