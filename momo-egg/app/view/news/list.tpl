<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
   <h1>嗨h1</h1>
    <ul class="news-view view">
      {% for item in websitelist %}
        {{ helper.relativeTime(item.time) }}
        <h1>嗨h2</h1>
        <li class="item">
          <a href="{{ item.url }}">{{ item.title }}</a>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>