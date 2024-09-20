# Tham lam

Thuật toán tham lam (Greedy Algorithm) là một phương pháp giải thuật mà trong đó, ở mỗi bước của quá trình tìm kiếm lời giải, ta luôn chọn lựa chọn tốt nhất theo tiêu chí cục bộ với hy vọng rằng sự lựa chọn này sẽ dẫn đến kết quả tối ưu toàn cục.

Đặc điểm của thuật toán tham lam:
- Lựa chọn tham lam: Tại mỗi bước, thuật toán chọn lựa phương án tốt nhất có sẵn mà không quan tâm đến ảnh hưởng của lựa chọn này trong tương lai.

- Không quay lui: Thuật toán không xem xét lại các lựa chọn trước đó, nó không quay lui hay sửa đổi khi đã đưa ra quyết định.

- Hiệu quả: Nếu bài toán có tính chất "tham lam" (tức là chọn lựa tối ưu cục bộ dẫn đến tối ưu toàn cục), thuật toán tham lam thường có thời gian chạy nhanh và đơn giản để triển khai.


# Quay lui

Quay lui (hay còn gọi là backtracking) là một kỹ thuật giải quyết bài toán bằng cách thử và loại bỏ các giải pháp không khả thi để tìm ra tất cả các giải pháp thỏa mãn yêu cầu của bài toán. Đây là một phương pháp tiếp cận có tính hệ thống và là một cách tiếp cận rất hiệu quả cho các bài toán mà ta cần duyệt qua tất cả các khả năng để tìm lời giải.

Cách hoạt động:
1) Bắt đầu từ một trạng thái ban đầu và thử thực hiện một bước (hoặc một hành động) nào đó.

2) Kiểm tra điều kiện: Nếu hành động này dẫn đến trạng thái hợp lệ, tiếp tục thực hiện bước tiếp theo. Nếu không hợp lệ, quay lui (tức là quay trở lại bước trước đó và thử một hành động khác).

3) Lặp lại quá trình này cho đến khi:
Đạt được một giải pháp hoàn chỉnh (thỏa mãn tất cả các yêu cầu của bài toán).
Hoặc không có bước nào khả thi từ trạng thái hiện tại (tức là phải quay lui về bước trước đó để thử một lựa chọn khác).

# Quy hoạch động (Dynamic Programming - DP) 

Quy hoạch động (Dynamic Programming - DP) là một kỹ thuật giải bài toán bằng cách chia nhỏ bài toán lớn thành các bài toán con nhỏ hơn, giải quyết từng bài toán con và lưu trữ kết quả của chúng để tránh tính toán lại.

Cách tiếp cận:
1) Chia nhỏ bài toán: Thay vì giải toàn bộ bài toán ngay từ đầu, ta chia bài toán lớn thành các bài toán con.

2) Lưu trữ kết quả: Sau khi giải quyết một bài toán con, ta lưu kết quả của nó (thường trong một mảng hoặc bảng) để sử dụng lại sau, tránh tính toán lại lần nữa.

3) Sử dụng lại kết quả: Khi cần tính một bài toán con đã được giải trước đó, chỉ cần truy cập kết quả đã lưu thay vì tính toán lại.