<script>
import "/assets/css/css-framework.css"
</script>

# Inputs

The Nimiq's CSS Framework provides a set of text inputs that can be used to build forms.

:::raw
<div grid="~ md:cols-2" :class="{ 'nq-blue-bg': isDark }" bg="!white dark:!transparent !none" gap-16 mt-32 mb-48>
  <input class="nq-input">
  <input class="nq-input-s" h-max self-center>

  <input class="nq-input" placeholder="I am a placeholder...">
  <input class="nq-input-s" h-max self-center placeholder="I am a placeholder...">

  <input class="nq-input" placeholder="I am a small placeholder...">
  <input class="nq-input-s" h-max self-center value="I have a small value">
</div>
:::

### Without border (vanishing)

:::raw
<div grid="~ md:cols-2" gap-16 mb-16 class="nq-blue-bg" bg="!white dark:!transparent !none " my-32>
  <input class="nq-input vanishing" placeholder="I am a placeholder...">
  <input class="nq-input-s vanishing" h-max self-center placeholder="I am a small placeholder...">

  <input class="nq-input vanishing" value="I have a value">
  <input class="nq-input-s vanishing" h-max self-center value="I have a small value">
</div>
:::

```html
<input class="nq-input">
<input class="nq-input" placeholder="I am a placeholder...">
<input class="nq-input" value="I have a value">

<input class="nq-input-s">
<input class="nq-input-s" placeholder="I am a small placeholder...">
<input class="nq-input-s" value="I have a small value">

<input class="nq-input vanishing" placeholder="I am a placeholder...">
<input class="nq-input vanishing" value="I have a value">

<input class="nq-input-s vanishing" placeholder="I am a small placeholder...">
<input class="nq-input-s vanishing" value="I have a small value">
```
