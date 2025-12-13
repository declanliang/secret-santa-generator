# 🚀 Quick Setup Guide

跟随这些步骤在 5 分钟内设置好你的 Secret Santa Generator！

## ✅ 设置清单

### 1️⃣ 创建 Supabase 项目 (2 分钟)

- [ ] 访问 https://supabase.com 并登录
- [ ] 点击 "New Project"
- [ ] 填写项目信息：
  - 项目名称：`secret-santa`
  - 数据库密码：设置并保存
  - 区域：选择最近的
- [ ] 等待项目创建完成（1-2 分钟）

### 2️⃣ 运行 SQL 脚本 (1 分钟)

- [ ] 在 Supabase 点击左侧 **SQL Editor**
- [ ] 点击 **New Query**
- [ ] 打开本地文件 `supabase-setup.sql`
- [ ] 复制全部内容并粘贴到 SQL 编辑器
- [ ] 点击 **Run** ▶️
- [ ] 等待显示 "Success. No rows returned"

### 3️⃣ 验证表已创建 (30 秒)

- [ ] 点击左侧 **Table Editor**
- [ ] 确认看到 4 个表：
  - `events`
  - `participants`
  - `restrictions`
  - `assignments`

### 4️⃣ 获取 API 凭据 (1 分钟)

- [ ] 点击左侧 **Settings** (齿轮图标)
- [ ] 点击 **API**
- [ ] 复制以下两个值：
  - **Project URL**: `https://xxxxx.supabase.co`
  - **anon public key**: `eyJhbGci...` (很长的字符串)

### 5️⃣ 配置环境变量 (30 秒)

- [ ] 打开本地文件 `.env.local`
- [ ] 替换 `YOUR_SUPABASE_PROJECT_URL_HERE` 为你的 Project URL
- [ ] 替换 `YOUR_SUPABASE_ANON_KEY_HERE` 为你的 anon public key
- [ ] 保存文件

### 6️⃣ 重启开发服务器 (10 秒)

在终端运行：
```bash
# 停止当前服务器（Ctrl+C）
# 然后运行：
bun run dev
```

### 7️⃣ 测试！🎉

- [ ] 访问 http://localhost:3000
- [ ] 添加 3 个或更多参与者
- [ ] 点击 Continue 完成所有步骤
- [ ] 在最后一步，你应该会看到成功消息和分享链接！

---

## 🔧 故障排除

### 问题：看到 "Failed to create event"
**解决方案**：
1. 检查 `.env.local` 中的凭据是否正确
2. 确保 Supabase 表已创建
3. 在浏览器控制台查看错误详情

### 问题：SQL 脚本运行失败
**解决方案**：
1. 确保复制了完整的 SQL 脚本
2. 检查是否有语法错误
3. 尝试一个一个表单独创建

### 问题：环境变量不生效
**解决方案**：
1. 确保文件名是 `.env.local`（不是 `.env`）
2. 重启开发服务器
3. 清除浏览器缓存

---

## 📚 下一步

设置完成后，你可以：

1. **测试完整流程**：创建一个测试 Secret Santa 活动
2. **自定义主题**：修改颜色、添加更多圣诞装饰
3. **部署到 Vercel**：让其他人也能使用！

查看 `README.md` 获取更多信息。

祝你的 Secret Santa 活动顺利！🎅🎁
