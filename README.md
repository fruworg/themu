## Демонстрация
[Посмотреть демо](https://fruw.org)

## Установка
В директории веб-сайта Hugo клонируйте репозиторий:
```bash
git submodule add https://github.com/fruworg/themu themes/themu
```
Нужно отредактировать файл `config.toml`, добавив строку `theme="themu"`.
Дополнительную информацию можно найти в официальном [руководстве по установке](https://gohugo.io/installation/) Hugo.

## Создание статей
Необходимо создать новый файл с расширением `.md` в папке *content/posts*:
```yml
---
title: Заголовок статьи
description: Описание
date: 2006-01-01T01:08:00+05:00
draft: true/false (необязательно)
tags: [названия тегов] (необязательно)
---
```

## Настройки конфигурации

### Пользовательские CSS-стили
Пользовательские CSS-файлы можно добавить с помощью параметра конфигурации `customcss`.

Примечание: CSS-файлы следует размещать в папке `assets`, например, `assets/css/first.css`.

```toml
[params]
	customcss = ["css/first.css", "css/second.css"]
```

## Настройки демонстрационного сайта

```toml
baseURL = "https://<имя>.github.io"
languageCode = "en-us"
title = "<имя>"
theme="themu"

# Подсветка кода
pygmentsstyle = "monokai"
pygmentscodefences = true
pygmentscodefencesguesssyntax = true

paginate=3 # статей на страницу

[params]
    subtitleFile = true
	subtitle = "Минимальная и чистая [тема блога для Hugo](https://github.com/fruworg)"

# Социальные ссылки

[[params.social]]
name = "GitHub"
icon = "github"
url = "https://github.com/<имя>"

[[params.social]]
name = "Twitter"
icon = "twitter"
url = "https://twitter.com/<имя>"

[[params.social]]
name = "GitLab"
icon = "gitlab"
url = "https://gitlab.com/<имя>"

# Пункты главного меню

[[menu.main]]
name = "Главная"
url = "/"
weight = 1

[[menu.main]]
name = "Все статьи"
url = "/posts"
weight = 2

[[menu.main]]
name = "О сайте"
url = "/about"
weight = 3

[[menu.main]]
name = "Теги"
url = "/tags"
weight = 4
```

## Спасибо
[athul](https://github.com/athul/archie) и [jse.li](https://blog.jse.li)
