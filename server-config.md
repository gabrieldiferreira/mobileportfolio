# Server Configuration for Cache Prevention

## Apache (.htaccess)
The `.htaccess` file has been created with aggressive cache prevention headers.

## Nginx Configuration
Add this to your nginx server block:

```nginx
# Disable all caching
location ~* \.(html|htm|css|js|jpg|jpeg|png|gif|svg|webp|woff|woff2|ttf|eot)$ {
    add_header Cache-Control "no-cache, no-store, must-revalidate, max-age=0, private";
    add_header Pragma "no-cache";
    add_header Expires "0";
    etag off;
    if_modified_since off;
}

# Specifically for HTML files
location ~* \.(html|htm)$ {
    add_header Cache-Control "no-cache, no-store, must-revalidate, max-age=0, private";
    add_header Pragma "no-cache";
    add_header Expires "0";
    etag off;
    if_modified_since off;
}
```

## Node.js/Express
```javascript
app.use((req, res, next) => {
  res.set({
    'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0, private',
    'Pragma': 'no-cache',
    'Expires': '0',
    'ETag': '',
    'Last-Modified': ''
  });
  next();
});
```

## PHP
```php
<?php
header("Cache-Control: no-cache, no-store, must-revalidate, max-age=0, private");
header("Pragma: no-cache");
header("Expires: 0");
header("ETag: ");
header("Last-Modified: ");
?>
```

## Cloudflare
1. Go to Caching → Configuration
2. Set Browser Cache TTL to "Respect Existing Headers"
3. Set Caching Level to "Standard"
4. Enable "Development Mode" for testing

## Netlify
Create `_headers` file in your site root:
```
/*
  Cache-Control: no-cache, no-store, must-revalidate, max-age=0, private
  Pragma: no-cache
  Expires: 0
```

## Vercel
Create `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "no-cache, no-store, must-revalidate, max-age=0, private"
        },
        {
          "key": "Pragma",
          "value": "no-cache"
        },
        {
          "key": "Expires",
          "value": "0"
        }
      ]
    }
  ]
}
```
