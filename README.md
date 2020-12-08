# Discord Emojis API

A Discord Emojis API for mainland China users.

It could be used by auto programs, eg. QQ bot

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
