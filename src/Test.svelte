<script lang="ts">
  export let name;

  let buttonText = 'Button'
  let clickCount: number = 0;

  function handleClick() {
    buttonText = 'Button Clicked'
    clickCount+=1
  }
</script>

<h1>Hello {name}!</h1>

<button on:click="{handleClick}">{buttonText}</button>
<h2 id="clickCount">Num Click {clickCount}</h2>