# Supabase 设置详细清单

## 当前状态检查

### ✅ 已完成
- [x] Next.js 项目已创建
- [x] 所有 UI 组件已实现
- [x] SQL 脚本已准备好
- [x] .env.local 模板已创建

### 📋 待完成（需要用户操作）

#### 步骤 1: 创建 Supabase 账户和项目
```
1. 访问 https://supabase.com
2. 点击 "Start your project"
3. 使用 GitHub 账号或邮箱注册
4. 创建新项目：
   - 名称: secret-santa（或其他名字）
   - 数据库密码: [设置强密码并保存]
   - 区域: [选择离你最近的]
5. 等待 1-2 分钟创建完成
```

#### 步骤 2: 运行 SQL 设置脚本
```
位置: Supabase Dashboard > SQL Editor

操作:
1. 点击左侧菜单的 "SQL Editor"
2. 点击 "+ New query"
3. 复制 supabase-setup.sql 的全部内容
4. 粘贴到编辑器
5. 点击右下角 "Run" 按钮
6. 等待看到 "Success. No rows returned"
```

#### 步骤 3: 验证表创建成功
```
位置: Supabase Dashboard > Table Editor

检查列表:
- [ ] events 表存在
- [ ] participants 表存在
- [ ] restrictions 表存在
- [ ] assignments 表存在

每个表应该显示列结构，当前 0 行数据
```

#### 步骤 4: 获取 API 凭据
```
位置: Supabase Dashboard > Settings > API

需要复制的值:
1. Project URL (在 "Configuration" 部分)
   格式: https://abcdefghijk.supabase.co

2. anon public key (在 "Project API keys" 部分)
   格式: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   (非常长的字符串，确保复制完整！)
```

#### 步骤 5: 配置本地环境变量
```
文件: .env.local

操作:
1. 打开 .env.local 文件
2. 找到这两行：
   NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL_HERE
   NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY_HERE

3. 替换为你的真实凭据：
   NEXT_PUBLIC_SUPABASE_URL=https://你的项目ID.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbG...你的完整key

4. 保存文件
```

#### 步骤 6: 重启开发服务器
```
终端命令:
1. 按 Ctrl+C 停止当前服务器
2. 运行: bun run dev
3. 等待看到 "Ready in XXms"
4. 访问 http://localhost:3000
```

#### 步骤 7: 测试创建 Secret Santa
```
测试步骤:
1. 打开 http://localhost:3000
2. 添加至少 3 个参与者（例如: Alice, Bob, Charlie）
3. 点击 Continue
4. 选择是否跳过限制
5. 填写活动详情
6. 点击 Continue 生成
7. 应该看到成功消息和分享链接！

如果成功:
- [ ] 看到 "Event Created Successfully" 消息
- [ ] 生成了分享链接
- [ ] 可以复制链接
- [ ] 可以查看组织者视图

检查 Supabase:
- 打开 Supabase > Table Editor > events
- 应该能看到新创建的事件数据
```

## 常见问题

### Q: 找不到 Project URL 在哪里？
A: Settings > API > Configuration 部分，第一行就是

### Q: anon key 太长了，怎么确保复制完整？
A: 点击 key 右边的复制图标，它会自动复制完整的 key

### Q: 运行 SQL 后显示错误？
A:
1. 检查是否复制了完整的 SQL
2. 确保没有多余的字符
3. 尝试刷新页面后重新运行

### Q: 环境变量配置后不生效？
A:
1. 确保文件名是 `.env.local`（前面有点）
2. 确保没有多余的空格或引号
3. 必须重启开发服务器才能生效
4. 检查终端是否显示 "Environments: .env.local"

### Q: 创建 Secret Santa 时报错？
A:
1. 打开浏览器开发者工具 (F12)
2. 查看 Console 标签的错误信息
3. 常见原因：
   - Supabase URL 或 Key 不正确
   - 表没有创建成功
   - RLS 策略问题

## 下一步

设置成功后:
- [ ] 测试创建多个 Secret Santa 活动
- [ ] 测试参与者查看页面
- [ ] 测试组织者查看页面
- [ ] 准备部署到 Vercel

需要帮助？查看 README.md 或 SETUP_GUIDE.md
