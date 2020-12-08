# Discord Emojis API

A Discord Emojis API for mainland China users.

It could be used by auto programs, eg. QQ bot

## Deploy yourself

您的使用会消耗作者的流量，您可以自己**免费**部署一个API。点击下面的按钮即可。

Your usage will consume the author's traffic. You can deploy an API yourself (for free). Just click the link below.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/Dragon-Fish/discord-emojis-api)

## Usage

### Get Emoji

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

## Example

https://discord-emoji.vercel.app/api/get?id=694547549087858729
