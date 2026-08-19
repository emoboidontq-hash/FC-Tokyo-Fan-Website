# FC东京 球队官网

## 项目说明
这是一个关于FC东京（FC東京）足球俱乐部的球迷自制网站，包含球队简介、阵容名单和球队荣誉三大板块。

## 文件结构
```
FC东京/
├── index.html      ← 主页面（用 VS Code 打开此文件）
├── style.css       ← 样式表
├── script.js       ← 交互逻辑（标签切换、球员弹窗等）
├── data.js         ← 球员、教练、荣誉等数据
├── README.md       ← 本说明文件
├── images/         ← 图片文件夹
│   ├── stadium-hero.jpg    ← 球场横幅图
│   └── team-formation.jpg  ← 阵型示意图
└── players/        ← 预留：球员个人图片文件夹
```

## 如何使用

### 方法一：VS Code + Live Server（推荐）
1. 用 VS Code 打开 `D:\Desktop\项目\FC东京` 文件夹
2. 在 VS Code 中安装 **Live Server** 插件（Extension ID: ritwickdey.LiveServer）
3. 右键点击 `index.html` → 选择 **"Open with Live Server"**
4. 浏览器会自动打开 `http://127.0.0.1:5500/index.html`

### 方法二：直接打开
直接双击 `index.html` 用浏览器打开即可（部分功能可能受文件协议限制）。

## 功能说明

### 1. 球队简介
- 俱乐部基本信息卡片（成立年份、主场、城市等）
- 球队阵型示意图
- 详细历史时间线（1935-2025）
- 主教练松橋力藏的详细信息（执教经历、球员时代等）
- 味之素体育场介绍

### 2. 阵容名单
- 按位置筛选（GK/DF/MF/FW/全部）
- 球员卡片显示号码、位置和2025赛季基本数据
- **点击任意球员卡片**可弹出详情窗口，包含：
  - 球员照片占位（球衣号码+姓名首字）
  - 详细信息（年龄、国籍、身高体重）
  - 球员简介
  - 2024和2025赛季数据对比表（出场、进球、助攻、G+A、出场时间）

### 3. 球队荣誉
- 荣誉统计概览（6个主要冠军等）
- 详细荣誉列表（J联赛杯×3、天皇杯×1、J2冠军×1、骏河银行锦标赛×1）
- 亚冠联赛参赛记录（2012/2016/2020）

## 如何修改数据

### 添加/修改球员
编辑 `data.js` 文件中的 `playersData` 数组，每个球员对象格式如下：
```javascript
{
    id: 10,              // 球员ID（唯一）
    number: 10,          // 球衣号码
    name: "佐藤 恵允",    // 日文名
    nameEn: "Kein SATO", // 英文名
    position: "FW",      // 位置：GK/DF/MF/FW
    age: 24,             // 年龄
    nationality: "日本",  // 国籍
    height: "175cm",     // 身高
    weight: "70kg",      // 体重
    bio: "球员简介文字...", // 简介
    stats: {
        2025: { apps: 34, goals: 7, assists: 5, cleanSheets: 0, minutes: 2049 },
        2024: { apps: 0, goals: 0, assists: 0, cleanSheets: 0, minutes: 0 }
    }
}
```

### 修改荣誉
编辑 `data.js` 文件中的 `honorsData` 数组。

### 替换图片
将球员真实照片放入 `players/` 文件夹，然后修改 `script.js` 中的 `showPlayerDetail` 函数，将占位头像替换为 `<img>` 标签。

## 颜色主题
- 主蓝色：#0046A8（FC东京标志蓝）
- 红色：#E60012（FC东京标志红）
- 深蓝：#002B6C
- 金色：#FFD700（点缀色）

## 数据来源
- FC东京官方网站 (fctokyo.co.jp)
- J联赛官网 (jleague.jp)
- FBRef.com（球员统计数据）
- Fotmob.com（球员统计数据）
- 维基百科

*本网站为球迷自制页面，仅供学习交流使用。*
