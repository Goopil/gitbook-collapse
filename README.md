GitBook collapse
==============

## install
open book.json, add collapse in "plugins"

{
    "plugins": [ "other-plugin", "collapse" ]
}

## usage
wrap the content you want to collapse with:

```html
{% collapse %}

* list 1
* list 2
* list 3
    * list 3.1
    
{% endcollapse %}
```

you can specify a title with

```html
{% collapse title="my list" %}

* list 1
* list 2
* list 3
    * list 3.1
    
{% endcollapse %}
``` 

and a bs4 color name

```html
{% collapse color="primary" %}

* list 1
* list 2
* list 3
    * list 3.1
    
{% endcollapse %}
``` 

and obviously both

```html
{% collapse title="my list", color="info" %}

* list 1
* list 2
* list 3
    * list 3.1
    
{% endcollapse %}
``` 

### Color names
* primary
* secondary
* success
* danger
* warning
* info


## Todo

* [ ] hide collapses in pdf, ebook etc