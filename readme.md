# scroll-down-icon

A web component displaying a mouse icon that stimulates scrolling further down. As seen on many landing pages throughout the web.

Example preview:

![](https://github.com/bitflower/scroll-animation-icon/raw/master/sdi.gif)

You can see it live here: [bitflower website](https://www.bitflower.net)

## Using this component

### Script tag

- Put a script tag similar to this `<script src='https://unpkg.com/scroll-down-icon/dist/scroll-down-icon.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install scroll-down-icon --save`
- Put a script tag similar to this `<script src='node_modules/scroll-down-icon/dist/scroll-down-icon.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install scroll-down-icon --save`
- Add an import to the npm packages `import scroll-down-icon;`
- Then you can use the element anywhere in your template, JSX, html etc

## Using the tag

To place the icon anywhere in your app use
```
<scroll-down-icon></scroll-down-icon>
```

You might optionally want to set the color like this:

```
<scroll-down-icon color="red"></scroll-down-icon>
```

or with a hex color:

```
<scroll-down-icon color="#CCCCCC"></scroll-down-icon>
```