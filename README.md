# hyper-background-image


Partially inspired by [hyper-transparent-dynamic](https://www.npmjs.com/package/hyper-transparent-dynamic) and [hyper-transparent-bg](https://www.npmjs.com/package/hyper-transparent-bg) but randomizing background image from your favorite images folder.

* GIF supported!
* Color overlay opacity

**Note**: _If used with a theme plugin, make sure to load `hyper-background-image` *after* your theme plugin._
```
module.exports = {
  ...

  config: {

    ...

    backgroundImage: {
      folder: '/Users/ignaciog.diaz/Pictures/bg',
      colorOpacity: .6
    }

    ...

  },

  ...

  plugins: [
    'hyper-background-image'
  ],

  ...
}
```
