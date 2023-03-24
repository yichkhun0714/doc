---
title: Swift - 错误处理
---
## 错误类型与抛出
Swift中的错误表示为遵循`Error`协议的类型。可以使用`throw`关键字抛出错误。
```swift
enum ValidationError: Error {
    case invalidEmail
    case invalidPassword
}

func validate(email: String, password: String) throws {
    if email.isEmpty {
        throw ValidationError.invalidEmail
    }
    if password.count < 8 {
        throw ValidationError.invalidPassword
    }
}
```
## 错误捕获与处理
我们可以使用`do-catch`语句捕获和处理错误。
```swift
do {
    try validate(email: "test@example.com", password: "123")
} catch ValidationError.invalidEmail {
    print("无效的电子邮件")
} catch ValidationError.invalidPassword {
    print("无效的密码")
} catch {
    print("未知错误")
}
```
## 可选型与错误
我们可以使用`try?`将错误转换为可选值。
```swift
let validationResult = try? validate(email: "test@example.com", password: "123")

if validationResult == nil {
    print("验证失败")
} else {
    print("验证成功")
}
```