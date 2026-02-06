# 儿童英语乐园（Vite + React）

一个面向 **6岁中国男孩英语启蒙** 的网页应用，包含：

- 首页大按钮导航（词汇 / 自然拼读 / 句子 / 小游戏 / 家长区）
- 词汇主题卡片（动物、食物、交通、家庭、颜色、数字）
- 自然拼读小关卡（听音选字母 + 跟读）
- 每日5句（中英切换 + 跟读提示）
- 本地学习进度统计（学习次数、掌握词汇、连续学习天数）

## 1. 运行项目

```bash
npm install
npm run dev
```

打开浏览器访问终端提示的地址（默认 `http://localhost:5173`）。

生产构建：

```bash
npm run build
npm run preview
```

## 2. 项目结构

```text
src/
  components/    # 可复用组件（导航、词汇卡片、进度面板等）
  data/          # 本地JSON内容
  pages/         # 页面级模块
  utils/         # 工具函数（语音、进度、localStorage）
```

## 3. 如何添加/修改词汇内容

编辑文件：`src/data/vocabulary.json`

数据结构示例：

```json
{
  "animals": {
    "label": "动物",
    "emoji": "🐼",
    "items": [
      {
        "id": "cat",
        "word": "cat",
        "chinese": "猫",
        "sentenceEn": "The cat is sleeping.",
        "sentenceZh": "这只猫在睡觉。",
        "emoji": "🐱"
      }
    ]
  }
}
```

说明：
- `id`：必须唯一，用于学习进度统计。
- `word`：英文单词。
- `chinese`：中文释义。
- `sentenceEn` / `sentenceZh`：例句中英文。
- `emoji`：卡片图标，建议保留，幼儿更易识别。

## 4. 其它内容文件

- `src/data/phonics.json`：自然拼读关卡数据（元音 + 字母组合）
- `src/data/sentences.json`：每日句子内容

## 5. 进度存储

学习进度保存在浏览器 `localStorage` 中，key 为：

- `kid-english-progress`

清空浏览器缓存后进度会重置。
