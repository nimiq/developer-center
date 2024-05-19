# Arrow Links

TODO: Write here a description

::: raw
<div flex mt-32>
  <a href='./' class='arrow-back'>Arrow back</a>
  <a href='https://nimiq.com' target="_blank" rel="noopener" class='arrow'>External link</a>
  <a href='../design/logo' class='arrow'>Internal link</a>
</div>
:::

```html
<a href='./' class='arrow-back'>Arrow back</a>
<a href='https://nimiq.com' class='arrow'>External link</a>
<a href='/design/logo' class='arrow'>Internal link</a>
```
<br>
You can even nest the arrow in a <code>tag</code> element

::: raw
<div flex justify-center mt-32>
  <a href='https://nimiq.com' target="_blank" rel="noopener" class='flex flex-col gap-12 raw bg-neutral-200 rounded-8 px-24 py-16 max-w-320'>
    <h3 class='arrow flex items-center after:ml-auto'>External link</h3>
    <p class='text-12 text-neutral-800 text-pretty'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </a>
</div>
:::
```html
<a href='https://nimiq.com' class='flex flex-col gap-3 raw bg-neutral-200 rounded-2 px-6 py-4'>
  <h3 class='arrow flex items-center after:ml-auto'>
    External link
  </h3>
  <p class='text-3 text-neutral-800 text-pretty'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
</a>
```
