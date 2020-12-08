# Discord Emojis API

为中国大陆用户获取 Discord 表情包设计的 API 接口，可以被类似 QQ 机器人的自动程序使用。

A Discord Emojis API for mainland China users. It could be used by auto programs, eg. QQ bot

## 个人部署 Deploy yourself

您的使用会消耗作者的流量，您可以自己**免费**部署一个API。点击下面的按钮即可。

Your usage will consume the author's traffic. You can deploy an API yourself (for free). Just click the link below.

### 导入项目 Import

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/Dragon-Fish/discord-emojis-api)

### 项目设置 Settings

- FRAMEWORK PRESET: Other
- INSTALL COMMAND, BUILD COMMAND: <blank>

## 使用方法 Usage

### 获取表情包 Get Emoji

```http
GET /api/get
```

Params:

- **id** `{Number}` Emoji ID

Return:

```http
Content-Type: image/png # Found
Content-Type: application/json # Not found
```

## 示例 Example

![Emoji 694547549087858729](https://discord-emoji.vercel.app/api/get?id=694547549087858729)

https://discord-emoji.vercel.app/api/get?id=694547549087858729
