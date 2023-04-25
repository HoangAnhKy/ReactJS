n = 12
array = [i for i in range(1, n) if n % i == 0]

print(sum(array) > n)
