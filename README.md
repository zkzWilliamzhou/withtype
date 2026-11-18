# withtype

**Type inference and validation toolkit. Bridge dynamic and static typing worlds.**

## 描述

withtype 提供类型推断、验证和转换工具，帮助在动态类型和静态类型之间无缝桥接。

## 功能特性

- **类型推断**：从运行时值推断静态类型
- **运行时验证**：验证数据是否符合类型定义
- **类型转换**：在不同类型系统间转换
- **Schema生成**：从代码生成JSON Schema

## 安装

```bash
npm install withtype
# 或
pip install withtype
```

## 使用

```typescript
import { inferType, validate, toSchema } from 'withtype';

const data = { name: "test", count: 42, active: true };
const type = inferType(data);  // { name: string, count: number, active: boolean }
const valid = validate(data, type);  // true
const schema = toSchema(type);  // JSON Schema
```

## 许可证

MIT