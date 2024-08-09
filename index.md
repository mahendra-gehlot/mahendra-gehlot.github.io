<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{site.title}}</title>
  <link rel="stylesheet" href="{{ "/css/style.css" | relative_url }}">
</head>
<body>

  <header>
    <h1>{{site.title}}</h1> 
    <p>{{site.description}}</p>
    <nav>
      <ul>
        <li><a href="{{ "/" | relative_url }}">Home</a></li>
        <li><a href="{{ "/chapter1/" | relative_url }}">Chapter 1</a></li>
        <li><a href="{{ "/chapter2/" | relative_url }}">Chapter 2</a></li>
        <li><a href="{{ "/chapter3/" | relative_url }}">Chapter 3</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h2>Welcome to My Knowledge Base</h2>
    <p>This site contains chapters on various topics in AI and ML. Click on the links below to explore the chapters:</p>

    <ul>
      <li><a href="{{ "/chapter1/" | relative_url }}">Chapter 1: Introduction to AI</a></li>
      <li><a href="{{ "/chapter2/" | relative_url }}">Chapter 2: Linear Regression</a></li>
      <li><a href="{{ "/chapter3/" | relative_url }}">Chapter 3: Neural Networks</a></li>
    </ul>
  </main>

  <footer>
    <p>&copy; {{ site.time | date: "%Y" }}.Developed jointly by Sayan and Mahendra</p> 
</body>
</html>
